---
title: Express
date: 2022-04-30 6:00:00
updated: 2022-03-30 6:00:00
categories:
        - 后端框架
tags:
        - NPM 
        - 学习笔记

---

#  Express

基于 Node.js 的 Web 开发框架，可以快速地搭建一个完整功能的网站。

## 安装

新建一个工作区，输入`npm install express --save`即可。

## 基本使用

新建一个名为**Express.js**的 js 文件，输入代码：

```js
// 引入 express
const express = require('express')

// 创建应用对象
const app = express()

// 设置端口号
const port = 8000

// 创建路由规则
app.get('/', (request, response) => {
    response.send('Hello World!')
})

// 监听端口
app.listen(port, () => {
    console.log(`服务已经启动`)
})
```

完成后在当前目录下打开终端，输入`node Express.js`命令启动服务器。

```sh
PS E:\Code\Web\Test> node Express.js
服务已经启动
```

打开浏览器，输入 localhost:8000 即可出现`Hello World!`