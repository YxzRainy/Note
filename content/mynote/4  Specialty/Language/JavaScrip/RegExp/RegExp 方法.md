---
title: RegExp 方法
date: 2022-05-09 6:00:00
categories:
        - 编程语言
tags:
        - RegExp
        - 学习笔记
---

# RegExp 方法

## exec()

如果匹配模式带有`g`修饰符，则每匹配一次，匹配结束的位置就是下一次匹配的起始位置。

如果匹配模式不带`g`修饰符，则不管匹配多少次，匹配的起始位置始终都只从`lastIndex = 0`开始。即不管匹配多少次，`lastIndex` 都只为 0。

### 加 g 修饰符

```js
// 加 g 修饰符
var reg = /ab/g;

var str = 'abababab';

// 第一次匹配，lastIndex 从 0 开始匹配，匹配完后 lastIndex = 2
console.log(reg.exec(str));

// 第二次匹配，lastIndex 从 2 开始匹配，匹配完后 lastIndex = 4
console.log(reg.exec(str));

// 第三次匹配，lastIndex 从 4 开始匹配，匹配完后 lastIndex = 6
console.log(reg.exec(str));

// 第四次匹配，lastIndex 从 6 开始匹配，匹配后 lastIndex = 8
console.log(reg.exec(str));

// 第五次匹配，lastIndex 从 8 开始匹配，
// 因为从 8 开始匹配，无法匹配到任何值，因此此处返回 null
// 返回 null 之后，lastIndex 从起始位置 0 开始，即现在的 lastIndex = 0，
console.log(reg.exec(str));

// 重新从 0 开始检索匹配，匹配完后 lastIndex = 2
console.log(reg.exec(str));

// reture  2
console.log(reg.lastIndex);
```

### 不加 g 修饰符

```js
// 不加 g 修饰符
var reg = /ab/;

var str = 'abababab';

// lastIndex = 0
console.log(reg.exec(str));

// lastIndex = 0
console.log(reg.exec(str));

// lastIndex = 0
console.log(reg.exec(str));

// lastIndex = 0
console.log(reg.exec(str));

// lastIndex = 0
console.log(reg.exec(str));

// lastIndex = 0
console.log(reg.exec(str));

// reture  0
console.log(reg.lastIndex);
```

### 与`()`的使用

配合`()`使用的时候，除了会返回匹配结果，还会返回`()`中第一次匹配的**子表达式的值**，并且这些值是类数组的数据位，它们存在于类数组的索引位中。

```js
var reg = /(\w)\1(\w)\2/g;

var str = 'ccddvvffff';

var result = reg.exec(str);

console.log(result);
```

第一次匹配的子表达式的内容是 **cc** 和 **dd**。
