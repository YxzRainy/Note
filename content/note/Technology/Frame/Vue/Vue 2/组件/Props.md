---
title: Vue Props
date: 2022-05-23
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2

---

# Props

使组件接收外部传入的数据，且属性是只读的，不可更改的，这叫做单向数据流。若需要修改，可以配合`data`使用，间接修改`props`中的数据

**一个组件的属性，应该避免被除了自身以外的组件所更改或控制**。

若同时配置使用 `data` 和 `props` ，会优先使用`props`中的数据。

## 传递数据

```vue
<Sudent ref="student" name="Rainy" :age="20" sex="男"></Sudent>
```

## 接收数据

### 只接收数据

```js
props: ["name", "age", "sex"],
```

### 指定属性值类型

```js
props: {
  name: String,
  age: Number,
  sex: String,
},
```

### 限制类型、必要性、指定默认值

```js
props: {
  name: {
    type: String,
    // 属性的值是必须的
    required: true,
  },
  age: {
    type: Number,
    // 属性的默认值
    default: 0,
  },

  sex: {
    type: String,
    required: true,
  },
},
```

## 间接修改 props 中的数据

使用 `data`间接的修改 `props`

```js
<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>{{ myAge + 1 }}</h3>
    <h3>{{ sex }}</h3>
    <button @click="fun">年龄 + 1</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      tips: "Hi",
      myAge: this.age,
    };
  },
  props: {
    name: {
      type: String,
      // 属性的值是必须的
      required: true,
    },
    age: {
      type: Number,
      // 属性的默认值
      default: 0,
    },
    sex: {
      type: String,
      required: true,
    },
  },
  methods: {
    fun() {
      this.myAge++;
    },
  },
};
</script>


```
