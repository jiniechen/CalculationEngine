var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '163', label: 'B4\n2.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 163<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4f704591'},
{id: '164', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: 164<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4f704591'},
{id: '165', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 165<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4f704591'},
{id: '166', label: 'CEILING\n2.0', color: '#f0ad4e', title: 'Name: CEILING<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 166<br>Formula Expression: Formula String: CEILING(VALUE, VALUE); Formula Values: CEILING(2.0, 0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4f704591'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '165', to: '166'},
{from: '164', to: '166'},
{from: '166', to: '163'}
                            ]);