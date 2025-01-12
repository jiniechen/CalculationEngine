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
package com.dataart.spreadsheetanalytics.engine.graph;

import static com.dataart.spreadsheetanalytics.engine.graph.GraphBuilderUtils.ptgToString;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;

import java.util.ArrayDeque;
import java.util.Deque;

import org.apache.poi.ss.formula.FormulaParser;
import org.apache.poi.ss.formula.FormulaParsingWorkbook;
import org.apache.poi.ss.formula.FormulaType;
import org.apache.poi.ss.formula.ptg.OperandPtg;
import org.apache.poi.ss.formula.ptg.OperationPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.model.A1Address;

/**
 * Methods to build dependency graphs.
 */
public class PoiDependencyGraphBuilder {

    public static final String VERTEX_VALUE = "N/A"; 
    
    protected final FormulaParsingWorkbook poiFormulaBook;
    protected final Workbook poiBook;
    protected final ExecutionGraph state;

    protected PoiDependencyGraphBuilder(IDataModel model) {
        this.poiBook = Converters.toWorkbook(model);
        this.poiFormulaBook = XSSFEvaluationWorkbook.create((XSSFWorkbook) this.poiBook);
        this.state = new ExecutionGraph();
    }
    
    public static IExecutionGraph buildDependencyGraph(IDataModel dataModel) {
        return null;
    }
    
    public static IExecutionGraph buildDependencyGraph(IDataModel dataModel, IA1Address cell) {
        if (dataModel == null) { throw new CalculationEngineException("DataModel and PoiModel are required to build dependency graph"); }
        
        PoiDependencyGraphBuilder db = new PoiDependencyGraphBuilder(dataModel);
        
        Sheet s = db.poiBook.getSheetAt(0); //TODO: works for only one sheet workbooks
        if (s == null) { return null; }
        Row r = s.getRow(cell.row());
        if (r == null) { return null; }
        Cell c = r.getCell(cell.column());
        if (c == null) { return null; }
        
        ExecutionGraphVertex v = ExecutionGraph.createVertex(A1Address.fromRowColumn(c.getRowIndex(), c.getColumnIndex()).address());
        db.state.addVertex(v);
        
        if (CELL_TYPE_FORMULA == c.getCellType()) { db.collect(v, c.getCellFormula()); }
        
        return db.state;
    }

    protected void collect(ExecutionGraphVertex parent, String formula) {
        Ptg[] ptgs = FormulaParser.parse(formula, this.poiFormulaBook, FormulaType.CELL, 0 /*TODO: Sheet number = 0*/);

        Deque<ExecutionGraphVertex> ptgBag = new ArrayDeque<>();
        for (Ptg ptg : ptgs) {
            String name = ptgToString(ptg);

            ExecutionGraphVertex v = ExecutionGraph.createVertex(name);
            this.state.addVertex(v);

            if (ptg instanceof OperandPtg) { //operand (cell)
                ptgBag.push(v);

                A1Address address = A1Address.fromA1Address(name);
                Cell c = this.poiBook.getSheetAt(0).getRow(address.row()).getCell(address.column());

                //recursive call to formula cells
                if (CELL_TYPE_FORMULA == c.getCellType()) { this.collect(v, c.getCellFormula()); }

            } else if (ptg instanceof OperationPtg) { //operator (function)
                for (ExecutionGraphVertex s : ptgBag) 
                    { this.state.addEdge(s, v); }
                ptgBag.clear();
                ptgBag.push(v);
            }
        }

        this.state.addEdge(ptgBag.poll(), parent);
    }

}
