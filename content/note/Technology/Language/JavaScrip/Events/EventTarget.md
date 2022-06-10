---
title: JavaScript EventTarget
date: 2022-05-05
categories:
        - 编程语言
tags:
        - 前端
        - Note
        - JavaScript
---

# EventTarget

## addEventListener()

监听一个对象，并给这个对象绑定指定的事件处理函数。

第一个参数是事件类型，第二个参数是事件的回调回函数。

this 的指向是 DOM 元素本身，第三个参数是一个布尔值，用于定义该对象应该使用哪一种事件处理模型（冒泡、捕获）进行触发。

### 优点

可以给同一个对象同一类型事件**绑定多个事件处理函数**，并且会按绑定事件的先后顺序去执行。

```js
// 旧事件
div.addEventListener(
	'click',
	function () {
		console.log('第一个事件');
	},
	false
);
// 新事件，不会fu
div.addEventListener(
	'click',
	function () {
		console.log('第二个事件');
	},
	false
);
```

### attachEvent()

IE 独有事件，它与 addEventListener() 差不多。

this 指向 window。

### for 绑定 addEventListener() 事件

```js
var li = document.getElementsByTagName('li');

var len = li.length;
for (var i = 0; i < len; i++) {
	// 用立即执行函数解决闭包内存泄漏的问题
	(function (i) {
		li[i].addEventListener(
			'click',
			function () {
				console.log(i);
			},
			false
		);
	})(i);
}
```

### removeEventListener()

删除使用 addEventListener() 添加的事件。

需要将 addEventListener() 绑定的匿名函数变为命名函数。或者说，用匿名函数绑定的事件，都无法用 addEventListener() 来删除。

```js
var div = document.getElementsByTagName('div')[0];

// 因为原本 addEventListener() 中的回调函数是匿名的，
// 所以无法使用 removeEventListener() 来移除 addEventListener()
// 因此，需要将回调函数编为命名函数
div.addEventListener('click', fun, false);
// 命名函数
function fun() {
	console.log(666);
	// 移除 addEventListener 事件
	div.removeEventListener('click', fun, false);
}
```
