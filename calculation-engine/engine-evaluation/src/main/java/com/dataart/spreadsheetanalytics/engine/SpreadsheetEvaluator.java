package com.dataart.spreadsheetanalytics.engine;

import java.util.ArrayList;
import java.util.List;

import org.apache.poi.common.execgraph.EmptyExecutionGraph;
import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.udf.AggregatingUDFFinder;
import org.apache.poi.ss.formula.udf.DefaultUDFFinder;
import org.apache.poi.ss.formula.udf.UDFFinder;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.Functions;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class SpreadsheetEvaluator implements IEvaluator {

    protected IExecutionGraphBuilder graphBuilder = EmptyExecutionGraph.DoNothingExecutionGraphBuilder.get();

    protected XSSFWorkbook model;
    protected XSSFFormulaEvaluator poiEvaluator;
    
    protected SpreadsheetEvaluator() {}
    
    public SpreadsheetEvaluator(IDataModel model) {
        this.model = ((DataModel) model).model;
        this.poiEvaluator = this.model.getCreationHelper().createFormulaEvaluator();
    }

	public boolean isFormulaCell(ICellAddress addr) {
		Sheet s = model.getSheetAt(0 /* sheet number 1 */ );
		Cell c = s.getRow(addr.row()).getCell(addr.column());
		if (c == null) { throw new NullPointerException("Cell at row " + addr.row() + ", column " + addr.column() + " is null"); }

		return (Cell.CELL_TYPE_FORMULA == c.getCellType());
	}

    @Override
	public ICellValue evaluate(ICellAddress addr) {
		Sheet s = model.getSheetAt(0 /* sheet number 1 */ );
		Row r = s.getRow(addr.row());
		if (r == null) { return null; }
		
        Cell c = r.getCell(addr.column());
        if (c == null) { return null; }

        org.apache.poi.ss.usermodel.CellValue poiValue = poiEvaluator.evaluate(c);

        if (poiValue == null) {	return null; }

        ICellValue cv = new CellValue(fromPoiValue(poiValue));
        
        return cv;
    }

    @Override
    public IDataSet evaluate(IDataModel model) {
        // TODO Auto-generated method stub
        return null;
    }

    public void setExecutionGraphBuilder(IExecutionGraphBuilder graphBuilder) {
        this.graphBuilder = graphBuilder;
        this.poiEvaluator = model.getCreationHelper().createFormulaEvaluator(graphBuilder);
    }

    @Override
    public void init(IDataModel model) {
        this.model = ((DataModel) model).model;
        
        if (this.graphBuilder != null) {
            this.poiEvaluator = this.model.getCreationHelper().createFormulaEvaluator(this.graphBuilder);
        } else {
            this.poiEvaluator = this.model.getCreationHelper().createFormulaEvaluator();
        }
    }
    
    @Override
    public void destroy() {
        graphBuilder = EmptyExecutionGraph.DoNothingExecutionGraphBuilder.get();
    }

    /**
     * TODO: this should be provided with really good java doc of how to use it
     */
    public void loadCustomFunctions() throws ReflectiveOperationException {
        if (this.model == null) {
            throw new IllegalStateException("Evaluator must be provided with model to register custom functions.");
        }
        
        List<String> names = new ArrayList<>(Functions.get().size());
        List<CustomFunction> functions = new ArrayList<>(Functions.get().size());
        
        for (String fname: Functions.get().keySet()) {
            
            CustomFunction cf = Functions.get().get(fname).newInstance();
            cf.setEvaluator(new SpreadsheetEvaluator());
            
            names.add(fname);
            functions.add(cf);
        }
        
        UDFFinder udfToolpack = new AggregatingUDFFinder(new DefaultUDFFinder(
                                                            names.toArray(new String[names.size()]),
                                                            functions.toArray(new CustomFunction[functions.size()])));  
        this.model.addToolPack(udfToolpack);
    }

    //TODO: look for similar methods in POI code and move to some good place
    protected Object fromPoiValue(org.apache.poi.ss.usermodel.CellValue poiValue) {
        switch (poiValue.getCellType()) {
            case Cell.CELL_TYPE_STRING: { return poiValue.getStringValue(); }
            case Cell.CELL_TYPE_NUMERIC: { return Double.valueOf(poiValue.getNumberValue()); }
            case Cell.CELL_TYPE_BOOLEAN: { return Boolean.valueOf(poiValue.getBooleanValue()); }
            case Cell.CELL_TYPE_ERROR: { return ErrorEval.valueOf(poiValue.getErrorValue()); /* TODO we do not have special classes for error values yet */ }
            case Cell.CELL_TYPE_FORMULA: { throw new IllegalStateException("Result of evaluation cannot be a formula."); }
            case Cell.CELL_TYPE_BLANK: default: { return ""; }
        }
    }
}