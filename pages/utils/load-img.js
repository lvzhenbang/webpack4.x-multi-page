/* var path = require('path')
module.exports = function(str) {
  return path.join(__dirname, 'assets/imgs/other')
} */

module.exports = function(str) {
  return require('@img/other/' + str)
}