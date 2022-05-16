---
title: JavaScript Event
date: 2022-05-05 6:00:00
updated: 2022-05-05 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# Event

### stopPropagation()

用于取消事件的捕获和冒泡，W3C 推荐的方法。

### cancelBubble()

功能与`stopPropagation()`相同， IE 独有，但在 Chrome 中也可以用。

```js
var wrapper = document.getElementsByClassName('wrapper')[0];

document.addEventListener(
	'click',
	function () {
		console.log('document');
	},
	false
);

wrapper.addEventListener(
	'click',
	function (event) {
		console.log('点击了子元素');

		event.stopPropagation();
        // IE 独有，但 Chrome 也可以使用
		event.cancelBubble = true;
	},
	false
);

```

