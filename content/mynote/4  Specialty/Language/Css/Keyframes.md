---
title: Css keyframes
date: 2021-10-09 6:00:00
updated: 2021-10-20 6:00:00
categories:
        - 编程语言
tags:
        - Css
        - 前端
        - 学习笔记
---

# Css keyframes

## 持续旋转

选中文档中的元素。

```css
.map2 {
  width: 8.0375rem;
  height: 8.0375rem;
  background-image: url(../images/lbx.png);
  opacity: 0.6;
  animation: rotate 15s linear infinite;
  z-index: 2;
}
```

### keyframes 

```css
@keyframes rotate {
	/* 从 0° 开始旋转 */
	from {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	/* 旋转到 360 ° */
	to {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}
```

