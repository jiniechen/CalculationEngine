var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4180', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_REFERENCE<br>Id: 4180<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1edf52e6'},
{id: '4181', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 4181<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@1edf52e6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4181', to: '4180'}
                            ]);