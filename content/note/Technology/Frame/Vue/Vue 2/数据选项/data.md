---
title: Vue data
date: 2022-05-15
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - Note
---

# data

data 中的数据，不是直接在 Vue 实例中，而是在`_data`中，而`_data`在 Vue 实例中。

data 中的数据，Vue 使用了数据代理和数据劫持，从而实现了数据响应式。

## 书写方式

### 对象式

Vue 实例中使用对象式和函数式都可以。

```js
data: {
    name: 'Vue 实例',
},
```

### 函数式

在组件实例中必须使用**函数式**，否则会报错。

```js
data() {
    return {
        name: '组件实例',
    };
},
```
