---
title: JavaScrip Browserify 实现模块化
date: 2022-05-15 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 模块化
        - 学习笔记
        - JavaScript
---

# Browserify 实现模块化

基于本地浏览器端实现模块化，需要用 [Browserify](https://browserify.org/#install)来打包。

## 创建项目结构

`./dist`：打包生成的文件目录。

`./src`：模块目录。

`./src/module1.js`：自定义模块一。

`./src/module2.js`：自定义模块二。

`./src/module3.js`：自定义模块三。

`./app.js`：主模块。

`./index.html`：入口文件。

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
// 向暴露 2 个函数，1 个数组

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
// 引入第三方模块
var uniq = require('uniq');

// 引入自定义模块
var module1 = require('./module1');
var module2 = require('./module2');
var module3 = require('./module3');

// 使用自定义模块中的方法
module1.fun();
module2();
module3.f();
module3.f2();

// 使用第三方模块中的方法
var result = uniq(module3.arr);
console.log(result);
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
		<title>Browserify 模块化</title>
	</head>
	<body>
		<div class="wrap">Browserify 模块化</div>
	</body>
	<script src="./dist/bundle.js"></script>
</html>
```

## 打包模块

安装 browserify‎‎：

```sh
npm install -g browserify
```

**不仅要全局安装，当前项目也要安装**。

‎ 现在，使用 ‎‎browserify‎‎ 命令递归地将所有需要的模块 ‎ 从 `./src/app.js‎‎` 打包编译到`./dist/bundle.js`：‎

`-o`表示输出。

```sh
browserify ./src/app.js -o ./dist/bundle.js
```

在 `index.html` 中引入`bundle.js`。

```html
<script src="./dist/bundle.js"></script>
```
