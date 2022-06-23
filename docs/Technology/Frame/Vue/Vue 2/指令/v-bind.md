---
title: Vue v-bind
date: 2022-05-21
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2

---

# v-bind

单项数据绑，数据只能从 data 流向页面。

**HTML**

```vue
<div id="app">
    <img v-bind:src="url" alt="">
</div>
```

**JavaScrip**

```js
var app = new Vue({
	el: '#app',
	data: {
		url: 'https://img1.baidu.com/it/u=999074466,1525171260&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
	},
});
Vue.config.productionTip = false;
```

**简写**

```vue
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 简写 -->
<a :href="url">...</a>
```
