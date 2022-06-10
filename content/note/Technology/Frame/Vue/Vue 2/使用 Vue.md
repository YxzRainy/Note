---
title: 使用 Vue
date: 2022-04-10
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - Note
---

# 使用 Vue

- 引入 `Vue.js`。
     - 本地 js 文件。
     - Vue [CDN](https://www.bootcdn.cn/vue/)。
- 脚手架。
     - 官方脚手架`vue-cli`。
     - 其他民间脚手架，如`webpack-simple`。
     - 手动搭建，灵活性高。

## 第一个 Vue 程序

创建 Vue 实例，并传给一个配置对象。

root 容器里的代码被称为 Vue 模板，模板中是插值语法`{{}}`，其中只能写 JavaScrip 表达式。

一个 Vue 实例，只能控制一个容器，它们之间只能一一对应。

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>

		<title>Document</title>
	</head>

	<body>
		<!-- {{}}插值语法 -->
		<div id="app">{{ message }}</div>
	</body>
	<script src="./main.js"></script>
</html>
```

### JavaScript

```JavaScript
// new 一个 名为 app 的 vue 实例
var app = new Vue({
    // 选择一个在页面上已存在的 DOM 元素作为操作元素
    el: '#app',
    // 将数据内容 message 插入到 el 所选择的元素
    data: {
        message: 'vue 加载成功!',
    },
});

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;
```
