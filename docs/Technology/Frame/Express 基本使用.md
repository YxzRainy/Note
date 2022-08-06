---
title: Express 基本使用
date: 2022-04-30
categories:
        - Tutorial
tags:
        - Frame
        - Express
---

# Express 基本使用

## 写在前面

使用 `Express`，我们可以方便、快速的创建 `Web` 网站的服务器或 `API` 接口的服务器。

### 主要实现

使用 Express 搭建一个简单的 Web 服务器。

## 安装

新建一个工作区，然后执行`npm install express --save`。

## 基本使用

新建 `Express.js` 。

```js
// 引入 express
const { json } = require('body-parser');
const express = require('express');

// 创建应用对象
const app = express();

// 设置端口号
const port = 8000;

// 创建路由规则，允许所有方 式的请求
app.all('/json-server', (request, response) => {
	// 设置响应头，允许跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	// 允许接收所有类型的响应头
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

// 监听端口
app.listen(port, () => {
	console.log(`服务已经启动`);
});
```

完成后在当前目录打开终端并输入：`node Express.js`来启动服务器。

```sh
PS E:\Code\Web\Test> node Express.js
服务已经启动
```

打开浏览器，输入 `localhost:8000` 即可出现 `Hello World!`
