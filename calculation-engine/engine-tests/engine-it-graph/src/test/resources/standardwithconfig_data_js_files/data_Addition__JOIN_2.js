var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3414', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: 3414<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@645c9f0f'},
{id: '3415', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 3415<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@645c9f0f'},
{id: '3416', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 3416<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@645c9f0f'},
{id: '3417', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 50.0<br>Type: OPERATOR<br>Id: 3417<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@645c9f0f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3415', to: '3417'},
{from: '3416', to: '3417'},
{from: '3417', to: '3414'}
                            ]);