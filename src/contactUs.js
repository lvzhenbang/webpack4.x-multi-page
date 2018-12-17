const a = require('./common/a')
const c = require('./common/c')
require('../assets/css/main.css')
a()
c()
document.body.querySelector('.container').innerHTML = '<h1> 这是 contact-us 页</h1>'