module.exports = {
  host: {
    devUrl: 'http://localhost:8080/', // 开发地址
    deployUrl: 'http://39.105.223.81:8083/' // 发布地址
  },
  sprites: [ // 准备做雪碧图处理的图片所在目录名称
    'aboutus'
  ],
  dir: ['.', 'index', 'leader', 'news', 'recruit', 'news', 'second', 'style', 'video', 'wealth'], // 优化的图片所在目录名称
  productionGzip: false
}