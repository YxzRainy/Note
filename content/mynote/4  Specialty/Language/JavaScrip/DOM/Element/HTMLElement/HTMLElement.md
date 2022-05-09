---
title: JavaScript HTMLElement
date: 2022-05-05 6:00:00
updated: 2022-05-05 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# HTMLElement

## offsetHeight

它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。

## offsetWidth

它返回该元素的像素宽度，宽度包含该元素的水平内边距和边框，且是一个整数。

## offsetLeft

返回当前元素左边界相对于最近的定位父元素的左边界的像素值。该值包含 border

如果当前元素的父元素中没有定位元素，则返回相对文档左边界的像素值。

## offsetTop

它返回当前元素顶边界相对于最近的定位父元素的顶边界的像素值。该值包含 border

如果当前元素的父元素中没有定位元素，则返回相对文档左边界的像素值。

## offsetParent

返回距离当前元素最近的定位父元素。

如果当前元素的父元素中没有定位元素，则返回 body。

