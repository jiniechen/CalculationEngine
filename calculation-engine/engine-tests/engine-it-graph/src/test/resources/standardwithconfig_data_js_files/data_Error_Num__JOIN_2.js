var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3897', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: 3897<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9dbb1d9'},
{id: '3898', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 3898<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9dbb1d9'},
{id: '3899', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 3899<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9dbb1d9'},
{id: '3900', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Alias: null<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 3900<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@9dbb1d9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3898', to: '3900'},
{from: '3899', to: '3900'},
{from: '3900', to: '3897'}
                            ]);