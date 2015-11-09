var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0cc181fe-6424-4d09-8dc5-99626cfe4030', label: 'A1:E4\n...', color: '#31b0d5', title: 'Name: A1:E4<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]<br>Type: RANGE<br>Id: 0cc181fe-6424-4d09-8dc5-99626cfe4030<br>Formula Expression: Formula String: A1:E4; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Ptgs: A1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b71af0d'},
{id: 'a5fe432c-d0dc-4201-957d-3b612c19634b', label: 'E5\n4.0', color: '#31b0d5', title: 'Name: E5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: a5fe432c-d0dc-4201-957d-3b612c19634b<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0 MODE ; Ptgs: A1:E4 MODE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b71af0d'},
{id: 'ddddd88a-95eb-4c5f-bd64-bbe310306fb2', label: 'MODE\n4.0', color: '#f0ad4e', title: 'Name: MODE<br>Value: 4.0<br>Type: FUNCTION<br>Id: ddddd88a-95eb-4c5f-bd64-bbe310306fb2<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b71af0d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0cc181fe-6424-4d09-8dc5-99626cfe4030', to: 'ddddd88a-95eb-4c5f-bd64-bbe310306fb2'},
{from: 'ddddd88a-95eb-4c5f-bd64-bbe310306fb2', to: 'a5fe432c-d0dc-4201-957d-3b612c19634b'}
                            ]);