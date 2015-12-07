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

import static java.util.Arrays.asList;
import static java.util.Arrays.copyOf;
import static java.util.Collections.unmodifiableSet;
import static org.apache.poi.common.fork.ExecutionGraphBuilderUtils.coerceValueEvalToCellValue;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BLANK;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BOOLEAN;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_ERROR;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_NUMERIC;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_STRING;
import static org.apache.poi.ss.usermodel.FormulaError.DIV0;
import static org.apache.poi.ss.usermodel.FormulaError.NA;
import static org.apache.poi.ss.usermodel.FormulaError.NAME;
import static org.apache.poi.ss.usermodel.FormulaError.NULL;
import static org.apache.poi.ss.usermodel.FormulaError.NUM;
import static org.apache.poi.ss.usermodel.FormulaError.REF;
import static org.apache.poi.ss.usermodel.FormulaError.VALUE;
import static org.apache.poi.ss.usermodel.FormulaError.forInt;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashSet;
import java.util.Set;

import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.FormulaError;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DmCell;

public final class ConverterUtils {
    
    public static final String FORMULA_PREFIX = "=";
    public static final Set<String> ERRORS = unmodifiableSet(new HashSet<>(asList(
                                                  NULL.getString(),
                                                  DIV0.getString(),
                                                  VALUE.getString(),
                                                  REF.getString(),
                                                  NAME.getString(),
                                                  NUM.getString(),
                                                  NA.getString())));
        
    private static final String POI_FUNCTION_PREFIX = "_xlfn.";
    
    private ConverterUtils() {}

