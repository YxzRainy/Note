---
title: JavaScript Object
date: 2021-10-21 6:00:00
updated: 2021-10-23 22:30:00
categories:
        - 编程技术
tags:
        - 学习笔记
        - JavaScript
---

# Object

创建一个对象包装器；它的每个值都是对象的属性，且每个属性必须要有属性值，属性值的类型可以是任何数据类型。

## 创建 Object 的方式

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

### 使用 Object.create() 方法

Object.create()方法是 ECMAScript 5 中新增的方法，这个方法用于创建一个新对象。被创建的对象继承另一个对象的原型，在创建新对象时可以指定一些属性。

**注意**

使用 Object.create() 方法创建对象时，如果不是继承一个原有的对象，而是创建一个全新的对象，就要把 proto 设置为 null。

## Object 的方法

### toString()

toString() 方法用于返回一个表示该对象的字符串。

每个对象都有 toString() 方法，但 undefined 与 null 没有，因为它们不是对象。

当 number、string、boolean 原值类型的数据调用 toString() 方法时，都会先进行包装类。 因为 Number 对象覆盖了 Object 对象上的 toString() 方法（因为 Number 对象将 toString 方法重写了），所以它不继承自 Object.prototype.toString()。

另外，document.write() 方法，它也使用了 toString() 方法。

#### 重写 toSrting 方法

```JavaScript
demo.prototype = {
	toSrting: function () {
		// 重新写一个同名但不同功能的 toSrting 方法，覆盖构造函数 demo 的原型的 toSrting 方法
		return '重写的 toSrting()';
	},
};
function demo() {}
var a = new demo();
console.log(a.toSrting());
// 调用对象 a 的构造函数的原型对象中的重写后的 toString 方法
```

#### 重写 document.write() 方法

```JavaScript
var obj = Object.create(null);
obj.toString = function () {
	return '重写的 document.write() 方法';
};
document.write(obj);
```

### create()

该方法创建一个新对象， () 中可以指定这个新创建的对象的原型对象，即可以为 object 或 null，但不能为原始值。

使用 null 作为原型对象的对象，该对象没有原型（即没有属性 **proto** ），但它也是一个对象。

#### 重写 toSrting 方法

```JavaScript
var a = {};
var b = Object.create(a);
// 将对象 a 放入 creat 方法中，即将对象 b 的原型变为对象 a
```

### hasOwnProperty()

该方法用于判断指定对象的属性是否是该对象自身的，或是该对象的原型的属性，并会返回一个布尔值。该方法通常与 for in 语句配合使用。

### constructor()

该方法返回创建实例对象的 Object 构造函数的引用。注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。

当一个构造函数创建一个对象实例后，这个对象默认为空对象，但这个对象其中有一个系统隐式的属性 constructor，该属性表示该对象是用哪一个构造函数所创建的，这个属性的指向是可以更改的。

```JavaScript
function peen() {}
Demo.prototype = {
	constructor: peen,
	// 更改构造函数 Demo 的 construction 指向为 peen。
};
function Demo() {}
var apple = new Demo();
console.log(apple.constructor);
// 返回函数 peen。
```
