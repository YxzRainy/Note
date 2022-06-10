---
title: Ajax IE 缓存问题
date: 2022-05-01
categories:
        - Ajax
tags:
        - 前端
        - Note
---

# Ajax IE 缓存问题

IE 浏览器会会对 Ajax 请求的的结果进行缓存，这会导致下次请求服务器的时候，使用的是本地的缓存，而不是服务器响应的最新数据，这会对一些时效性比较强的一些场景产生影响。

## JavaScript

在 open 方法种中的 url 路径中加上一个参数`...?t=' + Date.now()`即可。该值是获取当前时间戳。

```js
const div = document.getElementById('result');
const btn = document.getElementById('btn');
btn.onclick = function () {
	const xhr = new XMLHttpRequest();
	// 获取时间戳，解决IE 浏览器缓存的问题
	xhr.open('POST', 'http://localhost:8000/ie?t=' + Date.now());
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader('name', 'Rainy');
	xhr.send('a=100&b=200');
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				div.innerHTML = xhr.response;
			} else {
			}
		}
	};
};
```
