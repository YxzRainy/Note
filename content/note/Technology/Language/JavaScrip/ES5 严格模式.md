---
title: JavaScript ES5 严格模式
date: 2022-04-04
categories:
        - 编程语言
tags:
        - 前端

        - JavaScript
---

# ES5 严格模式

ECMAScript 是 JavaScript 的一个标准。

ES5 严格模式指的是：我们应该对 ES3 和 ES5 产生冲突的部分使用哪个版本的规则？

当我们开启 ES5 严格模式后，那么 ES3 和 ES5 产生冲突的部分会遵循 ES5 的规则，否则会使用 ES3（浏览器默认遵循 ES3 的规则）

## "use strict"

使某一作用域内的代码不在兼容 ES3 中的一些不规则的语法，使用全新的 ES5 的语法。

## 如何启用 ES5 严格模式

在作用域顶端添加语句`"use strict"`即可，启用之后，ES3 中的一些方法就无法使用了。比如`arguments`的`callee`属性：

```js
'use strict';
function test() {
	console.log(arguments.callee);
}
test();
```

浏览器会出现以下错误：

```JS
Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```

同样，也可以使某一局部作用域支持 ES5，而其他作用域支持 ES3：

```js
// 支持 ES3 模式，可以使用 arguments 的 callee 属性
function demo() {
	console.log(arguments.callee);
}
demo();

function test() {
	// 支持 ES5 模式，所以无法使用 ES3 中 arguments 的 callee 属性
	'use strict';
	console.log(arguments.callee);
}
test();
```

## 为什么用字符串启用 ES5 严格模式

为什么启用 ES5 要使用`"use strict"`这种字符串的方式来启用 ES5 严格模式？而不、使用一个函数`strict()`？

这是因为如果使用的是一个函数的话，就会导致不支持 ES5 的浏览器使用`strict()`直接报错，导致后面的代码无法执行。而字符串`"use strict"`却不会导致程序报错，因为单独的字符串或者数字是无意义的，仅仅只是一个表达式。

```js
'use strict';
'无意义，不会导致程序报错';
1971438937;
```

直接点说，就是为了兼容那些老版本浏览器（不支持 ES5 的浏览器）

## ES5 不支持的操作

with

arguments.caller

function.caller

声明变量之前必须声明。

```js
'use strict';
// Uncaught ReferenceError: b is not defined
var a = (b = 4);
```

局部 this 必须被赋值，而且是赋什么就是什么，不赋值的情况下是 undefined。

严格模式下，全局 this 依旧指向 window。

```js
function rainy() {
	// 非严格模式下，局部 this 默认指向 window
	console.log(this);
}
rainy();

function test() {
	'use strict';
	// 严格模式下，局部this 默认指向 undefined
	console.log(this);
}
test();

function demo() {
	'use strict';
	// 此时的 this 指向函数 demo 本身
	console.log(this);
}
new demo();
```

拒绝重复属性（重复后不会报错）和参数（重复后会报错）。

```js
// 重复属性，但不会报错
var obj = {
	// 后面的 name 属性会覆盖前面的 name 属性
	// 返回 456
	name: '123',
	name: '456',
};
console.log(obj.name);

//重复参数，会报错
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context
function test(name, name) {
	'use strict';
	console.log(name);
}
test(1, 2);
```
