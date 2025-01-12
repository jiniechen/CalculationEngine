var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1785', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: 1785<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e13f156'},
{id: '1786', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: 1786<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e13f156'},
{id: '1787', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 1787<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e13f156'},
{id: '1788', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 60.0<br>Type: OPERATOR<br>Id: 1788<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5e13f156'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1787', to: '1788'},
{from: '1786', to: '1788'},
{from: '1788', to: '1785'}
                            ]);