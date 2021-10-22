---
title: JavaScript parselnt
date: 2021-10-21 6:00:00
updated: 2021-10-23 22:31:00
categories:
        - 编程技术
tags:
        - 学习笔记
        - JavaScript
---
# parselnt

parseInt(string, radix) 该函数解析一个字符串并返回指定基数的十进制整数。

将 string 看作 radix 进制的数，并将 string 显式转换为十进制且为 number 类型的整数（radix 为介于 2-36 之间的数，它是可选值，表示被解析字符串的基数），若 string 无法被转换为整数，则返回 number 类型的 NaN。

当在 string 中，遇到不在 radix 中的字符，则将忽略该字符以及所有后续字符，并返回在这之前已解析的整数值。

若 radix 为 0 时，部分浏览器（比如 IE）会报错，部分浏览器会将 0 当做 10 进行转换。

```JavaScript
// n 进制转十进制--------------------------------------------------
var n = 10010;
var c = 2;
// 变量 n 可为 8，16，32。
var a = parseInt(n, c);
// 将 n 当作 c 进制的数，并将 n 显式转换为十进制的整数。
console.log(a);
```

