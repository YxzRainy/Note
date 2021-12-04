---
title: JavaScript XMLHttpRequest
date: 2021-10-21 6:00:00
updated: 2021-10-23 22:32:00
categories:
        - 编程技术
tags:
        - 学习笔记
        - JavaScript
---

# XMLHttpRequest

该对象用于与服务器交互；通过它可以在不重新刷新页面的情况下请求特定 URL，获取数据，这样就可以使得网页在不影响用户操作的情况下，更新页面的局部内容。

## XMLHttpRequest 的属性

### readyState

返回 XMLHttpRequest 的当前所处状态的 **状态码**。

#### 状态码

- 0 表示 XHR 对象已经被创建，但尚未调用 open() 方法。
- 1 表示 XHR 对象的 open 方法已经被调用。
- 2 表示 XHR 对象的 send 方法已经被调用，并且头部和状态已经可获得。
- 3 表示 XHR 对象的服务端的文本正在下载中，且 responseText 属性已经包含部分数据。
- 4 表示 XHR 对象的服务端的文本下载操作已完成。

### status

返回了 XMLHttpRequest 响应时的数字状态码。

### responseText

当一个请求被发送后，该属性会返回服务器端的文本。

### onreadystatechange

该属性会在属性 readyState 发生改变的时候被调用。

## XMLHttpRequest 的方法

### open

用于初始化一个请求。

### send

用于向服务端发送一个 HTTP 请求。

#### 注意

如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回（不会等待响应返回）；如果是同步请求，则此方法会直到响应返回到达后才会返回。
