---
title: JavaScript Function
date: 2021-10-21 6:00:00
updated: 2021-10-23 22:43:00
categories:
        - 编程技术
tags:
        - 学习笔记
        - JavaScript
---

# Function

每个 JavaScript 函数实际上都是一个 Function 对象。Function 构造函数创建一个新的 Function 对象。

全局的 Function 对象没有自己的属性和方法，但是，因为它本身也是一个函数，所以它也会通过原型链从自己的原型链 Function.prototype 上继承一些属性和方法。

## Function 的方法

### call()

该方法用于调用一个构造函数并改变该函数 this 的指向，并将该函数的参数书写到 this 之后。

#### 注意

在 x.call() 中，x 为被调用的构造函数，() 中第一个参数为函数 x 中的 this 指向，之后的参数为被调用函数的形参。

该方法的语法和作用与 apply() 方法类似，唯一的区别就是传参的列表不同， call() 方法接收的是函数的形参列表，而 apply() 方法接收的是函数的 arguments。

```JavaScript
function demo(name, age) {
	this.name = name;
	this.age = age;
	// 构造函数 demo 中的 this 指向被下面的 call 方法变为对象 test，
	// 所以这里相当于 test.name 与 test.age
}
var a = new demo('zxy', 100);
var test = {};
demo.call(test, 'zxy', 100);
// 用 call 方法改变构造函数 demo 中 this 的指向为对象 test，
// 使对象 test 拥有构造函数 demo 的属性；类似于对象 test 将函数 demo 的属性与方法借来使用。
console.log(test);
```

#### call 的使用

```JavaScript
function Tyre(size, style) {
	this.size = size;
	this.style = style;
}

function Interior(color, texture) {
	this.color = color;
	this.texture = texture;
}

function Model(height, width, lang, type) {
	this.height = height;
	this.width = width;
	this.type = type;
}

function Car(size, style, color, comfort, length, width, height, type) {
	Tyre.call(this, size, style);
	//隐式执行 var this = {size:"",style:""}
	Interior.call(this, color, comfort);
	Interior.call(this, length, width, height, type);
	// 使用 call 分别改变函数 Tyre、Interior、Interior 的指向为 this（Car），使得 Car 可以使用它们的形式参数
}
var Lamborghini = new Car(50, '线性', 'black', '真皮', 1.7, 2.5, 5.2, 'SuperRun');
// 用构造函数 Car 创建对象 Lamborghini。
```

### apply()

apply() 用于调用一个构造函数并改变该函数 this 的指向，并将一个数组（或类似数组对象）作为该函数的参数书写到 this 之后。

#### 注意

在 x.apply() 中，x 为被调用的构造函数，() 中第一个参数为函数 x 中的 this 指向，之后的参数为与被调用函数对应数量的形参，且这些形参必须包含在数组中。

apply() 方法的作用和 call() 方法类似，唯一的区别就是传参的列表不同， call() 方法接收的是函数的形参列表，而 apply() 方法接收的是函数的 arguments。

```JavaScript
function demo(name, age) {
	this.name = name;
	this.age = age;
	// 构造函数 demo 中的 this 指向被下面的 apply 方法变为了对象 test，
	// 所以这里相当于 test.name 与 test.age
}
var a = new demo('zxy', 100);
var test = {};

demo.apply(test, ['zxy', 100]);
// 用 apply 方法改变构造函数 demo 中 this 的指向为对象 test，
// 使对象 test 拥有构造函数 demo 的属性；类似于对象 test 将函数 demo 的属性与方法借来使用
console.log(test);
```

#### apply 的使用

```JavaScript
function Tyre(size, style) {
	this.size = size;
	this.style = style;
}

function Interior(color, texture) {
	this.color = color;
	this.texture = texture;
}

function Model(height, width, lang, type) {
	this.height = height;
	this.width = width;
	this.type = type;
}

function Car(size, style, color, comfort, length, width, height, type) {
	Tyre.apply(this, [size, style]); //隐式执行 var this ={size:"",style:""}
	Interior.apply(this, [color, comfort]);
	Model.apply(this, [length, width, height, type]);
	// 使用 apply 分别改变函数 Tyre、Interior、Interior 的指向为 this（Car），使得 Car 可以使用它们的形式参数。
}
var Lamborghini = new Car(50, '线性', 'black', '真皮', 1.7, 2.5, 5.2, 'SuperRun');
```
