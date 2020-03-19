/**
 * SpreadSheetの情報を取得/編集する処理
 */

/**
 * 情報をすべてModelとして取得する
 */
function _modelRepository_resolveAll(sheet) {

  var startRow = 2 // 1行目がテーブルヘッダ
  var startCol = 1
  var lastRow = sheet.getLastRow()
  var numRows = lastRow - 1 // 1行目がテーブルヘッダ
  var lastCol = sheet.getLastColumn()

  // まだ情報がない場合
  if (numRows === 0) return []

  // TODO:必要なカラムに応じて準備
  var sheetDatas = sheet.getSheetValues(startRow, startCol, numRows, lastCol)
  return sheetDatas.map(sheetRow => new _Model(sheetRow[0], sheetRow[1], sheetRow[2], sheetRow[3]))
}

/**
 * 上から○○番目のデータをModelとして取得
 */
function _modelRepository_resolveByRowNumber(sheet, rowNumber) {

  var startRow = rowNumber + 1 // 1行目がテーブルヘッダ
  var startCol = 1
  var numRows = 1
  var lastCol = sheet.getLastColumn()

  // TODO:必要なカラムに応じて準備
  var sheetDatas = sheet.getSheetValues(startRow, startCol, numRows, lastCol);
  var models = sheetDatas.map(sheetRow => new _Model(sheetRow[0], sheetRow[1], sheetRow[2], sheetRow[3]))
  return models[0]

}

/**
 * すべてのModelをSpreadSheetに保存する
 */
function _modelRepository_storeAll(sheet, models) {

  var startRow = 2 // 1行目がテーブルヘッダ
  var startCol = 1
  var numRows = models.length
  var lastCol = sheet.getLastColumn()

  var updateSheetRange = sheet.getRange(startRow, startCol, numRows, lastCol)
  var sheetRows = models.map(model => { return model.sheetRow })
  updateSheetRange.setValues(sheetRows)
}

/**
 * 上から○○番目にModelの情報を保存する
 */

function _modelRepository_storeByRowNumber(sheet, rowNumber, model) {

  var startRow = rowNumber + 1 // 1行目がテーブルヘッダ
  var startCol = 1
  var numRows = 1
  var lastCol = sheet.getLastColumn()

  var updateSheetRange = sheet.getRange(startRow, startCol, numRows, lastCol)
  var sheetRows = [model.sheetRow]
  updateSheetRange.setValues(sheetRows)

}