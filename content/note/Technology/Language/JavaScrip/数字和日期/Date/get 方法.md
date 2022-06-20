---
title: JavaScript get 方法
date: 2022-05-05
categories:
        - 编程语言
tags:
        - 前端

        - JavaScript
---

# get 方法

## getDate()

返回一个月中的某天 1 — 31

## getDay()

返回一周中的某天 0 — 6。

注意，0 表示周一，6 表示周日。

## getMonth()

返回一年终的某月 0 — 11。

注意，0 表示一月，11 表示 12 月

## getFullYear()

获取四位数的年份 XXXX。

以前是用的 getYear() 方法，因为以前表示日期用的六位制 YY.MM.DD，直到 1999 年 12 月 31 日之后，变成了 2000 年，这个时候的日期用六位制已经无法表示了，因此，现在改用八位制 YYYY.MM.DD。

## getHours()

获取小时 0 — 23

## getMinutes()

获取分 0 — 59

## getSeconds()

获取秒 0 — 59

## getMilliseconds()

获取毫秒 0 — 999

## getTime()

获取毫秒（从格林威治时间 1970 年 1 月 1 日至今的毫秒数），也叫获取时间戳。

### 时间戳

用于验证执行某个程序所花费的毫秒数。

```js
// for 执行前的时间戳
var firstTime = new Date().getTime();

// 计算执行 for 循环所花的毫秒数
for (var i = 0; i < 1000000; i++) {}

// for 执行后的时间戳
var lastTime = new Date().getTime();

// 执行完 for 的时间戳减去 for 执行前的时间戳
// 就可以算出执行 for 循环所花费的时间
console.log(lastTime - firstTime);
```
