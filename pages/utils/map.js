function loadMap() {
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = "http://api.map.baidu.com/api?v=3.0&ak=zZ1jDRxcKuPUEX4Ar77rxaLqhk4v6RAj&callback=init";
  document.head.appendChild(script);
}

function init() {
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
  if (!!!document.body.querySelector('.BMap_mask') && (document.getElementById('map').getBoundingClientRect().top > -300 && document.getElementById('map').getBoundingClientRect().top < window.innerHeight)) {
    loadMap();
  }
}

window.addEventListener('scroll', function() {
  mapShow()
})
