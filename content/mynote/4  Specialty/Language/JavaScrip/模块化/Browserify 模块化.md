---
title: JavaScrip Browserify 模块化
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

# Browserify 模块化

基于本地浏览器端实现模块化，用 **Browserify**来打包模块。

安装 `Browserify`

## 创建项目结构

`./dist`：打包生成的文件目录。

`./src`：源码所在的目录。

`./src/module1.js`：自定义模块一。

`./src/module2.js`：自定义模块二。

`./src/module3.js`：自定义模块一。

`./app.js`：程序主源文件。

`./index.html`：页面入口文件。

`./package.json`：项目配置文件。

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
var uniq = require('uniq');

var module1 = require('./module1');
var module2 = require('./module2');
var module3 = require('./module3');

module1.fun();
module2();
module3.f();
module3.f2();

var result = uniq(module3.arr);
console.log(result);

```

## 打包模块

‎现在，使用 ‎‎browserify‎‎ 命令递归地将所有需要的模块‎从 `./src/app.js‎‎` 打包编译到`./dist/bundle.js`：‎

`-o`表示输出。

```sh
browserify ./src/app.j -o ./dist/bundle.js
```

在 `index.html` 中引入`bundle.js`。
