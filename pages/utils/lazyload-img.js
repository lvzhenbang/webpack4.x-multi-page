require('intersection-observer');

class Lazyload {
  constructor(imgs) {
    this.imgs = imgs
  }
  
  init() {
    let observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry) {
        if(entry.intersectionRatio > 0) {
          observer.unobserve(entry.target)
          entry.target.classList.remove('lazy')

          var datasrc = entry.target.getAttribute('data-src')
          var datasrcset = entry.target.getAttribute('data-srcset')

          if (entry.target.tagName.toLowerCase() === 'img') {
            if (datasrc) {
              entry.target.src = datasrc
            }

            if (datasrcset) {
              entry.target.srcset = datasrcset
            }
          } else {
            entry.target.getElementsByClassName.backgroudImage = 'url(' + datasrc + ')'
          }
        }
      })
    }, {
      root: null,
      rootMargin: "0px",
      threshold: [0]
    })
    
    this.imgs.forEach(function (img) {
      observer.observe(img);
    })
  }
}

module.exports = function(imgs) {
  imgs.forEach(function (img) {
    let num = Math.floor(Math.random() * 255);
    img.style.backgroundColor = 'rgb(' + num + ', ' + num + ', ' + num + ')';
  })
  let lazyload = new Lazyload(imgs)
  lazyload.init()
}