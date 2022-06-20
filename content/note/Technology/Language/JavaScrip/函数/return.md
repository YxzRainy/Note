---
title: JavaScript return
date: 2021-10-21
categories:
        - Note
tags:
        - JavaScript
---

# return

用于终止函数的执行，并指定函数的返回值。若没有指定返回值，则返回 `undefined`。

#### 字符串转数字

```JavaScript
var n = '18';
function demo(n) {
	return +n;
	// 用加号 + 隐式调用 Number() 方法，将字符串 n 转换为数字并作为返回值
}
var a = demo(n);
console.log(typeof a + ':' + a);
```
