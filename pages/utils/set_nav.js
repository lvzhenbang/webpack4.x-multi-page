// 设置当前导航标记

module.exports = function(num) {
  $('.sj_navbar').each(function(index, item) {
    console.log(num)
    $(item).find('li').eq(num).addClass('active')
  })
}