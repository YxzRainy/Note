---
title: JavaScrip CMD 实现模块化
date: 2022-05-15
categories:
        - 编程语言
tags:
        - 前端
        - 模块化
        - Note
        - JavaScript
---

# CMD 实现模块化

## 创建项目结构

`./libs`：第三方模块目录。

`./libs/sea.js`：第三方模块。

`./modules`：自定义模块目录。

`./modules/module1.js`：自定义模块一。

`./modules/module2.js`：自定义模块二。

`./modules/module3.js`：自定义模块三。

`./modules/module4.js`：自定义模块四。

`modules/main.js`：主模块。

`./index.html`：入口文件

## 模块化编码

**module1.js**

```js
// 定义没有依赖的模块
define(function (require, exports, module) {
	var msg = 'module1';
	function fun() {
		return msg;
	}
	// 暴露模块
	module.exports = { fun };
});
```

**module2.js**

```js
// 定义没有依赖的模块
define(function (require, exports, module) {
	var msg = 'module2';
	function fun2() {
		console.log(msg);
	}
	// 暴露模块
	module.exports = fun2;
});
```

**module3.js**

```js
// 定义没有依赖的模块
define(function (require, exports, module) {
	var msg = 'module3';
	function fun3() {
		console.log(msg);
	}
	// 暴露模块
	exports.module3 = { fun3 };
});
```

**module4.js**

```js
// 定义有依赖的模块，该模块依赖 module2 与 module3
define(function (require, exports, module) {
	// 同步导入模块
	var m2 = require('./module2');
	m2();
	// 异步导入模块，因为是异步，因此回调函数不会阻塞
	// 因此该回到函数中的代码需要等主线程（主模块）执行完毕再执行，
	require.async('./module3', function (m3Obj) {
		m3Obj.module3.fun3();
	});

	//导入第三方模块
	require('../libs/jquery');
	// 使用第三方模块
	$('body').css('background', 'red');
	// 该模块上的方法
	var msg = 'module4';
	function fun4() {
		console.log(msg);
	}
	// 暴露模块
	exports.module4 = { fun4 };
});
```

**main.js**

```js
// 定义主模块
define(function (require) {
	var m1 = require('./module1');
	var m1Value = m1.fun();
	console.log(m1Value);

	var m4 = require('./module4');
	m4.module4.fun4();
});
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
		<title>CMD 模块化</title>
	</head>

	<body>
		<div class="wrap"></div>
	</body>
	<!-- 导入 sea.js -->
	<script src="./libs/sea.js"></script>
	<!-- 使用 sea.js  -->
	<script>
		// 使用主模块
		seajs.use('./modules/main.js');
	</script>
</html>
```
