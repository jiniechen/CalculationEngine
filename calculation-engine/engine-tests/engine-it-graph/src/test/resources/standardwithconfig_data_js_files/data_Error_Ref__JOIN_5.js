var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5004', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_REFERENCE<br>Id: 5004<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f523dae'},
{id: '5005', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 5005<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f523dae'},
{id: '5006', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: A4<br>Type: CELL_WITH_REFERENCE<br>Id: 5006<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f523dae'},
{id: '5007', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 5007<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3f523dae'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5005', to: '5004'},
{from: '5007', to: '5006'}
                            ]);