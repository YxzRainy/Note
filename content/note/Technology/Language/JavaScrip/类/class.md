---
title: JavaScrip class
date: 2022-06-05
categories:
        - Note
tags:
        - 前端

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

## constructor()

用于创建和初始化`class`创建的对象的特殊方法。

## static

定义静态方法。静态方法不能通过类的实例调用，而应该通过类本身调用。

```js
class Phone {
	static name = '静态方法';
}

let apple = new Phone(4, 3);
console.log(apple.name);
console.log(Phone.name);
```

## 私有类域

类属性在默认情况下是[`公有`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)的，但可以使用增加哈希前缀 `#` 的方法来定义私有类字段
