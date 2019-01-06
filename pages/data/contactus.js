const loadImg = require('@utils/load-img')

module.exports = {
  cn_name: '联系我们',
  en_name: 'CONTACT US',
  img: loadImg('second/contactus-tag.png'),
  company: {
    img: loadImg('second/conatctus-logo.png'),
    alt: 'logo',
    name: '圣捷集团'
  },
  list: [
    {
      img: loadImg('second/contactus-circle-01.png'),
      text: '圣捷集团一直致力于为高净值客户提供全球化多视角的财富管理、生活健康管理服务。服务领域涵盖财富管理、健康管理、品质消费等。'
    },
    {
      img: loadImg('second/contactus-circle-01.png'),
      text: '联系方式：400-075-2006'
    },
    {
      img: loadImg('second/sj-location.png'),
      text: '北京·高碑店西店村义安门46号楼110'
    },
    {
      img: loadImg('second/contactus-circle-02.png'),
      text: '邮政编码：100000'
    }
  ],
  qr_list: [
    {
      img: loadImg('second/contactus-qr-sj.png'),
      alt: '公众号',
      name: '圣捷投资',
      qname: '官方公众号'
    },
    {
      img: loadImg('second/contactus-qr-xkd.png'),
      alt: '公众号',
      name: '信可智投',
      qname: '官方公众号'
    },
    {
      img: loadImg('second/contactus-qr-ys.png'),
      alt: '公众号',
      name: '御膳私厨',
      qname: '官方公众号'
    },
    {
      img: loadImg('second/contactus-qr-sr.jpg'),
      alt: '公众号',
      name: '诗冉',
      qname: '官方公众号'
    }
  ]
}