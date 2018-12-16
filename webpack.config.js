'use strict';

const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');

module.exports = mode => {
  let filename = mode === 'development' ? '[name].js':'[name].min.js'
  return {
    "entry": {
      index: ['./src/index.js', './src/utils/load.js'],
      aboutUs: ['./src/aboutUs.js'],
      contactUs: ['./src/contactUs.js','./src/utils/load.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: filename,
      publicPath: ''
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        minSize: 40
      }
    },
    plugins: [
      new HtmlWebapckPlugin({
        filename: 'index.html',
        chunks: ['index']
      }),
      new HtmlWebapckPlugin({
        filename: 'aboutUs.html',
        chunks: ['aboutUs']
      }),
      new HtmlWebapckPlugin({
        filename: 'contactUs.html',
        chunks: ['contactUs']
      }),
    ],
    devtool: 'source-map'
  };
} 
  
