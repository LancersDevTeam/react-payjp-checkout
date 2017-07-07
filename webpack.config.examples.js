'use strict';
const path = require('path');
const webpack = require('webpack');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

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
                include: [ path.resolve(__dirname, 'src'), path.resolve(__dirname, 'examples') ],
                exclude: [ /node_modules/, /test/ ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    entry: {
        'simple': './examples/simple/index.js',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].bundle.js',
        publicPath: '/build'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'shared',
            filename: 'shared.js',
        }),
        new FlowStatusWebpackPlugin({
            binaryPath: path.resolve(__dirname, 'node_modules/.bin/flow'),
            failOnError: true,
        })
    ]
};
