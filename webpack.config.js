'use strict';

const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  "entry": {
    index: ['./src/index.js', './src/utils/load.js'],
    aboutUs: ['./src/aboutUs.js'],
    contactUs: ['./src/contactUs.js','./src/utils/load.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebapckPlugin({
      /* inital page */
      filename: 'index.html',
      chunks: ['index'],
      /* page head */
      title: 'index',
      meta: {
        'description': '这是首页',
        'keywords': 'webpack, multi-page, 首页',
        'author': 'https://github.com/lvzhenbang/'
      },
      favicon: './assets/19884132.jpg'
    }),
    new HtmlWebapckPlugin({
      /* inital page */
      filename: 'aboutUs.html',
      chunks: ['aboutUs'],
      /* page head */
      title: 'index',
      meta: {
        'description': '这是 about-us 页面',
        'keywords': 'webpack, multi-page, about-us',
        'author': 'https://github.com/lvzhenbang/'
      },
      favicon: './assets/19884132.jpg'
    }),
    new HtmlWebapckPlugin({
      /* inital page */
      filename: 'contactUs.html',
      chunks: ['contactUs'],
      /* page head */
      title: 'index',
      meta: {
        'description': '这是 contact-us 页面',
        'keywords': 'webpack, multi-page, contact-us',
        'author': 'https://github.com/lvzhenbang/'
      },
      favicon: './assets/19884132.jpg'
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'source-map'
} 
  
