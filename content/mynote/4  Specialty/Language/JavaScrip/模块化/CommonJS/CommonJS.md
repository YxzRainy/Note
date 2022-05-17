---
title: JavaScrip CommonJS
date: 2022-05-15 6:00:00
updated: 2022-05-15 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 模块化
        - 学习笔记
        - 模块化规范
        - JavaScript

---

# CommonJS

一种为 JS 的表现指定的规范，它希望 JavaScrip 可以运行在任何地方，`Node.js`采用了这个规范。

一个单独文件就是一个模块，通过`require()`来同步加载要依赖的模块，然后通过`extports`或则`module.exports`来暴露模块的接口。

## 定义模块

两种方式所暴露的模块都是一个对象。

### module.expots

将需要暴露的属性或方法保存到`exports`对象中。

```js
//  ExposedObjects() 将会保存到 exports 对象中，并暴露出去
module.expots = ExposedObjects(){
};
```

### exports.xxx

给`exports`定义不同的`xxx` 对象，可以暴露不同属性或方法。

```js
// 不同的对象暴露不同的方法或属性
expots.obj = ExposedObjects(){
};
expots.obj2 = ExposedObjects2(){
}
expots.obj3 = ExposedObjects3(){
}
```

##  导入模块

```js
// 导入第三方模块
require('jquery');
// 导入自定义模块
require('modules.js');
```

## 实现

### 服务器端

直接使用 `Node.js`，加载模块时是同步加载，这会导致阻塞（等待），但因为是在服务器端，影响也不是很大，无非是加载的时间比较长。

### 浏览器端

加载模块时是同步加载，也会导致阻塞，且因为是在浏览器端，加载的时间非常长，用户体验不好（页面白屏），因此，我们需要将**模块进行编译打包**，以此来缩短加载时间。

打包工具：[Browserify](https://browserify.org/).





