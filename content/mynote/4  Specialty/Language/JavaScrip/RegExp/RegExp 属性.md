---
title: RegExp 属性
date: 2022-05-10 6:00:00
updated: 2022-05-10 6:00:00
categories:
        - 编程语言
tags:
        - RegExp 
        - 学习笔记

---

# RegExp 属性

## lastIndex

从 0 开始，表示字符在进行下一次匹配时的起始位置，这个属性会被`exec()`和`test()`用到。

该属性可以被手动修改。

```js
var reg = /ab/g;

var str = 'abababab';

// 第一次匹配，lastIndex 变为 2
console.log(reg.exec(str));
// lastIndex = 2
console.log(reg.lastIndex);
//手动修改 lastIndex
reg.lastIndex = 0;
// 修改成功，lastIndex = 2
console.log(reg.exec(str));

```

