---
title: JavaScript String 方法
date: 2022-05-05 6:00:00
updated: 2022-05-05 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript

---

# String 方法

## fromCharCode()

将 UTF-16 组成的值转换为一个字符串。

## match()

检索并返回一个字符串匹配正则表达式的结果。

```js

var reg = /ab/g;

var str = 'abababababab';

var result = str.match(reg);
console.log(result);

```

## slice()

从字符串的第 n 位字符开始截取，一直截取到字符串最末。并返回一个新的字符串，且不会改动原字符串。
