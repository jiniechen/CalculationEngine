var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2849', label: 'E5\n4.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 2849<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE([[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1073c664'},
{id: '2850', label: 'A1:E4\n...', color: '#31b0d5', title: 'Name: A1:E4<br>Alias: null<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]<br>Type: RANGE<br>Id: 2850<br>Formula Expression: Formula String: A1:E4; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Ptgs: A1:E4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1073c664'},
{id: '2851', label: 'MODE\n4.0', color: '#f0ad4e', title: 'Name: MODE<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 2851<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE([[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1073c664'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2850', to: '2851'},
{from: '2851', to: '2849'}
                            ]);