---
title: Vue style
date: 2022-05-13
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - Note
---

# style

## scoped

默认情况，给不同的组件书写 CSS 样式，最终都会汇总到一个文件，这极有可能导致样式覆盖等问题。

因此，我们可以给组件中的给`<style>`添加`scoped`属性，以表示它的样式只作用于当前模块，很好的实现了样式私有化的目的，这是一个非常好的机制。

```vue
<style scoped>
.demo {
	font-size: 2rem;
}
</style>
```

**使用该属性后，它会给组件添加唯一的自定义属性，使我们原本的 CSS 选择器变为 CSS 属性选择器，使得该组件的样式是私有化。**

### 为什么要慎用

在实际业务中我们往往会对公共组件样式做细微的调整，如果添加了`scoped`属性，那么样式将会变得不易修改。

## lang

配置当前`<style>`中所使用的语言，使得 Vue 可以解析。例如：lees

```vue
<style lang="less">
.demo {
	font-size: 2rem;
	.sub {
		color: rgb(59, 119, 123);
	}
}
</style>
```
