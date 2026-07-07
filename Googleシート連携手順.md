# 成績のGoogleスプレッドシート連携 設定手順

受講者がテストを終えると、成績が自動でGoogleスプレッドシートに1行ずつ追加されます。
（設定しなくてもアプリは動作します。その場合は各スマホ内の保存のみです）

## 手順（所要約10分）

1. Googleドライブで新しいスプレッドシートを作成し、名前を「効果測定成績」等にする
2. 1行目に見出しを入力：
   `受講者ID` `日時` `テスト` `得点` `問題数` `正解率` `間違えた問題`
3. メニュー「拡張機能」→「Apps Script」を開く
4. 表示されたエディタに、下のコードを貼り付けて保存

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var p = e.parameter;
  sheet.appendRow([
    p.sid,
    new Date(p.date),
    p.set,
    Number(p.score),
    Number(p.total),
    Number(p.rate) / 100,
    p.wrong
  ]);
  return ContentService.createTextOutput("OK");
}
```

5. 右上「デプロイ」→「新しいデプロイ」→ 種類「ウェブアプリ」
   - 説明：任意（例：効果測定成績受信）
   - 次のユーザーとして実行：**自分**
   - アクセスできるユーザー：**全員**
6. 「デプロイ」を押し、表示された **ウェブアプリのURL**（https://script.google.com/macros/s/～/exec）をコピー
7. アプリの `app.js` の先頭にある
   `const GAS_ENDPOINT = "";`
   の `""` の中にそのURLを貼り付けて保存（GitHub Pagesの場合はファイルを更新してコミット）

## 確認方法

スマホでテストを1回終えると、スプレッドシートに1行追加されます。
反映まで数秒かかることがあります。

## 注意

- URLを知っている人は誰でも書き込みできる仕組みです。シートの「閲覧・編集権限」自体は共有しない限り先生方のみです
- コードを修正して再デプロイした場合は「デプロイを管理」から**同じデプロイを更新**してください（URLが変わらないように）
