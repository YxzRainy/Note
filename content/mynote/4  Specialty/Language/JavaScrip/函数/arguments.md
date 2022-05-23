---
title: JavaScript arguments
date: 2021-10-21 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# arguments

它是一个与函数的实参有映射关系的类数组。

## 属性

### Callee

该属性包含当前正在执行的函数。在哪个函数中调用的方法 arguments.calle，该 calle 中就包含这个函数的函数体。

#### 注意

arguments 对象是所有（非箭头）函数中都可用的局部变量。你可以使用 arguments 对象在函数中引用函数的实参；此对象包含传递给函数的每个实参，第一个实参的索引为 0。

arguments 对象不是一个 Array ；但它类似于 Array，但除了有 length 属性和索引的特性之外没有任何其他 Array 属性。
