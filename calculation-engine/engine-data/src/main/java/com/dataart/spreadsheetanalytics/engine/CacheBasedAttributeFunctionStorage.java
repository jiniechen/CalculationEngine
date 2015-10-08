package com.dataart.spreadsheetanalytics.engine;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.cache.Cache;
import javax.cache.Cache.Entry;
import javax.cache.Caching;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.AttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;

public class CacheBasedAttributeFunctionStorage implements AttributeFunctionStorage {
    private final static Logger log = LoggerFactory.getLogger(CacheBasedAttributeFunctionStorage.class);

    public final static String DEFINE_FUNCTIONS_CACHE_NAME = "defineFunctionsCache";

    protected Cache<String, DefineFunctionMeta> defineFunctionsCache = Caching.getCache(DEFINE_FUNCTIONS_CACHE_NAME, String.class, DefineFunctionMeta.class);

    @Override
    public void addDefineFunction(DefineFunctionMeta meta) {
        this.defineFunctionsCache.put(meta.name(), meta);
    }

    @Override
    public Map<String, DefineFunctionMeta> getDefineFunctions() {
        Map<String, DefineFunctionMeta> map = new HashMap<>();
        for (Entry<String, DefineFunctionMeta> entry : defineFunctionsCache) {
            map.put(entry.getKey(), entry.getValue());
        }
        return Collections.<String, DefineFunctionMeta> unmodifiableMap(map);
    }

    @Override
    public void updateDefineFunctions(Set<IDataModel> dataModels) {
        this.defineFunctionsCache.clear();
        this.defineFunctionsCache.putAll(collectAttributeFunctions(dataModels, DefineFunctionMeta.KEYWORD, DefineFunctionMeta.ATTRIBUTE_FUNCTION));
    }
    
    protected static <T extends AttributeFunctionMeta> Map<String, T> collectAttributeFunctions(Set<IDataModel> dataModels, String keyword, Map<String, Class<T>> attributeFunction) {
        Map<String, T> map = new HashMap<>();
        dataModels.forEach((v) -> map.putAll(AttributeFunctionsScanner.scan(v, attributeFunction).get(keyword)));
        return map;
    }

    public void setDefineFunctionsCache(Cache<String, DefineFunctionMeta> defineFunctionsCache) { this.defineFunctionsCache = defineFunctionsCache; }    
    
}