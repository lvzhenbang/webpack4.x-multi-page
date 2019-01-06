const path = require('path');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminOptipng = require('imagemin-optipng');
const imageminGifsicle = require('imagemin-gifsicle');

let dir = ['.', 'index', 'leader', 'news', 'recruit', 'news', 'second', 'style', 'video', 'wealth']

for (let name of dir) {
  optizieImg(name)
}

async function optizieImg(name) {
	await imagemin(
    [
      path.resolve(__dirname, 'assets/imgs/static/'+ name +'/*.jpg'),
      path.resolve(__dirname, 'assets/imgs/static/'+ name +'/*.png'),
      path.resolve(__dirname, 'assets/imgs/static/'+ name +'/*.gif')
    ],
    path.resolve(__dirname, 'assets/imgs/other/'+ name +'/'),
    {
      use: [
        imageminMozjpeg(),
        imageminOptipng(),
        imageminGifsicle()
      ]
    }
  );

	console.log(name + ': ' + '图片优化完成！');
}