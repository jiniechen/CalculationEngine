var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2670ef01-ba04-40bc-b2d9-4f942b7ad1b0', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 2670ef01-ba04-40bc-b2d9-4f942b7ad1b0<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: 'd0f25636-a9c4-475a-b5db-9836537c984d', label: 'FUNCEXEC\n5.192925985263684', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: d0f25636-a9c4-475a-b5db-9836537c984d<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: '8bd8b647-f53e-422e-8bc1-97de9e3b15d6', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 8bd8b647-f53e-422e-8bc1-97de9e3b15d6<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: 'e4efc7e9-bca0-40ea-a3cf-efd938045ff1', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: e4efc7e9-bca0-40ea-a3cf-efd938045ff1<br>Formula Expression: Formula String: DEFINE(ACOSH(C2), VALUE, C2, VALUE); Formula Values: DEFINE(ACOSH(90.0), #, 90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: 'cc6ed599-bca0-467f-93a5-8be5e2c46a11', label: 'F7\n5.192925985263684', color: '#31b0d5', title: 'Name: F7<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: cc6ed599-bca0-467f-93a5-8be5e2c46a11<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: 90.0, DEVDEF FUNCEXEC ; Ptgs: C2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: '17367990-c1d0-4e93-af83-a2185f7fa90e', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 17367990-c1d0-4e93-af83-a2185f7fa90e<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: 'abbf32a5-d395-4fd4-b0f3-58578c66404e', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: abbf32a5-d395-4fd4-b0f3-58578c66404e<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: '569af526-07fa-4213-a2be-77da528913a4', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 569af526-07fa-4213-a2be-77da528913a4<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: '3568ebe8-69d5-4471-8903-f46b01ac8ea4', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 3568ebe8-69d5-4471-8903-f46b01ac8ea4<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: '4dbd0a3f-300a-4ffe-8075-d861cdeb52d6', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 4dbd0a3f-300a-4ffe-8075-d861cdeb52d6<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: '3bd9e7de-a015-4354-a7bc-a186135c76db', label: 'E7\nDEFINE', color: '#31b0d5', title: 'Name: E7<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 3bd9e7de-a015-4354-a7bc-a186135c76db<br>Formula Expression: Formula String: DEFINE(ACOSH(C2), VALUE, C2, VALUE); Formula Values: DEFINE(ACOSH(90.0), #, 90.0, DEVDEF); Formula Ptg: 90.0 ACOSH , #, 90.0, DEVDEF DEFINE ; Ptgs: C2 ACOSH , VALUE, C2, VALUE DEFINE  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: 'f2e854f6-69b5-4a82-9c57-5fdbf95cf981', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: f2e854f6-69b5-4a82-9c57-5fdbf95cf981<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'},
{id: 'f23c902c-eec6-4992-bacb-7ea2c1bf9c1c', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: f23c902c-eec6-4992-bacb-7ea2c1bf9c1c<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26794848'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f23c902c-eec6-4992-bacb-7ea2c1bf9c1c', to: 'e4efc7e9-bca0-40ea-a3cf-efd938045ff1'},
{from: '17367990-c1d0-4e93-af83-a2185f7fa90e', to: 'd0f25636-a9c4-475a-b5db-9836537c984d'},
{from: '8bd8b647-f53e-422e-8bc1-97de9e3b15d6', to: 'd0f25636-a9c4-475a-b5db-9836537c984d'},
{from: 'abbf32a5-d395-4fd4-b0f3-58578c66404e', to: '569af526-07fa-4213-a2be-77da528913a4'},
{from: '8bd8b647-f53e-422e-8bc1-97de9e3b15d6', to: 'e4efc7e9-bca0-40ea-a3cf-efd938045ff1'},
{from: '4dbd0a3f-300a-4ffe-8075-d861cdeb52d6', to: '2670ef01-ba04-40bc-b2d9-4f942b7ad1b0'},
{from: '2670ef01-ba04-40bc-b2d9-4f942b7ad1b0', to: '3568ebe8-69d5-4471-8903-f46b01ac8ea4'},
{from: 'f2e854f6-69b5-4a82-9c57-5fdbf95cf981', to: 'e4efc7e9-bca0-40ea-a3cf-efd938045ff1'},
{from: 'e4efc7e9-bca0-40ea-a3cf-efd938045ff1', to: '3bd9e7de-a015-4354-a7bc-a186135c76db'},
{from: 'd0f25636-a9c4-475a-b5db-9836537c984d', to: 'cc6ed599-bca0-467f-93a5-8be5e2c46a11'},
{from: '569af526-07fa-4213-a2be-77da528913a4', to: 'e4efc7e9-bca0-40ea-a3cf-efd938045ff1'},
{from: '8bd8b647-f53e-422e-8bc1-97de9e3b15d6', to: 'abbf32a5-d395-4fd4-b0f3-58578c66404e'}
                            ]);