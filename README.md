# webpack4.x multi-page

使用webpack4.x快速构建生成一个多页面的静态站点。

可以快速，方便的构建一个对页面的企业站或个人博客。

## 安装项目所需依赖

```
yarn
```

## 优化项目所需的图片资源

```
npm run img
```

注：在执行`npm run dev`或`npm run build`命令前，需要先运行`npm run img`，这个命令会将项目所需要的图片进行优化，然后输出到正确的目录下，否则，项目启动时会找不到这些图片。

## 运行项目

```
npm run dev
```

## 发布项目

```
npm run build
```

## 如何构建多页面应用

v0.1 使用`SplitChunk`实现js代码模块化拆分

参考文章：[构建多页面应用](https://github.com/lvzhenbang/webpack-learning/tree/master/doc/two/multi-page.md)

v0.2 实现css代码的模块化拆分

参考文章：[构建多页面应用——单个页面的处理](https://github.com/lvzhenbang/webpack-learning/tree/master/doc/two/multi-page-single-page.md)

v0.3 实现html代码的模块化拆分

参考文章：[构建多页面应用——模板](https://github.com/lvzhenbang/webpack-learning/tree/master/doc/two/multi-page-template.md)

v0.4 重构目录，实现对静态资源的处理

参考文章：[构建多页面应用——静态资源处理](https://github.com/lvzhenbang/webpack-learning/tree/master/doc/two/multi-page-img-category.md)

v0.5 实现对图片的优化处理 && 给URL添加hash，实现对页面的动画控制

参考文章：[构建多页面应用——优化](https://github.com/lvzhenbang/webpack-learning/tree/master/doc/two/multi-page-img-category.md)

参考文章：[构建多页面应用——hash](https://github.com/lvzhenbang/webpack-learning/tree/master/doc/two/multi-page-hash.md)

v0.6 提取整理所有的mock Data && 使用webpack的`resolve.alias`实现对路径的优化

参考文章：[构建多页面应用——优化（二）](https://github.com/lvzhenbang/webpack-learning/tree/master/doc/two/multi-page-mockdata.md)

v0.7 实现web的响应式功能

v0.7.1 

* 修复构建耗时的问题（6-8S构建完成），减少一半多的时间
* 整理构建启动文件到`./build/`目录，添加配置文件`./config/index.js`
* 启用`source-map`
* 启用了`SplitChunksPlugin`，增加了`common`模块
* 修复了`product`、`contactus`、`footer`的bug

v0.7.2

* 提取子导航的数据（shzr，sxy，zjsj，ywbk），完成整个静态站数据的整理
* 因为数据存放在`*.js`文件中，然后被`pug-loader`处理，进而可以被`url-loader`处理。这样保证了整个静态站的所有图片都可以被`url-loader`或`file-loader`处理
* 为生产模式下的图片添加`hash`

v0.8.0

* 引入`workbox`实现`PWA`功能
* 使用`manifest.json`创建`desktop icon`

这个版本的代码的演示示例请参考[`https://lvzhenbang.github.io/webpack4.x-multi-page/dist/`](https://lvzhenbang.github.io/webpack4.x-multi-page/dist/)

参考文章[workbox](https://github.com/lvzhenbang/webpack-learning/tree/master/doc/two/workbox.md)

v0.9.0

* 添加`webpack`构建分析工具
* 添加`社会责任`页面数据
* 修复`站点地图`单击事件无效问题
* 部分样式修改


