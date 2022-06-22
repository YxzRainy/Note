---
title: JavaScrip JSON 方法
date: 2022-04-30
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# JSON 方法

# stringify()

将一个对象或值转换为 JSON 字符串。

```js
var obj = {
	name: 'rainy',
	age: '20',
};
var result = JSON.stringify(obj);
// 对象
console.log(obj);

// 字符串
console.log(result);
```

## parse()

将 JSON 字符串转换为对象。

```

var json = '{"name":"rainy", "age:":20}';

var obj = JSON.parse(json);

// 字符串
console.log(json);
// 对象
console.log(obj);

```
