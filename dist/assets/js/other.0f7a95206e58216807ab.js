!function(e){var i={};function o(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="http://39.105.223.81:8083",o(o.s=10)}([function(n,t){n.exports=jQuery},,,,,,,,,,function(n,t,e){e(11),n.exports=e(15)},function(n,t,s){var e=s(0);window.addEventListener("scroll",function(){!document.body.querySelector(".BMap_mask")&&-300<document.getElementById("map").getBoundingClientRect().top&&document.getElementById("map").getBoundingClientRect().top<window.innerHeight&&function(){var n=s(12),t=new n.Map("map"),e=new n.Point("116.526831","39.911978");t.centerAndZoom(e,15);var i=new n.Marker(e);t.addOverlay(i),t.enableScrollWheelZoom();var o=new n.InfoWindow("地址：北京市朝阳区高碑店西店村46号楼",{width:200,height:100,title:"圣捷集团"});setTimeout(function(){t.openInfoWindow(o,e)},1e3)}()}),e(window).on("scroll",function(n){var t;n.preventDefault(),clearTimeout(t),t=setTimeout(function(){var n;n=e(window).scrollTop(),e(window).height()<n?i.fadeIn():i.fadeOut(),!e(".sj_nav_fixed").hasClass("sj_nav_show")&&85<=window.pageYOffset&&e(".sj_nav_fixed").addClass("sj_nav_show"),e(".sj_nav_fixed").hasClass("sj_nav_show")&&window.pageYOffset<85&&e(".sj_nav_fixed").removeClass("sj_nav_show")},1e3)});var i=e(".back-to-top");i.on("click",function(n){n.preventDefault(),e("html, body").animate({scrollTop:0},800)});s(13);e("#banner>.carousel").Carousel({index:0,auto:!0,time:3e3,indicators:!0}),s(14)},function(n,t){n.exports=BMap},function(n,t){!function(a){function t(n,t){this.init(n,t)}t.prototype={init:function(n,t){this.ele=n,this.opts=a.extend({},{index:0,auto:!0,time:4e3,indicators:!0,buttons:!0},t),this.index=this.opts.index,this.render(),this.eventBind(),this.opts.auto&&this.loop()},render:function(){this.renCas(),this.opts.indicators&&this.renIns(),this.opts.buttons&&this.renBtns()},renCas:function(){var n=this.ele.find(".carousel-inner"),t=n.find(".carousel-item"),e=t.length,i=t.eq(e-1).clone(),o=t.eq(0).clone(),s=this.ele.width();this.index=this.index<0||this.index>e-1?0:this.index,n.width((e+2)*s).prepend(i).append(o).css("left",(this.index+1)*-s),n.find(".carousel-item").width(s)},renIns:function(){for(var n=this.ele.find(".carousel-item").length-2,t='<div class="carousel-indicators">',e=0;e<n;e++)t+='<span data-index="'+e+'"></span>';t+="</div>",this.ele.append(t).find(".carousel-indicators span").eq(this.index).addClass("active")},renBtns:function(){this.ele.append('<span class="carousel-btn carousel-prev-btn"></span><span class="carousel-btn carousel-next-btn"></span>')},animate:function(t){var e=this,i=this.ele.find(".carousel-inner"),o=this.ele.width(),s=i.find(".carousel-item").length;this.opts.indicators,i.stop(!0,!0).animate({left:i.position().left+t},function(){var n=i.position().left;t<0&&n<-o*(s-2)&&i.css("left",-o),0<t&&-o<n&&i.css("left",-o*(s-2)),e.index=i.position().left/-o-1,e.opts.buttons&&e.showBtn()})},showBtn:function(){this.ele.find(".carousel-indicators span").removeClass("active").eq(this.index).addClass("active")},loop:function(){var n=this.ele.find(".carousel-next-btn");this.timer=setInterval(function(){n.trigger("click")},this.opts.time)},eventBind:function(){var n=this,t=this.ele.find(".carousel-prev-btn"),e=this.ele.find(".carousel-next-btn"),i=this.ele.find(".carousel-indicators"),o=this.ele.width(),s=(this.ele.find(".carousel-item").length,this.opts.auto);e.on("click",function(){n.animate(-o)}),t.on("click",function(){n.animate(o)}),i.on("click","span",function(){n.animate((a(this).data("index")-n.index)*-o)}),s&&this.ele.hover(function(){clearInterval(n.timer)},function(){n.loop()})}},a.fn.Carousel=function(n){return this.each(function(){new t(a(this),n)})}}(jQuery)},function(n,t){$(".tab-item").on("click",function(){var n=$(this).parent(),t=n.siblings(".line"),e=$(this).outerWidth(),i=$(this).offset().left-n.offset().left,o=$(this).data("type");$(this).addClass("active").siblings().removeClass("active"),t.animate({left:i,width:e},200),$(".sj_"+o).addClass("show").siblings().removeClass("show")})},function(n,t,e){e(16),e(17),e(18),e(19),e(20),e(21),e(22),e(23),e(24),e(25),e(26),e(27),e(28),e(29),e(30),e(31),e(32),e(33),e(34),e(35),e(36),e(37)},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){}]);