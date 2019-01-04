'use strict';

const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (mode) => {
  let isDev = mode !== 'production'
  return {
    entry: {
      index: ['./pages/index.js'],
      zjsj: ['./pages/zjsj.js'],
      contactus: ['./pages/contactus.js'],
      recruitment: ['./pages/recruitment.js'],
      newscenter: ['./pages/newscenter.js'],
      ywbk: ['./pages/ywbk.js'],
      shzr: ['./pages/shzr.js'],
      sxy: ['./pages/sxy.js'],
      styleus: ['./pages/styleus.js'],
      other: ['./pages/utils/commons.js', './pages/utils/css.js']
    },
    mode: mode,
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: isDev ? 'assets/js/[name].js' : 'assets/js/[name].[contenthash].js',
      publicPath: isDev ? 'http://localhost:8080/' : 'http://39.105.223.81:8083/'
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
    plugins: [
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'index.html',
        chunks: ['index', 'other'],
        /* page head */
        title: 'index',
        meta: {
          'description': '这是首页',
          'keywords': 'webpack, multi-page, 首页',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
        template: path.resolve(__dirname, 'pages/index.pug'),
        // minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'zjsj.html',
        chunks: ['zjsj', 'other'],
        /* page head */
        title: '走进圣捷',
        meta: {
          'description': '这是 走进圣捷',
          'keywords': 'webpack, multi-page, 走进圣捷',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
        template: path.resolve(__dirname, 'pages/zjsj.pug'),
        // minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'ywbk.html',
        chunks: ['ywbk', 'other'],
        /* page head */
        title: '业务板块',
        meta: {
          'description': '这是 业务板块',
          'keywords': 'webpack, multi-page, 业务板块',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
        template: path.resolve(__dirname, 'pages/ywbk.pug'),
        // minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'newscenter.html',
        chunks: ['newscenter', 'other'],
        /* page head */
        title: '新闻中心',
        meta: {
          'description': '这是新闻中心',
          'keywords': 'webpack, multi-page, 新闻中心',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
        template: path.resolve(__dirname, 'pages/newscenter.pug'),
        minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'shzr.html',
        chunks: ['shzr', 'other'],
        /* page head */
        title: '社会责任',
        meta: {
          'description': '这是社会责任',
          'keywords': 'webpack, multi-page, 社会责任',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
        template: path.resolve(__dirname, 'pages/shzr.pug'),
        minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'sxy.html',
        chunks: ['sxy', 'other'],
        /* page head */
        title: '商学院',
        meta: {
          'description': '这是商学院',
          'keywords': 'webpack, multi-page, 商学院',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
        template: path.resolve(__dirname, 'pages/sxy.pug'),
        minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'contactus.html',
        chunks: ['contactus', 'other'],
        /* page head */
        title: '联系我们',
        meta: {
          'description': '这是 contact-us 页面',
          'keywords': 'webpack, multi-page, contact-us',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
        template: path.resolve(__dirname, 'pages/contactus.pug'),
        minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'recruitment.html',
        chunks: ['recruitment', 'other'],
        /* page head */
        title: '人才招聘',
        meta: {
          'description': '这是 招聘 页面',
          'keywords': 'webpack, multi-page, 招聘',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
        template: path.resolve(__dirname, 'pages/recruitment.pug'),
        minify: true
      }),
      new HtmlWebapckPlugin({
        /* inital page */
        filename: 'styleus.html',
        chunks: ['styleus', 'other'],
        /* page head */
        title: '企业风采',
        meta: {
          'description': '这是 企业风采 页面',
          'keywords': 'webpack, multi-page, 企业风采',
          'author': 'https://github.com/lvzhenbang/'
        },
        favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
        template: path.resolve(__dirname, 'pages/styleus.pug'),
        minify: true
      }),
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
      ]),
      new SpritesmithPlugin({
        src: {
          cwd: path.resolve(__dirname, 'assets/imgs/sprites/aboutus/'),
          glob: '*.png'
        },
        target: {
          image: path.resolve(__dirname, 'assets/imgs/other/aboutus-sprite.png'),
          css: path.resolve(__dirname, 'assets/css/aboutus/aboutus-sprite.scss')
        },
        apiOptions: {
          cssImageRef: '../../imgs/other/aboutus-sprite.png'
        }
      })
    ],
    devtool: 'source-map'
  }
}