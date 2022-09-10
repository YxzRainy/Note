---
title: Set
date: 2022-06-05
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# Set

用于存储任何类型的**唯一值**。

## 数组去重

```js
const arr = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(arr)]);
```

## 交集

## 并集

```js
let arr = [1, 4, 3, 8];
let arr2 = [5, 1, 7, 2];

let union = [...new Set([...arr, ...arr2])];
console.log(union);
```

## 差集
