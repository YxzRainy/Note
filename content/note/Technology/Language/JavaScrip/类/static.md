---
title: JavaScrip static
date: 2022-06-05
categories:
        - 编程语言
tags:
        - 前端
        - Note
        - JavaScript
---

# static

定义静态方法。静态方法不能在类的实例上调用静态方法，而应该通过类本身调用。

```js
class Phone {
	static name = '静态方法';
}

let apple = new Phone(4, 3);
console.log(apple.name);
console.log(Phone.name);
```
