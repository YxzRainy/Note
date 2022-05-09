---
title: JavaScript isNaN()
date: 2021-10-21 6:00:00
updated: 2021-10-23 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# isNaN()

isNaN(value) 用于判定 value 是否为 NaN，是则返回 true，否则返回 false。

如果 value 不是 Number 类型，那么该函数会用 Number() 方法将 value 隐式转换，然后再判断转换后的结果是否为 NaN。因此，被测试的值在被强制转换成数值时会不会返回 IEEE-754 中所谓的不是数值，**隐式转换调用的都是显式转换方法**。

### 返回 false 的值

- 0 除以 0
- NaN
- undefined
- {}（空对象）
