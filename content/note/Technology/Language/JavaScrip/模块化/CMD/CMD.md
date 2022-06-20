---
title: JavaScrip CMD
date: 2022-05-15
categories:
        - 编程语言
tags:
        - 前端
        - 模块化

        - 模块化规范
        - JavaScript
---

# CMD

专用于浏览器端，异步加载模块。

惰性加载模块，即使用模块时才会加载。

实现该规范使用[Sea.js](https://github.com/seajs/seajs)

## 定义模块

注意，回调函数中的三个参数`require, exports, module`必须加上，否则会报错。

定义没有依赖的模块：

```js
define(function (require, exports, module) {
	// 暴露模块，通常用后者
	exports.xxx = value;
	module.exports = value;
});
```

定义有依赖的模块：

```js
define(function (require, exports, module) {
	// 同步导入模块
	var module2 = require('./module2');
	// 异步导入依赖模块
	require.async('./module3', function (m3Obj) {
		// 使用 m3Obj
	});
	// 暴露模块
	exports.xxx = value;
});
```

## 导入模块

```js
define(function (require) {
	var m1 = require('./module1');
	var m4 = require('./module4');
	m1.fun();
	m4.fun2();
});
```

## 实现

浏览器实现使用[Sea.js](https://github.com/seajs/seajs)
