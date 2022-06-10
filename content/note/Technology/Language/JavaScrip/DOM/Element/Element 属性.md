---
title: JavaScript Element 属性
date: 2022-05-02
categories:
        - 编程语言
tags:
        - 前端
        - Note
        - JavaScript
---

# Element 属性

## innerHTML

设置或返回指定元素的内容。返回的内容包含这个元素所包含的子元素以及文本信息。

它会解析 HTML 结构。

设置元素内容的时候，如果元素内容中有子元素，则这些子元素也会被覆盖。

可以在元素内容的后面追加新内容。

```js
var body = document.getElementsByTagName('body')[0];
var div = document.getElementsByTagName('div')[0];
// 设置内容
div.innerHTML = '123';
// 追加内容
div.innerHTML += '456';
// 写入 html 元素
div.innerHTML += '<span>写入的元素</span>';
```

## childElementCount

返回指定元素节点的子元素节点的个数，不包含子元素节点的子元素节点。

## firstElementChild

返回指定元素节点的第一个元素节点。

## lastElementChild

返回指定元素节点的最后一个元素节点。

## children

返回当前元素节点的所有子元素节点，不包含子元素节点的子元素节点。
