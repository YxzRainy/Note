---
title: JavaScript set 方法
date: 2022-05-05 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# set 方法

## setDate()

以数值 1-31 设置日

```js
var date = new Date();
// 设置日期中的第 18 天
var d = date.setDate(18);
console.log(d);
// 输出被更改后的时间戳，因为日变了，所以日对应的周也会跟着变。
console.log(date);
```

定时执行某个代码

用 set 方法设置一个未来的时间点，然后判断当 getTime() 的毫秒数与 set 的毫秒数相差小于 1000 的时候，相当于此刻的时间点已经和设置的时间点重合，可以执行一些需要在这个时间点所执行的操作。

用它可以实现倒计时抢漏、闹钟等功能。

## setTime()

设置从 1970 年 1 月 1 日至今的毫秒数。

```js
var date = new Date();
// 将 date 设置为从格林威治时间至今的毫秒数（毫秒数会转换为日期）
date.setTime(12343546557501);
// 返回设置的日期
console.log(date);
```

### 闹钟

```js
var date = new Date();
// 设置未来的某个时间点的分和秒，当格林威治时间到达我们设置的时间戳，会执行某个操作
date.setMinutes(10);
date.setSeconds(5);

// 定时器，每隔 1000 毫秒会执行一次回调函数
setInterval(function () {
	// 判断格林威治时间是否和设置的时间点相差小于 1000 毫秒（小于 1000 毫秒则表示格林威治时间已经到大我们设置的时间戳）
	if (new Date().getTime() - date.getTime() > 1000) {
		// 到达我们设置的时间点后所执行的操作
		console.log('闹钟！');
	}
}, 1000);
```
