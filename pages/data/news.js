const loadImg = require('@utils/load-img')

module.exports = {
  cn_name: '新闻中心',
  en_name: 'NEWS CENTER',
  types: [
    {
      name: '集团动态',
      type: '1'
    },
    {
      name: '新闻聚焦',
      type: '2'
    }
  ],
  list: [
    {
      href: 'http://news.sina.com.cn/o/2018-09-22/doc-ihkhfqnt6074172.shtml',
      img: loadImg('news/2-2.jpg'),
      type: '2',
      title: '首批25家银行进网贷平台存管“白名单”',
      date: '2018-09-22',
      desc: '9月20日晚，全国互联网金融登记披露服务平台（中国互联网金融协会）刊登北京银行、民生银行、招商银行等25家银行发布的“关于个体网络借贷资金存管系统通过测评声明”，网贷平台及网贷出借人期盼已久的存管银行白名单正式披露...'
    },
    {
      href: 'https://mp.weixin.qq.com/s/H4Jd9o3zsfo6MCbydNXXYw',
      img: loadImg('news/1-2.jpg'),
      type: '1',
      title: '情系困境儿童 圣捷集团公益在行动',
      date: '2018-06-07',
      desc: '儿童是祖国的花朵和未来，他们代表着民族的希望。梁启超先生曾经说过:“少年智则国智,少年富则国富,少年强则国强,少年独立则国独立....”，我国历届国家领导人对于儿童的发展都十分关心，并对他们寄予了厚望...'
    },
    {
      href: 'https://mp.weixin.qq.com/s/YkOdVMjfbS6qbHXz8VGU9g',
      img: loadImg('news/1-4.jpg'),
      type: '1',
      title: '热烈庆祝圣捷集团荣获“北京市朝阳区女企业家协会副会长单位”称号！！',
      date: '2018-06-05',
      desc: '2018年6月5日上午，“聚力文化发展，助梦健康中国”——北京市朝阳区女企业家协会第二届七次理事会在京召开。协会理事吴丽敏、黄敏、周秀玲等重要领导参加会议。同时圣捷集团董事长高伟伟作为优秀的女企业家代表应邀出席了会议...'
    },
    {
      href: 'https://mp.weixin.qq.com/s/hGAUqmjsRqUs5sEJD-pU_Q',
      img: loadImg('news/1-1.jpg'),
      type: '1',
      title: '“芳华三载，感谢有你”信可贷三周年庆典圆满举行',
      date: '2018-05-18',
      desc: '2018年5月18日，信可贷三周年庆典仪式在东城区励骏酒店顺利举行。圣捷集团董事长高伟伟、圣捷集团资产端副总裁尤相举、圣捷集团运营副总裁杨航、圣捷集团财富端副总裁王啸斌、圣捷集团三里屯分公司副总姬亚兰、圣捷集...'
    },
    {
      href: 'https://mp.weixin.qq.com/s/KXpXmDTs4oSR5wFdidHkcA',
      img: loadImg('news/1-3.jpg'),
      type: '1',
      title: '圣捷商学院首次金融讲座会圆满成功！',
      date: '2018-03-28',
      desc: '2018两会过后，我国经济将迈向高质量发展阶段。外围经济的交错复苏，中国经济的平稳演变，为我们由急到缓协同推进“经济改革——金融开放”创造了极好的时间窗口。经济新常态下我国经济增长由高速增长转向“低波动、有韧性”...'
    },
    {
      href: 'http://www.sohu.com/a/248977352_100175039',
      img: loadImg('news/2-3.jpg'),
      type: '2',
      title: '108条网贷检查清单出炉',
      date: '2018-08-20',
      desc: '近日全国P2P网络借贷风险专项整治工作领导小组办公室向各省市网贷整治办下发了《关于开展P2P网络借贷机构合规检查工作的通知》（以下称《通知》）及《问题清单》，《问题清单》共分为六大部分，有108条。本次合规检查要求...'
    },
    {
      href: 'https://mp.weixin.qq.com/s/n9ARHMTbpCj2Mr58miN5Nw',
      img: loadImg('news/2-1.jpg'),
      type: '2',
      title: '北京市互联网金融行业协会发声：齐心协力、防控风险、健康发展！',
      date: '2018-05-18',
      desc: '近日，北京市互联网金融行业协会发声，号召各个成员单位齐心协力、防控风险、健康发展。目前行业的问题是短期的流动性风险和个别主体的信用风险，行业发展并不会受到太大影响。而在这个良币驱逐劣币的阶段，市场的信心恢复...'
    }
  ]
}