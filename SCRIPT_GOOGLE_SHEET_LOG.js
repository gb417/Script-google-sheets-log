function onEdit(event) {
  var log_page = 'ChangeLog';
  
  var sheet = event.range.getSheet();
  var cell = event.range;
  //var cellR = cell.getRow();
  //var cellC = cell.getColumn();
  var cellValue = cell.getValue();
  
  var user = Session.getActiveUser().getEmail();
  if (user=="") {
    user="Unknown";
  }
  var time = new Date(); 
  var active_spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var output_sheet = active_spreadsheet.getSheetByName(log_page);
  
  output_sheet.appendRow([user,cellValue,active_spreadsheet.getName(),sheet.getName(),time]);
}