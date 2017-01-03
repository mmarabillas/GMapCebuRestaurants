function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheet = ss.getActiveSheet();

  var url="https://www.dropbox.com/s/0oguhnrq913o5mn/json_rest_data.txt?dl=1"
  
  var response = UrlFetchApp.fetch(url); // get feed
  //SpreadsheetApp.getUi().alert(response);
  var dataAll = JSON.parse(response.getContentText());

  var dataSet = dataAll.response;
  
  
  var rows = [];
  var data;
  
  //SpreadsheetApp.getUi().alert(dataSet.length);

  rows.push(["name","rating","address","patrons","revenue","latitude","longitude"]);
  
  for (i = 0; i < dataSet.length; i++) {
    data = dataSet[i];
    rows.push([data.name, data.rating,data.address,data.patrons,data.revenue,data.latitude,data.longitude]);
    //SpreadsheetApp.getUi().alert(data.name + data.rating + ' ' + data.address + ' ' + data.latitude + ' ' + data.longitude);
  }

  Logger.log(rows);
  
  dataRange = sheet.getRange(1, 1, rows.length,7); // 3 Denotes total number of entites
  dataRange.setValues(rows);

}
