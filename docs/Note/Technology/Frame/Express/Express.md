---
title: Express
date: 2022-04-30
categories:
        - 后端框架
tags:
        - NPM

---

# Express

基于 Node.js 的 Web 开发框架，可以快速地搭建一个完整功能的网站。

## 安装

新建一个工作区，输入`npm install express --save`即可。

## 基本使用

新建一个名为**Express.js**的 js 文件，输入代码：

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

完成后在当前目录下打开终端，输入`node Express.js`命令启动服务器。

```sh
PS E:\Code\Web\Test> node Express.js
服务已经启动
```

打开浏览器，输入 localhost:8000 即可出现`Hello World!`
