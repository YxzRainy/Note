---
title: Ajax XMLHttpRequest
date: 2021-10-21 6:00:00
categories:
        - Ajax
tags:
        - 前端
        - 学习笔记
---

# XMLHttpRequest

该对象用于与服务器交互；通过它可以在不重新刷新页面的情况下请求特定 URL，获取数据，这样就可以使得网页在不影响用户操作的情况下，更新页面的局部内容。

## 判断浏览器是否支持 XHR

```js
// 如果浏览器支持 XHR
if (Xhr) {
...
}else{
    alert('Sorry, your browser doesn\'t support XMLHttpXhr');
}
```

## 创建 XHR 对象

```js
const xhr = new XMLHttpRequest();
```

## 方法

### readyState

返回 XMLHttpRequest 的当前所处状态的 **状态码**。

- 0 表示 XHR 对象已经被创建，但尚未调用 open() 方法。
- 1 表示 open 方法已经被调用完毕。
- 2 表示 send 方法已经被调用完毕，并且头部和状态已经可获得。
- 3 表示服务端已经返回了部分结果，但并没有返回所有结果，且 ResponseText 属性已经包含部分数据。
- 4 表示服务端已经返回了所有结果。

### status

返回 XMLHttpRequest 响应时的数字状态码。

200，状态码 >= 200 且 > 300 都算请求成功。

404

403

401

500

## statusText

状态字符串

### responseText

当一个请求被发送后，该属性会返回服务器端的文本。

### onreadystatechange

事件绑定，处理服务器返回的结果

该属性会在当 readyState 属性发生改变的时候被调用。

## 方法

### open()

用于初始化一个请求，设置请求方式与请求路径、请求参数。

```js
xhr.open('GET', 'http://localhost:8000/server?a=100&b=300');
```

`?a=100&b=300`就是请求参数 a 和 b，多个参数用`&`隔开。

### send()

将 xhr 的请求发送到服务端。

### getAllResponseHeaders()

获取所有响应头。

### setRequestHeader

设置请求头信息。

预定义的请求头，浏览器不会报错。

自定义的请求头，浏览器会有安全机制，会报错。

## 注意

如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回（不会等待响应返回）；如果是同步请求，则此方法会直到响应返回到达后才会返回。
