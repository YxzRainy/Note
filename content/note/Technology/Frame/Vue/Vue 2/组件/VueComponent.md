---
title: VueComponent
date: 2022-05-10
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2

---

# VueComponent

- 一个组件的本质是一个名为`VueComponent()`的构造函数， 且不是程序员定义的，是`Vue. extend()`生成的。
- 我们只需要应用某个组件，像这样`<school></school>`，Vue 解析时会帮我们创建这个`school`组件的实例对象，即 Vue 内部会执行：`new VueComponent(options)`.
- 每次调用 `Vue.extend()`时，都会重新定义一个全新的`VueComponent()`。此，每次调用`Vue.extend()`时，返回的都是一个全新的`VueComponent()`，
- 关于 `this` 的指向：

     - 在 Vue 实例中，data、methods、watch、computed 配置中的普通函数，其 `this` 指向都是 **Vue 实例对象**。
     - 在组件实例中，data、methods、watch、computed 配置中的普通函数，其 `this` 指向都是**VueComponent 实例对象**。

- Vue 实例简称`vm`、组件实例简称 `vc`。
- `$children`属性表示了当前实例（Vue 实例和组件实例）上的子实例。
