# google-apps-script-sample

Google Apps Script で よく利用する処理の雛形のソースコードをアップロード

- V8ランタイム前提でのソースコードを予定
- 変更が必要な部分に関して、なるべく __// TODO:__ を記載しています

## SpreadSheet

SpreadSheetにある情報を取得したり、更新したりする処理の雛形

### 特徴

- SpreadSheet自体は、1行目はテーブルヘッダとしてカラム名を記述している前提
- 1行1行をModelとして考え、スクリプト内ではclassとして定義している
- resolveAll,resolveByRowNumber,storeAll,storeByRowNumberを準備

## ご了承ください

動作自体を保証するものではございません。ご自身の準備する環境や処理にの参考程度にご利用ください。

## その他

何かあればご一報ください。[Yuto Hongo Portfolio](https://hongo.dev/)
