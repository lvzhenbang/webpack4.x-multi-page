'use strict';

const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const multipage = require('./multipage.config')

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
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        minSize: 40
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    externals: {
      jquery: 'jQuery',
      BMap: 'BMap'
    },
    module: {
      rules: [
        {
          include: path.resolve(__dirname, 'assets/css/'),
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          include: path.resolve(__dirname, 'pages/'),
          test: /\.pug$/,
          loader: 'pug-loader'
        },
        {
          include: path.resolve(__dirname, 'assets/fonts/'),
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 10000,
              name:  isDev ? '[name].[ext]' : '[name].[hash].[ext]',
              outputPath: 'assets/fonts/'
            }
          }]
        },
        {
          include: path.resolve(__dirname, 'assets/imgs/base64/'),
          test: /\.(png|jpe?g)$/,
          use: [{
            loader: 'url-loader',
            // options: {
            //   limit: 30720 // 30kb
            // }
          }]
        },
        {
          include: path.resolve(__dirname, 'assets/imgs/other/'),
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isDev ? '[name].[ext]' : '[name].[hash].[ext]',
                outputPath: 'assets/imgs/'
              }
            }, {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                }
              }
            }
          ]
        }
      ]
    },
    plugins: plugins.concat([
      new MiniCssExtractPlugin({
        filename: isDev ? 'assets/css/[name].css' : 'assets/css/[name].[contenthash].css',
        chunkFilename: isDev ? 'assets/css/[id].css' : 'assets/css/[id].[contenthash].css'
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'assets/imgs/other/'),
          to: path.resolve(__dirname, 'dist/assets/imgs/other/'),
          ignore: ['.*']
        }
      ])
    ]),
    devtool: 'source-map'
  }
}