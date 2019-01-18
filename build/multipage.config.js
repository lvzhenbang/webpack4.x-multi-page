const path = require('path')
let navs = require('../pages/data/nav')
const subnavs = require('../pages/data/subnav')

navs = navs.concat(subnavs)

// entry
let entry = {}
for (let nav of navs) {
  entry[nav.name] = '@pages/' + nav.name + '.js'
}

// make pages
const HtmlWebapckPlugin = require('html-webpack-plugin');
let plugins = [];

for (let nav of navs) {
  plugins.push(new HtmlWebapckPlugin({
    /* inital page */
    filename: nav.name + '.html',
    chunks: ['common', nav.name],
    /* page head */
    title: nav.text,
    meta: nav.meta,
    favicon: path.resolve(__dirname, '../assets/favicon.jpg'),
    template: path.resolve(__dirname, '../pages/' + nav.name + '.pug'),
    minify: true
  }))
}

// sprites 
const SpritesmithPlugin = require('webpack-spritesmith');
const sprites = require('../config/index.js').sprites;

for(let sprite of sprites) {
  plugins.push(new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, '../assets/imgs/sprites/' + sprite + '/'),
      glob: '*.png'
    },
    target: {
      image: path.resolve(__dirname, '../assets/imgs/other/sprites/' + sprite + '-sprite.png'),
      css: path.resolve(__dirname, '../assets/css/' + sprite + '/' + sprite + '-sprite.scss')
    },
    apiOptions: {
      cssImageRef: '../../imgs/other/sprites/' + sprite + '-sprite.png'
    }
  }))
}

module.exports = {
  entry,
  plugins
}