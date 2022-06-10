---
title: Vue ref
date: 2022-05-10
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - Note
---

# ref

用于给**元素**或**子组件**注册唯一标识，这个唯一标识将会被注册到父组件的 `$refs` 对象上。

对于 HTML 元素，获取的是 DOM 元素，与 id 是一样的；对于组件，获取的是**组件实例对象**。

`$refs` 不是响应式的属性。
