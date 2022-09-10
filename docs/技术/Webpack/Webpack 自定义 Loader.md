---
title: Webpack 自定义 Loader
date: 2022-06-30
categories:
        - Tutorial
tags:
        - Node.Js
        - 打包工具
        - Webpack
---

# Webpack 自定义 Loader

Loader 可以帮助 webpack 将不同类型的文件转换为 webpack 可识别的模块。

## Loader 执行顺序

分类

- pre： 前置 loader

- normal： 普通 loader

- inline： 内联 loader

- post： 后置 loader

执行顺序

- 四类 loader 的执行优级为：`pre > normal > inline > post` 。
- 相同优先级的 loader 执行顺序为：`从右到左，从下到上`。

```js
module: {
  rules: [
    {
      enforce: "pre",
      test: /\.js$/,
      loader: "loader1",
    },
    {
      // 没有 enforce 就是normal
      test: /\.js$/,
      loader: "loader2",
    },
    {
      enforce: "post",
      test: /\.js$/,
      loader: "loader3",
    },
  ],
},
```

## 定义简单 Loader

根目录新建`loder/testLoader.js`

```js
module.exports = function (content, map, meta) {
	console.log(content);
	return content;
};
```

配置 `webpack.config.js`

```js
module: {
	rules: [
		{
			test: /\.js$/i,
			loader: './loader/testLoader.js',
		},
	];
}

```

### Loader 接受的参数

- `content`：源文件的内容
- `map` ：SourceMap 数据
- `meta` ：其他 Loader 的数据，可以是任何内容。

## Loder 分类

### 同步 Loader

```javascript
module.exports = function (content, map, meta) {
  return content;
};
```

`this.callback` 方法则更灵活，因为它允许传递多个参数，而不仅仅是 `content`。

```javascript
module.exports = function (content, map, meta) {
  // 传递map，让source-map不中断
  // 传递meta，让下一个loader接收到其他参数
  this.callback(null, content, map, meta);
  return; // 当调用 callback() 函数时，总是返回 undefined
};
```

### 异步  Loader

进行异步操作必须使用异步 Loader。

```javascript
module.exports = function (content, map, meta) {
  const callback = this.async();
  // 进行异步操作
  setTimeout(() => {
    callback(null, result, map, meta);
  }, 1000);
};
```

由于同步计算过于耗时，在 Node.js 这样的单线程环境下进行此操作并不是好的方案，我们建议尽可能地使你的 loader 异步化。但如果计算量很小，同步 loader 也是可以的。

### Raw Loader

当处理图片图标等资源的时候，会使用 Raw Loader，它的 content 是一个 Buffer 数据

默认情况下，资源文件会被转化为 UTF-8 字符串，然后传给 Loader。通过设置 raw 为 true，loader 可以接收原始的 Buffer。

```javascript
module.exports = function (content) {
  // content 是一个 Buffer 数据
  return content;
};
// 开启 Raw Loader
module.exports.raw = true; 
```

###  Pitching Loader

Pitching Loader 中的 pitch 会在 normal 执行之前执行。

```javascript
// normal ，在 pitch 之后执行：
module.exports = function (content) {
  return content;
};
// pitch ，在 normal 之前执行 
module.exports.patch = function (remainingRequest, precedingRequest, data) {
  console.log("do somethings");
};
```

最终的执行顺序：**pitch1 ——> pitch2 ——> pitch3 ——> loader3 ——> loader2 ——> loader3**

![loader执行顺序](https://gallery.yxzi.xyz/galleries/2022/06/30/loader%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F.png)

#### pitch 中的 return

不再执行当前 pitch 后面的 pitch，直接执行上一个 pitch 的 normal。

![pitch被return](https://gallery.yxzi.xyz/galleries/2022/06/30/pitch%E8%A2%ABretur.png)

## 自定义 Loader

### clean-log-loader

清除 js 模块中的所有 `console.log()`。

根目录新建`loder/clean-log-loader/lean-log-loader.js`。

```js
module.exports = function cleanLogLoader(content) {
  // 将 console.log 替换为空
  return content.replace(/console\.log\(.*\);?/g, "");
};
```

配置 **webpack.config.js**

```js
module: {
    rules: [
        {
            test: /\.js$/i,
            loader: './loader/clean-log-loader/clean-log-loader.js',
        },
    ]
}
```



### banner-loader

给 js 模块添加文本注释。

根目录新建`loder/banner-loader/banner-loader.js`。

```js
const schema = require('./schema.json');

module.exports = function (content) {
	// 获取 loader 的 options，同时对 options 内容进行校验
	// schema 是 options 的校验规则（符合 JSON schema 规则）
	const options = this.getOptions(schema);

	const prefix = `
    /*
    * Author: ${options.author}
    */
  `;

	return `${prefix} \n ${content}`;
};

```

根目录新建`loder/banner-loader/schema.json`。

```json
{
    "type": "object",
    "properties": {
      "author": {
        "type": "string"
      }
    },

    "additionalProperties": false
  }
```

配置 **webpack.config.js**

```js
module: {
	rules: [
		{
			test: /\.js$/i,
			loader: './loader/banner-loader/banner-loader.js',
			options: {
				author: 'Rainy',
				// 无法继续追加属性，因为 schema.js 中 的"additionalProperties": false
			},
		},
	];
}
```

### babel-loader

编译 js 代码，将 ES6+语法编译成 ES5-语法。

**根目录新建`loder/babel-loader/babel-loader.js`**

```js
const babel = require("@babel/core");
const schema = require("./schema.json");

module.exports = function (content) {
  // 异步 loader
  const callback = this.async();
  const options = this.getOptions(schema);

  // 使用 babel 对代码进行编译
  babel.transform(content, options, function (err, result) {
    if (err) callback(err);
    else callback(null, result.code);
  });
};

```

**根目录新建`loder/babel-loader/schema.json`**

```json
{
    "type": "object",
    "properties": {
      "presets": {
        "type": "array"
      }
    },
    "additionalProperties": true
  }
  
```

**配置 webpack.config.js**

```js

module: {
    rules: [

        {
            test: /\.js$/i,
            loader: './loader/babel-loader/index.js',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    ]
}
```

### file-loader

将文件原封不动输出到 dist 目录。

根目录新建 `loader/file-loader/file-loader.js`

```js
const loaderUtils = require("loader-utils");

async function fileLoader(content) {
  // 根据文件内容生产一个新的文件名称
  const filename = loaderUtils.interpolateName(this, "[hash].[ext]", {
    content,
  });
  // 输出文件
  this.emitFile(filename, content);
  // 暴露出去，给js引用。
  // 记得加上''
  return `export default '${filename}'`;
}

// loader 解决的是二进制的内容
// 图片是 Buffer 数据
fileLoader.raw = true;

module.exports = fileLoader;

```

配置 **webpack.config.js**

```js
module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif)$/,
            loader: "./loaders/file-loader/file-loader.js",
            // 解决 webpack5 自动将图片重复打包问题
            type: "javascript/auto", 
          },
    ]
}
```

### style-loader

动态创建 style 标签，插入 js 中的样式代码，使样式生效。

配置 **webpack.config.js**

```js
module: {
    rules: [

        {
            test: /\.css$/i,
            use: ['./loader/style-loader/style-loader.js'],
        },
    ]
}
```

