---
title: Vue filter
date: 2022-05-21 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# filter

全局过滤器，不同 Vue 实例都可以通用的过滤器。

当全局过滤器和局部过滤器重名时，会采用局部过滤器。

**HTML**

```HTML
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.js"></script>
        <title>全局过滤器</title>
    </head>

    <body>
        <div id="app">
            <!-- 全局过滤器 -->
            <h3 v-bind:id="msg | mySlice">全局过滤器</h3>
        </div>
    </body>
    <script src="./js/main.js"></script>

</html>
```

**JavaScript**

```JavaScript
// 全局过滤器
Vue.filter('mySlice', function () {
	return val.slice(0, 4) + ' 年';
});
var vm = new Vue({
	el: '#app',
	data: {
		msg: '全局过滤器',
		time: 1653135479429,
	},
});

Vue.config.productionTip = false;
```
