var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3476', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: 3476<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d5a72cd'},
{id: '3477', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: 3477<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d5a72cd'},
{id: '3478', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Alias: null<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 3478<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d5a72cd'},
{id: '3479', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 3479<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d5a72cd'},
{id: '3480', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 3480<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d5a72cd'},
{id: '3481', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Alias: null<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 3481<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d5a72cd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3477', to: '3478'},
{from: '3480', to: '3481'},
{from: '3478', to: '3476'},
{from: '3481', to: '3479'}
                            ]);