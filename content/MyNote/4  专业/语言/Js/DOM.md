---
title: JavaScript DOM
date: 2021-10-21 6:00:00
updated: 2021-10-23 22:29:00
categories:
        - 编程技术
tags:
        - 学习笔记
        - JavaScript
---

# DOM

DOM（文档对象模型），它就像一棵节点树一样，从文档的根（document），依次分支展开，每一个元素，都可以看作是树的一个节点，每一个元素都是一个对象。

使用 DOM 操作文档中的元素时，必须先加载整个 HTML 文档（/body 之前的代码），再加载 JS 文件；因为没有完整的 DOM 模型，所以 DOM 的一些操作就无法完成，会导致报错。
