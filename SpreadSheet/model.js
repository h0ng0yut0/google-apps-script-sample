/**
 * SpreadSheetの1行を表したModelの準備
 */
class _Model {
  // TODO:必要なカラムに応じて準備
  constructor(
    column1,
    column2,
    column3,
    column4
  ) {
    this.column1 = column1
    this.column2 = column2
    this.column3 = column3
    this.column4 = column4
    this.sheetRow = [
      column1,
      column2,
      column3,
      column4,
    ]
  }
}