---
title: JavaScrip ES6 模块化规范
date: 2022-05-15
categories:
        - Note
tags:
        - 前端
        - 模块化

        - 模块化规范
        - JavaScript
---

# ES6 模块化规范

在 ES6 之前，社区制定了一些模块加载方案，最主要的有 `CommonJS` 和 `AMD` 两种。前者用于服务器，后者用于浏览器。

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 `CommonJS` 和 `AMD` 规范，成为浏览器和服务器通用的模块解决方案。

依赖模块需要借助 [Browserify](https://browserify.org/#install)来打包。

## 暴露模块

使用`export`来暴露模块，它用于规定模块的对外接口。

### 分别暴露

```js
export function fun1() {
	console.log('fun1 module1');
}
export function fun11() {
	console.log('fun11 module1');
}
export var arr = [9999, 34, 5, 6, 7565, 757, 6];
```

### 统一暴露

```js
function fun2() {
	console.log('fun2 module2');
}
function fun22() {
	console.log('fun2 module2');
}
export { fun2, fun22 };
```

### 默认暴露

使用默认暴露，可以暴露任意数据类型；且暴露的是什么数据类型，接收到的就是什么数据类型；可以使用任意的变量来接收。

在同一个模块中，只允许用`export default` 暴露一次。

在一个模块中，可以同时使用 `export default` 和 `export` 来暴露成员。

## 导入模块

### 静态 import

使用`import`来导入模块，用于输入其他模块提供的功能。

```js
import { fun1, fun11, arr } from './module1';
import { fun2, fun22 } from './module2';

fun1();
fun11();
fun2();
fun22();
console.log(arr[1]);
```

### 动态 import

`import`函数的参数`specifier`，指定所要加载的模块的位置。`import`命令能够接受什么参数，`import()`就能接受什么参数，两者区别主要是后者为动态加载（按需加载）。

```js
 [类](..\..\类) import('./js/test')
	.then((result) => {
		console.log('模块加载成功', result.default(9, 5));
	})
	.catch((err) => {
		console.log('模块加载失败', err);
	});
```



## 实现

先用 **Babel** 将 ES6+ 语法转换为向后兼容 ES5 的语法。

用 **Browserify** 打包转换后的主模块文件。
