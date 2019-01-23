
require('@utils/commons.js');
require('@utils/css.js');

if($(window).width() > 991) {
  $('.style-item').each(function (index, item) {
    $(item).css({
      'width': $(this).find('img').data('width'),
      'height': $(this).find('img').data('height')
    })
  })

}