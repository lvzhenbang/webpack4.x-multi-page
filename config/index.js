module.exports = {
  host: {
    devUrl: 'http://localhost:8080/', // 开发地址
    deployUrl: 'https://lvzhenbang.github.io/webpack4.x-multi-page/dist/' // 发布地址
  },
  sprites: [ // 准备做雪碧图处理的图片所在目录名称
    'aboutus'
  ],
  dir: ['.', 'index', 'leader', 'news', 'recruit', 'news', 'second', 'style', 'video', 'wealth'], // 优化的图片所在目录名称
  productionGzip: false
}