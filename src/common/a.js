const _ = require('loadsh')
module.exports = function() {
  console.log('a')
  const arr = [1,2,3,4,5]
  _.filter(arr, function(item) {
    return item%2===0
  })
  console.log(arr)
}