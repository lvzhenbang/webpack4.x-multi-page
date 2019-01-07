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
