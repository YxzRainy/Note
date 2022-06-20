---
title: Vue methods
date: 2022-05-15
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2

---

# methods

methods 中的函数，其 this 都指向 Vue 实例或者组件实例对象。

任何 Vue 实例中的方法，只能使用普通函数，不能使用箭头函数，否则箭头函数中的 `this` 指向就不再是 `Vue`，而是 `window`。

```js
var vm = new Vue({
	el: '#root',
	data: {
		name: 'China',
	},
    // 方法
	methods: {
        // 只能使用普通函数
		showInfo() {
			console.log(this);
		},
        // 不能使用箭头函数
        showInfo:()=> {
			console.log(this);
		},
	},
	},
});
Vue.config.productionTip = false;

```
