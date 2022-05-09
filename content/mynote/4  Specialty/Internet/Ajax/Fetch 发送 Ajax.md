---
title: Fetch 发送 Ajax
date: 2022-05-01 6:00:00
updated: 2022-05-01 6:00:00
categories:
        - Ajax
tags:
        - 前端
        - 学习笔记

---

# Fetch 发送 Ajax

## 服务端

```CSS
const { json } = require('body-parser')
const express = require('express')

const app = express()

const port = 8000

app.all('/fetch', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = { name: 'Rainy' }
    const str = JSON.stringify(data);
    response.send(data)
})


app.listen(port, () => {
    console.log(`服务已经启动`)
})
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
        <script src="https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.js"></script>
        <link rel="stylesheet" href="./css/main.css">
        <title>fetch 发送 Ajax 请求</title>
    </head>

    <body>
        <button id="btn">点击按钮，发送请求</button>


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

// fetch方式
$('#btn').click(function () {
    fetch('http://localhost:8000/fetch', {
        // 请求方式
        method: 'post',
        // 请求头
        headers: {
            name: 'rainy'
        },
        // 请求体
        body: 'username=admin'
    }).then(response => {
        // 返回字符串
        // return response.text();
        // 返回json对象
        return response.json();
    }).then(response => {
        console.log(response)
    })
})
```

