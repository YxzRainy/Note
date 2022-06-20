---
title: PHP closure
date: 2022-05-25
categories:
        - 编程语言
tags:
        - PFP
        - 后端

---

# closure

php 的 Closure，v 也就是匿名函数。

匿名函数中，默认无法访问外部函数中的变量。

```js
function demo()
{
    $a = 1;
    function fun()
    {
        // 无法使用 demo() 中的 $a
        echo $a;
    };
    fun();
};
demo();

```

通过 `use()`将外部变量传入到内部函数的作用域内：

```js
function demo()
{
    $a = 1;
    $fun = function () use ($a) {

        echo $a;
    };
    $fun();
};

demo();
```

## 闭包

匿名函数中的`use()`，其作用就是从父作用域继承变量，继承之后，就会形成一个闭包。

```php
function demo()
{
    $a = 1;
    $fun = function () use ($a) {

        echo $a;
    };
    return $fun;
};

$closure = demo();

$closure();

```
