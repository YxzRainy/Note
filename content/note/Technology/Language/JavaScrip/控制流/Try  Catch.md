---
title: JavaScript Try Catch
date: 2022-04-04
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# Try Catch

为了容错，防止程序报错后引起整个程序的终止运行

try 中有错误信息 就会执行 catch 中的代码，没有这不会执行 catch 之中的代码

catch 有一个参数，参数名自定义 比如 e

那么这个 e 就会有两个参数 e.name 和 e.message

## Error.name

EvalError：eval()的使用与定义不一致

RangeError：数值越界

ReferenceError：非法或不能识别的引用数值，比如当一个变量未经声明就使用或者一个函数未定义就调用的时候，会出现 ReferenceError。

SyntaxError：语法解析错误

TypeError：操作数类型错误

URlError：URI 处理函数使用不当
