---
title: JavaScript with
date: 2022-04-04
categories:
        - Note
tags:
        - 前端

        - JavaScript
---

# with

**with(ogj)函数可以改变自身代码块中的代码的作用域链**，它会将 obj 放到它自己代码块中的代码的作用域链的最顶端，也就是会先去 obj 的作用域中去寻找变量。

ES5 中不支持 with 函数。

```JS

var obj = {
    age: "456",
    name: "your",
}

function test() {
    var age = '123';
    var name = 'my';
    with (obj) {
        // 下面的输出不会返回自身作用域（test 函数的作用域）下的 age 和 name。
        // 只会返回全局作用域下的 obj 对象的 age 和 name，因为作用域被 with 函数改变了。
        console.log(age);
        console.log(name);
    }
}
test();
```

## 替代链式调用

```JS
with (document) {
    write("with 调用" + "<br/>")
}

//等同于
document.write("链式调用")
```

## with 的缺点

with 的缺点就是因为太强大了，可以更改原型链，这会导致程序运行变慢。
