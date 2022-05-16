---
title: JavaScript IIFE
date: 2021-10-21 6:00:00
updated: 2021-10-23 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# IIFE

立即执行函数，是一种在被定义后就会立即执行的函数，不需要被调用，执行完毕后就会被立即释放。

用于创建一个独立的作用域，主要用于初始化功能。这个作用域中的变量，外面的任何位置访问不到，**用于避免变量污染和命名冲突**。

它具有普通的函数一样的功能（参数、返回值、执行期上下文等）。

只有函数表达式可以被执行符 () 执行，被执行符所执行的函数表达式的函数名会被自动忽略，即该函数表达式变为了 IIFE。

多个 IIFE 之间要加分号。

```JavaScript
var demo = (function (a, b) {
	// 用变量 demo 接收 IIFE 的返回值
	a = Number(a);
	b = Number(b);
	var c = (a + b) * 10;
	// 将变量 a 与 b 的和乘 10 的结果赋给变量 c
	return c;
	// 将变量 c 作为该 IIFE 的返回值
})(10, 20);
// 10 与 20 为实参
console.log(demo);
```

#### 立即释放的特性

```JavaScript
var a = (function demo() {
	// 用变量 a 接收函数 demo，因函数 demo 执行一次后就会被释放，则会导致变量 a 的值变为 undefined
	// 因此再次调用变量 a 会返回 undefined
	console.log('函数的第一次调用');
})();
// 使用执行符 () 执行这个函数表达式，使得这个函数变为 IIFE。
console.log('函数的第二次调用:' + a);
// 因为变量 a 的值在执行一次后被释放了，所以再次调用变量 a 会返回 undefined
```
