const path = require('path')
let navs = require('./pages/data/nav')
const subnavs = require('./pages/data/subnav')

navs = navs.concat(subnavs)

// entry
let entry = {}
for (let nav of navs) {
  entry[nav.name] = './pages/' + nav.name + '.js'
}

// commons css/js
entry.other = ['./pages/utils/commons.js', './pages/utils/css.js']

// make pages
const HtmlWebapckPlugin = require('html-webpack-plugin');
let plugins = []
for (let nav of navs) {
  plugins.push(new HtmlWebapckPlugin({
    /* inital page */
    filename: nav.name + '.html',
    chunks: [nav.name, 'other'],
    /* page head */
    title: nav.text,
    meta: nav.meta,
    favicon: path.resolve(__dirname, 'assets/favicon.jpg'),
    template: path.resolve(__dirname, 'pages/' + nav.name + '.pug'),
    minify: true
  }))
}

// sprites 
const SpritesmithPlugin = require('webpack-spritesmith');
const sprites = require('./pages/utils/sprites')

for(let sprite of sprites) {
  plugins.push(new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, 'assets/imgs/sprites/' + sprite + '/'),
      glob: '*.png'
    },
    target: {
      image: path.resolve(__dirname, 'assets/imgs/other/' + sprite + '-sprite.png'),
      css: path.resolve(__dirname, 'assets/css/' + sprite + '/' + sprite + '-sprite.scss')
    },
    apiOptions: {
      cssImageRef: '../../imgs/other/' + sprite + '-sprite.png'
    }
  }))
}


module.exports = {
  entry,
  plugins
}