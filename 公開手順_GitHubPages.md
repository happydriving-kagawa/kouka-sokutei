# GitHub Pagesでの公開手順（無料・約15分）

教習生がスマホのQRコード読み取りやURLタップで開ける形にします。
GitHubのアカウントが必要です（無料）。

## 1. アカウント作成（お持ちでない場合）

1. https://github.com/signup をパソコンで開く
2. メールアドレス・パスワード・ユーザー名（例：happydriving-kagawa）を登録
   ※ユーザー名は公開URLの一部になります

## 2. リポジトリ（保管場所）の作成

1. ログイン後、右上の「＋」→「New repository」
2. Repository name：`kouka-sokutei`（任意。URLの一部になります）
3. 「Public」を選択 →「Create repository」

## 3. ファイルのアップロード

1. 作成したリポジトリの画面で「uploading an existing file」のリンクをクリック
2. `webapp` フォルダの中身をすべてドラッグ＆ドロップ
   - index.html / style.css / app.js / data.js
   - imagesフォルダ（中の画像25枚ごと）
   ※フォルダごとドラッグすればimagesも一緒に上がります
3. 下の「Commit changes」ボタンを押す

## 4. 公開設定（GitHub Pages）

1. リポジトリの「Settings」タブ →左メニュー「Pages」
2. 「Source」を「Deploy from a branch」、Branchを「main」/「(root)」にして「Save」
3. 1〜2分待つと上部に公開URLが表示されます：
   `https://ユーザー名.github.io/kouka-sokutei/`

## 5. 教習生への配布

- 上記URLをQRコード化して教室掲示・配布資料に印刷するのが便利です
  （QRコード作成は https://m.qrqrq.com/ など無料サービスで可能）
- スマホのブラウザで開くだけで利用できます。アプリのインストールは不要です

## 更新するとき（問題追加・翻訳修正など）

1. リポジトリでファイル（例：data.js）を開く→鉛筆マーク（Edit）
2. 修正して「Commit changes」→1〜2分で公開ページに反映

## 補足

- 公開URLを知っていれば誰でも閲覧できます。問題文・解説は公開情報になる点だけご留意ください
  （受講者の成績はページ上には公開されません。各端末とGoogleシートにのみ保存されます）
- Googleシート連携を使う場合は、同梱「Googleシート連携手順.md」の設定後に
  app.jsを更新（上記「更新するとき」の手順）してください
