
$('.style-item').each(function (index, item) {
  var num = Math.floor(Math.random() * 255);
  $(item).css({
    'width': $(this).find('img').data('width'),
    'height': $(this).find('img').data('height'),
    'backgroundColor': 'rgb(' + num + ', ' + num + ', ' + num + ')'
  })
})