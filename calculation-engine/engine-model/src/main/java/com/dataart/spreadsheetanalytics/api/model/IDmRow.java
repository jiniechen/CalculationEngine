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
package com.dataart.spreadsheetanalytics.api.model;

import java.util.stream.Stream;

/**
 * Row representation in {@link IDataModel}.
 * Row is a container for {@link IDmCell}s.
 * It allows to add/get cells and iterate over cells in a row.
 */
public interface IDmRow extends Iterable<IDmCell> {

    /** Returns a cell at given column. */
    IDmCell getCell(int cellIdx);

    /** Returns a cell at given address.column. */
    IDmCell getCell(ICellAddress address);

    /** Sets the cell at given column. */
    void setCell(int cellIdx, IDmCell cell);

    /** Sets the cell at given address.column. */
    void setCell(ICellAddress address, IDmCell cell);

    /** This row index. */
    int index();
    
    /** Number of cells is a row. */
    int cellCount();
    
    /** Number of first column in this row. */
    int getFirstColumnIndex();

    /** Number of last column in this row. */
    int getLastColumnIndex();
    
    /** Stream support for Row */
    Stream<IDmCell> stream();

}