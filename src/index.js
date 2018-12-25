import $ from 'jquery'

// 设置当前导航标记
$('.header li').eq(0).addClass('active')

// 添加container内容
$('<h1> 这是 首页 </h1>').css('color', 'white').prependTo($('.container'))