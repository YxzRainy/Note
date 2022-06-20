---
title: JavaScrip 异步加载 JS
date: 2022-05-03
categories:
        - 编程语言
tags:
        - 前端

        - JavaScript
---

# 异步加载 JS

有时候，我们需要加载一些工具包，这些工具包与加载 HTML 文档无关，因此，我们就需要异步加载 JavaScrip，即实现 JavaScrip 的多线程。

## aysnc="aysnc"

异步加载，加载 JavaScrip 文件完就执行，aysnc 只能加载外部 JavaScrip，并不能将 JavaScrip 代码写到 script 元素中。

## defer = "defer"

异步加载，即一边加载 JavaScrip 文件，一边加载 HTML 文档，但是，它需要等 DOM 文档解析完毕后，才会执行其中的 JavaScrip 代码，相当于`window.onload`，IE 独有。

可以将 JavaScrip 代码写到 script 元素中。

```html
<script src="vue.js" defer="defer">
	console.log('IE 异步加载')
</script>
```

## 按需异步加载 JS

当我们用创建一个 script 元素，那么需要将它插入到页面中，才会执行这个 JavaScrip 文件。如果不插入的话，仅仅只执行加载这个 JavaScrip 文件，这样，我们就实现了一个异步加载 JavaScrip 的过程。

因为加载 JavaScrip 文件需要一个过程，而程序执行代码的时候，并不会等 main.js 文件下载完毕才继续执行后续代码，因此，这时候如果立即执行 main.js 中的某个方法，会报错。

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>拖拽</title>
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
	<script type="text/javascript">
		var script = document.createElement('script');

		script.type = 'text/javascript';
		// 加载 js 文件，需要个过程
		script.src = 'js/main.js';
		// 如果不将 script 插入到文档中，则不会执行 main.js 中的代码
		document.head.appendChild(script);
		// 如果立即执行 fun()，会报错（fun 未定义）
		// fun()
		// 延迟 1 秒执行 fun()，不会报错，因为此时的 main.js 已经加载完毕
		setTimeout(function () {
			fun();
		}, 1000);
	</script>
</html>
```

这时候，就需要用到`onload`，它可以等 JavaScrip 文件资源加载完毕后再执行事件，最后，将`script.src` 放到`script.onload`的后面，等。

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>拖拽</title>
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
	<script type="text/javascript">
		function loadScript(url, callback) {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.onload = function () {
				callback();
			};
			script.src = url;
			document.head.appendChild(script);
		}
		// 定义一个匿名函数，使得系统在解析代码的时候，并不会解析函数中的 fun()
		loadScript('/js/main.js', function () {
			fun();
		});
	</script>
</html>
```
