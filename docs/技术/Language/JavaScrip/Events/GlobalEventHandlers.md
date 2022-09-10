---
title: JavaScript GlobalEventHandlers
date: 2022-05-05
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# GlobalEventHandlers

全局事件句柄，在 JavaScrip 中，为了将属性和事件区分开，所有事件的命名都是小写的，而不是像属性那样用小驼峰式命名。

## onclick

当指定元素被点击时，所触发的事件。它的兼容性非常好。

基本等于将事件写到 HTML 元素的`onclick`内联属性上。

this 的指向是 DOM 元素本身。

只能监听鼠标左键，无法监听右键和滚轮。

`onmousedown` + `onmouseup` = `onclick`

### 缺点

一个元素只能绑定一个事件，如果给这个元素定义新的事件，那么新的事件会覆盖旧的事件。

```js
var div = document.getElementsByTagName('div')[0];

// 旧事件
div.onclick = function () {
	console.log('旧事件');
};
// 新事件，会覆盖旧事件
div.onclick = function () {
	console.log('新s');
};
```

### 点击事件只触发一次

```js
div.onclick = function () {
	console.log(4555);
	// 使 onclick 事件只能被触发一次
	div.onclick = null;
};
```

## oncontextmenu

鼠标右键单击指定对象时，所触发的事件。

## onmousemove

鼠标移动到指定对象上时，所触发的事件。

## onmousedown

鼠标按下指定对象时，所触发的事件。

可以监听鼠标左键、右键以及滚轮。

## onmouseup

鼠标按键按下后松开指定对象时，所触发的事件。

可以监听鼠标左键、右键以及滚轮。

## onmouseover/onmouseenter

鼠标移进指定对象时，所触发的事件。

onmouseenter 是 HTML 5 新规范中的属性。

## onmouseout/onmouseleave

鼠标移出指定对象时，所触发的事件。

onmouseleave 是 HTML 5 新规范中的属性。

## onkeydown

按下鼠标键盘上的按键时，所触发的事件。

如果一直按着按键，那么事件会持续触发。

可以监听键盘上的任意键。

## onkeypress

按下并释放键盘上的按键时，所触发的事件。

**只能监听键盘上的字母键和数字键**，不能监听一些特殊按键（ALT、CTRL、SHIFT、ESC、箭头等）。

可以将按键的 charCode 转换为 ASCII 码。

```js
document.onkeypress = function (e) {
	console.log(String.fromCharCode(e.charCode));
};
```

## onkeyup

松开鼠标键盘上的按键时，所触发的事件。

## oninput

input 中的文本（value）每次发生变化时，所触发的事件。

## onfocus

元素获得焦点时，所触发的事件。

## onchange

`<input>` 元素中的文本（value）被修改，并且失去焦点时，所触发的事件。如果文本没有被修改，则事件不会被触发。

## onblur

元素失去焦点时，所触发的事件。

## onscroll

当文档的滚动条滚动的时，所触发的事件。

## onwheel

当滚动鼠标的滚轮时，所触发的事件

## onload

当文档资源全部加载完成时，所触发的事件。

该事件尽量别用，因为它的效率非常的慢，执行 `onload`的时候，它会等待页面渲染完成后才被触发。

不要将主程序的代码放到 onload 中，这会让你非常的 Low。

但我们可以用它来知道页面渲染完毕的时间戳。
