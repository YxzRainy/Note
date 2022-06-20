---
title: JavaScript Array 方法
date: 2022-05-02
categories:
        - 编程语言
tags:
        - 前端

        - JavaScript
---

# Array 方法

## splice(start,deleteCount,item...)

从数组的索引 start 开始删除 deleteCount 个元素，并在索引为 start 的地方添加若干个 item 元素，并返回一个新数组。

此方法会改变原数组。

## includes()

判断一个数组是否包含一个指定的值。

## shift()

删除数组的**第一个**元素，并返回该元素的值。

此方法会改变原数组。

## unshift()

将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**，该方法会修改原有数组。

## filter()

用于对数组进行**过滤**，它返回一个过滤后的数组，如果没有任何数组元素通过测试，则返回空数组。

`filter()`不会对空数组进行检测，**不会改变原始数组**。

## sort()

用原地算法对数组的元素进行排序，并返回数组。

此方法会改变原数组。

它的参数为一个回调函数`compareFunction`，该回调函数有`a`、`b`两个参数，它们分别代表数组中**当前进行比较的两个元素**：

**a 表示在后的那个元素。**

**b 表示在前的那个元素**

**数字升序：**

```js
var arr = [5, 3, 9, 2, 5, 1, 7];
var result = arr.sort(function (a, b) {
	return a - b;
});

console.log(arr);
```

**数字降序：**

```js
var arr = [5, 3, 9, 2, 5, 1, 7];
var result = arr.sort(function (a, b) {
	return b - a;
});

console.log(arr);
```

## pop()

从数组中删除最后一个元素，并返回该元素的值。

此方法会改变原数组。

## push()

将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

此方法会改变原数组。

## reverse()

将数组中元素的位置反转，并返回该数组。

此方法会改变原数组。
