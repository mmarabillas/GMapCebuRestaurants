
function pullJSON() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheet = ss.getActiveSheet();


  var url="https://www.dropbox.com/s/56vq75h7q4r5ax7/json_restaurant.txt?dl=1"; // Paste your JSON URL here
  
  
  var response = UrlFetchApp.fetch(url); // get feed
  //SpreadsheetApp.getUi().alert(response);
  var dataAll = JSON.parse(response.getContentText());

  var dataSet = dataAll.response;
  
  
  var rows = [];
  var data;
  
  //SpreadsheetApp.getUi().alert(dataSet.length);

  rows.push(["name","rating","address","latitude","longitude"]);
  
  for (i = 0; i < dataSet.length; i++) {
    data = dataSet[i];
    rows.push([data.name, data.rating,data.address,data.latitude,data.longitude]);
    //SpreadsheetApp.getUi().alert(data.name + data.rating + ' ' + data.address + ' ' + data.latitude + ' ' + data.longitude);
  }

  Logger.log(rows);
  
  dataRange = sheet.getRange(1, 1, rows.length,5); // 3 Denotes total number of entites
  dataRange.setValues(rows);

}


