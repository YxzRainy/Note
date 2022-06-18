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

## 类继承

```js
class Polygon {
	constructor(height, width) {
		this.name = 'Polygon';
		this.height = height;
		this.width = width;
	}
	call() {
		console.log('father');
	}
}

class Square extends Polygon {
	constructor(name) {
		super(10, 20);
		this.name = name;
	}
    
	// 子类重写父类 call()
	call() {
		console.log('son');
	}
}

const xm = new Square('Rainy');
console.log(xm);

xm.call();
```

## get 和 set
