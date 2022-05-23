---
title: Vue filters
date: 2022-05-21 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# filters

局部过滤器，只能在啊当前 Vue 实例中使用的过滤器。它将`|`之前的数据当作参数，并传递给在`|`之后的过滤函数，并作为该过滤函数的参数。

过滤函数的返回值会被作为最终值解析到模板中。

### 传参

过滤函数除了可以将在`|`之前的数据当作第一个实参时，还能接受额外的其他参数。

### 串联

过滤器中的多个过滤函数可以串联，用`|`将不同的过滤器函数分开，前一个函数的返回值会被当作后一个函数的实参。

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
		<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.js"></script>
		<title>j</title>
		<style></style>
	</head>

	<body>
		<div id="app">
			<!-- 过滤器 -->
			<h3>Vue - filters：{{time | timeFmt}}</h3>
			<!-- 过滤器地传参 -->
			<h3>Vue - filters：{{time | timeFmt('YYYY——MM——DD')}}</h3>
			<!-- 过滤器串联 -->
			<h3>Vue - filters：{{time | timeFmt('YYYY——MM——DD') | mySlice('YYYY')}}</h3>
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
		msg: '局部过滤器',
		time: 1653135479429,
	},
	filters: {
		timeFmt(val, str = 'YYYY年MM月DD日') {
			return dayjs(val).format(str);
		},
		mySlice(val) {
			return val.slice(0, 4) + ' 年';
		},
	},
});

Vue.config.productionTip = false;
```
