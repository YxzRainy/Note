---
title: Axios 发送 Ajax 请求
date: 2022-05-01
categories:
        - Ajax
tags:
        - 前端
        - Note
---

# Axios 发送 Ajax 请求

## 服务端

```js
const { json } = require('body-parser');
const express = require('express');

const app = express();

const port = 8000;

app.all('/axios', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');

	const data = { name: 'Rainy' };
	const str = JSON.stringify(data);
	response.send(data);
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
		<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.js"></script>
		<link rel="stylesheet" href="./css/main.css" />
		<title>Axios 发送 Ajax 请求</title>
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

```CSS
#result{
    width: 200px;
    height: 100px;
    border: 1px solid #999;
}
```

## JavaScrip

```js
// get 方式
$('#btn').click(function () {
	axios.get('http://localhost:8000/axios', {
		// url 参数
		params: {
			ID: 12345,
		},
		// 请求头
		headers: {
			name: 'Su',
		},
	})
		// 数据返回和处理
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
});

// post 方式
$('#btnTwo').click(function () {
	// url
	// 请求体
	// 其他配置
	axios.post(
		'http://localhost:8000/axios',
		{
			username: 'rainy',
			password: 1234,
		},
		{
			// url 参数
			params: {
				id: 200,
				vip: 10,
			},
			// 请求头
			headers: {
				age: 19,
			},
		}
	);
});

// 通用方式
$('#btnThree').click(function () {
	axios({
		method: 'post',
		url: 'http://localhost:8000/axios',
		// url 参数
		params: {
			vip: 100,
		},
		// 头信息
		headers: {
			a: 13456,
		},
		// 请求体
		data: {
			firstName: 'Fred',
			lastName: 'Flintstone',
		},
	}).then((response) => {
		console.log(response);
	});
});
```
