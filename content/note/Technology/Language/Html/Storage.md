---
title: HTML Storage
date: 2022-05-05
categories:
        - Note
tags:
        - 前端
        - HTML
---

# Storage

## localStorage

localStorage 的生命周期是永久的，关闭页面或浏览器之后 localStorage 中的数据也不会消失。**除非主动删除数据，否则数据永远不会消失**

解决了 cookie 存储空间不足的问题（4K），localStorage 中一般浏览器支持的是 5M 大小，这个在不同的浏览器中 localStorage 会有所不同。它只能存储字符串格式的数据，所以最好在每次存储时把数据转换成 json 格式，取出的时候再转换回来。

localStorage 和 sessionStorage 都具有相同的操作方法，

### setItem()

给当前域名下的本地 Storage 增加一个 key 和 value。如果 key 存在，就更新 value。

### getItem()

返回一个 key 的 value，如果 key 不存在则返回 null。

### clear()

清除所有本地存储的数据。

### 实例

```js
// 存储
localStorage.setItem('myCat', 'Tom');

// 读取
let cat = localStorage.getItem('myCat');

console.log(cat);

// 移除
localStorage.removeItem('myCat');

// 读取
console.log(localStorage.getItem('myCat'));

// 存储
localStorage.setItem('NewMyCat', 'Jery');

// 读取
console.log(localStorage.getItem('NewMyCat'));

// 清空
localStorage.clear();

// 读取
console.log(localStorage.getItem('NewMyCat'));
```

## sessionStorage

它生命周期是仅在当前会话下有效。sessionStorage 引入了一个【浏览器窗口】的概念，sessionStorage 是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。

- 打开多个相同的 URL 的 Tabs 页面，会创建各自的 `sessionStorage`。
- sessionStorage 在关闭了浏览器窗口后就会被销毁。
