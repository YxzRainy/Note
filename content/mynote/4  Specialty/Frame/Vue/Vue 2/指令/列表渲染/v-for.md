---
title: Vue v-for
date: 2022-05-10 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# v-for

循环渲染元素。

当和 `v-if` 一起使用时，`v-for` 的优先级比 `v-if` 更高。

可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法。

不要使用**对象或数组之类的非基本类型值**作为 `v-for` 的 `key`。请用字符串或数值类型的值。

**HTML**

```html
<div id="app">
	<ul>
		<li v-for="(p,index) in persons" :key="index">{{p.name}} and {{p.age}}</li>
	</ul>

	<ul>
		<li v-for="(f,index) in fruits" :key="index">{{f}}</li>
	</ul>
</div>
```

**JavaScrip**

```js
var vm = new Vue({
	el: '#app',
	data: {
		// 遍历数组
		persons: [
			{ id: '001', name: '小明', age: 9 },
			{ id: '002', name: '小苏', age: 21 },
			{ id: '003', name: '小朱 ', age: 20 },
		],
		// 遍历对象
		fruits: {
			name: 'banana',
			color: 'yellow',
			kg: '3kg',
		},
	},
});

Vue.config.productionTip = false;
```
