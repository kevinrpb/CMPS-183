const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
   filename: 'styles.css'
});

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
        use: extractPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    extractPlugin,
    // new CompressionPlugin({
    //     asset: "[path].gz[query]",
    //     test: /\.(js|jsx)$/,
    // })
  ]
};

module.exports = config;