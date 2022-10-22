---
title: CSS 是什么
date: 2021-10-09
categories:
        - Note
tags:
        - CSS
        - 前端
---

# CSS 是什么

用于定义 HTML 元素的显示形式，美化我们的 HTML 文档。

CSS 的语法通常是一个选择器，用于选择 HTML 文档中的元素。

```css
.selector {
	color: #000;
}
```

## 为什么使用 CSS

专注于显示。使内容与内容样式分离。

## 如何使用 CSS

### 内联式

将 CSS 语法书写到元素的 style 属性中，仅对当前元素生效，也叫行内式。

### 内嵌式

首先将 style 元素书写到 head 元素中，然后将 CSS 语法书写到 style 元素中，也叫内部样式表。

### 外链式

将 CSS 语法书写到独立的 CSS 文件中，并在 HTML 文档中使用 link 元素引入，也叫外部样式表。

### 优先级

内联式 > 内嵌式 > 外链式。

