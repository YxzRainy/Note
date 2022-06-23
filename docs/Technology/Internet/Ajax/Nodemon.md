---
title: Nodemon
date: 2022-04-30
categories:
        - Ajax
tags:
        - 前端

---

# Nodemon

当我们开发一个 node 后端服务时，每次更改服务端文件，均需重启一下服务才能生效。这使我们的开发效率降低了很多。Nodemon 的出现，放我们可以随时监听文件的变更，自动重启服务，我们开发时只需关注代码即可，不再需要手动重启服务。

## 安装

终端运行

```sh
npm install -g nodemon
```

## 使用

```sh
nodemon server.js
```
