---
title: JavaScrip NodeJs 实现模块化
date: 2022-05-15
categories:
        - 编程语言
tags:
        - 前端
        - 模块化

        - JavaScript
---

# NodeJs 实现模块化

基于`node.js`服务器端实现模块化。

## 创建项目结构

`./modules`：模块目录。

`./modules/module1.js`：自定义模块一。

`./modules/module2.js`：自定义模块二。

`./modules/module3.js`：自定义模块三。

`./app.js`：主模块。

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
// 暴露 2 个函数，1 个数组
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
// 导入第三方模块
// uniq 是一个函数，用于对数组进行操作
var uniq = require('uniq');

// 导入自定义模块
var module1 = require('./modules/module1');
var module2 = require('./modules/module2');
var module3 = require('./modules/module3');

// 使用自定义模块
module1.fun();
module2();
module3.f();

// 使用第三方模块
var result = uniq(module3.arr);
console.log(result);
```

终端使用命令`node app.js`，来运行 js 文件。
