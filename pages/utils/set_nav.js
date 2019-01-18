// 设置当前导航标记

module.exports = function(num) {
  $('.sj_navbar').each(function(index, item) {
    $(item).find('li').eq(num).addClass('active')
  })
}