---
title: Vue v-if
date: 2022-05-10
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2

---

# v-if

控制元素是否存在。

如果多个 if 指令：`v-if`、`v-else`、`v-else-if`连用，则使用它们的元素必须紧挨。

在 `<template>` 元素上使用 `v-if` 时，最终的渲染结果将不包含 `<template>` 元素。

**HTML**

```vue
<div id="app">
    <!-- 如果 isShow 为 true，则插入 img，如果 isShow 为 false，则移除 img -->
    <img v-if="isShow" :src="url" alt="">
    <!-- 否则（img 已移除），则显示 button 元素，如果 img 已插入，则移除 button-->
    <button v-else="!isShow">切换</button>
</div>
```

**JavaScript**

```js
var app = new Vue({
	el: '#app',
	data: {
		url: 'https://img1.baidu.com/it/u=999074466,1525171260&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
	},
});
Vue.config.productionTip = false;
```
