/**
 * 編集対象のSpreadSheetの情報を取得する
 */
function _getSheet() {

  // TODO:利用するSpreadSheetに応じて準備
  var SHEET_URL = '[SpreadsheetのURL]';
  var spreadSheetPage = SpreadsheetApp.openByUrl(SHEET_URL);
  var sheet = spreadSheetPage.getSheetByName('[対象シートの名前]');

  return sheet
}