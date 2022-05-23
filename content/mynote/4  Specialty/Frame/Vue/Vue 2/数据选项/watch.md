---
title: Vue watch
date: 2022-05-18 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# watch

侦听器，用于侦听 Vue 实例上的**数据变动**。

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.js"></script>
		<title>Vue</title>
		<style></style>
	</head>

	<body>
		<div id="app">
			<h2>今天天气很{{weather}}</h2>
			<button @click="handoff">切换天气</button>
			<h2>{{number.a}}</h2>
			<button @click="number.a++">深度监听a</button>
			<h2>{{number.b}}</h2>
			<button @click="number.b++">深度监听b</button>
		</div>
	</body>
	<script src="./js/main.js"></script>
</html>
```

**JavaScript**

```js
var vm = new Vue({
	el: '#app',
	data: {
		isHot: true,
		number: {
			a: 1,
			b: 2,
		},
	},
	computed: {
		weather() {
			return this.isHot ? '热' : '冷';
		},
	},
	methods: {
		handoff() {
			this.isHot = !this.isHot;
		},
	},
	watch: {
		isHot: {
			// 初始化时是否侦听 一次
			immediate: true,
			handler(newValue, oldValue) {
				console.log('ishot被修改', newValue, oldValue);
			},
		},
		number: {
			// 是否进行深度侦听对象的属性。
			deep: true,
			handler(newValue, oldValue) {
				console.log('number被修改', newValue, oldValue);
			},
		},
	},
});

Vue.config.productionTip = false;
```

## handler()

当侦听的数据发生变动时，会触发`hanler()`.

侦听的数据必须存在，才能进行侦听。

它有两个参数，第一个参数是**数据改变后的值**，第二个参数是**数据改变前的值**。

## immediate

初始化页面时是否进行一次侦听。

当值为`false`时，只有当数据发生改变才会调用`handler()`。

当值为 `true`时，初始化页面，`handler()` 也会调用一下。

## deep

是否深度侦听对象的属性变化。

Vue 实例自身可以侦听到对象属性的改变，但 Vue 实例的`watch`默认不支持侦听对象属性的改变。

当值为 `false`时，不能侦听到对象中属性的变化。

当值为`true`时，可以侦听到对象属性的变化。

## `computed`与 `watch` 的区别：

1. `computed`能完成的功能，`watch`都可以完成。
1. 当用`computed`和`watch`都能实现某一个功能的时候，优先使用`computed`。
1. `watch`能完成的功能，`computed`不一 定 能完成，比如 `watch`可 以进行异步操作，`computed`却不能（return 无法异步执行）。

## 重要的小原则：

1. 所有被 Vue 管理的函数，最好使用普通函数，这样 `this` 的指向才是 Vue 实例或组件实例对象。
2. 所有不被 Vue 管理的函数（定时器的回调函数、ajax 的回调函数等)，最好使用箭头函数，这样 `this` 的指向才是 Vue 实例对象。

## 简写

这种写法无法配置`immediate`和`deep`。

```js
watch: {
    isHot(newValue, oldValue) {
        console.log('ishot被修改', newValue, oldValue);
    },
},
```
