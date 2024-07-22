# <div align="center">Fantaisie Documents</div>

このリポジトリは、サーバーに関する内部情報等を運営用にまとめたドキュメントです。<br>
このリポジトリのコンテンツは [docs.tensyoserver.net](https://docs.tensyoserver.net/) に公開され、閲覧することができます。<br>
このドキュメントは運営用に作成しているため、質問・意見等は受け付けていません。

## 使用方法

開発用にローカルマシンでドキュメントを実行する方法

### 前提条件

- [node](https://nodejs.org)
- [pnpm](https://pnpm.io/installation)

### 開発方法

1. このドキュメントをクローンする、もし要素を追加したい場合はフォークしたリポジトリをクローンしよう！

```bash
$ git clone https://github.com/FantaisieMinecraftServer/documents
```

2. 必要な依存関係をすべてインストール

```bash
$ pnpm install
```

3. 開発用サーバーを起動

```bash
$ pnpm run start
```

これで開発用のサーバーが起動して開発ができるようになります。

### ビルド

```bash
$ pnpm run build
```

このコマンドは、`build` ディレクトリに本番環境用のデプロイメントをビルドします。
これらのファイルはディレクトリに構築されます。

## ライセンス

このドキュメント (`/docs` フォルダ内の `.md` ファイル等) は [CC-BY-SA-4.0](LICENSE-docs)

ドキュメントを作成しているツールは[Docusaurus](https://github.com/facebook/docusaurus)を使用しています。
