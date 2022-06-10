---
title: HTML DOCTYPE
date: 2022-05-05
categories:
        - 编程语言
tags:
        - 前端
        - HTML
        - Note
---

# DOCTYPE

用来告知浏览器该使用了哪种渲染方式来渲染当前文档。

文档首行是`<!DOCTYPE html>`，则浏览器渲染模式为标准模式；首行不是或没有`<!DOCTYPE html>`则浏览器的渲染模式为怪异模式。

目前浏览器的渲染引擎使用三种模式：**怪异模式、接近标准模式、以及标准模式。**

## 历史问题

在很久以前的网络上，页面通常有两种版本：为网景的 Navigator 准备的版本，以及为微软的 Internet Explorer 准备的版本。

当 W3C 创立网络标准后，为了不破坏当时既有的网站，浏览器不能直接弃用这些标准。因此，浏览器采用了两种模式，用以把能符合新规范的网站和老旧网站区分开。

## 标准模式

在标准模式下，行为即由 HTML 与 CSS 的规范描述的行为。

在接近标准模式下，只有少数的怪异行为被实现。

## 怪异模式

在怪异模式下，文档会兼容之前的网页。也叫混杂模式。

## compatMode

返回当前浏览器采用的渲染方式。

### BackCompat

标准兼容模式关闭，当 document.compatMode 等于 BackCompat 时，浏览器客户区宽度为 document.body.clientWidth;

### CSS1Compat

标准兼容模式开启,当 document.compatMode 等于 CSS1Compat 时浏览器客户区宽度为 document.documentElement.clientWidth;
