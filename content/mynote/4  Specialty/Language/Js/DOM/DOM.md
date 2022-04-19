---
title: JavaScript DOM
date: 2022-04-04 6:00:00
updated: 2022-04-04 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# DOM

DOM （文档对象模型）中提供了一系列的方法，DOM 是这一些列方法的统称。这些方法使得我们可以操作 HTML 和 XML。

DOM 就像一棵节点树一样，从文档的根（document），依次分支展开，每一个元素，都可以看作是树的一个节点，每一个元素都是一个对象。

使用 DOM 操作文档中的元素时，必须先加载整个 HTML 文档（/body 之前的代码 ），再加载 JS 文件；因为没有完整的 DOM 模型，所以 DOM 的一些操作就无法完成，会导致报错。
