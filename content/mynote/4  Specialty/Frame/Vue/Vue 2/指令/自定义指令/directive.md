---
title: Vue directive
date: 2022-05-22 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# directive

全局自定义指令。不同 Vue 实例都可以通用的自定义指令。

**HTML**

```HTML
<div id="app">
    <h2>当前 n 的值为：{{n}}</h2>
    <h2>放大 100 倍的值：</h2><input type="text" name="" id="" v-focus-bind="n">
    <button @click="n++">点击后 n++</button>
</div>
```

**JavaScript**

```js
// 全局自定义指令
Vue.directive('focus-bind', {
	bind(element, binding) {
		element.value = binding.value;
	},
	inserted(element, binding) {
		element.focus();
	},
	update(element, binding) {
		element.value = binding.value * 100;
	},
});
var vm = new Vue({
	el: '#app',
	data: {
		n: 1,
	},
});

Vue.config.productionTip = false;
```
