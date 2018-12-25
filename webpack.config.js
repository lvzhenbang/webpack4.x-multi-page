'use strict';

const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = (mode) => {
  let isDev = mode !== 'production'
  // console.log(isDev)
  return {
    'entry': {
      index: ['./src/index.js', './src/css.js'],
      aboutUs: ['./src/aboutUs.js', './src/css.js'],
      contactUs: ['./src/contactUs.js', './src/css.js'],
      recruitment: ['./src/recruitment.js', './src/css.js']
    },
    mode: mode,
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: isDev ? 'static/js/[name].js' : 'static/js/[name].[contenthash].js',
      publicPath: isDev ? 'http://localhost:8080/' : 'http://localhost:8083/'
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
      commonjs: 'jquery',
      amd: 'jquery',
      root: '$'
    },
    module: {
      rules: [
        {
          include: path.resolve(__dirname, 'src/assets/css/'),
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          include: path.resolve(__dirname, 'src/pages/'),
          test: /\.pug$/,
          loader: 'pug-loader'
        },
        {
          include: path.resolve(__dirname, 'src/assets/imgs/base64/'),
          test: /\.(png|jpe?g)$/,
          use: [{
            loader: 'url-loader',
            // options: {
            //   limit: 30720 // 30kb
            // }
          }]
        },
        {
          include: path.resolve(__dirname, 'src/assets/imgs/other/'),
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isDev ? '[name].[ext]' : '[name].[hash].[ext]',
                outputPath: 'static/imgs/'
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
        favicon: path.resolve(__dirname, 'src/assets/favicon.jpg'),
        template: path.resolve(__dirname, 'src/pages/template.pug'),
        // minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'aboutUs.html',
        chunks: ['aboutUs'],
        /* page head */
        title: 'aboutus',
        meta: {
          'description': '这是 about-us 页面',
          'keywords': 'webpack, multi-page, about-us',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'src/assets/favicon.jpg'),
        template: path.resolve(__dirname, 'src/pages/template.pug'),
        minify: true
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
        favicon: path.resolve(__dirname, 'src/assets/favicon.jpg'),
        template: path.resolve(__dirname, 'src/pages/template.pug'),
        minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'recruitment.html',
        chunks: ['recruitment'],
        /* page head */
        title: 'recruitment',
        meta: {
          'description': '这是 招聘 页面',
          'keywords': 'webpack, multi-page, 招聘',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'src/assets/favicon.jpg'),
        template: path.resolve(__dirname, 'src/pages/recruitment.pug'),
        minify: true
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? 'static/css/[name].css' : 'static/css/[name].[hcontentash].css',
        chunkFilename: isDev ? 'static/css/[id].css' : 'static/css/[id].[contenthash].css'
      }),
      new SpritesmithPlugin({
        src: {
            cwd: path.resolve(__dirname, 'src/assets/imgs/sprites/productus/'),
            glob: '*.png'
        },
        target: {
          image: path.resolve(__dirname, 'src/assets/imgs/other/productus-sprite.png'),
          css: path.resolve(__dirname, 'src/assets/css/productus/productus-sprite.scss')
        },
        apiOptions: {
          cssImageRef: '../../imgs/other/productus-sprite.png'
        }
      })
    ],
    devtool: 'source-map'
  }
}
  
