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
package com.dataart.spreadsheetanalytics.api.engine;

import java.util.Collection;
import java.util.Map;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

/**
 * Storage for {@link IDataModel}s.
 */
public interface DataModelAccessor {

    /** Adds {@link IDataModel} to storage. */
    void add(IDataModel dataModel);
    
    /** Adds several {@link IDataModel}s to storage. */
    void addAll(Collection<IDataModel> dataModels);
    
    /** Returns {@link IDataModel} by Id. */
    IDataModel get(IDataModelId dataModelId);
    
    /** Returns {@link IDataModel} by name. */
    IDataModel get(String dataModelName);

    /** Returns all {@link IDataModel}s in storage. */
    Map<IDataModelId, IDataModel> getAll();

}
