const a = require('./common/a')
const b = require('./common/b')
require('../assets/css/main.css')
require('../assets/css/aboutus.css')
a()
b()
document.body.querySelector('.container').innerHTML = '<h1> 这是 about-us 页</h1>'