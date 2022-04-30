---
title: npm install 没反应
date: 2022-04-30 6:00:00
updated: 2022-04-30 6:00:00
categories:
        - NodeJs
tags:
        - NPM 
        - 学习笔记

---

# npm install 没反应

运行`npm install`时，出现以下错误

```sh
 idealTree:Test: sill idealTree buildDeps
```

## 解决办法

### 设置为淘宝镜像

```sh
npm config set registry https://registry.npm.taobao.org 
```

### 检查是否设置成功

```sh
E:\Code\Web\Test>npm config get registry
https://registry.npmjs.org/
```

### 继续安装

```sh
npm install
```

安装成功！