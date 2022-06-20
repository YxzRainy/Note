---
title: JavaScrip AMD 实现模块化
date: 2022-05-15
categories:
        - Note
tags:
        - 前端
        - 模块化

        - JavaScript
---

# AMD 实现模块化

将[require.js](https://requirejs.org/docs/download.html)导入到项目目录`./libs/require.js`

## 创建项目结构

`./libs/`：第三方模块目录。

`./modules/`：自定义模块目录。

`./libs/jquery.js`：第三方模块。

`./libs/require.js`：第三方模块。

`./modules/alerter.js`：有依赖的自定义模块。

`./modules/dataService.js`无依赖的自定义模块。

`./main.js`：主模块。

`./index.html`：入口文件。

## 模块化编码

**alerter.js**

```js
// 定义无依赖的模块
define(function () {
	var name = 'no have dependencies';
	function fun() {
		return name;
	}
	// 暴露模块的 fun()
	return { fun };
});
```

**dataService.js**

```js
// 定义有依赖的模块，该模块依赖 dataService、jquery
define(['dataService', 'jquery'], function (dataService, $) {
	var msg = 'have dependencies';
	function showMsg() {
		console.log(msg, dataService.fun());
	}
	$('body').css('background', 'red');
	// 暴露模块的 showMsg()
	return { showMsg };
});
```

**main.js**

```js
// 主模块，用 IIFE 执行，比较安全
(function () {
	// 配置 requirejs，使其能找到 main 所依赖的模块
	requirejs.config({
		// 基本路径，一般为项目根目录
		baseUrl: './',
		// 模块路径
		paths: {
			dataService: 'modules/dataService',
			alerter: 'modules/alerter',
			// jquery 支持 AMD 规范，它内置 jquery 模块（源码中 define 了一个 jquery，因此，这里需要用 jquery，而不是 jQuery）
			jquery: 'libs/jquery',
		},
	});
	requirejs(['alerter'], function (alerter) {
		alerter.showMsg();
	});
})();
```

**index.htm**

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
		<title>AMD 模块化</title>
	</head>
	<body>
		<div class="wrap">AMD 模块化</div>
	</body>
	<!-- 引入 require.js 库 -->
	<!-- data-main 表示当前项目主模块路径 -->
	<script data-main="main.js" src="./libs/require.js"></script>
	<script></script>
</html>
```
