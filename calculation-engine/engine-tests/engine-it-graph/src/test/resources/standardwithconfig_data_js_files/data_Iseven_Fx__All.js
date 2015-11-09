var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '920d43bd-fe88-4e0f-ba4c-6cd7f69bd27d', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 920d43bd-fe88-4e0f-ba4c-6cd7f69bd27d<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: 'fc24edf7-7667-418b-b06f-6486a63e79b5', label: 'D11\n#VALUE!', color: '#31b0d5', title: 'Name: D11<br>Value: #VALUE!<br>Type: CELL_WITH_FORMULA<br>Id: fc24edf7-7667-418b-b06f-6486a63e79b5<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: qwerty ISEVEN ; Ptgs: D1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: 'fa031e2e-b7ac-4877-b60b-a324df8d6b8a', label: 'ISEVEN\n#VALUE!', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: #VALUE!<br>Type: FUNCTION<br>Id: fa031e2e-b7ac-4877-b60b-a324df8d6b8a<br>Formula Expression: Formula String: ISEVEN(D1); Formula Values: ISEVEN(qwerty); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: '4f83273e-1e3b-42e3-b463-17fdbe9b5790', label: 'C3\n5.45', color: '#31b0d5', title: 'Name: C3<br>Value: 5.45<br>Type: CELL_WITH_VALUE<br>Id: 4f83273e-1e3b-42e3-b463-17fdbe9b5790<br>Formula Expression: Formula String: C3; Formula Values: 5.45; Formula Ptg: 5.45; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: '568f7337-4592-40aa-87b3-d1bad8a06d9c', label: 'D10\nFALSE', color: '#31b0d5', title: 'Name: D10<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 568f7337-4592-40aa-87b3-d1bad8a06d9c<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: 5.45 ISEVEN ; Ptgs: C3 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: '6bb91658-3d29-4ad6-a22f-17b0f467870b', label: 'D12\nTRUE', color: '#31b0d5', title: 'Name: D12<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 6bb91658-3d29-4ad6-a22f-17b0f467870b<br>Formula Expression: Formula String: ISEVEN(hjk); Formula Values: ISEVEN(); Formula Ptg:  ISEVEN ; Ptgs: hjk ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: '07507265-8541-4bcd-928a-ed0512518ded', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: TRUE<br>Type: FUNCTION<br>Id: 07507265-8541-4bcd-928a-ed0512518ded<br>Formula Expression: Formula String: ISEVEN(hjk); Formula Values: ISEVEN(); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: '208c8d8a-8e2e-4459-9e6c-489f173b0672', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 208c8d8a-8e2e-4459-9e6c-489f173b0672<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: 'c130f471-462b-4148-9382-0352758dc452', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: c130f471-462b-4148-9382-0352758dc452<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: 'fd6d116e-1940-4b4d-b56d-2555e484bcc5', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: FALSE<br>Type: FUNCTION<br>Id: fd6d116e-1940-4b4d-b56d-2555e484bcc5<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: 'b63f4a1b-b792-4557-822b-f3ff0cba881f', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: FALSE<br>Type: FUNCTION<br>Id: b63f4a1b-b792-4557-822b-f3ff0cba881f<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: 'afa7f5de-6871-4467-a692-f6a794937250', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: afa7f5de-6871-4467-a692-f6a794937250<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: 2.0 ISEVEN ; Ptgs: A2 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: '85988a59-e7ca-4075-8a80-d149a34782fd', label: 'D9\nFALSE', color: '#31b0d5', title: 'Name: D9<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 85988a59-e7ca-4075-8a80-d149a34782fd<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: '3dbe7647-c8c5-4314-800e-c0a67c2b7a1b', label: 'hjk\n', color: '#31b0d5', title: 'Name: hjk<br>Value: <br>Type: EMPTY_CELL<br>Id: 3dbe7647-c8c5-4314-800e-c0a67c2b7a1b<br>Formula Expression: Formula String: hjk; Formula Values: ; Formula Ptg: ; Ptgs: hjk Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: 'c2ae9b9d-4943-41ed-adc1-aedc7629ed40', label: 'D1\nqwerty', color: '#31b0d5', title: 'Name: D1<br>Value: qwerty<br>Type: CELL_WITH_VALUE<br>Id: c2ae9b9d-4943-41ed-adc1-aedc7629ed40<br>Formula Expression: Formula String: D1; Formula Values: qwerty; Formula Ptg: qwerty; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: 'e13a24e3-b05d-4630-9ff9-28eaaaf46fde', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: TRUE<br>Type: FUNCTION<br>Id: e13a24e3-b05d-4630-9ff9-28eaaaf46fde<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'},
{id: '78056793-8b04-4a90-a522-2a3d480f8117', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 78056793-8b04-4a90-a522-2a3d480f8117<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e4f8430'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '920d43bd-fe88-4e0f-ba4c-6cd7f69bd27d', to: 'e13a24e3-b05d-4630-9ff9-28eaaaf46fde'},
{from: 'c2ae9b9d-4943-41ed-adc1-aedc7629ed40', to: 'fa031e2e-b7ac-4877-b60b-a324df8d6b8a'},
{from: '07507265-8541-4bcd-928a-ed0512518ded', to: '6bb91658-3d29-4ad6-a22f-17b0f467870b'},
{from: 'fd6d116e-1940-4b4d-b56d-2555e484bcc5', to: 'c130f471-462b-4148-9382-0352758dc452'},
{from: '4f83273e-1e3b-42e3-b463-17fdbe9b5790', to: 'b63f4a1b-b792-4557-822b-f3ff0cba881f'},
{from: 'fa031e2e-b7ac-4877-b60b-a324df8d6b8a', to: 'fc24edf7-7667-418b-b06f-6486a63e79b5'},
{from: '3dbe7647-c8c5-4314-800e-c0a67c2b7a1b', to: '07507265-8541-4bcd-928a-ed0512518ded'},
{from: 'e13a24e3-b05d-4630-9ff9-28eaaaf46fde', to: 'afa7f5de-6871-4467-a692-f6a794937250'},
{from: 'b63f4a1b-b792-4557-822b-f3ff0cba881f', to: '568f7337-4592-40aa-87b3-d1bad8a06d9c'},
{from: '78056793-8b04-4a90-a522-2a3d480f8117', to: 'fd6d116e-1940-4b4d-b56d-2555e484bcc5'},
{from: 'fd6d116e-1940-4b4d-b56d-2555e484bcc5', to: '208c8d8a-8e2e-4459-9e6c-489f173b0672'},
{from: '208c8d8a-8e2e-4459-9e6c-489f173b0672', to: '85988a59-e7ca-4075-8a80-d149a34782fd'}
                            ]);