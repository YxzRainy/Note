---
title: JavaScrip ES6 Module
date: 2022-05-15
categories:
        - Note
tags:
        - 前端
        - 模块化

        - JavaScript
---

# ES6 Module

## 配置 package.json

项目或模块的描述文件。

```json
{
	"name": "es6-module",
	"version": "1.0.0",
	"dependencies": {
		"jquery": "^3.6.0",
		"uniq": "^1.0.1"
	},
	"devDependencies": {
		"@babel/cli": "^7.17.10",
		"@babel/core": "^7.17.12",
		"@babel/preset-env": "^7.17.12",
		"browserify": "^17.0.0"
	}
}
```

## 安装

### babel/cli

Babel 自带的一个内置的 CLI 命令行工具，可通过命令行编译文件。

```sh
npm install --save-dev @babel/core @babel/cli
```

其中`@babel/core`是 babel 的核心库。

### babel/preset-env

一个智能预设，允许您使用最新的 JavaScript，而无需微观管理目标环境需要哪些语法转换（以及可选的浏览器 polyfills）

```sh
npm install --save-dev @babel/preset-env
```

### 安装 Browserify

用来打包编译模块。

```sh
npm install -g browserify
```

## 配置 babel.config.json

bable 的配置文件。

```json
{
	"presets": [
		[
			"@babel/preset-env",
			{
				"targets": {
					"edge": "17",
					"firefox": "60",
					"chrome": "67",
					"safari": "11.1"
				}
			}
		]
	]
}
```

## 创建项目结构

## 模块化编码

**modules1.js**

```js
// 暴露模块方式一：分别暴露

export function fun1() {
	console.log('fun1 module1');
}

export function fun11() {
	console.log('fun11 module1');
}

export var arr = [9999, 34, 5, 6, 1565, 757, 6];
```

**modules2.js**

```js
// 暴露模块方式二：统一暴露

function fun2() {
	console.log('fun2 module2');
}

function fun22() {
	console.log('fun2 module2');
}

export { fun2, fun22 };
```

**modules3.js**

```js
// 默认暴露，暴露一个函数，接收到的也是一个函数
export default function () {
	console.log('默认暴露');
}
```

**main.js**

```js
// 将其他模块所暴露出来的数据引入到主模块

import { fun1, fun11, arr } from './module1';
import { fun2, fun22 } from './module2';
// 导入模块三默认暴露的函数
import module3 from './module3';
// 导入第三方模块
import uniq from 'uniq';
import $ from 'jquery';

fun1();
fun11();
fun2();
fun22();
console.log(arr[1]);
// 调用默认暴露的函数
module3();

// 调用第三方模块中的方法
var result = uniq(arr);
console.log(result);

$('body').css('background', 'black');
```

**index.js**

## 模块向后兼容

解析 `src` 目录下的所有 JavaScript 文件，并应用我们所指定的代码转换功能，然后把每个文件输出到 `lib` 目录下。

```sh
 npx babel ./src --out-dir ./lib
```

之后就会发现`lib`目录下多了几个文件，这些文件中的代码都向后兼容。

## Browserify 打包模块

```js
browserify ./lib/main.js -o bundle.js
```

最后在`index.html` 中引入`build.js` 即可。

```HTML
<script src="./dist/build.js"></script>
```
