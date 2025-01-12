var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '249', label: 'E8\n42251.0', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: 42251.0<br>Type: CELL_WITH_FORMULA<br>Id: 249<br>Formula Expression: Formula String: DATE(VALUE, VALUE, VALUE); Formula Values: DATE(4.0, 9.0, 2015.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1afdd473'},
{id: '250', label: 'VALUE\n2015.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2015.0<br>Type: CONSTANT_VALUE<br>Id: 250<br>Formula Expression: Formula String: VALUE; Formula Values: 2015.0; Formula Ptg: 2015.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1afdd473'},
{id: '251', label: 'VALUE\n9.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 9.0<br>Type: CONSTANT_VALUE<br>Id: 251<br>Formula Expression: Formula String: VALUE; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1afdd473'},
{id: '252', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 252<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1afdd473'},
{id: '253', label: 'DATE\n42251.0', color: '#f0ad4e', title: 'Name: DATE<br>Alias: null<br>Value: 42251.0<br>Type: FUNCTION<br>Id: 253<br>Formula Expression: Formula String: DATE(VALUE, VALUE, VALUE); Formula Values: DATE(4.0, 9.0, 2015.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1afdd473'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '252', to: '253'},
{from: '251', to: '253'},
{from: '250', to: '253'},
{from: '253', to: '249'}
                            ]);