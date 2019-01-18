var set_nav = require('@utils/set_nav.js')

set_nav(7)

// collapse
$('.sj_table-tr').find('.sj_arrow-more').on('click', function() {
  var rootSiblings = $(this).parent().parent().siblings()
  rootSiblings.find('.sj_arrow-more').removeClass('active')
  rootSiblings.find('.sj_table-details').slideUp()
  
  $(this).addClass('active').parent().siblings('.sj_table-details').slideDown() 
})