var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '885', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 885<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]], Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@588ffeb'},
{id: '886', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: 886<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@588ffeb'},
{id: '887', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Alias: null<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: 887<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@588ffeb'},
{id: '888', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 888<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@588ffeb'},
{id: '889', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 889<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@588ffeb'},
{id: '890', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Alias: null<br>Value: 4.0<br>Type: FUNCTION<br>Id: 890<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]], Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@588ffeb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '889', to: '890'},
{from: '888', to: '890'},
{from: '887', to: '890'},
{from: '886', to: '890'},
{from: '890', to: '885'}
                            ]);