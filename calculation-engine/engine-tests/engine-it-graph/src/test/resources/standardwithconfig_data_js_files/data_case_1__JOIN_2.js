var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'E13\n1840.0', color: '#31b0d5', title: 'Name: E13<br>Alias: null<br>Value: 1840.0<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: D13 / VALUE * C3; Formula Values: 8000.0 / 100.0 * 23.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '2', label: 'VALUE\n100.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 100.0<br>Type: CONSTANT_VALUE<br>Id: 2<br>Formula Expression: Formula String: VALUE; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '3', label: '/\n80.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 80.0<br>Type: OPERATOR<br>Id: 3<br>Formula Expression: Formula String: D13 / VALUE; Formula Values: 8000.0 / 100.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '6', label: '*\n1840.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 1840.0<br>Type: OPERATOR<br>Id: 6<br>Formula Expression: Formula String: D13 / VALUE * C3; Formula Values: 8000.0 / 100.0 * 23.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '9', label: 'C7\n250.0', color: '#31b0d5', title: 'Name: C7<br>Alias: Hazard_Coef<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 9<br>Formula Expression: Formula String: C7; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: C7 Index in Ptgs: 0 <br>Source Object Id: null'},
{id: '10', label: 'C13\n1.0', color: '#31b0d5', title: 'Name: C13<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 10<br>Formula Expression: Formula String: C13; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: C13 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '11', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 11<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '12', label: '-\n0.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 0.0<br>Type: OPERATOR<br>Id: 12<br>Formula Expression: Formula String: C13 - VALUE; Formula Values: 1.0 - 1.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '13', label: '*\n0.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 0.0<br>Type: OPERATOR<br>Id: 13<br>Formula Expression: Formula String: C7 * C13 - VALUE; Formula Values: 250.0 * 1.0 - 1.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '14', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 14<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '15', label: '*\n0.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 0.0<br>Type: OPERATOR<br>Id: 15<br>Formula Expression: Formula String: C7 * C13 - VALUE * VALUE; Formula Values: 250.0 * 1.0 - 1.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '16', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 16<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '17', label: '/\n0.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 0.0<br>Type: OPERATOR<br>Id: 17<br>Formula Expression: Formula String: C7 * C13 - VALUE * VALUE / VALUE; Formula Values: 250.0 * 1.0 - 1.0 * 2.0 / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '19', label: 'D13\n8000.0', color: '#31b0d5', title: 'Name: D13<br>Alias: null<br>Value: 8000.0<br>Type: CELL_WITH_VALUE<br>Id: 19<br>Formula Expression: Formula String: D13; Formula Values: 8000.0; Formula Ptg: 8000.0; Ptgs: D13 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '20', label: 'F13\n0.0', color: '#31b0d5', title: 'Name: F13<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_FORMULA<br>Id: 20<br>Formula Expression: Formula String: C7 * C13 - VALUE * VALUE / VALUE; Formula Values: 250.0 * 1.0 - 1.0 * 2.0 / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '21', label: 'G13\n0.2', color: '#31b0d5', title: 'Name: G13<br>Alias: null<br>Value: 0.2<br>Type: CELL_WITH_VALUE<br>Id: 21<br>Formula Expression: Formula String: G13; Formula Values: 0.2; Formula Ptg: 0.2; Ptgs: G13 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '23', label: '*\n1600.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 1600.0<br>Type: OPERATOR<br>Id: 23<br>Formula Expression: Formula String: G13 * D13; Formula Values: 0.2 * 8000.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '24', label: 'H13\n0.05', color: '#31b0d5', title: 'Name: H13<br>Alias: null<br>Value: 0.05<br>Type: CELL_WITH_VALUE<br>Id: 24<br>Formula Expression: Formula String: H13; Formula Values: 0.05; Formula Ptg: 0.05; Ptgs: H13 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '26', label: '*\n400.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 400.0<br>Type: OPERATOR<br>Id: 26<br>Formula Expression: Formula String: H13 * D13; Formula Values: 0.05 * 8000.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '27', label: 'SUM\n10000.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 10000.0<br>Type: FUNCTION<br>Id: 27<br>Formula Expression: Formula String: SUM(H13 * D13, G13 * D13, C7 * C13 - VALUE * VALUE / VALUE, D13); Formula Values: SUM(0.05 * 8000.0, 0.2 * 8000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 8000.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '28', label: 'J13\n1890.0', color: '#31b0d5', title: 'Name: J13<br>Alias: null<br>Value: 1890.0<br>Type: CELL_WITH_FORMULA<br>Id: 28<br>Formula Expression: Formula String: D13 / VALUE * C3 + C5; Formula Values: 8000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '32', label: '+\n1890.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 1890.0<br>Type: OPERATOR<br>Id: 32<br>Formula Expression: Formula String: D13 / VALUE * C3 + C5; Formula Values: 8000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '33', label: 'K13\n8110.0', color: '#31b0d5', title: 'Name: K13<br>Alias: null<br>Value: 8110.0<br>Type: CELL_WITH_FORMULA<br>Id: 33<br>Formula Expression: Formula String: SUM(H13 * D13, G13 * D13, C7 * C13 - VALUE * VALUE / VALUE, D13) - D13 / VALUE * C3 + C5; Formula Values: SUM(0.05 * 8000.0, 0.2 * 8000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 8000.0) - 8000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '36', label: '-\n8110.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 8110.0<br>Type: OPERATOR<br>Id: 36<br>Formula Expression: Formula String: SUM(H13 * D13, G13 * D13, C7 * C13 - VALUE * VALUE / VALUE, D13) - D13 / VALUE * C3 + C5; Formula Values: SUM(0.05 * 8000.0, 0.2 * 8000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 8000.0) - 8000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '37', label: 'L13\n11890.0', color: '#31b0d5', title: 'Name: L13<br>Alias: null<br>Value: 11890.0<br>Type: CELL_WITH_FORMULA<br>Id: 37<br>Formula Expression: Formula String: SUM(H13 * D13, G13 * D13, C7 * C13 - VALUE * VALUE / VALUE, D13) + D13 / VALUE * C3 + C5; Formula Values: SUM(0.05 * 8000.0, 0.2 * 8000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 8000.0) + 8000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '38', label: 'I13\n10000.0', color: '#31b0d5', title: 'Name: I13<br>Alias: null<br>Value: 10000.0<br>Type: CELL_WITH_FORMULA<br>Id: 38<br>Formula Expression: Formula String: SUM(H13 * D13, G13 * D13, C7 * C13 - VALUE * VALUE / VALUE, D13); Formula Values: SUM(0.05 * 8000.0, 0.2 * 8000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 8000.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '40', label: '+\n11890.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 11890.0<br>Type: OPERATOR<br>Id: 40<br>Formula Expression: Formula String: SUM(H13 * D13, G13 * D13, C7 * C13 - VALUE * VALUE / VALUE, D13) + D13 / VALUE * C3 + C5; Formula Values: SUM(0.05 * 8000.0, 0.2 * 8000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 8000.0) + 8000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '41', label: 'E14\n1380.0', color: '#31b0d5', title: 'Name: E14<br>Alias: null<br>Value: 1380.0<br>Type: CELL_WITH_FORMULA<br>Id: 41<br>Formula Expression: Formula String: D14 / VALUE * C3; Formula Values: 6000.0 / 100.0 * 23.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '43', label: 'VALUE\n100.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 100.0<br>Type: CONSTANT_VALUE<br>Id: 43<br>Formula Expression: Formula String: VALUE; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '44', label: '/\n60.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 60.0<br>Type: OPERATOR<br>Id: 44<br>Formula Expression: Formula String: D14 / VALUE; Formula Values: 6000.0 / 100.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '46', label: 'C3\n23.0', color: '#31b0d5', title: 'Name: C3<br>Alias: Tax<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 46<br>Formula Expression: Formula String: C3; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: null'},
{id: '47', label: '*\n1380.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 1380.0<br>Type: OPERATOR<br>Id: 47<br>Formula Expression: Formula String: D14 / VALUE * C3; Formula Values: 6000.0 / 100.0 * 23.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '48', label: 'F14\n0.0', color: '#31b0d5', title: 'Name: F14<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_FORMULA<br>Id: 48<br>Formula Expression: Formula String: C7 * C14 - VALUE * VALUE / VALUE; Formula Values: 250.0 * 1.0 - 1.0 * 2.0 / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '51', label: 'C14\n1.0', color: '#31b0d5', title: 'Name: C14<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 51<br>Formula Expression: Formula String: C14; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: C14 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '52', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 52<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '53', label: '-\n0.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 0.0<br>Type: OPERATOR<br>Id: 53<br>Formula Expression: Formula String: C14 - VALUE; Formula Values: 1.0 - 1.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '54', label: '*\n0.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 0.0<br>Type: OPERATOR<br>Id: 54<br>Formula Expression: Formula String: C7 * C14 - VALUE; Formula Values: 250.0 * 1.0 - 1.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '55', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 55<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '56', label: '*\n0.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 0.0<br>Type: OPERATOR<br>Id: 56<br>Formula Expression: Formula String: C7 * C14 - VALUE * VALUE; Formula Values: 250.0 * 1.0 - 1.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '57', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 57<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '58', label: '/\n0.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 0.0<br>Type: OPERATOR<br>Id: 58<br>Formula Expression: Formula String: C7 * C14 - VALUE * VALUE / VALUE; Formula Values: 250.0 * 1.0 - 1.0 * 2.0 / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '59', label: 'I14\n7680.0', color: '#31b0d5', title: 'Name: I14<br>Alias: null<br>Value: 7680.0<br>Type: CELL_WITH_FORMULA<br>Id: 59<br>Formula Expression: Formula String: SUM(H14 * D14, G14 * D14, C7 * C14 - VALUE * VALUE / VALUE, D14); Formula Values: SUM(0.03 * 6000.0, 0.25 * 6000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 6000.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '62', label: 'G14\n0.25', color: '#31b0d5', title: 'Name: G14<br>Alias: null<br>Value: 0.25<br>Type: CELL_WITH_VALUE<br>Id: 62<br>Formula Expression: Formula String: G14; Formula Values: 0.25; Formula Ptg: 0.25; Ptgs: G14 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '63', label: 'D14\n6000.0', color: '#31b0d5', title: 'Name: D14<br>Alias: null<br>Value: 6000.0<br>Type: CELL_WITH_VALUE<br>Id: 63<br>Formula Expression: Formula String: D14; Formula Values: 6000.0; Formula Ptg: 6000.0; Ptgs: D14 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '64', label: '*\n1500.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 1500.0<br>Type: OPERATOR<br>Id: 64<br>Formula Expression: Formula String: G14 * D14; Formula Values: 0.25 * 6000.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '65', label: 'H14\n0.03', color: '#31b0d5', title: 'Name: H14<br>Alias: null<br>Value: 0.03<br>Type: CELL_WITH_VALUE<br>Id: 65<br>Formula Expression: Formula String: H14; Formula Values: 0.03; Formula Ptg: 0.03; Ptgs: H14 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '67', label: '*\n180.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 180.0<br>Type: OPERATOR<br>Id: 67<br>Formula Expression: Formula String: H14 * D14; Formula Values: 0.03 * 6000.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '68', label: 'SUM\n7680.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 7680.0<br>Type: FUNCTION<br>Id: 68<br>Formula Expression: Formula String: SUM(H14 * D14, G14 * D14, C7 * C14 - VALUE * VALUE / VALUE, D14); Formula Values: SUM(0.03 * 6000.0, 0.25 * 6000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 6000.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '69', label: 'J14\n1430.0', color: '#31b0d5', title: 'Name: J14<br>Alias: null<br>Value: 1430.0<br>Type: CELL_WITH_FORMULA<br>Id: 69<br>Formula Expression: Formula String: D14 / VALUE * C3 + C5; Formula Values: 6000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '72', label: 'C5\n50.0', color: '#31b0d5', title: 'Name: C5<br>Alias: Social_Tribute<br>Value: 50.0<br>Type: CELL_WITH_VALUE<br>Id: 72<br>Formula Expression: Formula String: C5; Formula Values: 50.0; Formula Ptg: 50.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: null'},
{id: '73', label: '+\n1430.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 1430.0<br>Type: OPERATOR<br>Id: 73<br>Formula Expression: Formula String: D14 / VALUE * C3 + C5; Formula Values: 6000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '74', label: 'K14\n6250.0', color: '#31b0d5', title: 'Name: K14<br>Alias: null<br>Value: 6250.0<br>Type: CELL_WITH_FORMULA<br>Id: 74<br>Formula Expression: Formula String: SUM(H14 * D14, G14 * D14, C7 * C14 - VALUE * VALUE / VALUE, D14) - D14 / VALUE * C3 + C5; Formula Values: SUM(0.03 * 6000.0, 0.25 * 6000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 6000.0) - 6000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '77', label: '-\n6250.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 6250.0<br>Type: OPERATOR<br>Id: 77<br>Formula Expression: Formula String: SUM(H14 * D14, G14 * D14, C7 * C14 - VALUE * VALUE / VALUE, D14) - D14 / VALUE * C3 + C5; Formula Values: SUM(0.03 * 6000.0, 0.25 * 6000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 6000.0) - 6000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '78', label: 'L14\n9110.0', color: '#31b0d5', title: 'Name: L14<br>Alias: null<br>Value: 9110.0<br>Type: CELL_WITH_FORMULA<br>Id: 78<br>Formula Expression: Formula String: SUM(H14 * D14, G14 * D14, C7 * C14 - VALUE * VALUE / VALUE, D14) + D14 / VALUE * C3 + C5; Formula Values: SUM(0.03 * 6000.0, 0.25 * 6000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 6000.0) + 6000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '81', label: '+\n9110.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 9110.0<br>Type: OPERATOR<br>Id: 81<br>Formula Expression: Formula String: SUM(H14 * D14, G14 * D14, C7 * C14 - VALUE * VALUE / VALUE, D14) + D14 / VALUE * C3 + C5; Formula Values: SUM(0.03 * 6000.0, 0.25 * 6000.0, 250.0 * 1.0 - 1.0 * 2.0 / 3.0, 6000.0) + 6000.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '82', label: 'E15\n1035.0', color: '#31b0d5', title: 'Name: E15<br>Alias: null<br>Value: 1035.0<br>Type: CELL_WITH_FORMULA<br>Id: 82<br>Formula Expression: Formula String: D15 / VALUE * C3; Formula Values: 4500.0 / 100.0 * 23.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '84', label: 'VALUE\n100.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 100.0<br>Type: CONSTANT_VALUE<br>Id: 84<br>Formula Expression: Formula String: VALUE; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '85', label: '/\n45.0', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 45.0<br>Type: OPERATOR<br>Id: 85<br>Formula Expression: Formula String: D15 / VALUE; Formula Values: 4500.0 / 100.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '88', label: '*\n1035.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 1035.0<br>Type: OPERATOR<br>Id: 88<br>Formula Expression: Formula String: D15 / VALUE * C3; Formula Values: 4500.0 / 100.0 * 23.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '89', label: 'F15\n333.3333333333333', color: '#31b0d5', title: 'Name: F15<br>Alias: null<br>Value: 333.3333333333333<br>Type: CELL_WITH_FORMULA<br>Id: 89<br>Formula Expression: Formula String: C7 * C15 - VALUE * VALUE / VALUE; Formula Values: 250.0 * 3.0 - 1.0 * 2.0 / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '92', label: 'C15\n3.0', color: '#31b0d5', title: 'Name: C15<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 92<br>Formula Expression: Formula String: C15; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C15 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '93', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 93<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '94', label: '-\n2.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 2.0<br>Type: OPERATOR<br>Id: 94<br>Formula Expression: Formula String: C15 - VALUE; Formula Values: 3.0 - 1.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '95', label: '*\n500.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 500.0<br>Type: OPERATOR<br>Id: 95<br>Formula Expression: Formula String: C7 * C15 - VALUE; Formula Values: 250.0 * 3.0 - 1.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '96', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 96<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '97', label: '*\n1000.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 1000.0<br>Type: OPERATOR<br>Id: 97<br>Formula Expression: Formula String: C7 * C15 - VALUE * VALUE; Formula Values: 250.0 * 3.0 - 1.0 * 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '98', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 98<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '99', label: '/\n333.3333333333333', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 333.3333333333333<br>Type: OPERATOR<br>Id: 99<br>Formula Expression: Formula String: C7 * C15 - VALUE * VALUE / VALUE; Formula Values: 250.0 * 3.0 - 1.0 * 2.0 / 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '100', label: 'I15\n6273.333333333333', color: '#31b0d5', title: 'Name: I15<br>Alias: null<br>Value: 6273.333333333333<br>Type: CELL_WITH_FORMULA<br>Id: 100<br>Formula Expression: Formula String: SUM(H15 * D15, G15 * D15, C7 * C15 - VALUE * VALUE / VALUE, D15); Formula Values: SUM(0.07 * 4500.0, 0.25 * 4500.0, 250.0 * 3.0 - 1.0 * 2.0 / 3.0, 4500.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '103', label: 'G15\n0.25', color: '#31b0d5', title: 'Name: G15<br>Alias: null<br>Value: 0.25<br>Type: CELL_WITH_VALUE<br>Id: 103<br>Formula Expression: Formula String: G15; Formula Values: 0.25; Formula Ptg: 0.25; Ptgs: G15 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '104', label: 'D15\n4500.0', color: '#31b0d5', title: 'Name: D15<br>Alias: null<br>Value: 4500.0<br>Type: CELL_WITH_VALUE<br>Id: 104<br>Formula Expression: Formula String: D15; Formula Values: 4500.0; Formula Ptg: 4500.0; Ptgs: D15 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '105', label: '*\n1125.0', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 1125.0<br>Type: OPERATOR<br>Id: 105<br>Formula Expression: Formula String: G15 * D15; Formula Values: 0.25 * 4500.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '106', label: 'H15\n0.07', color: '#31b0d5', title: 'Name: H15<br>Alias: null<br>Value: 0.07<br>Type: CELL_WITH_VALUE<br>Id: 106<br>Formula Expression: Formula String: H15; Formula Values: 0.07; Formula Ptg: 0.07; Ptgs: H15 Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '108', label: '*\n315.00000000000006', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 315.00000000000006<br>Type: OPERATOR<br>Id: 108<br>Formula Expression: Formula String: H15 * D15; Formula Values: 0.07 * 4500.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '109', label: 'SUM\n6273.333333333333', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 6273.333333333333<br>Type: FUNCTION<br>Id: 109<br>Formula Expression: Formula String: SUM(H15 * D15, G15 * D15, C7 * C15 - VALUE * VALUE / VALUE, D15); Formula Values: SUM(0.07 * 4500.0, 0.25 * 4500.0, 250.0 * 3.0 - 1.0 * 2.0 / 3.0, 4500.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '114', label: '+\n1085.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 1085.0<br>Type: OPERATOR<br>Id: 114<br>Formula Expression: Formula String: D15 / VALUE * C3 + C5; Formula Values: 4500.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '115', label: 'K15\n5188.333333333333', color: '#31b0d5', title: 'Name: K15<br>Alias: null<br>Value: 5188.333333333333<br>Type: CELL_WITH_FORMULA<br>Id: 115<br>Formula Expression: Formula String: SUM(H15 * D15, G15 * D15, C7 * C15 - VALUE * VALUE / VALUE, D15) - D15 / VALUE * C3 + C5; Formula Values: SUM(0.07 * 4500.0, 0.25 * 4500.0, 250.0 * 3.0 - 1.0 * 2.0 / 3.0, 4500.0) - 4500.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '118', label: '-\n5188.333333333333', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 5188.333333333333<br>Type: OPERATOR<br>Id: 118<br>Formula Expression: Formula String: SUM(H15 * D15, G15 * D15, C7 * C15 - VALUE * VALUE / VALUE, D15) - D15 / VALUE * C3 + C5; Formula Values: SUM(0.07 * 4500.0, 0.25 * 4500.0, 250.0 * 3.0 - 1.0 * 2.0 / 3.0, 4500.0) - 4500.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '119', label: 'L15\n7358.333333333333', color: '#31b0d5', title: 'Name: L15<br>Alias: null<br>Value: 7358.333333333333<br>Type: CELL_WITH_FORMULA<br>Id: 119<br>Formula Expression: Formula String: SUM(H15 * D15, G15 * D15, C7 * C15 - VALUE * VALUE / VALUE, D15) + D15 / VALUE * C3 + C5; Formula Values: SUM(0.07 * 4500.0, 0.25 * 4500.0, 250.0 * 3.0 - 1.0 * 2.0 / 3.0, 4500.0) + 4500.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '121', label: 'J15\n1085.0', color: '#31b0d5', title: 'Name: J15<br>Alias: null<br>Value: 1085.0<br>Type: CELL_WITH_FORMULA<br>Id: 121<br>Formula Expression: Formula String: D15 / VALUE * C3 + C5; Formula Values: 4500.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '122', label: '+\n7358.333333333333', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 7358.333333333333<br>Type: OPERATOR<br>Id: 122<br>Formula Expression: Formula String: SUM(H15 * D15, G15 * D15, C7 * C15 - VALUE * VALUE / VALUE, D15) + D15 / VALUE * C3 + C5; Formula Values: SUM(0.07 * 4500.0, 0.25 * 4500.0, 250.0 * 3.0 - 1.0 * 2.0 / 3.0, 4500.0) + 4500.0 / 100.0 * 23.0 + 50.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '123', label: 'C17\n28358.333333333332', color: '#31b0d5', title: 'Name: C17<br>Alias: null<br>Value: 28358.333333333332<br>Type: CELL_WITH_FORMULA<br>Id: 123<br>Formula Expression: Formula String: SUM(L13:L15); Formula Values: SUM([[11890.0], [9110.0], [7358.333333333333]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '124', label: 'L13:L15\n[[11890.0], [9110.0], [7358.333333333333]]', color: '#31b0d5', title: 'Name: L13:L15<br>Alias: null<br>Value: [[11890.0], [9110.0], [7358.333333333333]]<br>Type: RANGE<br>Id: 124<br>Formula Expression: Formula String: L13:L15; Formula Values: [[11890.0], [9110.0], [7358.333333333333]]; Formula Ptg: [[11890.0], [9110.0], [7358.333333333333]]; Ptgs: L13:L15 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '125', label: 'SUM\n28358.333333333332', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 28358.333333333332<br>Type: FUNCTION<br>Id: 125<br>Formula Expression: Formula String: SUM(L13:L15); Formula Values: SUM([[11890.0], [9110.0], [7358.333333333333]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '126', label: 'C18\n4255.0', color: '#31b0d5', title: 'Name: C18<br>Alias: null<br>Value: 4255.0<br>Type: CELL_WITH_FORMULA<br>Id: 126<br>Formula Expression: Formula String: SUM(E13:E15); Formula Values: SUM([[1840.0], [1380.0], [1035.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '127', label: 'E13:E15\n[[1840.0], [1380.0], [1035.0]]', color: '#31b0d5', title: 'Name: E13:E15<br>Alias: null<br>Value: [[1840.0], [1380.0], [1035.0]]<br>Type: RANGE<br>Id: 127<br>Formula Expression: Formula String: E13:E15; Formula Values: [[1840.0], [1380.0], [1035.0]]; Formula Ptg: [[1840.0], [1380.0], [1035.0]]; Ptgs: E13:E15 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '128', label: 'SUM\n4255.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 4255.0<br>Type: FUNCTION<br>Id: 128<br>Formula Expression: Formula String: SUM(E13:E15); Formula Values: SUM([[1840.0], [1380.0], [1035.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '129', label: 'C19\n6516.11111111111', color: '#31b0d5', title: 'Name: C19<br>Alias: null<br>Value: 6516.11111111111<br>Type: CELL_WITH_FORMULA<br>Id: 129<br>Formula Expression: Formula String: SUM(K13:K15) / ROWS(K13:K15); Formula Values: SUM([[8110.0], [6250.0], [5188.333333333333]]) / ROWS([[8110.0], [6250.0], [5188.333333333333]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '130', label: 'K13:K15\n[[8110.0], [6250.0], [5188.333333333333]]', color: '#31b0d5', title: 'Name: K13:K15<br>Alias: null<br>Value: [[8110.0], [6250.0], [5188.333333333333]]<br>Type: RANGE<br>Id: 130<br>Formula Expression: Formula String: K13:K15; Formula Values: [[8110.0], [6250.0], [5188.333333333333]]; Formula Ptg: [[8110.0], [6250.0], [5188.333333333333]]; Ptgs: K13:K15 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '131', label: 'SUM\n19548.333333333332', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 19548.333333333332<br>Type: FUNCTION<br>Id: 131<br>Formula Expression: Formula String: SUM(K13:K15); Formula Values: SUM([[8110.0], [6250.0], [5188.333333333333]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '132', label: 'K13:K15\n[[8110.0], [6250.0], [5188.333333333333]]', color: '#31b0d5', title: 'Name: K13:K15<br>Alias: null<br>Value: [[8110.0], [6250.0], [5188.333333333333]]<br>Type: RANGE<br>Id: 132<br>Formula Expression: Formula String: K13:K15; Formula Values: [[8110.0], [6250.0], [5188.333333333333]]; Formula Ptg: [[8110.0], [6250.0], [5188.333333333333]]; Ptgs: K13:K15 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '133', label: 'ROWS\n3.0', color: '#f0ad4e', title: 'Name: ROWS<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 133<br>Formula Expression: Formula String: ROWS(K13:K15); Formula Values: ROWS([[8110.0], [6250.0], [5188.333333333333]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'},
{id: '134', label: '/\n6516.11111111111', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 6516.11111111111<br>Type: OPERATOR<br>Id: 134<br>Formula Expression: Formula String: SUM(K13:K15) / ROWS(K13:K15); Formula Values: SUM([[8110.0], [6250.0], [5188.333333333333]]) / ROWS([[8110.0], [6250.0], [5188.333333333333]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@39fa8ad2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '41', to: '73'},
{from: '2', to: '3'},
{from: '26', to: '27'},
{from: '98', to: '99'},
{from: '130', to: '131'},
{from: '10', to: '12'},
{from: '106', to: '108'},
{from: '114', to: '121'},
{from: '9', to: '54'},
{from: '19', to: '3'},
{from: '99', to: '89'},
{from: '82', to: '114'},
{from: '11', to: '12'},
{from: '43', to: '44'},
{from: '67', to: '68'},
{from: '51', to: '53'},
{from: '3', to: '6'},
{from: '131', to: '134'},
{from: '19', to: '23'},
{from: '19', to: '26'},
{from: '19', to: '27'},
{from: '27', to: '38'},
{from: '82', to: '127'},
{from: '115', to: '130'},
{from: '115', to: '132'},
{from: '59', to: '77'},
{from: '41', to: '127'},
{from: '9', to: '95'},
{from: '59', to: '81'},
{from: '68', to: '59'},
{from: '74', to: '130'},
{from: '74', to: '132'},
{from: '36', to: '33'},
{from: '0', to: '127'},
{from: '12', to: '13'},
{from: '52', to: '53'},
{from: '84', to: '85'},
{from: '108', to: '109'},
{from: '124', to: '125'},
{from: '33', to: '130'},
{from: '132', to: '133'},
{from: '92', to: '94'},
{from: '44', to: '47'},
{from: '33', to: '132'},
{from: '20', to: '27'},
{from: '28', to: '36'},
{from: '28', to: '40'},
{from: '100', to: '118'},
{from: '100', to: '122'},
{from: '109', to: '100'},
{from: '46', to: '6'},
{from: '77', to: '74'},
{from: '125', to: '123'},
{from: '53', to: '54'},
{from: '93', to: '94'},
{from: '133', to: '134'},
{from: '13', to: '15'},
{from: '21', to: '23'},
{from: '85', to: '88'},
{from: '69', to: '77'},
{from: '69', to: '81'},
{from: '6', to: '0'},
{from: '134', to: '129'},
{from: '118', to: '115'},
{from: '38', to: '36'},
{from: '14', to: '15'},
{from: '46', to: '47'},
{from: '94', to: '95'},
{from: '38', to: '40'},
{from: '54', to: '56'},
{from: '62', to: '64'},
{from: '63', to: '44'},
{from: '72', to: '32'},
{from: '47', to: '41'},
{from: '55', to: '56'},
{from: '63', to: '64'},
{from: '127', to: '128'},
{from: '15', to: '17'},
{from: '95', to: '97'},
{from: '103', to: '105'},
{from: '23', to: '27'},
{from: '63', to: '67'},
{from: '119', to: '124'},
{from: '63', to: '68'},
{from: '46', to: '88'},
{from: '104', to: '85'},
{from: '78', to: '124'},
{from: '37', to: '124'},
{from: '88', to: '82'},
{from: '32', to: '28'},
{from: '40', to: '37'},
{from: '128', to: '126'},
{from: '72', to: '73'},
{from: '16', to: '17'},
{from: '96', to: '97'},
{from: '104', to: '105'},
{from: '24', to: '26'},
{from: '56', to: '58'},
{from: '64', to: '68'},
{from: '104', to: '108'},
{from: '104', to: '109'},
{from: '48', to: '68'},
{from: '73', to: '69'},
{from: '81', to: '78'},
{from: '121', to: '118'},
{from: '0', to: '32'},
{from: '57', to: '58'},
{from: '121', to: '122'},
{from: '65', to: '67'},
{from: '97', to: '99'},
{from: '17', to: '20'},
{from: '9', to: '13'},
{from: '105', to: '109'},
{from: '72', to: '114'},
{from: '89', to: '109'},
{from: '58', to: '48'},
{from: '122', to: '119'}
                            ]);