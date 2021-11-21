---
title: 使用 Echarts 时遇到的错误
date: 2021-11-06 6:00:00
updated: 2021-11-06 6:00:00
categories:
        - 可视化库
tags:
        - 前端
        - 图表
        - 可视化
        - 学习笔记
        - Echarts
---

# 使用 Echarts 时遇到的错误

今天使用Echarts绘制地图时，浏览器控制台出现以下错误：

```js
Uncaught DOMException: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The image argument is a canvas element with a width or height of 0.
```

// 中国地图

(function () {

  var myChart = echarts.init(document.querySelector(".Map .Chart"));



  

myChart.setOption(option);

  // 监听浏览器缩放，图表对象调用缩放resize函数

  window.addEventListener("resize", function () {

​    myChart.resize();

  });

})();

