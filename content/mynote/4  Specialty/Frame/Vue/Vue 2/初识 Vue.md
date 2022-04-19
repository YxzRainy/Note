---
title: 初识 Vue
date: 2022-04-10 6:00:00
updated: 2022-04-10 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记

---

# 初识 Vue

创建 Vue 实例，并传入一个配置对象。

root 容器里的代码依然符合 html 规范，只不过混入了一些特殊的Vue 语法。

root 容器里的代码被称为 Vue 模板。

## HTML

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>

        <title>Document</title>
    </head>

    <body>
        <!-- {{}}插值语法 -->
        <div id="app">{{ message }}</div>
    </body>
    <script src="./main.js"></script>

</html>
```

## JavaScript

```JavaScript
var app = new Vue({
    // 选择一个在页面上已存在的 DOM 元素作为操作元素
    el: '#app',
    // 将数据内容插入 el 选择的元素数
    data: {
        message: 'vue 加载成功!',
    },
});

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;
```

