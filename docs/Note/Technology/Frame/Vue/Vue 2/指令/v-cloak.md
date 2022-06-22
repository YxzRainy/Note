---
title: Vue v-cloak
date: 2022-05-22
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2

---

# v-cloak

一个没有值的指令。通常配合 CSS 一起用，可以隐藏未经 Vue 解析且带有`{{}}`的元素，直到 Vue 实例创建完毕。

Vue 实例创建完毕后，元素上的 `v-cloak`被删除。

**HTML**

```HTML
<div v-cloak>
  {{ message }}
</div>
```

**CSS**

```css
[v-cloak] {
	display: none;
}
```

该`div`不会显示，直到 Vue 实例创建完毕。
