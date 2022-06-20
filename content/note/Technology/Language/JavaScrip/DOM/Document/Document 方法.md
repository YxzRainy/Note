---
title: JavaScript Document 方法
date: 2022-05-07
categories:
        - 编程语言
tags:
        - 前端

        - JavaScript
---

# Document 方法

## 查找节点

**使用 querySelectorAll 和 querySelector 方法选择的元素不是实时的，而使用 getElements 方法选择的元素是实时的。**

比如，使用 querySelecto 选择 div 元素，并存放到 ele 变量中，如果后面我们在文档中删除或增加一个 div 元素，ele 中的 div 元素依旧不变。

## getElementById()

选择文档中指定 id 的元素，id 是唯一的，所以是 getElement，不是 getElements

```js
var ele = document.getElementById('only');
```

## getElementsByTagName()

选择文档中指定标签名的元素，返回结果是一个类数组

```js
var ele = document.getElementsByTagName('span');
```

## getElementsByTagName('\*')

选择文档中的所有元素。

```js
var ele = document.getElementsByTagName('*');
```

## getElementsByName()

选择文档中指定 name 的元素，ele 是一个类数组，需要注意，该元素只有部分元素才能生效

```js
var ele = document.getElementsByName('span');
```

## getElementsByClassName()

选择文档中指定 class 的元素

```js
var ele = document.getElementsByClassName('build');
```

## querySelector()

选择匹配指定选择器的第一个元素。不实时

```js
var ele = document.querySelector('div > span a .test');
```

## querySelectorAll()

选择匹配指定选择器的所有元素。不实时

```js
var eles = document.querySelectorAll('div');
```

## open()

打开一个要写入的文档。

此时已注册到文档、文档中的节点或文档的 window 的所有事件监听器都会被清除。

当 `write()`在页面加载后调用，会发生自动的`open()`调用。

## write()

将一个文本字符串写入一个由`open()`打开的文档流。

如果该方法在文档加载完成后执行，那么其中的字符串会覆盖文档中的大部分元素，只留下 `html` `head`和`body`元素，写入的字符串在`body`元素中。

```js
window.onload = function () {
	document.write('我会覆盖文档中的内容');
};
```

因此，该方法禁止在异步加载中使用，因为这会导致文档没加载完毕，就将文档给覆盖了。
