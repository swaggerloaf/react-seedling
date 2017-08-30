var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    // starting point
    entry: "./app/index.js",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath:'/dist'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/app/!html'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }
        ]
    },
    context: __dirname,
    plugins: [
     new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
    })
    ],
    devtool: "source-map",
    devServer: {
    hot: false,
    port: 8080
  }
}
