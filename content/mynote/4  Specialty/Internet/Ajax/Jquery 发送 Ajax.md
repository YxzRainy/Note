---
title: Jquery 发送 Ajax
date: 2022-05-01 6:00:00
categories:
        - Ajax
tags:
        - 前端
        - 学习笔记
---

# Jquery 发送 Ajax

## 服务端

## HTML

```HTML
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
        <link rel="stylesheet" href="./css/main.css">
        <title>Jquery 发送 Ajax</title>
    </head>

    <body>
        <button id="btn">点击按钮，发送 GET 请求</button>
        <button id="btnTwo">点击按钮，发送 POST 请求</button>
        <button id="btnThree">点击按钮，发送通用方式请求</button>

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
// get 方式
$('#btn').click(function () {
	// 路径
	// 参数
	// 回调，对响应体的操作
	// 响应体类型
	$.get(
		'http://localhost:8000/jquery',
		{ a: 100, b: 200 },
		function (data) {
			console.log(data);
		},
		'json'
	);
});

// post 方式
$('#btnTwo').click(function () {
	$.post(
		'http://localhost:8000/jquery',
		{ a: 100, b: 200 },
		function (data) {
			console.log(data);
		},
		'json'
	);
});

// 通用方式
$('#btnThree').click(function () {
	$.ajax({
		// url
		url: 'http://localhost:8000/jquery',
		// 参数
		data: { a: 200, b: 300 },
		// 响应体类型
		dataType: 'json',
		// 请求类型
		type: 'get',
		// 请求成功后的h
		success: function (data) {
			console.log(data.name);
		},
		// 请求失败的回调
		error: function () {
			console.log('出错');
		},
		// 标头信息
		headers: {
			a: 1000,
			c: 2000,
		},
	});
});
```
