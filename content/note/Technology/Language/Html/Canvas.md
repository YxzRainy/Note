---
title: HTML Canvas
date: 2022-05-05
categories:
        - Note
tags:
        - 前端
        - HTML
---

# Canvas

`<canvas>` 元素用于图形的绘制，通过 JavaScript 来绘制。

<canvas> 标签只是图形容器，您必须使用脚本来绘制图形。

```js
var c = document.getElementById('myCanvas');

var ctx = c.getContext('2d');

ctx.fillStyle = '#FF0000';
// x 坐标，y 轴zuo'bai'n
ctx.fillRect(20, 20, 150, 75);
```
