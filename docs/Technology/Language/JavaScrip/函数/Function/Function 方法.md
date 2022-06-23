---
title: JavaScript Function 方法
date: 2021-10-21
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# Function 方法

## call()

改变调用它的构造函数的 `this` 指向。并指定构造函数的采纳书

```JavaScript
function Demo(name, age) {
	this.name = name;
	this.age = age;
}
var huge = new Demo('Su', 100);
console.log(huge);

var test = {};

// 改变 Demo() 中 this 的指向为对象 test，
Demo.call(test, 'Rainy', 100);

console.log(test);
```

### 实现继承

```JavaScript
function Tyre(size, style) {
	this.size = size;
	this.style = style;
}

function Interior(color, texture) {
	this.color = color;
	this.texture = texture;
}

function Model(height, width, length, type) {
	this.height = height;
	this.width = width;
	this.length = length;
	this.type = type;
}

function Car(size, style, color, comfort, length, width, height, type) {
	Tyre.call(this, size, style);
	Interior.call(this, color, comfort);
	Model.call(this, length, width, height, type);
}
var Lamborghini = new Car(50, '线性', 'black', '真皮', 1.7, 2.5, 5.2, 'SuperRun');

console.log(Lamborghini);

```

## apply()

用于调用一个构造函数并改变该函数 `this` 的指向，并指定一个类数组作为构造函数的参数列表。

该方法的语法和作用与 `apply()` 方法类似，唯一的区别就是传参的列表不同， `call()` 方法接收的是函数的形参列表，而 `apply()` 方法接收的是函数的 `arguments`。

```JavaScript
function Demo(name, age) {
	this.name = name;
	this.age = age;
}
var house = new Demo('Rainy', 100);
console.log(house);
var test = {};

Demo.apply(test, ['zxy', 100]);
console.log(test);

```

### 实现继承

```JavaScript
function Tyre(size, style) {
	this.size = size;
	this.style = style;
}

function Interior(color, texture) {
	this.color = color;
	this.texture = texture;
}

function Model(height, width, length, type) {
	this.height = height;
	this.width = width;
	this.length = length;
	this.type = type;
}

function Car(size, style, color, comfort, length, width, height, type) {
	Tyre.apply(this, [size, style]);
	Interior.apply(this, [color, comfort]);
	Model.apply(this, [length, width, height, type]);
}
var Lamborghini = new Car(50, '线性', 'black', '真皮', 1.7, 2.5, 5.2, 'SuperRun');
console.log(Lamborghini);

```

## bind()

返回一个新的函数，并改变新函数的 `this` 指向，而其余参数将作为新函数的参数，供调用时使用。
