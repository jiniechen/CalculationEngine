var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5320', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 5320<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75c36570'},
{id: '5321', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 5321<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75c36570'},
{id: '5322', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 5322<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75c36570'},
{id: '5323', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 5323<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75c36570'},
{id: '5324', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 5324<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75c36570'},
{id: '5325', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Alias: null<br>Value: 19.0<br>Type: FUNCTION<br>Id: 5325<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@75c36570'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5321', to: '5322'},
{from: '5324', to: '5325'},
{from: '5322', to: '5320'},
{from: '5325', to: '5323'}
                            ]);