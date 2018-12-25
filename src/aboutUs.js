var $ = require('jquery')

// 设置当前导航标记
$('.header li').eq(1).addClass('active')

// 添加container内容
$('<h1> 这是 about-us 页</h1>').css('color', 'white').prependTo($('.container'))