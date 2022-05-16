---
title: JavaScrip NodeJs 模块化
date: 2022-05-15 6:00:00
updated: 2022-05-15 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 模块化
        - 学习笔记
        - JavaScript

---

# NodeJs 模块化

基于`node.js`服务器端实现模块化。

## 创建项目结构

`./modules`：项目所依赖的自定义模块目录。

`./modules/module1.js`：自定义模块一。

`./modules/module2.js`：自定义模块二。

`./modules/module3.js`：自定义模块三。

`./app.js`：程序主入口文件。

`./package.json`：项目配置文件。可以手动创建，也可使用`npm init` 创建，推荐后者。

## 安装模块

安装 [uniq](https://www.npmjs.com/package/uniq)

```sh
npm install uniq
```

## 模块化编码

**module1.js**

```js
// 暴露对象
module.exports = {
	msg: 'module one',
	fun() {
		console.log(this.msg);
	},
};

```

**module2.js**

```js
// 暴露函数
module.exports = function () {
	console.log('module two');
};
```

**module3.js**

```js
// 向外暴露 2 个函数，1 个数组

exports.f = function () {
	console.log('modul three f1');
};

exports.f2 = function () {
	console.log('module three f2');
};

exports.arr = [199, 9, 3];

```

**app.js**

```js
// 导入模块第三方模块 uniq
// uniq 是一个函数，用于对数组进行操作
var uniq = require('uniq');

aar module1 = require('./modules/module1');
var module2 = require('./modules/module2');
var module3 = require('./modules/module3');

module1.fun();
module2();
module3.f();
// 用 uniq 函数处理 arr
var result = uniq(module3.arr);
console.log(result);

```

