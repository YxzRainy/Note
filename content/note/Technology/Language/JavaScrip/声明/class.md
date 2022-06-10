---
title: JavaScrip class
date: 2022-06-05
categories:
        - 编程语言
tags:
        - 前端
        - Note
        - JavaScript
---

# class

创建一个基于原型继承类。

```js
class Phone {
	// 调用构造方法
	constructor(height, width) {
		this.area = height * width;
	}

	fun() {
		console.log('i am function');
	}
}

let apple = new Phone(4, 3);
apple.fun();
```
