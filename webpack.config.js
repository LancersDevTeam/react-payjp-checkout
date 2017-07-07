'use strict';
const path = require('path');
const webpack = require('webpack');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        configFile: path.resolve(__dirname, '.eslintrc.yaml'),
                        fix: true,
                    }
                }],
                enforce: 'pre',
                include: [ path.resolve(__dirname, 'src') ],
                exclude: [ /node_modules/, /test/, /examples/ ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    entry: [path.resolve(__dirname, 'src/payjp_checkout.js')],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'payjp_checkout.js',
        library: 'react-payjp-checkout',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new FlowStatusWebpackPlugin({
            binaryPath: path.resolve(__dirname, 'node_modules/.bin/flow'),
            failOnError: true,
        }),
        new UglifyJsPlugin({ minimize: true })
    ]
};
