# はじめに

このレポジトリは技術書典12で配布した書籍「[TypeScriptで始める Serverless入門](https://techbookfest.org/product/6282121133948928)」のサンプルコードです。

# 要件

本ソースコードは以下のバージョンのServerlessで動作します。

• serverless 2.23.0

• @serverless/typescript: 2.23.0

# 本文とソースコードの対応
本文のソースコードは以下のコミットに対応しています。

2章 Serverless プロジェクトの立ち
上げ
- 2.0.1 Serverless のインストール
  - [パッケージのインストール](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/649b7cb98165f00cb8908a1294359b26e4cf32fb)
  - [.gitignoreの追加](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/5349df4d0a4158920f53620a6d2c5637dcfc6284)
- 2.2 Serverlessのローカル実行
  - [Serverless Offlineの追加](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/60f8a2d3506f5a45040d031623cd68aa1b4e3619)

3章 ServerlessのAWSへのデプロイ
- [東京リージョンの追加](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/c029fb0a58547caa41fd8df57e75e714c6c5c614)

4章 Serverless で DynamoDB を
使ってみよう
- 4.1 DynamoDB をローカルで動かす
  - [DynamoDBの設定](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/b2f2d49504676e32160357028189205e541d2d77)
- 4.2 AWS で DynamoDB にアクセス
  - [AWSでDynamoDBを動かすための設定](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/7d79105f3d881ea21cad4571604f837204ad6024)

5章　新しいルートを作ってみよう
- [独自ルートの追加](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/111bd313988a69c34a0e421c21276056c64adb22)

6章 Serverless のバリデーション処理
を作ってみよう
- [バリデーション処理を追加](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/d881c4a3c9d0d5f650a2ec0e42a0f892c6743e89)

7章 Serverless とつながるフロントを
React で作ってみよう!
- [フロントのコード追加](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/c5c364655a2f01b5d7dc32ba1e539387784f06fb)
- [フロントからのAPIアクセスを実装](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/7750fc07926c5fef2e87b8f48977eb78ea679712)

8章 Open API を利用した API クライ
アントの自動生成
- [OpenAPIを利用してフロントのコードを修正](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/29c386e3ba3c433bd8d4a2b74a09078d3fc0a123)

9章 Vercel に実際にデプロイして、無
料で始める個人開発を始めよう!
- [Vercelの設定ファイルを追加](https://github.com/yassun-youtube/ServerlessStartGuideWithTypeScript/commit/231b07d0298add75dc4d06b42f5c3aed3d741a11)
