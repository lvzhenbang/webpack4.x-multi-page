// 设置当前导航标记
$('.sj_navbar').each(function(index, item) {
  $(item).find('li').eq(7).addClass('active')
})

// collapse
$('.sj_table-tr').find('.sj_arrow-more').on('click', function() {
  var rootSiblings = $(this).parent().parent().siblings()
  rootSiblings.find('.sj_arrow-more').removeClass('active')
  rootSiblings.find('.sj_table-details').slideUp()
  
  $(this).addClass('active').parent().siblings('.sj_table-details').slideDown() 
})