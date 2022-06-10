---
title: HTTP
date: 2022-04-30
categories:
        - 网络技术
tags:
        - 服务器
        - Note
---

# HTTP

超文本传输协议。详细规定了浏览器和万维网服务器之间互相通信的规则。

## 请求报文

浏览器向服务器发送内容的过程叫做请求。

请求报文一般包含四部分：**行、头、空行、体**。

### 请求行

请求类型：GET、POST 等。

URL 。

HTTP 协议的版本。

```json
GET
/ValidateLogin?&userI=4234234&password=234234 HTTP/1.1
```

### 请求头

请求头的格式通常时`键名:键值`

```json
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-
Cookie: Hm_lvt_a2e2e465098d883036e3cfad66f7203d=1633793709; Hm_lvt_bf329994f1e3ebf56f3712e11a46cb4a=1633794836; Hm_lvt_8516e418a4e3ac3474b3c13bdb4687e7=1638612924; _uab_collina=164345858532791240726438
Host: 127.0.0.1:5500
Content-Type # 设置请求体n类型
```

### 请求空行

空行必须有。

### 请求体

GET 的请求体是空的。

POST 的请求体可以不为空，也可以为空。

## 响应报文

服务器给客户端/浏览器返回结果的过程叫做响应。

响应报文一般包含四部分：**行、头、空行、体**。

### 响应行

HTTP 版本

响应状态码

响应状态字符串

```json
HTTP/1.1
200
OK
```

## 响应头

```json
Server: JSP3/2.0.14
Date: Sat, 30 Apr 2022 08:16:27 GMT
Content-Type: text/javascript; charset=utf-8
Content-Length: 15758
Content-Encoding: gzip
```

## 响应空行

必须有

## 响应体

主要的返回结果
