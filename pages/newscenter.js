// 设置当前导航标记
$('.sj_navbar').each(function(index, item) {
  $(item).find('li').eq(3).addClass('active')
})

// tab

$('.sj_tab-item').on('click', function(e) {
  var type = $(this).data('type'),
    count = 0;

  $(this).addClass('active').siblings().removeClass('active')
  $('.sj_new-item').removeClass('reverse').each(function(index, item) {
    if($(item).data('type') !== type) {
      // $(item).addClass('scale').delay(200).hide()
      $(item).addClass('hide').delay(200).hide()
    } else {
      // $(item).show().removeClass('scale')
      $(item).show().removeClass('hide')
      if (count % 2 !== 0) $(item).addClass('reverse')
      count++
    }
  })
})