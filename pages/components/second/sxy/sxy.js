var path = require('path')

function loadImg(str) {
  return path.join(__dirname, 'assets/imgs/other/' + str)
}


module.exports = {
  school: [
    {
      title: '',
      content: [
        {
          type: 'text',
          text: '由圣捷集团董事长高伟伟女士发起成立，这里汇集有清华、北大、南开、首经贸、中科院等知名学府导师，各路金融大咖，投资大佬，旨在通过对中国新经济转型的大环境宏观经济走向研究，相关政策解读，独家经济观点分享。'
        },
        {
          type: 'img',
          width: '',
          hieght: '',
          alt: '圣捷商学院',
          src: loadImg('second/ywbk-culture-sj.jpg'),
          infl: '【2018年5月18日，圣捷集团——信可贷三周年庆典上，“圣捷商学院”揭牌仪式。】'
        },
        {
          type: 'text',
          text: '作为公司培训体系的管理机构与实施平台、整合内外部的培训资源，公司希望通过商学院的设立：为企业培养优秀员工，为行业培养专业人才。为互联网金融行业的企业发展提供指导，规范公司发展，整合行业资源，让同业公司更加互联互通。为互联网行业发展提供基础理论，谱写互联网行业的教科书。通过商学院的培训，传播精信文化价值观，增强企业凝聚力，实现圣捷集团“以人为本、以能为本”的人才战略理念。'
        }
      ]
    }
  ],
  celebrites: [
    {
      title: '',
      content: [
        {
          type: 'card',
          left: {
            width: '',
            height: '',
            alt: '',
            src: loadImg('leader/魏凤春.png')
          },
          right: {
            name: '魏凤春',
            list: [
              {
                type: 'text',
                text: '博时基金首席宏观策略分析师'
              },
              {
                type: 'text',
                text: '博时基金投委会委员兼秘书长'
              },
              {
                type: 'text',
                text: '南开大学经济学博士，清华大学管理科学与工程博士后'
              },
              {
                type: 'text',
                text: '博时基金博士后工作站导师'
              },
              {
                type: 'text',
                text: '清华大学金融硕士导师、天津财大客座教授'
              },
              {
                type: 'text',
                text: 'CCTV2市场分析师特邀评论员。'
              }
            ]
          }
        },
        {
          type: 'card',
          left: {
            width: '',
            height: '',
            alt: '乐麒麟',
            src: loadImg('leader/乐麒麟.png')
          },
          right: {
            name: '易名：乐麒麟',
            list: [
              {
                type: 'text',
                text: '出生年份：1983年'
              },
              {
                type: 'text',
                text: '师承：儒易派'
              },
              {
                type: 'text',
                text: '2005年至今从事周易文化研习至今13年，客观论证宗教文化和迷信学说的区别，对当代社会人文，管理，理财，修养，营销等诸多领域以天人合一，遵循自然法则的观念服务社会，回馈社会！'
              }
            ]
          }
        },
        {
          type: 'card',
          left: {
            width: '',
            height: '',
            alt: '高伟伟',
            src: loadImg('leader/高伟伟.png')
          },
          right: {
            name: '高伟伟',
            list: [
              {
                type: 'text',
                text: '圣捷集团创始人兼董事长'
              },
              {
                type: 'text',
                text: '圣捷商学院创办人'
              },
              {
                type: 'text',
                text: '北京河南商会副会长'
              },
              {
                type: 'text',
                text: '北京市朝阳区女企业家协会副会长'
              },
              {
                type: 'text',
                text: '北京大学汇丰商学院金融学硕士学位'
              },
              {
                type: 'text',
                text: '在财富管理团队运营管理方面有着丰富的经验。首创“三角”经营策略，从管理方式、理财团队、风控体系整体把控圣捷集团，使集团健康发展。'
              }
            ]
          }
        },
        {
          type: 'card',
          left: {
            width: '',
            height: '',
            alt: '王啸斌',
            src: loadImg('leader/王啸斌.png')
          },
          right: {
            name: '王啸斌',
            list: [
              {
                type: 'text',
                text: '圣捷集团通州分公司总经理'
              },
              {
                type: 'text',
                text: '首都经济贸易大学校友导师'
              },
              {
                type: 'text',
                text: '曾就职于宜信，原建元集团旗下金融板块总经理，原百合贷北京大区总经理、股东及战略合伙人。'
              },
              {
                type: 'text',
                text: ' 现为首都经济贸易大学校友企业导师，向上文化传媒创始人，客域家诚科技创始人，信可贷联合创始人。'
              }
            ]
          }
        }
      ]
    }
  ],
  classroom: [
    {
      title: '',
      content: [
        {
          type: 'link',
          link: {
            name: '圣捷商学院第一期',
            href: 'https://mp.weixin.qq.com/s/KXpXmDTs4oSR5wFdidHkcA'
          }
        },
        {
          type: 'link',
          link: {
            name: '圣捷商学院第二期',
            href: 'https://mp.weixin.qq.com/s/TopjOQ_mE4dostPWk5E0oQ'
          }
        },
        {
          type: 'link',
          link: {
            name: '圣捷商学院第三期',
            href: ''
          }
        },
        {
          type: 'link',
          link: {
            name: '圣捷商学院第四期',
            href: 'https://mp.weixin.qq.com/s/jj56pk2Zjf7X9-fNTYpXvg'
          }
        }
      ]
    }
  ]
}