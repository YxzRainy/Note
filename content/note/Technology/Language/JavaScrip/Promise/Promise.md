---
title: Promise
date: 2022-06-03
categories:
        - 编程语言
tags:
        - 前端
        - Note
        - JavaScript
---

# Promise

Promise 说得通俗一点就是一种写代码的方式，并且是用来写 JavaScript 编程中的异步代码。

可以封装 ajax.

## 基本使用

```js
let p = new Promise((resolve, reject) => {
	if (0) {
		// 成功
		resolve('success');
	} else {
		// 失败
		reject('fail');
	}
});

p.then(
	// 如果 p 调用了 resolve()
	(value) => {
		console.log(value);
	},
	// 如果 p 调用了 reject()
	(reason) => {
		console.error(reason);
	}
);
```

## 读取文件

```js
let fs = require('fs');
let p = new Promise((resolve, reject) => {
	fs.readFile('./test.md', (err, data) => {
		if (err) {
			reject(err);
		} else {
			resolve(data);
		}
	});
});

p.then(
	(value) => {
		// 将二进制转换为 字符串
		console.log(value.toString());
	},
	(reason) => {
		console.error(reason.toString());
	}
);
```
