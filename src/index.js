const a = require('./common/a')
const b = require('./common/b')
const c = require('./common/c')
const d = require('./common/d')

require('../assets/css/main.css')

a()
b()
c()
d()

document.body.querySelector('.container').innerHTML= '<h1> 这是首页 </h1>'