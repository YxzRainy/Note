---
title: JavaScript 继承方式
date: 2021-10-21
categories:
        - 编程语言
tags:
        - 前端

        - JavaScript
---

# 继承方式

## 类继承

## 原型链继承

**缺点**

会使一个对象过多继承一些没用或不需要的属性，则会导致代码的执行效率大大降低。反对反对反对法大幅度发反对发的

```JavaScript
Grand.prototype.blue = 'blue';

function Grand() {}

var grandfather = new Grand();

Father.prototype = grandfather;

function Father() {
	this.red = 'red';
	this.money = {
		card: 'pencil',
	};
	this.value = '100';
}

var father = new Father();

Son.prototype = father;

function Son() {
	this.orange = 'orange';
}
var son = new Son();

console.log(son.orange);

// 返回 son 的原型 father 上的 red。
console.log(son.red);

// 返回  son 的原型 father 的原型 grand 上的 blue。
console.log(son.blue);

// 调用 son 给原型对象 father 的属性 money（money 的值必须是引用值）增加一个 box。
son.money.box = 'bear';

console.log(son.money.box);

// 先将原型 father 的 value 拷贝给自身，然后拿着拷贝过来的 value 进行自增。
// 因此自增结果并不会影响原型 father 上的 value。
son.value++;
son.value++;

console.log(son.value);
// return 102
console.log(father.value);
// return 100 未改变

```

## 构造函数继承

使用 `call()` 与 `apply()` 实现继承（伪造对象）。

有需求时可以使用该方法实现继承。

**缺点**

不能借用其构造函数的原型（不算继承，只是借用）。

视觉上省去了部分代码，但调用对象时，该对象的构造函数则会多调用一个或多个构造函数，因此也会使代码的执行效率大大降低。

## 共享原型继承

将一个函数的原型指向共享给另一个函数的原型，使这个两个原型都指向同一个原型（即它们都继承自同一个原型），即这两个函数的原型共用一个原型。

**缺点**

不能单独给其中一个函数的原型添加私有属性，即添加一个函数的原型的属性时，另一个函数的原型也可以调用这个属性。

```JavaScript
//  Demo() 和 Test() 的共有原型对象
Demo.prototype.name = 'windy';
Demo.prototype.age = 18;
function Demo() {
	this.name = 'tiger';
}

function Test() {}

// 用函数 inherit 封装一个有继承功能的函数。
function inherit(a, b) {
	a.prototype = b.prototype;
}

// 将 Demo() 的原型共享给 Test() , 使这两个函数共用一个原型。
inherit(Test, Demo);

// 公共属性 male
Test.prototype.male = 'boy';

// 构造实例
let demo = new Demo();
let test = new Test();

// return 18
console.log(demo.age);

// return 18
console.log(test.age);

// return windy
console.log(test.name);

// return boy ，公共属性
console.log(demo.male);
console.log(test.male);

```

## 圣杯模式继承

用来继承已有原型对象（A.prototype）中的成员（主要是公用方法），同时根据自己的需求修改原型对象（A.prototype），以定制符合我们要求的构造函数 B，这个修改对已有的实例（a1，a2，…）不会产生影响。

**基本没有缺点**

```JavaScript
// 但建议使用这种写法：
var inherit = (function () {
	// 私有化 Rain，用作于中间层
	function Rain() {}

	return function (a, b) {
		Rain.prototype = b.prototype;
		a.prototype = new Rain();
		a.prototype.constructor = a;
		a.prototype.uber = b.prototype;
	};
})();

Demo.prototype.name = 'windy';
Demo.prototype.age = 18;

function Demo() {
	this.name = 'tiger';
}

function Test() {}

inherit(Test, Demo);

// 给 TestI() 添加私有属性 male
Test.prototype.male = 'boy';

var test = new Test();
var demo = new Demo();

// return boy
console.log(test.male);

// return undefined，该属性没有被对象 test 共享给对象 demo
console.log(demo.male);

```
