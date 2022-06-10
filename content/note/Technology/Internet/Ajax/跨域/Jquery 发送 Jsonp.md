---
title: Jquery 发送 Jsonp
date: 2022-05-01
categories:
        - Ajax
tags:
        - 前端
        - Note
---

# Jquery 发送 Jsonp

## 服务端

```js
const { json } = require('body-parser');
const express = require('express');

const app = express();

const port = 8000;

app.all('/jquery_jsonp', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
	// 定义数据
	const data = {
		city: '贵州',
	};
	// 将数据转为字符串
	let str = JSON.stringify(data);
	// 接受 callback
	let cb = request.query.callback;
	// 响应结果，
	response.end(`${cb}(${str})`);
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
		<title>Jquery 发送 Jsonp</title>
	</head>

	<body>
		<button id="btn">点击按钮，发送 Jsonp 请求</button>
		<div id="result"></div>
	</body>
	<script src="./js/main.js"></script>
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

## JavaScrip

```js
$('#btn').click(function () {
	$.getJSON('http://localhost:8000/jquery_jsonp?callback=?', function (data) {
		$('#result').html(`
        我现在在：${data.city}`);
	});
});
```
