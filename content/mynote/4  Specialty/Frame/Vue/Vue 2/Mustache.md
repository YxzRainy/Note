---
title: Mustache
date: 2022-05-10 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# Mustache

Mustache 是一个 轻逻辑放**模板解析引擎**。

小程序的 wxml 中的代码、Vue 中的插值都是用的 mustache。

## 语法

### {{keyName}}

简单的变量替换。

### {{{keyName}}}

输出会将等特殊字符转译，如果想保持内容原样输出可以使用`{{{}}}`。

### {{\#keyName}} {{/keyName}}

以#开始、以/结束表示区块，它会根据当前上下文中的键值来对区块进行一次或多次渲染。它的功能很强大，有类似 if、foreach 的功能。

### {{^keyName}} {{/keyName}}

该语法与{{#keyName}} {{/keyName}} 类似，不同在于它是当 keyName 值为 null, undefined, false 时才渲染输出该区块内容。

### {{.}}

表示枚举，可以循环输出整个数组。

### {{!comments}}

表示注释

### {{>partials}}

以>开始表示子模块，当结构比较复杂时，我们可以使用该语法将复杂的结构拆分成几个小的子模块。
