var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '422', label: 'E6\n15.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 422<br>Formula Expression: Formula String: SUM(A1:E1); Formula Values: SUM([[1.0, 2.0, 3.0, 4.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3fabf088'},
{id: '423', label: 'A1:E1\n[[1.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Alias: null<br>Value: [[1.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 423<br>Formula Expression: Formula String: A1:E1; Formula Values: [[1.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[1.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3fabf088'},
{id: '424', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 424<br>Formula Expression: Formula String: SUM(A1:E1); Formula Values: SUM([[1.0, 2.0, 3.0, 4.0, 5.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3fabf088'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '423', to: '424'},
{from: '424', to: '422'}
                            ]);