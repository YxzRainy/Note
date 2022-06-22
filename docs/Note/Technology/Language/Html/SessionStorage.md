---
title: HTML sessionStorage
date: 2022-05-26
categories:
        - Note
tags:
        - 前端
        - HTML
        - 浏览器
---

# sessionStorage

它生命周期是仅在当前会话下有效。sessionStorage 引入了一个【浏览器窗口】的概念，sessionStorage 是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。

- 打开多个相同的 URL 的 Tabs 页面，会创建各自的 `sessionStorage`。
- sessionStorage 在关闭了浏览器窗口后就会被销毁。