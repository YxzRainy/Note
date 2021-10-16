---
title: 卧槽
date: 2021-10-10 6:00:00
updated: 2021-10-1 17:33:03
categories:
        - 杂记
tags:
        - Cs
---

```html
<div class="search">
    <i class="material-icons search-icon search-start">search</i>
    <input type="text" class="search-input" placeholder="Searching..." />
    <i class="material-icons search-icon search-clear">clear</i>
	<div class="search-results"></div>
</div>
```
```javascript
// 获取搜索框、搜索按钮、清空搜索、结果输出对应的元素
var searchBtn = document.querySelector('.search-start');
var searchClear = document.querySelector('.search-clear');
var searchInput = document.querySelector('.search-input');
var searchResults = document.querySelector('.search-results');

// 申明保存文章的标题、链接、内容的数组变量
var searchValue = '',
    arrItems = [],
    arrContents = [],
    arrLinks = [],
    arrTitles = [],
    arrResults = [],
    indexItem = [],
    itemLength = 0;
var tmpDiv = document.createElement('div');
tmpDiv.className = 'result-item';

// ajax 的兼容写法
var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        xml = xhr.responseXML;
        arrItems = xml.getElementsByTagName('item');
        itemLength = arrItems.length;
```
# Hello World

2021 年 10 月 1 日，我的站点正式发布，

愿你被世界温柔以待。

## 二级标题

2021 年 10 月 1 日，我的站点正式发布，

愿你被世界温柔以待。

### 三级标题dfadfafadfdafdafd

2021 年 10 月 1 日，我的站点正式发布，

愿你被世界温柔以待。

## 四级标题gagadgagdagd afdfadfafdaf

2021 年 10 月 1 日，我的站点正式发布，

愿你被世界温柔以待。

### 五级标题fdafdafdafdfad

2021 年 10 月 1 日，我的站点正式发布，

愿你被世界温柔以待。

### 六级标题

2021 年 10 月 1 日，我的站点正式发布，

愿你被世界温柔以待。
