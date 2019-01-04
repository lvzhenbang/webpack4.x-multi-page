// tabs
$('.tab-item').on('click', function() {
  var type = $(this).data('type')
  window.location.hash = type
  tab(this, type)
})

function tab(el, type) {
  var parent = $(el).parent()
  var oLine = parent.siblings('.line')
  var width = $(el).outerWidth()
  var left = $(el).offset().left - parent.offset().left

  $(el).addClass('active').siblings().removeClass('active')
  oLine.animate({
    'left': left,
    'width': width
  }, 200)
  
  $('.sj_' + type).addClass('show').siblings().removeClass('show')
}

$(window).on('hashchange', function(e) {
  var type = window.location.hash.slice(1)

  $('.tab-item').each(function(item, index) {
    if($(this).data('type') === type) {
      tab(this, type)
    }
  })
})

