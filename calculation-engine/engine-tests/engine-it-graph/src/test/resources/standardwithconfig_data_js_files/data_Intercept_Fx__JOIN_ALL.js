var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3120', label: 'C7\n0.04838709677419217', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: 0.04838709677419217<br>Type: CELL_WITH_FORMULA<br>Id: 3120<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT([[6.0], [5.0], [11.0], [7.0], [5.0]], [[2.0], [3.0], [9.0], [1.0], [8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fa11fda'},
{id: '3121', label: 'A2:A6\n[[2.0], [3.0], [9.0], [1.0], [8.0]]', color: '#31b0d5', title: 'Name: A2:A6<br>Alias: null<br>Value: [[2.0], [3.0], [9.0], [1.0], [8.0]]<br>Type: RANGE<br>Id: 3121<br>Formula Expression: Formula String: A2:A6; Formula Values: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Formula Ptg: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Ptgs: A2:A6 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fa11fda'},
{id: '3122', label: 'B2:B6\n[[6.0], [5.0], [11.0], [7.0], [5.0]]', color: '#31b0d5', title: 'Name: B2:B6<br>Alias: null<br>Value: [[6.0], [5.0], [11.0], [7.0], [5.0]]<br>Type: RANGE<br>Id: 3122<br>Formula Expression: Formula String: B2:B6; Formula Values: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Formula Ptg: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Ptgs: B2:B6 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fa11fda'},
{id: '3123', label: 'INTERCEPT\n0.04838709677419217', color: '#f0ad4e', title: 'Name: INTERCEPT<br>Alias: null<br>Value: 0.04838709677419217<br>Type: FUNCTION<br>Id: 3123<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT([[6.0], [5.0], [11.0], [7.0], [5.0]], [[2.0], [3.0], [9.0], [1.0], [8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@fa11fda'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3121', to: '3123'},
{from: '3122', to: '3123'},
{from: '3123', to: '3120'}
                            ]);