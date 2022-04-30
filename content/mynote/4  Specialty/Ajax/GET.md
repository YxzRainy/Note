---
XMLtitle: GET
date: 2022-04-30 6:00:00
updated: 2022-04-30 6:00:00
categories:
        - Ajax
tags:
        - 前端
        - 学习笔记

---

# GET

使用 GET 的方式向服务端发送一个请求。

## 服务端

```js

// 引入 express
const express = require('express')

// 创建应用对象
const app = express()

// 设置端口号
const port = 8000

// 创建路由规则
// server 表示路径
app.get('/server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体
    response.send('Hello World!')
})

// 监听端口
app.listen(port, () => {
    console.log(`服务已经启动`)
})
```

## HTML

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/main.css">
        <title>Document</title>
    </head>

    <body>
        <button id="btn">点击发送请求</button>
        <div id="result"></div>

    </body>
    <script src="./js/main.js"></script>
</html>
```

## CSS

```css
#result{
    width: 200px;
    height: 100px;
    border: 1px solid #999;
}
```

## JavaScript

```js
const btn = document.getElementById('btn');
const div = document.getElementById('result');

btn.onclick = function () {
    // 创建对象
    const xhr = new XMLHttpRequest();
    // 初始化
    xhr.open('GET', 'http://localhost:8000/server')
    // 发送
    xhr.send();
    // 事件绑定
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.status)
                console.log(xhr.statusText)
                console.log(xhr.getAllResponseHeaders)
                console.log(xhr.response);
                div.innerHTML = xhr.response
            } else {

            }
        }
    }

}
```

