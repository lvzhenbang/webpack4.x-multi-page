const _ = require('loadsh')
require('../../assets/css/a.css')
require('../../assets/css/header.css')
require('../../assets/css/container.css')
require('../../assets/css/footer.css')
module.exports = function() {
  console.log('a')
  const arr = [1,2,3,4,5]
  _.filter(arr, function(item) {
    return item%2===0
  })
  console.log(arr)
}