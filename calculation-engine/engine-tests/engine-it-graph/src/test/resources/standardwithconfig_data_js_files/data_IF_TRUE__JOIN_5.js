var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5026', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 5026<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59eb987a'},
{id: '5027', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 5027<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59eb987a'},
{id: '5028', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 5028<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59eb987a'},
{id: '5029', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Alias: null<br>Value: TRUE<br>Type: OPERATOR<br>Id: 5029<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59eb987a'},
{id: '5030', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 65.0<br>Type: IF<br>Id: 5030<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 7ca31a25-f222-8515-56f3-d9e1703f2359'},
{id: '5031', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 5031<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@59eb987a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5028', to: '5029'},
{from: '5029', to: '5030'},
{from: '5027', to: '5029'},
{from: '5031', to: '5030'},
{from: '5030', to: '5026'}
                            ]);