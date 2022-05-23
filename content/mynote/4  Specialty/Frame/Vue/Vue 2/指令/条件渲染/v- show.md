---
title: Vue v-show
date: 2022-05-10 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# v-show

控制元素是否可见，如果元素不可见，则该元素`display:none`。

### HTML

```vue
<div id="app">
    <img v-show="isShow" :src="url" alt="">
    <button @click="isShow = !isShow">切换</button>
</div>
```

### JavaScript

```js
var app = new Vue({
	el: '#app',
	data: { url: 'https://img1.baidu.com/it/u=999074466,1525171260&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333' },
});
Vue.config.productionTip = false;
```
