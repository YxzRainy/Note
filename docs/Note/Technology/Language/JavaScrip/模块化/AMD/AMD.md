---
title: JavaScrip AMD
date: 2022-05-15
categories:
        - Note
tags:
        - 前端
        - 模块化

        - 模块化规范
        - JavaScript
---

# AMD

专门用于浏览器端，实现异步加载模块，该规范依赖于 [require.js](https://requirejs.org/docs/download.html)。

不是所有模块都支持 AMD 规范，比如 `angular.js`，但也可以通过 `shim`配置来使用`angular.js`

## 定义模块

定义没有依赖的模块：

```js
define(function () {
	// 暴露模块
	return module;
});
```

定义有依赖的模块：

```js
// 显式声明依赖注入
define(['module1', 'module2', 'module2'], function (m1Obj, m2Obj, m3Obj) {
	// 暴露模块
	return module;
});
```

## 导入模块

```js
require([
	'module1',
	'module2',
	'module3',
	function (m1Obj, m2Obj, m3Obj) {
		// 使用 m1Obj, m2Obj, m3Obj
	},
]);
```

## 实现

使用[require.js](https://requirejs.org/docs/download.html)。
