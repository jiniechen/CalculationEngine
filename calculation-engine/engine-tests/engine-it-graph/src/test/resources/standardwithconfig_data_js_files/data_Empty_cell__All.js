var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '571', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 12.0<br>Type: CELL_WITH_REFERENCE<br>Id: 571<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6035b93b'},
{id: '572', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 572<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6035b93b'},
{id: '573', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 573<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM([[5.0], [7.0], [57.0], [46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6035b93b'},
{id: '574', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Alias: null<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: 574<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6035b93b'},
{id: '575', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 115.0<br>Type: FUNCTION<br>Id: 575<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM([[5.0], [7.0], [57.0], [46.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6035b93b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '572', to: '571'},
{from: '574', to: '575'},
{from: '575', to: '573'}
                            ]);