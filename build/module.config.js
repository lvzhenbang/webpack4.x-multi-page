const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =function(isDev) {
  return {
    rules: [
      {
        include: path.resolve(__dirname, '../assets/css/'),
        test: /\.scss$/,
        use: [
          isDev? {
            loader: 'style-loader',
            options: { sourceMap: true }
          } : MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          { 
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './build/'
              }
            }
          },
          { 
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        include: path.resolve(__dirname, '../pages/'),
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        include: path.resolve(__dirname, '../assets/fonts/'),
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
        include: path.resolve(__dirname, '../assets/imgs/base64/'),
        test: /\.(png|jpe?g)$/,
        use: 'url-loader'
      },
      {
        include: path.resolve(__dirname, '../assets/imgs/other/'),
        test: /\.(png|jpe?g)$/,
        use: {
          loader: 'file-loader',
          options: {
            // name: isDev ? '[name].[ext]' : '[name].[hash].[ext]',
            name: '[name].[ext]',
            outputPath: 'assets/imgs/'
          }
        }
      },
      {
        include: path.resolve(__dirname, '../assets/imgs/other/sprites/'),
        test: /\.(png|jpe?g|gif)$/,
        use: {
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
      }
    ]
  }
}
