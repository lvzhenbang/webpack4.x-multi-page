require('@utils/commons.js');
require('@utils/css.js');

var set_nav = require('@utils/set_nav.js');

document.write('hello')

console.log(3);

set_nav(3);

// tab
$('.sj_tab-item').on('click', function(e) {
  var type = $(this).data('type'),
    count = 0;

  $(this).addClass('active').siblings().removeClass('active')
  $('.sj_new-item').removeClass('reverse').each(function(index, item) {
    if($(item).data('type') !== type) {
      $(item).addClass('hide').delay(200).hide()
    } else {
      $(item).show().removeClass('hide')
      if (count % 2 !== 0) $(item).addClass('reverse')
      count++
    }
  })
})