---
title: JavaScript Window 方法
date: 2022-05-05
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# Window 方法

## scroll() 和 scrollTo()

使文档的滚动条滚动至文档中的特定位置。

```js
//让水平的滚动条滚动到 100 像素的位置，再让垂直滚动条滚动到 200 像素的位置
scrollTo(100, 200);
```

## scrollBy()

使文档的滚动条按指定的偏移量滚动。

```js
//　让垂直滚动条滚动 10px，
scrollTo(0, 10);
// 重复执行的话，滚动条会再滚动 10px
scrollTo(0, 10);
```

## getComputedStyle()

返回指定元素经过计算后的 CSS 样式,，且返回的值都是绝对值，它是一个只读属性。

返回的样式是元素在浏览器中最终渲染效果的样式。

**第一个参数是元素，第二个参数是伪元素**。

getComputedStyle() 的第二个参数可以获取第一个参数（元素）的伪元素（`::before`、`::after`等）的 CSS 样式。

第二个参数不是必须的，当不查询元素的伪元素的时候可以忽略或者传入 null。

### currentStyle

只读属性，返回的 CSS 属性的值没有经过计算。IE 独有属性。

### 获取指定元素的指定 CSS 属性

```js
var div = document.getElementsByTagName('div')[0];

function GetStyle(elem, name) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(elem, null)[name];
	} else {
		return elem.currentStyle[name];
	}
}
```

## setInterval()

用于每隔一段时间调用一个函数或一个代码片段。

## setTimeout()

使函数或代码在经过一段指定的时间才开始执行。

## clearInterval()

取之前通过 setInterval() 设置的重复定时任务。
