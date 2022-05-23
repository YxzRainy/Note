---
v-ontitle: Vue directives
date: 2022-05-22 6:00:00
updated: 2022-05-22 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记

---

# directives

局部自定义指令，一个指令就是一个函数或对象。

`directives`中出现的`this` 都指向 `Window`。

## 函数式

函数中有两个参数：

- `element`：指令所在的 DOM 元素。
- `binding`：一个对象，其中的`value` 属性就是自定义指令的属性值。 

### 会在什么时候被调用？

- 指令与元素**绑定成功时**（初始化）会被调用。但此时元素还没有被 Vue 解析并插入到页面，这会导致在`directives`中，某些方法不能及时的生效。比如`focus()`。

- 指令所在的模板被重新解析时。


**HTML**

```html

<div id="app">
    <h2>当前 n 的值为：{{n}}</h2>
    <h3>放大十倍后的 n 为 ：<span v-big="n"></span></h3>
    <button @click="n++">点击后 n++</button>
</div>
```

**JavaScrip**

```js
var vm = new Vue({
	el: '#app',
	data: {
		n: 1,
	},
	directives: {
		big(element, binding) {
			element.innerText = binding.value * 10;
		},
	},
});

Vue.config.productionTip = false;

```

## 对象式

对象中有三个函数：

- `bind()`：当指令与元素**绑定成功时**（初始化），此时元素还没有被 Vue 解析并插入到页面，这会导致自定义属性时，某些方法不能及时的生效。比如`focous()`。
- `inserted`：指令所在的元素已经被插入到页面时。
- `update`：指令所在的模板被重新解析时。

**HTML**

```html
<div id="app">
    <h2>当前 n 的值为：{{n}}</h2>
    <h2>放大 100 倍的值：</h2><input type="text" name="" id="" v-focus-bind="n">
    <button @click="n++">点击后 n++</button>
</div>
```

**JavaScript**

```JavaScript
var vm = new Vue({
	el: '#app',
	data: {
		n: 1,
	},
	directives: {
		'focus-bind': {
			bind(element, binding) {
				element.value = binding.value;
			},
			inserted(element, binding) {
				element.focus();
			},
			update(element, binding) {
				element.value = binding.value * 100;
			},
		},
	},
});

Vue.config.productionTip = false;

```

