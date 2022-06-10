---
title: Uniq
date: 2022-05-16
categories:
        - 前端库
tags:
        - 前端
        - Uniq
        - Note
---

# Uniq

‎ 用于将数组中的所有重复项删除，并按数组中每个元素的**首位字符**进行升序

## `安装`

```sh
npm install uniq
```

使用

```js
// 导入 uniq
var uniq = require('uniq');
// 定义数组
var arr = [199, 9, 3];
// 排序
var result = uniq(arr);
// [ 199, 3, 9 ]
// 虽然 199 大于 3 和 9，但因为 199 的首位字符为 1，因此，它排在l
console.log(result);
```
