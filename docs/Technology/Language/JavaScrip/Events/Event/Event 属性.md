---
title: JavaScript Event 属性
date: 2022-05-05
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# Event 属性

## target

返回触发当前事件的事件源对象。

```js
document.onclick = function (event) {
	console.log(event.target);
};
```
