---
title: JavaScrip Symbol
date: 2022-05-29
categories:
        - 编程语言
tags:
        - 前端
        - Note
        - JavaScript
---

# Symbol

一般用于给对象添加一个独一无二的属性或方法。

使用`Symbol()`定义一个`Symbol`类型的数据。

```js
// 添加方式一
var game = {
	house() {},
};
let methods = {
	fun: Symbol(),
};

// 给对象中的属性添加方法
game[methods.fun] = function () {
	console.log('方法1');
};
// 添加方式二
var game = {
	[Symbol('fun')]: function () {
		console.log('methods one ');
	},
};
console.log(game);
```

` Symbol` 是原始类型，不是引用类型，不能使用 `new`。

`Symbol()`可以接受一个字符串作为参数，表示对 `Symbol` 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

`Symbol` 类型的值时唯一的，用来解决命名冲突的问题。

`Symbol` 类型的值不能于其他数据进行运算

`Symbol` 定义的对象属性不能被遍历
