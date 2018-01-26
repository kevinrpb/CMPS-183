const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");


const config = {
  entry: ['babel-polyfill', './views/Index.jsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  module: {
    rules: [
      { test: /\.(jsx|js)$/, exclude: /node_modules/ , use: 'babel-loader' },
      { 
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    // new CompressionPlugin({
    //     asset: "[path].gz[query]",
    //     test: /\.(js|jsx)$/,
    // })
  ]
};

module.exports = config;