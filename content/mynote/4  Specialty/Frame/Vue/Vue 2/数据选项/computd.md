---
title: Vue computd
date: 2022-05-10 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# computd

通过**已有的属性**计算出来的属性。

计算属性最终会出现在 Vue 实例上，直接调用即可。

如果计算属性有可能被修改，那必须写`set()`去响应修改，且要引起计算属性所依赖的属性发生变化。

**HTML**

```vue
<div id="app">
	<p>姓：{{ firstName }}</p>
	<p>名：{{ lastName }}</p>
	<p>全名：{{ fullName }}</p>
</div>
```

**JavaScrip**

```js
var vm = new Vue({
	el: '#app',
	data: {
		text: '表单',
		firstName: '苏',
		lastName: '明敏',
	},
	computed: {
		fullName: {
			get() {
				return this.firstName + '-' + this.lastName;
			},
			set(value) {
				var arr = value.split('-');
				this.firstName = arr[0];
				this.lastName = arr[1];
			},
		},
	},
});
Vue.config.productionTip = false;
```

**原理**：底层借助了`defineproperty()`提供的`get`()和`set()`。

## get() 什么时候调用？

1. 初始化时，`get()`会被调用，且返回值会被作为 `fullname` 的属性值。
2. `fullname` 所依赖的值（这里依赖的 firstName 和 lastNmae）发生变化的时候。

## computed 与 method 的区别：

1. 计算属性可以赋值，而方法不行。
2. **计算属性会进行缓存**：只要与计算属性相关的数据没有发生变化，则直接使用缓存结果，不会重新调用方法来重新计算。
3. 凡是根据已有数据计算得到新数据的无参函数，都应该尽量写成计算属性，而非方法。

## 简写

计算属性大多时候都不需 `set()`，只需要`get()`，因此很多时候，当我们确定某个计算属性只读的时候，我们可以使用`computd` 的简写。

```js
computed: {
    fullName() {
        return this.firstName + '-' + this.lastName;
    },
},
```
