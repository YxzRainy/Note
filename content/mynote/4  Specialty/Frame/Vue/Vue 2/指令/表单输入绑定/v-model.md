---
title: Vue v-model
date: 2022-05-19 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# v-model

双向数据绑定，常用于**表单元素**（有 value 值）。

双向绑定是指：数据不仅能从 data 流向页面，也能从页面流向 data。

该指令是`v-on`与`v-bind`的复合版。

```vue
<!-- 类似于语法糖的写法 -->
<div id="app">
     <h1>{{text}}</h1>
    <input type="text" v-model="text">
</div>
<!-- 相当于这样写-->
<div id="app">
    <h1>{{text}}</h1>
    <input type="text" :value="text" @input="text = $event.target.value">
</div>
```
