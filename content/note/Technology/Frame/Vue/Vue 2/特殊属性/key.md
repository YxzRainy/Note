---
title: Vue key
date: 2022-05-10
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2

---

# key

表示节点的唯一标识`key`。

使用 `v-for` 时，如果不给元素加上 `key`，那么 Vue 会默认将 `index`当作元素的`key`。

该属性可以干预`diff `算法，在同一层级，`key`值相同的节点会进行比对，`key`值不同的节点则不会比对。

在循环生成的节点中，vue 强烈建议给予每个节点唯一且稳定的 key 值。

**HTML**

```vue
<div id="app">
    <div v-if="handoff === 'login'">
        <label>登录</label>
        <input type="text" name="" id="" key="1">
    </div>

    <div v-else>
        <label>注册</label>
        <input type="text" name="" id="" key="2">
    </div>
    <div>
        <!-- handoff 等于：如果 login 为 true，则 handoff === register，否则 handoff === login -->
        <button @click="handoff = handoff === 'login'?'register':'login'">切换</button>
    </div>
</div>
```

**JavaScrip**

```js
var app = new Vue({
	el: '#app',
	data: {
		text: '表单',
		handoff: 'login',
	},
});
Vue.config.productionTip = false;
```

## 虚拟 DMO 树中 key 的作用

key 是虚拟 DOM 对象的唯一标识，当数据发生变化时，Vue 会根据新数据生成一棵新虚拟 DOM 树，随后将其与旧虚拟 DOM 树比对（`diff`算法）。

**比对规则：**

1. 在旧虚拟 DOM 树中找到了与新虚拟 DOM 树中相同`key`的节点：
      - 若两棵虚拟 DOM 树中的节点没有变化，则直接使用之前已经生成好的真实 DOM 节点。
      - 若两棵虚拟 DOM 树中的节点有变化，则仅将两棵虚拟 DOM 树有差异的节点渲染为真实 DOM 节点。

**这样可最小程度的改动真实 DOM，提升页面渲染效率。**

1. 在旧虚拟 DOM 树中未找到与新虚拟 DOM 树中相同`key`的节点：
      - 将未找到的虚拟 DOM 节点渲染为真实 DOM 节点。

### 用 index 作为 key 可能会引发的问题：

- 若对数据进行逆序添加、逆序删除等其他破坏数组元素顺序的操作，**会产生没有必要的 DOM 更新，导致渲染效率低**。
- 如果结构中还包含表单类 DOM，**则会导致错误的 DOM 更新，并会导致界面渲染出现严重的问题**。

### 开发中如何选择 key？

- 最好使用每条数据的唯一标识符作为 `key`，比如 id、手机号、身份证号等**具有唯一性的值**。
- 如果不存在对数据的逆序添加、逆序删除等破坏数组元素顺序的操作，仅用于渲染展示，则可以直接使用 `index`作为 `key`。
