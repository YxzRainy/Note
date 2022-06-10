---
title: Less
date: 2022-05-14
categories:
        - 编程语言
tags:
        - Css
        - Less
        - 预处理器
        - Note
---

# Less

Less 一门向后兼容的 CSS 扩展语言。它扩展了 CSS，使 CSS 更易于维护和扩展。

[Less 官方文档](https://less.bootcss.com/)

## [安装](https://less.bootcss.com/)

Node.js：

```sh
npm install -g less
```

引入：

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js"></script>
```

## [将 less 编译为 css](https://less.bootcss.com/usage/)

在 less 文件的目录引入执行，就会得到一个 编译后的 css 文件。

```css
lessc styles.less > styles.css
```

当然，如果你使用的是 Vs Code，那么直接安装**Easy Less**扩展即可，**每当你保存 less 文件的时候，它会自动将 less 文件编译为 css 文件**，方便的很。
