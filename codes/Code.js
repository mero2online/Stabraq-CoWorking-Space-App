function doGet() {
  return HtmlService.createHtmlOutputFromFile('form');
}

function checkInOut(payLoad) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const wsData = ss.getSheetByName('Data');
  wsData.appendRow([
    new Date(),
    payLoad.action,
    payLoad.userName,`=CONCATENATE("0",${payLoad.mobNumber})`,
  ]);
}
