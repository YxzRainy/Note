---
title: 原生 Jsonp 的实现
date: 2022-05-01 6:00:00
categories:
        - Ajax
tags:
        - 前端
        - 学习笔记
---

# 原生 Jsonp 的实现

## 服务端

```js
const { json } = require('body-parser');
const express = require('express');

const app = express();

const port = 8000;

app.all('/check', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', '*');
	// 定义数据
	const data = {
		exist: 1,
		msg: '用户已经存在',
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

```HTML
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
        <link rel="stylesheet" href="./css/main.css">
        <title>jsonp 原理演示</title>
    </head>

    <body>
        用户名：<input id="in" type="text">
        <p id="text"></p>
    </body>
    <script src="./js/main.js"></script>


</html>
```

## JavaScrip

```js
const input = document.getElementById('in');
const text = document.getElementById('text');
// 声明函数，对数据进行处理
function handle(data) {
	text.innerHTML = data.msg;
	input.style.border = 'solid 1px #f00';
}

input.onblur = function () {
	// 获取用户的输入值
	let username = this.value;
	// 向服务器发送请求，检测用户名是否存在
	// 创建 script 元素
	const script = document.createElement('script');
	// 设置 script 的 src 属性
	script.src = 'http://localhost:8000/check';
	// 将 script 插入到文档中
	document.body.appendChild(script);
};
```
