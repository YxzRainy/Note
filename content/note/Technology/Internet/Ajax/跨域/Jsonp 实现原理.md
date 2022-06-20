---
title: Ajax Jsonp 实现原理
date: 2022-05-01
categories:
        - Ajax
tags:
        - 前端

---

# Jsonp 实现原理

`script`标签本身具有跨域的特性，JSONP 借助这个特定来解决的跨域问题。

## 服务端

```js
const { json } = require('body-parser');
const express = require('express');

const app = express();

const port = 8000;

app.all('/jsonp', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
	// 定义数据
	const data = {
		name: 'Rainy',
	};
	// 将数据转为字符串
	let str = JSON.stringify(data);
	// 响应结果，一个函数调用，函数已经在前端提前声明
	response.end(`handle(${str})`);
});

app.listen(port, () => {
	console.log(`服务已经启动`);
});
```

## HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
		<link rel="stylesheet" href="./css/main.css" />
		<title>jsonp 原理演示</title>
	</head>

	<body>
		<div id="result"></div>
	</body>
	<script>
		// 声明函数，对数据进行处理
		function handle(data) {
			const result = document.getElementById('result');
			result.innerHTML = data.name;
		}
	</script>
	<!-- 服务器路径引入 -->
	<!-- <script src="http://127.0.0.1:5500/js/main.js"></script> -->

	<!-- 用 script 标签发送请求，将响应的结果解析为 js 代码，如果响应的结果不是 js 代码 ，则会报错：Uncaught SyntaxError: Unexpected identifier，这是因为js 引擎无法解析响应的内容，比如一个字符串-->
	<script src="http://localhost:8000/jsonp"></script>
</html>
```

## CSS

```css
#result {
	width: 200px;
	height: 100px;
	border: 1px solid #999;
}
```
