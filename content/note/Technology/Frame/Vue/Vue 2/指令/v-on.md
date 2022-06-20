---
title: Vue v-on
date: 2022-05-10
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2

---

# v-on

注册一个事件，可简写为`@`。

支持一些指令修饰符，比如 `prevent`。

事件函数必须存在于`methods`中，事件参数为`event`。

```vue
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>
```

**调用事件函数时**

1. **不加括号**，调用事件函数就可以直接获取到该函数的事件对象。
2. **加了 ()**， 除了可以使用`$event`来获取事件对象，还能传入其他的参数。

```vue
<div id="root">
    <button @click='showInfo'>提示信息</button>
    <button @click='showInfo2($event,6666)'>提示信息</button>
</div>
```
