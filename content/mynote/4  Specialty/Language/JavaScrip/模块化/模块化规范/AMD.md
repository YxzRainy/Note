---
title: JavaScrip AMD
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

# AMD

专门用于浏览器端，异步加载模块。

## 语法

### 暴露模块

**定义没有依赖的模块**

```js
define(function () {
	return module;
});
```

**定义有依赖的模块

```js
// 显式声明依赖注入
define(['module1', 'module2', 'module2'], function (m1Obj, m2Obj, m3Obj) {
	return module;
});
```

### 引入模块

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

浏览器端

