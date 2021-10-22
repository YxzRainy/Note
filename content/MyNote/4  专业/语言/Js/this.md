---
title: JavaScript this
date: 2021-10-21 6:00:00
updated: 2021-10-23 22:32:00
categories:
        - 编程技术
tags:
        - 学习笔记
        - JavaScript
---
# this

在全局中，无论是否在严格模式下，this 指的都是全局对象（window）。

通常情况，函数的调用方式决定了 this 的值；非严格模式下， this 一般指向一个调用它的对象（即 this 指向调用者，即哪个对象中的方法调用的 this，这个 this 就指向调用这个方法的对象 ），即第一人称我，严格模式下可以指向任意值。

 

