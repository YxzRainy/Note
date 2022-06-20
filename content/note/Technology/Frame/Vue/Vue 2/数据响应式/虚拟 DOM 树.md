---
title: Vue 虚拟 DOM 树
date: 2022-05-10
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2

---

# 虚拟 DOM 树

它是一个普通的对象，对应着真实的 DOM 树；虚拟 DOM 树的节点都是虚拟的节点。

为了提高效率，vue 会把**模板**编译成为**虚拟 DOM 树**，然后生成**真实 DOM 树**。

因为浏览器如果直接修改真实的 DOM 树，这是非常影响效率的，但如果修改一个对象，那么效率是非常高的。

## 有什么用

当数据更改时，会将更改后的内容编译成一棵新的虚拟 DOM 树，然后将其与旧的虚拟 DOM 树比对（`diff`算法），**仅将两棵虚拟 DOM 属有差异的节点渲染为真实 DOM 树，没有差异的节点则直接使用旧虚拟 DOM 树所对应的真实 DOM 树上的节点**（复用）。这样可最小程度的改动真实 DOM，提升页面渲染效率。

因此，对于 Vue 而言，提升效率重点在于两个方面：

1. 减少新的虚拟 DOM 的生成。

2. 保证虚拟 DOM 树对比之后，只有必要的节点发生变化。

## 如何生成虚拟 DOM 树

生成虚拟 DOM 树的方式：

1. 在挂载的元素内部直接书写，此时使用元素的`outerHTML`作为模板。优先级最低。
2. 在`template`配置中书写,，它是一个模板字符串。优先级比第一种方式高。
3. 在`render()`中直接创建虚拟节点树，此时，完全脱离模板（无需模板解析器代码），这会**省略将模板编译为虚拟 DOM 树的步骤**。优先级最高。
      1. 当我们将 Vue 编译为浏览器可识别的 HTML 代码的时候，此时已无需使用模板解析器，因此，我们可以直接引入只有 Vue 核心代码（不包含模板解析器代码，无法使用`template`配置项）的`vue.runtime.xxx.js`，来精简我们的项目。

使用`render()`循环创建 1—6 级标题：

```js
var app = new Vue({
	el: '#app',
	render(t) {
		var titles = [];
		for (var i = 1; i <= 6; i++) {
			titles.push(t(`h${i}`, `${i}级标题`));
		}
		return t('div', titles);
	},
});
Vue.config.productionTip = false;
```

## 虚拟 DOM 树只能有一个根节点

相对应的，模板也必须是单根的。因为`diff` 算法决定了只能对两棵虚拟 DOM 树进行比对。

```js
var app = new Vue({
	el: '#app',

	// 因为虚拟 DOM 树必须是单根，因此模板也必须是单根
	// 即它们都只能有一个根节点
	template: `
    <div>第一个根节点</div>
    <div>第二个根节点</div>
    `,
});
Vue.config.productionTip = false;
```

## 模板

模板的作用，是为了生成虚拟 DOM 树。

```vue
<div id="app">
            <h1>{{ title }}</h1>
            <ul>
                <li v-for='(item ,i) in product'>
                    名称：{{item.name}} 熟悉程度：{{item.familiar}}
                    <button @click="remove(i)">删除</button>
                    <button @click="item.familiar++">增加</button>

                </li>

            </ul>
        </div>
```

## 真实 DOM

```html
<div id="app">
	<h1>vue 加载成功!</h1>
	<ul>
		<li>
			名称：JavaScrip 熟悉程度：3
			<button>删除</button> <button>增加</button>
		</li>
		<li>
			名称：C 熟悉程度：2
			<button>删除</button> <button>增加</button>
		</li>
		<li>
			名称：Go 熟悉程度：1
			<button>删除</button> <button>增加</button>
		</li>
	</ul>
</div>
```
