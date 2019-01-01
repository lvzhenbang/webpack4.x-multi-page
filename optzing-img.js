const path = require('path')
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminOptipng = require('imagemin-optipng');
const imageminGifsicle = require('imagemin-gifsicle');

(async () => {
	await imagemin(
    [
      path.resolve(__dirname, 'src/assets/imgs/static/*.jpg'),
      path.resolve(__dirname, 'src/assets/imgs/static/*.png'),
      path.resolve(__dirname, 'src/assets/imgs/static/*.gif')
    ],
    path.resolve(__dirname, 'src/assets/imgs/other/'),
    {
      use: [
        imageminMozjpeg(),
        imageminOptipng(),
        imageminGifsicle()
      ]
    }
  );

	console.log('图片优化完成！');
})();