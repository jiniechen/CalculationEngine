var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2384', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 2384<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54247647'},
{id: '2379', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 2379<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54247647'},
{id: '2380', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 2380<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54247647'},
{id: '2381', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: 2381<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54247647'},
{id: '2382', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: 2382<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54247647'},
{id: '2383', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 2383<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54247647'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2380', to: '2381'},
{from: '2383', to: '2384'},
{from: '2381', to: '2379'},
{from: '2384', to: '2382'}
                            ]);