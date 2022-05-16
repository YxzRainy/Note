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

## [安装](https://browserify.org/#install)

```sh
npm install -g browserify
```

## 规范

每个文件都可以当作一个模块。

**在服务器端加载模块**：加载模块时是同步加载，这会导致阻塞（等待），但因为是在服务器端，影响也不是很大，无非是加载的时间比较长。

**在浏览器端加载模块**：加载模块时是同步加载，会导致阻塞，且因为是在浏览器端，加载的时间非常长，用户体验不好（页面白屏），因此，我们需要将**模块进行打包编译**，以此来缩短加载时间。

## 语法

### 定义暴露模块

两种方式所暴露的模块都是一个`expots`对象。

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

###  引入模块

```js
// 引入第三方模块
require('jquery');
// 引入自定义模块
require('modules.js');
```

## 实现

### 服务器端

Node.js

### 浏览器端

在浏览器端使用 **commonJS**，需要将模块进行编译打包。

打包的工具：[Browserify](https://browserify.org/)





