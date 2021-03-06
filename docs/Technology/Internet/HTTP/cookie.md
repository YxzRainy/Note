---
title: cookie
date: 2022-05-30
categories:
        - 网络技术
tags:
        - 服务器

---

# cookie

cookie 是网站的服务器发送到用户浏览器并保存在本地的一个小文件，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。

cookie 保存了**你登录网站时的用户名、密码**，有了它，只需要在下次请求服务器时带着 cookie 发送，服务器就不会再让你重新输入用户名、密码登录。

cookie 是设计用来在**服务端**和**客户端**进行**信息传递**的。

## 无法跨浏览器读取

我们使用 chrome 浏览器去访问 github 时，那么 chrome 浏览器会得到一个 cookie，当你下次访问 github 时，就无需再重新输入用户名和密码。但如果你换 Firefox 浏览器去访问 github，那么你依旧需要重新输入用户名和密码，这是因为 cookie 无法跨浏览器读取。即对于相同的网站，每个浏览器都有属于它自己的 cookie。

## 作用

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）
