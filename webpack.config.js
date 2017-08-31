var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = '';


module.exports = {
    // starting point
    entry: "./app/index.js",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath:'/dist'
    },
    module: {
      rules: [
          {
            "exclude": "/node_modules/",
            "include": __dirname + "/app/",
            "loader": "babel-loader",
            "options": {
              "presets": ["env", "react"]
            },
            "test": /\.jsx?$/
          },
          {
            "exclude": "/node_modules/",
            "include": __dirname + "/app/",
            "loader": "babel-loader",
            "options": {
              "presets": ["env"]
            },
            "test": /\.js?$/
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
