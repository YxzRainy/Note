---
title: Map
date: 2022-06-05
categories:
        - 编程语言
tags:
        - 前端

        - JavaScript
---

# Map

用于保存键值对，并且能够记住键的原始插入顺序。任何值都可以作为一个键或一个值。

```js
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// return 1

map1.set('a', 97);

console.log(map1.get('a'));
// return 97

console.log(map1.size);
// return 3

map1.delete('b');

console.log(map1.size);
// return 2
```
