/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.engine.Converters.toWorkbook;
import static com.dataart.spreadsheetanalytics.engine.PoiWorkbookConverters.getEvaluationCell;
import static com.dataart.spreadsheetanalytics.engine.PoiWorkbookConverters.toEvaluationWorkbook;
import static com.dataart.spreadsheetanalytics.model.A1Address.fromRowColumn;
import static org.apache.poi.ss.formula.IStabilityClassifier.TOTALLY_IMMUTABLE;
import static org.apache.poi.ss.formula.eval.ErrorEval.NA;
import static org.apache.poi.ss.formula.eval.ErrorEval.NAME_INVALID;
import static org.apache.poi.ss.formula.eval.ErrorEval.REF_INVALID;
import static org.apache.poi.ss.formula.eval.ErrorEval.VALUE_INVALID;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;

import org.apache.poi.common.fork.FormulaParseNAException;
import org.apache.poi.common.fork.FormulaParseNameException;
import org.apache.poi.common.fork.IExecutionGraphBuilder;
import org.apache.poi.common.fork.IncorrectExternalReferenceException;
import org.apache.poi.common.fork.ValuesStackNotEmptyException;
import org.apache.poi.ss.formula.EvaluationCell;
import org.apache.poi.ss.formula.EvaluationWorkbook;
import org.apache.poi.ss.formula.WorkbookEvaluator;
import org.apache.poi.ss.formula.atp.AnalysisToolPak;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.ICustomFunction;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.graph.PoiExecutionGraphBuilder;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DmCell;
import com.dataart.spreadsheetanalytics.model.EvaluationContext;

/**
 * SpreadsheetEvaluator is a direct implementation of {@link IEvaluator} interface.
 * It allows to do spreadsheets evaluation. It's 2 major methods are {@link #evaluate()} and {@link #evaluate(IA1Address)}.
 * They do evaluation of one cell, or whole spreadsheet cell, by cell (algorithm can be changed in future).
 * 
 * This version of Evaluator requires an {@link IDataModel} to evaluate. DataModel provides access to POI's proxy workbook object, 
 * so instance of {@link WorkbookEvaluator} can do actual evaluation.
 * 
 * {@link IExecutionGraphBuilder} can be attached to this class to trace all evaluation steps. 
 * This is usually done via {@link IAuditor}.
 */
public class SpreadsheetEvaluator implements IEvaluator {
    private static final Logger log = LoggerFactory.getLogger(SpreadsheetEvaluator.class);

    protected final IDataModel model;
    protected final EvaluationWorkbook evaluationWorkbook;
    protected final WorkbookEvaluator poiEvaluator;
    
    protected final EvaluationContext globalContext;
    
    static {
        try { loadCustomFunctions(); }
        catch (Exception e) { log.error("Custom functions loading was unsuccessful. This may cause Evaluator to not work with custom functions.", e); }
    }
        
    public SpreadsheetEvaluator(IDataModel model) {
        this(model, null);        
    }
    
    public SpreadsheetEvaluator(IDataModel model, EvaluationContext globalContext) {
        this.model = model;
        this.globalContext = globalContext;
        this.evaluationWorkbook = toEvaluationWorkbook(toWorkbook(this.model));
        this.poiEvaluator = new WorkbookEvaluator(this.evaluationWorkbook, TOTALLY_IMMUTABLE, null);
    }
    
    @Override
    public IEvaluationResult<ICellValue> evaluate(IA1Address addr) {
        EvaluationCell cell = getEvaluationCell(this.evaluationWorkbook, addr);
        if (cell == null) { return null; }
        
        EvaluationContext evaluationContext = new EvaluationContext(this.globalContext);
        evaluationContext.set("SOURCE_OBJECT_ID", this.model.getDataModelId());
        
        try { return new EvaluationResult<ICellValue>(evaluationContext, evaluateCell(cell, evaluationContext)); }
        catch (ValuesStackNotEmptyException e) { return new EvaluationResult<ICellValue>(evaluationContext, CellValue.from(VALUE_INVALID.getErrorString())); }
    }

    @Override
    public IEvaluationResult<IDataModel> evaluate() {
        IDataModel dataModel = this.model;
        
        EvaluationContext evaluationContext = new EvaluationContext(this.globalContext);
        evaluationContext.set("SOURCE_OBJECT_ID", this.model.getDataModelId());

        for (int i = this.model.getFirstRowIndex(); i <= this.model.getLastRowIndex(); i++) {
            IDmRow row = this.model.getRow(i);
            if (row == null) { continue; }

            for (int j = row.getFirstColumnIndex(); j <= row.getLastColumnIndex(); j++) {
                IDmCell cell = row.getCell(j);
                if (cell == null) { continue; }

                try {
                    ICellValue val = evaluateCell(getEvaluationCell(this.evaluationWorkbook, fromRowColumn(i, j)), evaluationContext);                
                    ((DmCell) cell).setValue(val == null ? Optional.<ICellValue>empty() : Optional.of(val)); 
                }
                catch (ValuesStackNotEmptyException e) {
                    ICellValue val = handleExceptionForGraphBuilder(this.poiEvaluator.getExecutionGraphBuilder(), fromRowColumn(i, j));
                    ((DmCell) cell).setValue(Optional.of(val)); 
                }
            }
        }

        return new EvaluationResult<>(evaluationContext, dataModel);
    }

    protected ICellValue evaluateCell(EvaluationCell c, EvaluationContext evaluationContext) {
        if (c == null) { return null; }
        
        try { return ConverterUtils.resolveValueEval(this.poiEvaluator.evaluate(c, evaluationContext)); }
        catch (FormulaParseNameException e) { return handleNameParseException(); }
        catch (FormulaParseNAException e) { return handleNaParseException(); }
        catch (IncorrectExternalReferenceException e) { return handleIncorrectExternalReferenceException(); }
    }

    protected static ICellValue handleIncorrectExternalReferenceException() {
        return CellValue.from(REF_INVALID.getErrorString());
    }

    protected static ICellValue handleNameParseException() {
        return CellValue.from(NAME_INVALID.getErrorString());
    }

    protected static ICellValue handleNaParseException() {
        return CellValue.from(NA.getErrorString());
    }

    protected static void loadCustomFunctions() throws ReflectiveOperationException {
        Map<String, Class<? extends ICustomFunction>> map = Functions.getCustomFunctions();
        AnalysisToolPak._saFunctionsByName = new HashMap<>();
        map.forEach((k, v) -> AnalysisToolPak._saFunctionsByName.put(k, null));

        for (Entry<String, Class<? extends ICustomFunction>> en : map.entrySet())
            { WorkbookEvaluator.registerFunction(en.getKey(), en.getValue().newInstance()); }
    }
    
    protected static ICellValue handleExceptionForGraphBuilder(IExecutionGraphBuilder builder, IA1Address cell) {
        if (builder instanceof PoiExecutionGraphBuilder) {
            ((PoiExecutionGraphBuilder) builder).getVerticesFromCache(cell.row(), cell.column())
                                                .forEach(v -> v.properties().setValue(VALUE_INVALID.getErrorString()));
        }
        return CellValue.from(VALUE_INVALID.getErrorString());
    }

    void setExecutionGraphBuilder(IExecutionGraphBuilder graphBuilder) { this.poiEvaluator.setExecutionGraphBuilder(graphBuilder); }

}
