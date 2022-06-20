---
title: JavaScript Number 的方法
date: 2021-10-21
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# Number 的方法

## isFinite()

检测传入的参数**是否是一个有穷数**。

## isNaN()

判断传入的值是否为 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)，并且检查其类型是否为 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)。它是比原来的全局 [`isNaN()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 的更稳妥的版本。

**返回 false 的值**

- 0 除以 0
- NaN
- undefined
- {}（空对象）

## toString()

**NumObj.toString(radix)**

- 将 NumObj 转为为 radix 进制的数，若 NumObj 无法被转换为 radix 进制的数，则返回 string 类型的 NaN；rRadix 的取值范围为 2 - 36，如果未指定 radix 参数，则默认值为 10。
- 当在 NumObj 中，遇到不在 radix 中的字符，则将忽略该字符以及所有后续字符，并返回在这之前已解析的整数值。
- 因为 Number 对象覆盖了 Object 对象上的 toString() 方法（系统将 Number 对象的 toString 方法重写了），因此它并不继承自 Object.prototype.toString()。

#### 十进制转十六进制

```JavaScript
var a = 1971;
var b = 10;
var c = 16;
var d = parseInt(a, b);
// 将变量 a 当做 b 进制的数，并将 b 转换为十进制的数。
var e = d.toString(c);
// 将变量 d 转换为 c 进制的数。
var f = e;
console.log(f);
```

## Number(mix)

将 mix 显式转换为 number 类型的数值；若 mix 无法被转换为数字，则返回 number 类型的 NaN。

```JavaScript
// 字符串转 number--------------------------------------------------
var n = '18';
// 这是一个字符串 18。
var a = Number(n);
// 将变量 n 转换为数字类型的数据。
var b = typeof a + '：' + a;
console.log(b);
// 返回变量 a 的数据类型和变量 a 的值。

```
