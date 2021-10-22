---
title: JavaScript Window 对象
date: 2021-10-21 6:00:00
updated: 2021-10-23 22:32:00
categories:
        - 编程技术
tags:
        - 学习笔记
        - JavaScript
---
# Window 对象

Window 对象表示浏览器中打开的窗口。

如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。

## Window 对象的方法

### setInterval()

用于每隔一段时间调用一个函数或一个代码片段。

### setTimeout()

使函数或代码在经过一段指定的时间才开始执行。

### clearInterval

取消先前通过 setInterval() 设置的重复定时任务。