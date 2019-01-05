// tabs
$('.tab-item').on('click', function() {
  var type = $(this).data('type')
  window.location.hash = type
  tab(this, type)
})

function tab(el, type) {
  var parent = $(el).parent(),
      oLine = parent.siblings('.line'),
      width = $(el).outerWidth(),
      left = $(el).offset().left - parent.offset().left,
      secondTitleTop = $('.sj_block-title').offset().top,
      timer = null,
      durationTime = 0

  
  clearTimeout(timer)
  if (document.body.querySelector('.sj_block-title') && document.body.querySelector('.sj_block-title').getBoundingClientRect().top !== 140) {
    $("html, body").animate({
      scrollTop: secondTitleTop - 140
    }, 200)
    durationTime = 300
  } else {
    durationTime = 0
  }

  timer = setTimeout(function() {
    $(el).addClass('active').siblings().removeClass('active')
    oLine.animate({
      'left': left,
      'width': width
    }, 200)
    
    $('.sj_' + type).addClass('show').siblings().removeClass('show')
  }, durationTime)
}

$(window).on('hashchange', function() {
  tabcheck()
})

$(document).ready(function() {
  tabcheck()
})

function tabcheck () {
  var type = window.location.hash.slice(1) || ''
  var isHash = $('.sj_block-title').data('hash') === 'scroll' ? true : false
  
  if (type && isHash ) {
    $('.tab-item').each(function(item, index) {
      if($(this).data('type') === type) {
        tab(this, type)
      }
    })
  }
}