---
title: Vue Class 与 Style 绑定
date: 2022-05-18 6:00:00
updated: 2022-05-18 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记

---

# Class 与 Style 绑定

## 绑定 Class

### 字符串

适合场景：类名不确定，且需要要动态获取。

### 对象

适合场景：要绑定多个类名，类名个数确定，类名也确定，但需要动态决定是否要应用样式。

通过修改属性的布尔值来决定是否启用当前样式。

### 数组

适合场景：要绑定多个类名，类名个数不确定，类名也不确定。

通过向数组中添加元素来增加类名，删除元素来移除类名。

## 绑定内联样式

### 对象

CSS 属性名可以用小驼峰式或短横线分隔（用引号括起来）来命名。其中 CSS 属性指是动态值

**HTML**

```HTML
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.js"></script>
        <title>Vue</title>
        <style>
            .basic {
                width: 100px;
                height: 100px;
                margin-top: 10px;
                border: 1px solid #000;
            }

            .style2 {
                background-color: rgb(15, 110, 120);
            }

            .style3 {
                background-color: rgb(93, 160, 89);
            }

            .s1 {
                border-radius: 5px;
                background-color: aqua;
            }

            .s2 {
                border: 1px solid rgb(250, 3, 3);
                background-color: rgb(4, 255, 0);
            }

            .s3 {
                box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <div class="basic" :class="style">{{name}}</div>
            <button @click="changStyle">点击切换样式</button>
            <div class="basic" :class="classArr">{{name}}</div>
            <div class="basic" :class="classObj">{{name}}</div>
            <div class="basic" :style="styleObj">{{name}}</div>
        </div>

    </body>
    <script src="./js/main.js"></script>
</html>
```

**JavaScrip**

```js
var vm = new Vue({
	el: '#app',
	data: {
		name: '巴黎',
		style: 'style2',
		classArr: ['s1', 's2'],
		classObj: {
			s1: true,
			s2: false,
			s3: true,
		},
		styleObj: {
			'font-size': '50px',
			color: 'green',
			backgroundColor: 'red',
		},
	},

	methods: {
		changStyle() {
			this.style = 'style3';
		},
	},
});

Vue.config.productionTip = false;

```

