---
title: Promise 方法
date: 2022-06-05
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# Promise 方法

## than()

`then()` 返回一个 Promise 对象。它有两个参数：Promise 调用`resolve()` 和调用 `rejecte()` 情况的回调函数。

### 返回值

`than()`的返回值如果是 Promise 对象，那么该 Promise 对象的执行结果会作为当前 `than()` 的返回值。

```js
let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 1000);
});

let result = p.then(
	(value) => {
		console.log(value);
		return new Promise((resolve, reject) => {
			reject('fail');
		});
	},
	(reason) => {
		console.error(reason);
	}
);

// rejected
// "fail"
console.log(result);
```

### 返回非 Promise 对象

`than()`的返回值如果不是 Promise 对象，则 PromiseStatus 为 `fulfilled`，PromiseResult 为这个非 Promise 对象的值。

```js
let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 1000);
});

let result = p.then(
	(value) => {
		console.log(value);
		return '非 Promise 对象';
	},
	(reason) => {
		console.error(reason);
	}
);

// fulfilled
// 非 Promise 对象
console.log(result);
```

### 抛出错误

```js
let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 1000);
});

let result = p.then(
	(value) => {
		console.log(value);
		throw new Error('error');
	},
	(reason) => {
		console.error(reason);
	}
);

// rejected
// Error: error at http://127.0.0.1:5502/Study/main.js
console.log(result);
```

### 链式调用

可以避免回调地狱。

```js
let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 1000);
});

p.then((value) => {
	console.log(value);
	return new Promise((resolve, reject) => {
		resolve('success2');
	});
})
	.then((value) => {
		console.log(value);
		return new Promise((resolve, reject) => {
			resolve('success3');
		});
	})
	.then((value) => {
		console.log(value);
	});
```

## catch()

返回 promise 对象，并对调用`reject()`后的情况作处理。

```js
let p = new Promise((resolve, reject) => {
	reject('error');
});

p.catch((err) => {
	console.log(err);
});
```

## allSettled()

不管传入的 promise 是成功还是失败，它始终返回一个成功的 promise，这个 promise 的值是多个 promise 的结果和状态，这些结果和状态都被作为对象存储到一个数组中并返回。

## all()

当传入的 promise 都成功，返回的 promise 才会成功，并且会将所有成功的 promise 的结果和状态作为数组返回。

如果有一个 promise 失败，则返回的 promise 也失败，并且会将失败的 promise 的结果作为数组返回
