const loadImg = require('@utils/load-img')

module.exports = {
  cn_name: '金融产品',
  en_name: 'PRODUCT',
  list: [
    {
      cn_name: '信用贷款',
      en_name: 'CREDIT LOANS',
      href: 'sj-wealth.html',
      img: loadImg('index/sj-xydk.jpg')
    }, {
      cn_name: '抵押贷款',
      en_name: 'MORTGAGE LOANS',
      href: 'sj-wealth.html',
      img: loadImg('index/sj-dydk.jpg')
    }, {
      cn_name: '企业经营贷款',
      en_name: 'BUSINESS LOANS',
      href: 'sj-wealth.html',
      img: loadImg('index/sj-qyjydk.jpg')
    }, {
      cn_name: '个人消费贷款',
      en_name: 'CONSUMPTION LOANS',
      href: 'sj-wealth.html',
      img: loadImg('index/sj-grxfdk.jpg')
    }  
  ]
}