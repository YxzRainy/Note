---
title: JavaScript Object 方法
date: 2022-05-11 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# Object 方法

## defineProperty()

用于在一个对象上定义一个新属性，或者修改一个对象的已有属性，并返回此对象。

使用 defineProperty() 定义的属性无法被枚举。

### value

该属性对应的值。默认值为`undefined`。

### enumerable

控制属性是否可以被枚举。

可枚举属性是指那些内部**enumerable**设置为 `true` 的属性，对于通过直接的赋值和属性初始化的属性，该标识值默认为即为 `true`，对于通过`Object.defineProperty()` 等定义的属性，该标识值默认为 `false`。

### writable

控制属性是否可以被修改，默认值为`false`

### configurable

控制属性是否可以被删除，默认值为`false`

### get()

当访问当前属性时，会调用此函数。该函数的返回值会被用作当前属性的值。

### set()

当前属性值被修改时，会调用此函数。该方法接受一个参数（当前属性被赋予的新值），会传入赋值时的 `this` 对象。

```js
var number = 20;
var person = {
	Name: '张三',
	sex: '男',
	// age: 25,
};
Object.defineProperty(person, 'age', {
	// 每当我们读取 person 的 age 属性时，get() 就会被调用，且返回值是 age 的值
	get() {
		console.log('读取 age 的值');
		return number;
	},
	// 每当我们修改 person 的 age 属性时，set() 就会被调用，且会收到被修改后的的值
	set(value) {
		console.log('age 的值被修改为：', value);
		number = value;
	},
});
```

## keys()

返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

## toString()

toString() 方法用于返回一个表示该对象的字符串。

每个对象都有 toString() 方法，但 undefined 与 null 没有，因为它们不是对象。

当 number、string、boolean 原值类型的数据调用 toString() 方法时，都会先进行包装类。 因为 Number 对象覆盖了 Object 对象上的 toString() 方法（因为 Number 对象将 toString 方法重写了），所以它不继承自 Object.prototype.toString()。

另外，document.write() 方法，它也使用了 toString() 方法。

#### 重写 toSrting()

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

#### 重写 document.write()

```JavaScript
var obj = Object.create(null);
obj.toString = function () {
	return '重写的 document.write() 方法';
};
document.write(obj);
```

## create()

该方法创建一个新对象， () 中可以指定这个新创建的对象的原型对象，即可以为 object 或 null，但不能为原始值。

使用 null 作为原型对象的对象，该对象没有原型（即没有属性 **proto** ），但它也是一个对象。

#### 重写 toSrting()

```JavaScript
var a = {};
var b = Object.create(a);
// 将对象 a 放入 creat 方法中，即将对象 b 的原型变为对象 a
```

## hasOwnProperty()

该方法用于判断指定对象的属性是否是该对象自身的，或是该对象的原型的属性，并会返回一个布尔值。该方法通常与 for in 语句配合使用。

## constructor()

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
