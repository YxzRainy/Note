---
title: JavaScript Object
date: 2021-10-21
categories:
        - 编程语言
tags:
        - 前端
        - Note
        - JavaScript
---

# Object

创建一个对象包装器；它的每个值都是对象的属性，且每个属性必须要有属性值，属性值的类型可以是任何数据类型。

## 创建方式

### 对象字面量

```JavaScript
var n = '世雨';
var a = '';
var object = {
	//var obj ={} 相当于 var obj = new Object()，一般情况都使用前者。
	b: '臣',
	// b 为属性名，臣为属性值
	c: n,
};
a = object.b + object.c;
// 用变量 a 接收对象 object 的属性 b 与 c 的值。
console.log(a);
// 返回臣世雨
```

### 工厂模式

```JavaScript
function ThreeOne(color) {
	this.color = color;
	// color为可选参数
	this.name = 'bird';
	this.width = '500';
	this.height = '1000';
	this.weight = '666kg';
	this.health = '100';
	this.damage = function () {
		this.health--;
		console.log('我被损坏了');
	};
}
var b = new ThreeOne('red');
// 用 new 调用构造函数 ThreeOne，并返回一个对象实例，再将这个对象实例赋给变量 b。
// 使用 new 时，它后面的函数调用就不是正常的调用，而是依次执行下面的步骤：
// var this = { } 隐式创建一个空对象 this
// AO{ this: { color : "demo"} } 执行构造函数中的代码，并将形参实参统一，this.xxx = xxx
// return this; 最后隐式返回 this，这里可以手动使用 return 将隐式返回变为显式返回，
// 但用 new 创建的对象必须 return 引用值（对象），若 return 原始值的话则无效。
var c = new ThreeOne('yellow');
// 虽然对象 c 与对象 b 都是用的构造函数 ThreeOne 所构造出的对象，但它们是完全不一样的两个对象。
console.log(b.color);
// 返回 red。
console.log(c.color);
// 返回 yellow。

b.damage();
// 调用对象 b 的 damage 的属性。
console.log(b.health);
// 返回 99。
```

### create()

Object.create()方法是 ECMAScript 5 中新增的方法，这个方法用于创建一个新对象。被创建的对象继承另一个对象的原型，在创建新对象时可以指定一些属性。

**注意**

使用 Object.create() 方法创建对象时，如果不是继承一个原有的对象，而是创建一个全新的对象，就要把 proto 设置为 null。
