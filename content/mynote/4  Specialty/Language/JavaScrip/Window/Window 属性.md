---
title: JavaScript Window 属性
date: 2022-05-05 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# Window 属性

## innerWidth 和 innerHeight

返回视口的宽度和高度。

视口就是浏览器中能看到网页的部分。

```js
// 视口宽度
var WViewport = window.innerWidth;
// 视口高度
var HViewport = window.innerHeight;
console.log('视口宽度：' + WViewport);
console.log('视口高度：' + HViewport);
```

## pageYOffset 和 pageXOffset

返回滚动条当前的纵向滚动距离和横向滚动距离。

```js
// 纵向滚动条的滚动距离
var Ydistance = window.pageYOffset;
// 横向滚动条的滚动距离
var Xdistance = window.pageXOffset;
console.log(Ydistance);
console.log(Xdistance);
```

### IE 8 及 IE 8 以下的浏览器

`document.body.scrollLeft/Top` 和 `document.documentElement.scorllLeft/Top`这个两个属性的兼容性机器混乱，Top 代表纵向，Left 代表横向

在 IE 8 及 IE 8 以下的浏览器中，这两个属性中只要其中一个有值，则另一个属性的值一定为 0。因此， 如果我们要考虑兼容性的问题，都会将这两个属性相加，以兼容 IE 8 及其 IE 8 以下的浏览器。

## DOMContentLoaded

文档解析完成后执行的事件。

它和`window.onload`的区别是，`window.onload`是在文档加载完成后所触发的事件，而`DOMContentLoaded`，无需等文档全部加载完成，只需要等文档（DOMTree）解析完成后，`DOMContentLoaded`就会被触发。

`DOMContentLoaded`事件只能使用`addEventListener`来监听

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>DOMContentLoaded</title>
		、
		<script>
			// 让 JavaScrip 代码在文档解析完毕之后执行，并不会报错
			document.addEventListener(
				'DOMContentLoaded',
				function () {
					console.log('DOMContentLoaded 事件被触发！\n\n标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段。');
				},
				false
			);
		</script>
		<style>
			div {
				width: 100px;
				height: 100px;
				background-color: rgb(15, 190, 131);
			}
		</style>
	</head>

	<body>
		<div>123</div>
	</body>
	<script src="./js/main.js"></script>
</html>
```
