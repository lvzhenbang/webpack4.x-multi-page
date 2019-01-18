'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SpritesmithPlugin = require('webpack-spritesmith');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const multipage = require('./multipage.config.js');
const Module = require('./module.config.js')

let config = {
  devUrl: 'http://localhost:8080/',
  deployUrl: 'http://39.105.223.81:8083/'
}

let entry = multipage.entry,
    plugins = multipage.plugins

module.exports = (mode) => {
  let isDev = mode !== 'production'
  return {
    entry: entry,
    mode: mode,
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: isDev ? 'assets/js/[name].js' : 'assets/js/[name].[contenthash].js',
      publicPath: isDev ? config.devUrl : config.deployUrl
    },
    devServer: {
      open: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          commons: {
              name: 'commons',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0
          }
        }
      }
    },
    externals: {
      jquery: 'jQuery',
      BMap: 'BMap'
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, '..', 'pages/'),
        '@css': path.join(__dirname, 'assets/css/'),
        '@img': path.join(__dirname, 'assets/imgs/'),
        // '@font': path.join(__dirname, 'assets/fonts/'),
        '@data': path.join(__dirname, 'pages/data/'),
        '@utils': path.join(__dirname, 'pages/utils/')
      }
    }, 
    module: Module(isDev),
    plugins: plugins.concat(
      [
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].[contenthash].css',
          chunkFilename: 'assets/css/[id].[contenthash].css'
        }),
        new OptimizeCSSAssetsPlugin({})
    ]),
    devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  }
}