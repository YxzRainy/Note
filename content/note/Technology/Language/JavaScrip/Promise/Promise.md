---
title: Promise
date: 2022-06-03
categories:
        - 编程语言
tags:
        - 前端

        - JavaScript
---

# Promise

Promise 说得通俗一点就是一种写代码的方式，并且是用来写 JavaScript 编程中的异步代码。

可以封装 ajax.

## async

`async()`是使用`async`声明的函数。 返回值是一个 promise，且这个 promise 的结果由 `async()`的返回值决定。

如果`async()`的返回值不是 promise，则一定返回一个成功的 promise。

如果`async()`的返回值是 promise，则返回的结果由这个作为返回值的 promise  决定。

```js
async function fun() {
	return new Promise((resolve, reject) => {
		reject('失败');
	});
}

const result = fun();

console.log(result);
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: "失败"

```



## await 

暂停当前`async()`的执行，等待 Promise 处理完成再继续执行 `async()`。



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
