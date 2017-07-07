[![Build Status](https://travis-ci.org/LancersDevTeam/react-payjp-checkout.svg?branch=master)](https://travis-ci.org/LancersDevTeam/react-payjp-checkout)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

# react-payjp-checkout

[PAY.JP](https://pay.jp/) の [checkout](https://pay.jp/docs/checkout) を React アプリで使うためのワークアラウンドを詰め込んだ、React コンポーネントです。詳細は、Qiita の記事として公開しています。

- [PAY.JP の Checkout 用の React.js コンポーネントをつくってみた](http://qiita.com/mori-dev@github/items/476a51eb8d76019fb647)

## インストール方法

```
npm install --save react-payjp-checkout
```

## 使用方法

```
import PayjpCheckout from 'react-payjp-checkout';

class App extends Component {
    render() {
        const payjpCheckoutProps = {
            ...
        }
        return (
            <PayjpCheckout {...payjpCheckoutProps} />
        )
```

examples 以下のコードで動作を確認できます。

## 開発に参加する方法

ソースコードのコメント、GitHub のイシューやプルリクエストでは、日本語か英語を使用して下さい。

### セットアップ

```
npm install --global yarn
yarn install
yarn build
```

### サンプルアプリを起動する

`yarn start` して、ブラウザで `http://localhost:8080/` を閲覧します。

### テストを実行する

```
yarn test
```

## ライセンス

MIT

## 作者

Kazuhiko Mori (mori.dev.asdf@gmail.com)
