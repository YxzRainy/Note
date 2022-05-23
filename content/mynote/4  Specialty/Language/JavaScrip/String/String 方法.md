---
title: JavaScript String 方法
date: 2022-05-05 6:00:00
categories:
        - 编程语言
tags:
        - 前端
        - 学习笔记
        - JavaScript
---

# String 方法

## fromCharCode()

将 UTF-16 组成的值转换为一个字符串。

## match()

检索并返回字符串匹配正则表达式的结果。

参数通常是一个正则表达式，

```js
var reg = /ab/g;

var str = 'abababababab';

var result = str.match(reg);
console.log(result);
```

## slice()

从字符串的第 n 位字符开始截取，一直截取到字符串最末。并返回一个新的字符串，且不会改动原字符串。

## search()

返回子字符串在字符串中的起始位置（索引值）这个字符串也可以使正则表达式。

匹配失败返回 -1。

```js
var str = 'eedsddvv';

var reg = /(\w)\1(\w)\2/g;

var result = str.search(reg);

console.log(result);
```

## split()

使用指定的分隔符字符串将一个字符串对象分割成子字符串数组，以一个**指定的分割字串**来决定每个拆分的位置。

除了会返回匹配结果，还会返回`()`中第一次匹配的**子表达式的值**，并且这些值是类数组的数据位，它们存在于类数组的索引位中。

```js
var str = 'dfjajfdsssajfiovvdsafjttidjf';

var reg = /(\w)\1/g;

var result = str.split(reg);

console.log(result);
```

### 用数之来分割字符串

```js
var str = 'dfjajfdss0sajfiovvds0afjttidjf';

var reg = /\d/g;

var result = str.split(reg);

console.log(result);
```

## replace()

匹配普通字符串时，只能匹配一次。这也是非正则表达式的缺陷，它没有访问字符串**全局**的权限。

```js
var str = 'aafjdfeijogfjdalgala';
// 只将字符串中的第一个 a 替换成了 y
// 后面的 a 并没被替换
var result = str.replace('a', 'y');
console.log(result);
```

匹配带`g`的正则表达式时，就可以全局匹配：

```js
var str = 'aaaaa';
var reg = /a/g;
// 字符串中全部的 a 都被替换为了 y
var result = str.replace(reg, 'y');
console.log(result);
```

### $ 反向引用

用`$`来反向引用正则表达式中`()`子表达式中的内容。

$1 表示正则表达式中第一个(`)`中的内容；$2 表示正则表达式中第二个`()`中的内容，以此类推...

```js
var str = 'aabbaabb';
var reg = /(\w)\1(\w)\2/g;

var result = str.replace(reg, '$2$2$1$1');
console.log(result);
```

### 回调函数

用回调函数的方式来实现替换。

如果是全局匹配，每匹配一次，回调函数都会执行一次。如果不是全局匹配，则只匹配一次，回调函数也只执行一次。

- 函数的第一个参数是正则表达式匹配到结果。
- 函数的第二个参数是\*\*正则表达式中第一个`()`中的内容。
- 函数的第三个参数是\*\*正则表达式中第二个`()`中的内容。
- 以此类推...

```js
var str = 'aabbaabb';
var reg = /(\w)\1(\w)\2/g;

var result = str.replace(reg, function ($, $1, $2) {
	return $2 + $2 + $1 + $1;
});
console.log(result);
```

甚至还可以自定义返回 reture 的值：

```js
var str = 'aabbaabb';
var reg = /(\w)\1(\w)\2/g;

var result = str.replace(reg, function ($, $1, $2) {
	// return bbaahollobbaahollo，因为需要匹配两次
	return $2 + $2 + $1 + $1 + 'hollo';
});
console.log(result);
```

## toUpperCase()

将指定字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）。

```js
var sentence = 'my name is rainy';

// return MY NAME IS RAINY
console.log(sentence.toUpperCase());
```

## toLowerCase()

```js
var sentence = 'MY NAME IS RAINY';

// return my name is rainy
console.log(sentence.toLowerCase());
```

## substring()

返回一个字符串在**开始索引到结束索引之间**的字符串, 或从**开始索引直到字符串的末尾**的字符串。

## indexOf()

返回字符串中所包含某个字符串第一次出现的索引。

用`indexOf()`判断一个字符串中是否包含空字符串，会返回`0`，而不是-1。
