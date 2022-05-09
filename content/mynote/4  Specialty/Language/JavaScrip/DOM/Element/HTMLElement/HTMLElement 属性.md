---
title: JavaScript HTMLElement 属性
date: 2022-05-05 6:00:00
updated: 2022-05-05 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript

---

# HTMLElement 属性

## innerText/textContent

设置或获取指定元素所包含的文本信息，只返文本信息，不返回所包含的元素。

另外，设置元素内容的时候，如果元素内容中有子元素，则这些子元素也会被覆盖。

innerText 很容易 与textContent 混淆, 但这两个属性间实际上有很重要的区别. 大体来说, innerText可操作已被渲染的内容， 而 textContent 则不会。

```js
var body = document.getElementsByTagName('body')[0];
var div = document.getElementsByTagName('div')[0];
// 设置内容
div.innerText = '123';
/textContent 
div.textContent = '456';
```

## offsetHeight

它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。

## offsetWidth

它返回该元素的像素宽度，宽度包含该元素的水平内边距和边框，且是一个整数。

## offsetLeft

返回当前元素左边界相对于最近的定位父元素的左边界的像素值。该值包含 border

如果当前元素的父元素中没有定位元素，则返回相对文档左边界的像素值。

## offsetTop

它返回当前元素顶边界相对于最近的定位父元素的顶边界的像素值。该值包含 border

如果当前元素的父元素中没有定位元素，则返回相对文档左边界的像素值。

## offsetParent

返回距离当前元素最近的定位父元素。

如果当前元素的父元素中没有定位元素，则返回 body。

## style

设置或返回 ele 的**内联样式表**中的 attr，**并不会返回内嵌样式表和外链样式表中的 CSS 属性。**

设置的值必须为字符串格式。

如果是设置 float 这样的保留字属性，则尽量使用 cssFloat ，虽然也可以使用 float 设置，但是 W3C 并不建议使用 float，因为 float 是一个保留字，未来可能会成为关键字，避免未来的命名冲突。

复合属性尽量分开设置，比如`boder`，尽量分别设置`borderWidth`、`borderStyle`和`borderColor`。

组合单词的属性名，变为小驼峰式的属性名来进行设置，比如`background-color`变为`backgroundColor`。