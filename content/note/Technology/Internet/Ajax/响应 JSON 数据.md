---
title: Ajax 响应 JSON 数据
date: 2022-04-30
categories:
        - Ajax
tags:
        - 前端
        - Note
---

# 响应 JSON 数据

## 服务端

```js
const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = 8000;
app.all('/json-server', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
	// 响应一个数据
	const data = {
		name: 'Rainy',
		age: '18',
	};
	// 将对象转换为字符串类型的数据
	let str = JSON.stringify(data);
	// 设置响应体，响应体只能是一个字符串
	response.send(str);
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
		<link rel="stylesheet" href="./css/main.css" />
		<title>服务端返回 JSON 数据</title>
	</head>

	<body>
		<button id="btn">点击键盘上的任意键，发送请求</button>
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

```JavaScript
const div = document.getElementById('result');
window.onkeydown = function () {
    const xhr = new XMLHttpRequest();
    // 自动转换，将响应的数据转换为json类型对象
    xhr.responseType = 'json'
    xhr.open('POST', 'http://localhost:8000/json-server')
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.setRequestHeader('name', 'Rainy')
    xhr.send('a=100&b=200');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                // 获取响应体中的内容
                div.innerHTML = xhr.response.age
            } else {

            }
        }
    }
}
```

### 手动获取响应体中的内容

```js
const div = document.getElementById('result');
window.onkeydown = function () {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8000/json-server');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader('name', 'Rainy');
	xhr.send('a=100&b=200');
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				// 手动转换，将响应的字符串转换为对象
				let data = JSON.parse(xhr.response);
				div.innerHTML = data.name;
			} else {
			}
		}
	};
};
```
