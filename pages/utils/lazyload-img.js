class Lazyload {
  constructor(imgs) {
    this.imgs = imgs
    this.observer = null
  }
  
  intersection() {
    let self = this
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry) {
          if(entry.intersectionRatio > 0) {
            self.observer.unobserve(entry.target)

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
        self.observer.observe(img);
      })
    } else {
      console.log("IntersectionObserver isn't support.")
    }
  }
  
  init() {
    this.intersection()
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