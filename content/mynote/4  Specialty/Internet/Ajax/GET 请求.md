---
title: Ajax GET 请求
date: 2022-04-30 6:00:00
updated: 2022-04-30 6:00:00
categories:
        - Ajax
tags:
        - 前端
        - 学习笔记

---

# GET 请求

使用 GET 的方式向服务端发送一个请求。

## 服务端

```js
const express = require('express')
const app = express()
const port = 8000
app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('Hello World! GET')
})
// 允许 get 方式的请求
app.get('/server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('Hello World!')
})
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
        <title>GET 请求</title>
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
    const xhr = new XMLHttpRequest();
    // 请求方式为 get
    xhr.open('GET', 'http://localhost:8000/server?a=100&b=300')
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.response);
                div.innerHTML = xhr.response
            } else {

            }
        }
    }
}
```