    /**
     * {@link #clearContent(Workbook)} with new {@link ConverterUtils#newWorkbook(InputStream)}.
     */
    static OutputStream clearContent(InputStream workbook) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        clearContent(ConverterUtils.newWorkbook(workbook)).write(xlsx);
        return xlsx;
    }
    
    /**
     * Gets an instance of a Workbook ({@link ConverterUtils#newWorkbook(InputStream)}, creates copy of original file, 
     * clears all the cell values, but preserves formatting.
     */
    static Workbook clearContent(final Workbook book) throws IOException {
        ByteArrayOutputStream originalOut = new ByteArrayOutputStream();
        book.write(originalOut);
        InputStream originalIn = new ByteArrayInputStream(copyOf(originalOut.toByteArray(), originalOut.size()));

        Workbook w = ConverterUtils.newWorkbook(originalIn);
        Sheet s = w.getSheetAt(0); //TODO: only one sheet is supported
        
        for (int i = s.getFirstRowNum(); i <= s.getLastRowNum(); i++) {
            Row r = s.getRow(i);
            if (r == null) { continue; }
            
            for (int j = r.getFirstCellNum(); j <= r.getLastCellNum(); j++) {
                Cell c = r.getCell(j);
                if (c == null) { continue; }
                
                c.setCellType(CELL_TYPE_BLANK);
            }
        }
        
        return w;
    }

    /**
     * Inserts a value to a Cell based on a value type (class).
     */
    static void populateCellValue(final Cell cell, final ICellValue value) {
        if (cell == null) { return; }
        
        int cellType = resolveCellType(value);
        cell.setCellType(cellType);
        switch (cellType) {
            case CELL_TYPE_BLANK: { break; }
            case CELL_TYPE_BOOLEAN: { cell.setCellValue((Boolean) value.get()); break; }
            case CELL_TYPE_NUMERIC: { cell.setCellValue((Double) value.get()); break; }
            case CELL_TYPE_FORMULA: { cell.setCellFormula(((String) value.get()).substring(1)); break; }
            case CELL_TYPE_ERROR: { cell.setCellErrorValue(FormulaError.forString((String) value.get()).getCode()); break; }
            case CELL_TYPE_STRING: { cell.setCellValue((String) value.get()); break; }
            
            default: { throw new IllegalArgumentException(String.format("Type of value %s is not supported: %s", value, value.getClass().getSimpleName())); }
        }
    }
    
    /**
     * Does cell of a given address copy from {@link Sheet} to {@link IDataModel}. 
     */
    static void copyCell(ICellAddress address, Sheet from, IDataModel to) {
        if (from == null) { return; }
        Row fromRow = from.getRow(address.row());
        if (fromRow == null) { return; }
        Cell fromCell = fromRow.getCell(address.column());
        if (fromCell == null) { return; }
        
        DmCell toCell = new DmCell();
        toCell.address(address);
        toCell.alias("TODO"); /*TODO*/
        toCell.content(resolveCellValue(fromCell));
        
        to.setCell(address, toCell);
    }

    static boolean isFunctionInFormula(String formula, String function) {
        String filteredFormula = formula.replace(POI_FUNCTION_PREFIX, "");
        return filteredFormula.startsWith(function) && filteredFormula.replace(function, "").startsWith("(");
    }
    
    /** Returns the new {@link CellValue} from provided {@link Cell}. */
    public static ICellValue resolveCellValue(Cell c) {
        if (c == null) { return CellValue.BLANK; }
        
        switch (c.getCellType()) {
            case CELL_TYPE_NUMERIC: { return CellValue.from(c.getNumericCellValue()); }
            case CELL_TYPE_STRING: { return CellValue.from(c.getStringCellValue()); }
            case CELL_TYPE_BOOLEAN: { return CellValue.from(c.getBooleanCellValue()); }
            case CELL_TYPE_ERROR: { return CellValue.from(forInt(c.getErrorCellValue()).getString()); }
            case CELL_TYPE_BLANK: { return CellValue.BLANK; }
            case CELL_TYPE_FORMULA: { return CellValue.from(String.format("%s%s", FORMULA_PREFIX, c.getCellFormula())); }
            default: { throw new IllegalArgumentException(String.format("Cell's type %s is not supported.", c.getCellType())); }
        }
    }
    
    /** Returns the new {@link CellValue} from provided {@link org.apache.poi.ss.usermodel.CellValue}. */
    public static ICellValue resolveCellValue(org.apache.poi.ss.usermodel.CellValue cellval) {
        if (cellval == null) { return CellValue.BLANK; }

        switch (cellval.getCellType()) {
            case CELL_TYPE_NUMERIC: { return CellValue.from(cellval.getNumberValue()); }
            case CELL_TYPE_STRING: { return CellValue.from(cellval.getStringValue()); }
            case CELL_TYPE_BOOLEAN: { return CellValue.from(cellval.getBooleanValue()); }
            case CELL_TYPE_ERROR: { return CellValue.from(ErrorEval.valueOf(cellval.getErrorValue()).getErrorString()); }
            case CELL_TYPE_BLANK: { return CellValue.BLANK; }
            case CELL_TYPE_FORMULA: { throw new IllegalStateException("Result of evaluation cannot be a formula."); }
            default: { throw new IllegalArgumentException(String.format("CellValue's tType %s is not supported.", cellval.getCellType())); }
        }
    }
    
    /** Returns a type of given {@link Cell} value. */
    public static Class<? extends Object> resolveCellType(Cell c) {
        switch (c.getCellType()) {
            case CELL_TYPE_BLANK: { return Object.class; }
            case CELL_TYPE_BOOLEAN: { return Boolean.class; }
            case CELL_TYPE_NUMERIC: { return Double.class; }
            case CELL_TYPE_FORMULA: case CELL_TYPE_STRING: case CELL_TYPE_ERROR: { return String.class; }
            default: { throw new IllegalArgumentException(String.format("Cell's type %s is not supported.", c.getCellType())); }
        }
    }
    
    /**
     * Returns a type of given {@link ICellValue} value.
     * For types @see {@link Cell#getCellType()}.
     */
    public static int resolveCellType(ICellValue c) {
        if (CellValue.BLANK == c.get()) { return CELL_TYPE_BLANK; }

        if (c.type() == Boolean.class) { return CELL_TYPE_BOOLEAN; }
        if (c.type() == Double.class) { return CELL_TYPE_NUMERIC; }

        if (c.type() == String.class) {
            String val = (String) c.get();

            if (val.startsWith(FORMULA_PREFIX)) { return CELL_TYPE_FORMULA; }
            if (ERRORS.contains(val)) { return CELL_TYPE_ERROR; }
            return CELL_TYPE_STRING;
        }

        throw new IllegalArgumentException(String.format("CellVale's type %s is not supported.", c.get().getClass().getSimpleName()));
    }

    public static ICellValue resolveValueEval(ValueEval valueEval) {
        return resolveCellValue(coerceValueEvalToCellValue(valueEval));
    }

    /** Creates an instance of new {@link XSSFWorkbook}. */
    public static Workbook newWorkbook() {
        return new XSSFWorkbook();
    }

    /** Creates an instance of new {@link XSSFWorkbook} from {@link InputStream}. */
    public static Workbook newWorkbook(InputStream original) throws IOException {
        return new XSSFWorkbook(original);
    }

}