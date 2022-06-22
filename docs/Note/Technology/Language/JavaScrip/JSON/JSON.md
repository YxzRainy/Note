---
title: JavaScrip JSON
date: 2022-04-30
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# JOSN

一种轻量级的数据传输格式。本质上就是对象，用来传输的对象。

它在与后端的数据交互中有较为广泛的应用。

## 优点

JSON 比 XML 更小、更快，更易解析。

## 语法

客户端与服务端的交互数据无非就是两种：

- 数组
- 对象

于是乎，JSON 所表示的数据要么就是对象，要么就是数组。

### JSON 数组

```js
var employees = [
	{ firstName: 'Bill', lastName: 'Gates' },
	{ firstName: 'George', lastName: 'Bush' },
	{ firstName: 'Thomas', lastName: 'Carter' },
];
```

### JSON 对象

```js
var obj = {
	age: 20,
	str: 'zhongfucheng',
	method: function () {
		alert('我爱学习');
	},
};
```
