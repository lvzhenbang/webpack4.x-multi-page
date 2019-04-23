var $ = require('jquery')
require('./service-workers.js')

window.addEventListener('scroll', function() {
  mapShow()
})

function navShow() {
  if (!$('.sj_nav-fixed').hasClass('sj_nav-show') && window.pageYOffset >= 85) {
    $('.sj_nav-fixed').addClass('sj_nav-show');
  }
  if ($('.sj_nav-fixed').hasClass('sj_nav-show') && window.pageYOffset < 85) {
    $('.sj_nav-fixed').removeClass('sj_nav-show');
  }
}

// detect obj is visible to load obj
$(window).on('scroll', function (e) {
  e.preventDefault();
  var timer
  
  clearTimeout(timer)

  timer = setTimeout(function() {
    // back-to-top
    backTop();
    // nav
    navShow();
  }, 1000)
})

// back-to-top
var backToTop = $(".back-to-top");
backToTop.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: 0
  }, 800)
});

function backTop() {
  var sTop = $(window).scrollTop(),
    winH = $(window).height()
  sTop > winH ? backToTop.fadeIn() : backToTop.fadeOut();
}

// map
function loadMap() {
  var BMap = require('BMap');
  var map = new BMap.Map('map'); // 创建Map实例
  var point = new BMap.Point('116.526831', '39.911978'); // 创建点坐标
  map.centerAndZoom(point, 15);

  var marker = new BMap.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  map.enableScrollWheelZoom(); // 启用滚轮放大缩小
  var opts = {
    width: 200, // 信息窗口宽度
    height: 100, // 信息窗口高度
    title: "圣捷集团", // 信息窗口标题
  }
  var infoWindow = new BMap.InfoWindow("地址：北京市朝阳区高碑店西店村46号楼", opts); // 创建信息窗口对象
  var timer = setTimeout(function () {
    map.openInfoWindow(infoWindow, point); // 信息窗口
  }, 1000);
}

function mapShow() {
  if (!document.body.querySelector('.BMap_mask') && (document.getElementById('map').getBoundingClientRect().top > -300 && document.getElementById('map').getBoundingClientRect().top < window.innerHeight)) {
    loadMap();
  }
}


// banner
var Swiper = require('swiper');

var mySwiper = new Swiper('.swiper-container',{
  pagination: '.carousel-indicators',
  loop:true,
  grabCursor: true,
  paginationClickable: true
})


// map-siste
if($(window).width() < 576) {
  $('.sj_map-nav').find('.sj_arrow-more').on('click', function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(this).find('.sj_map-menu').slideUp()
    } else {
      $(this).addClass('active').find('.sj_map-menu').slideDown() 
    }
  })
}

// lazyload
var lazyload = require('./lazyload-img.js');

lazyload(document.querySelectorAll('img.lazy'))