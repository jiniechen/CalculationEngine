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
package com.dataart.spreadsheetanalytics.model;

import java.util.Optional;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;

/**
 * Implementation of {@link IDmCell}.
 * Simple container for address, content and value.
 */
public class DmCell implements IDmCell {
    
    protected ICellAddress address;
    protected ICellValue content;
    protected Optional<ICellValue> value = Optional.empty();
    
    @Override public ICellAddress getAddress() { return this.address; }
    public void setAddress(ICellAddress address) { this.address = address; }
    
    @Override public ICellValue getContent() { return this.content; }
    @Override public void setContent(ICellValue content) { this.content = content; }
    
    @Override public Optional<ICellValue> getValue() { return this.value; }
    public void setValue(Optional<ICellValue> value) { this.value = value; }

    @Override public String toString() { return this.content.toString(); }
    
}
