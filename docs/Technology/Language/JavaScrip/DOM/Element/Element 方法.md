---
title: JavaScript Element 方法
date: 2022-05-02
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# Element 方法

## setAttribute()

设置指定元素的属性和属性的值。设置的属性名可以是自定义的属性。

如果这个指定的属性已存在，则仅更改值。

## getAttribute()

返回指定属性名的属性值。

## getBoundingClientRect()

返回元素的尺寸，以及相对于视口的位置。

如果是标准盒子模型，元素的宽高等于**width/height** + **padding** + border-width 的总和。如果`box-sizing: border-box`，元素的宽高等于 width/height。

返回的结果不是事实的，是静态的。

```js
var div = document.getElementsByTagName('div')[0];
var ele = div.getBoundingClientRect();
```
