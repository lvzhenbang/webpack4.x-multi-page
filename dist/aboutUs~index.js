(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutUs~index"],{

/***/ "./assets/css/b.css":
/*!**************************!*\
  !*** ./assets/css/b.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/b.js":
/*!*************************!*\
  !*** ./src/common/b.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(/*! loadsh */ "./node_modules/loadsh/lib/index.js")
__webpack_require__(/*! ../../assets/css/b.css */ "./assets/css/b.css")
module.exports = function() {
  console.log('b')
  let users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
 users = _.find(users, function(o) { return o.age < 40; });

  console.log(users)
}

/***/ })

}]);
//# sourceMappingURL=aboutUs~index.js.map