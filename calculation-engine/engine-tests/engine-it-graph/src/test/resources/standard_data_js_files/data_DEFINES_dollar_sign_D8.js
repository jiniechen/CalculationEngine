var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '276', label: 'D8\n$1801', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: $1801<br>Type: CELL_WITH_FORMULA<br>Id: 276<br>Formula Expression: Formula String: FUNCEXEC(B3, A3, VALUE); Formula Values: FUNCEXEC($1501, $1001, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54c62d71'},
{id: '278', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 278<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54c62d71'},
{id: '279', label: 'A3\n$1001', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: $1001<br>Type: CELL_WITH_VALUE<br>Id: 279<br>Formula Expression: Formula String: A3; Formula Values: $1001; Formula Ptg: $1001; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54c62d71'},
{id: '280', label: 'B3\n$1501', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: $1501<br>Type: CELL_WITH_VALUE<br>Id: 280<br>Formula Expression: Formula String: B3; Formula Values: $1501; Formula Ptg: $1501; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54c62d71'},
{id: '281', label: 'FUNCEXEC\n$1801', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: $1801<br>Type: FUNCTION<br>Id: 281<br>Formula Expression: Formula String: FUNCEXEC(B3, A3, VALUE); Formula Values: FUNCEXEC($1501, $1001, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@54c62d71'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '280', to: '281'},
{from: '279', to: '281'},
{from: '278', to: '281'},
{from: '281', to: '276'}
                            ]);