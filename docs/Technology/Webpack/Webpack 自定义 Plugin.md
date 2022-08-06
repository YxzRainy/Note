---
title: Webpack 自定义 Plugin
date: 2022-07-02
categories:
        - Tutorial
tags:
        - NodeJs
        - 打包工具
        - Webpack
---

# Webpack 自定义 Plugin

## 写在前面

通过 Plugin 我们可以扩展 Webpack，加入一些自定义的构建行为，使 Webpack 可以执行更广泛的任务，拥有更强的构建能力。

## 如何工作

Webpack 在编译代码过程中，会触发一系列的 `Tapable` 钩子事件，插件所做的，就是找到相应的钩子，往上面挂上自己的任务，也就是注册事件，这样，当 Webpack 构建的时候，插件注册的事件就会随着 Hooks 的触发而执行了。

## Tapable

`Tapable` 为 Webpack 提供了统一的 Hooks 类型定义，它是 Webpack 的核心功能库。Webpack 中目前有十种 Hooks，在 Tapable 源码中可以看到：

```js
exports.SyncHook = require("./SyncHook");
exports.SyncBailHook = require("./SyncBailHook");
exports.SyncWaterfallHook = require("./SyncWaterfallHook");
exports.SyncLoopHook = require("./SyncLoopHook");
exports.AsyncParallelHook = require("./AsyncParallelHook");
exports.AsyncParallelBailHook = require("./AsyncParallelBailHook");
exports.AsyncSeriesHook = require("./AsyncSeriesHook");
exports.AsyncSeriesBailHook = require("./AsyncSeriesBailHook");
exports.AsyncSeriesLoopHook = require("./AsyncSeriesLoopHook");
exports.AsyncSeriesWaterfallHook = require("./AsyncSeriesWaterfallHook");
exports.HookMap = require("./HookMap");
exports.MultiHook = require("./MultiHook");
```

`Tapable` 还统一暴露了三个方法给 Plugin，用于注入不同类型的自定义构建行为：

- `tap`：注册同步钩子和异步钩子。
- `tapAsync`：回调方式注册异步钩子。
- `tapPromise`：Promise 方式注册异步钩子。

## Plugin 构建对象

### compiler

`compiler` 对象中保存着完整的 Webpack 环境配置，每次启动 webpack 构建时它都是一个独一无二的，且仅仅只会创建一次的对象。

这个对象会在首次启动 Webpack 时创建，我们可以通过 `compiler` 对象上访问到 Webapck 的主环境配置，比如 `loader` 、 `plugin` 等等配置信息。

它有以下主要属性：

- `options` ：可以访问本次 Webpack 启动时候所有的配置文件，包括但不限于 `loaders` 、 `entry` 、 `output` 、 `plugin` 等等完整配置信息。
- `inputFileSystem` 和`outputFileSystem` ：可以进行文件操作，相当于 Node.js 中 fs。
- `hooks` 可以注册 tapable 的不同种类 Hook，从而可以在 compiler 生命周期中注册不同的逻辑。

### compilation

`compilation` 对象代表着一次资源的构建，`compilation` 实例能够**访问所有的模块以及它们的依赖**。

一个 `compilation` 对象会**对构建依赖图中所有模块，进行编译**。 在编译阶段，模块会被加载（load）、封存（seal）、优化（optimize）、 分块（chunk）、哈希（hash）和重新创建（restore）。

它有以下主要属性：

它有以下主要属性：

- `modules` ：可以访问所有模块，打包的每一个文件都是一个模块。
- `chunks` ：chunks 是**多个 modules 组成而来的一个代码块**。入口文件引入的资源组成一个 chunk，通过代码分割的模块又是另外的 chunk。
- `assets` 可以**访问本次打包生成所有文件的结果**。
- `hooks` 可以注册 tapable 的不同种类 Hook，用于在 compilation 编译模块阶段进行逻辑添加以及修改。

### Plugin Hooks

![pluginHooks.png](https://gallery.yxzi.xyz/galleries/2022/07/03/pluginHooks.png)

## 自定义 plugin 

### 简单的 plugin

根目录创建 `plugins/test-plugin.js`

```js
class TestPlugin {
	constructor() {
		console.log('TestPlugin constructor()');
	}

	apply(compiler) {
		console.log('TestPlugin apply()');
	}
}

module.exports = TestPlugin;

```

以上代码执行流程：

1. webpack 读取配置时，new TestPlugin() ，会执行插件 constructor 方法
2. webpack 创建 compiler 对象
3. 遍历所有插件，调用插件的 apply 方法

#### 注册 Hooks

```js
class TestPlugin {
	constructor() {
		console.log('TestPlugin constructor()');
	}
	// 1. webpack 读取配置时，new TestPlugin() ，会执行插件 constructor 方法
	// 2. webpack 创建 compiler 对象
	// 3. 遍历所有插件，调用插件的 apply 方法
	apply(compiler) {
		console.log('TestPlugin apply()');

		// 从文档可知, compile hook 是 SyncHook, 也就是同步钩子, 只能用 tap 注册
		compiler.hooks.compile.tap('TestPlugin', (compilationParams) => {
			console.log('compiler.compile()');
		});

		// 从文档可知, make 是 AsyncParallelHook, 也就是异步并行钩子， 特点就是异步任务同时执行
		// 可以使用 tap、tapAsync、tapPromise 注册。
        
		// 如果使用 tap 注册的话，进行异步操作是不会等待异步操作执行完成的。
		compiler.hooks.make.tap('TestPlugin', (compilation) => {
			setTimeout(() => {
				console.log('compiler.make() 111');
			}, 2000);
		});

		// 使用 tapAsync、tapPromise 注册，进行异步操作会等异步操作做完再继续往下执行
		compiler.hooks.make.tapAsync('TestPlugin', (compilation, callback) => {
			setTimeout(() => {
				console.log('compiler.make() 222');
				// 必须调用
				callback();
			}, 1000);
		});

		compiler.hooks.make.tapPromise('TestPlugin', (compilation) => {
			console.log('compiler.make() 333');
			// 必须返回promise
			return new Promise((resolve) => {
				resolve();
			});
		});

		// 从文档可知, emit 是 AsyncSeriesHook, 也就是异步串行钩子，特点就是异步任务顺序执行
		compiler.hooks.emit.tapAsync('TestPlugin', (compilation, callback) => {
			setTimeout(() => {
				console.log('compiler.emit() 111');
				callback();
			}, 3000);
		});

		compiler.hooks.emit.tapAsync('TestPlugin', (compilation, callback) => {
			setTimeout(() => {
				console.log('compiler.emit() 222');
				callback();
			}, 2000);
		});

		compiler.hooks.emit.tapAsync('TestPlugin', (compilation, callback) => {
			setTimeout(() => {
				console.log('compiler.emit() 333');
				callback();
			}, 1000);
		});
	}
}

module.exports = TestPlugin;
```

#### 启动调试

通过调试查看 `compiler` 和 `compilation` 对象数据情况。

**配置 `package.js`**

```js
"scripts": {
    "debug": "node --inspect-brk ./node_modules/webpack-cli/bin/cli.js",
}
```

**运行命令**

```sh
npm run debug
```

### BannerWebpackPlugin

给打包输出文件添加注释。

开发思路:

- 需要打包输出前添加注释：需要使用 `compiler.hooks.emit` 钩子, 它是打包输出前触发。
- 如何获取打包输出的资源？`compilation.assets` 可以获取所有即将输出的资源文件。

根目录新建`plugins/banner-webpack-plugin.js`

```javascript
class BannerWebpackPlugin {
    // 定义 option
	constructor(options = {}) {
		this.options = options;
	}

	apply(compiler) {
		// 在资源输出之前触发
		compiler.hooks.emit.tap('BannerWebpackPlugin', (compilation) => {
			// debugger;
			const extensions = ['css', 'js'];
			// 1. 获取即将输出的资源文件：compilation.assets
			// 2. 过滤只保留 js 和c ss 资源
			const assets = Object.keys(compilation.assets).filter((assetPath) => {
				// 将文件名切割 ['xxxx', 'js'] ['xxxx', 'css']
				const splitted = assetPath.split('.');
				// 获取最后一个文件扩展名
				const extension = splitted[splitted.length - 1];
				// 判断是否保护
				return extensions.includes(extension);
			});

			const prefix = `/*
  * Author: ${this.options.author}
  */
  `;
			// 3. 遍历剩下资源添加上注释
			// console.log(assets);
			assets.forEach((asset) => {
				// 获取原来内容
				const source = compilation.assets[asset].source();
				// 拼接上注释
				const content = prefix + source;

				// 修改资源
				compilation.assets[asset] = {
					// 最终资源输出时，调用 source() ，source() 的返回值就是资源的具体内容
					source() {
						return content;
					},
					// 资源大小
					size() {
						return content.length;
					},
				};
			});
		});
	}
}

module.exports = BannerWebpackPlugin;

```

配置 `webpack.config.js`

```js
const BannerWebpackPlugin = require('./plugins/banner-webpack-plugin');
plugins: [
	new BannerWebpackPlugin({
		author: 'Rainy',
	}),
];
```

生产模式下执行 `npm run build` ，查看输出文件。

### CleanWebpackPlugin

在 webpack build 前将上次 build 的内容清空。

开发思路：

- 如何在打包输出前执行？需要使用 `compiler.hooks.emit` 钩子, 它是打包输出前触发。
- 如何清空上次打包内容？
  - 获取打包输出目录：通过 compiler 对象。
  - 通过文件操作清空内容：通过 `compiler.outputFileSystem` 操作文件。

根目录新建 `plugins/clean-webpack-plugin.js`

```javascript
class CleanWebpackPlugin {
	apply(compiler) {
		// 2. 获取打包输出的目录
		const outputPath = compiler.options.output.path;
		const fs = compiler.outputFileSystem;
		// 1. 注册钩子：在打包输出之前 emit
		compiler.hooks.emit.tap('CleanWebpackPlugin', (compilation) => {
			// 3. 通过 fs 删除打包输出的目录下的所有文件
			this.removeFiles(fs, outputPath);
		});
	}

	removeFiles(fs, filepath) {
		// 想要删除打包输出目录下所有资源，需要先将目录下的资源删除，才能删除这个目录
		// 1. 读取当前目录下所有资源
		const files = fs.readdirSync(filepath);
		// console.log(files); // [ 'images', 'index.html', 'js' ]
		// 2. 遍历一个个删除
		files.forEach((file) => {
			// 遍历所有文件，判断是文件夹还是文件
			const path = `${filepath}/${file}`;
			const fileStat = fs.statSync(path);
			// console.log(fileStat);
			if (fileStat.isDirectory()) {
				// 是文件夹，就得删除下面所有文件，才能删除文件夹
				this.removeFiles(fs, path);
			} else {
				// 是文件，直接删除
				fs.unlinkSync(path);
			}
		});
	}
}

module.exports = CleanWebpackPlugin;
```

配置 **webpack.config.js**

```js
const CleanWebpackPlugin = require('./plugins/clean-webpack-plugin.js');

plugins: [
    new CleanWebpackPlugin(),
]
```

### AnalyzeWebpackPlugin

分析 webpack 打包资源大小，并输出分析文件。

开发思路:

- 它在打包输出前 `compiler.hooks.emit` 触发，我们需要分析资源大小同时添加上分析后的 md 文件。

根目录新建 `plugins/analyze-webpack-plugin.js`

```javascript
class AnalyzeWebpackPlugin {
	apply(compiler) {
		compiler.hooks.emit.tap('AnalyzeWebpackPlugin', (compilation) => {
			// 1. 遍历所有即将输出文件，得到其大小
			/*
          将对象变成一个二维数组：
            对象：
              {
                key1: value1,
                key2: value2 
              }
            二维数组：
              [
                [key1, value1],
                [key2, value2]
              ]
        */
			const assets = Object.entries(compilation.assets);

			/*
            md 中表格语法：
              | 资源名称 | 资源大小 |
              | --- | --- |
              | xxx.js | 10kb |
        */
			let content = `| 资源名称 | 资源大小 |
  | --- | --- |`;

			assets.forEach(([filename, file]) => {
				// 将输入的文件大小向上取整
				content += `\n| ${filename} | ${Math.ceil(file.size() / 1024)}kb |`;
			});

			// 2. 生成一个md文件
			compilation.assets['analyze.md'] = {
				source() {
					return content;
				},
				size() {
					return content.length;
				},
			};
		});
	}
}

module.exports = AnalyzeWebpackPlugin;

```

配置 **webpack.config.js**

```js
const AnalyzeWebpackPlugin = require('./plugins/analyze-webpack-plugin');
plugins: [
    new AnalyzeWebpackPlugin(),
]
```

### InlineRuntimeWebpackPlugin

webpack 打包生成的 runtime 文件体积太小，额外发送请求性能不好，所以需要将其内联到 js 中，从而减少请求数量。

开发思路:

- 我们需要借助`html-webpack-plugin`来实现
  - 在 `html-webpack-plugin` 输出 index.html 前将内联 runtime 注入进去
  - 删除多余的 runtime 文件
- 如何操作 `html-webpack-plugin`？[官方文档open in new window](https://github.com/jantimon/html-webpack-plugin/#afteremit-hook)

**安装模块**

```sh
npm i safe-require -D
```

**根目录新建 `plugins/inline-chunk-webpack-plugin.js`**

```js
const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin');

class InlineChunkWebpackPlugin {
	// 定义 options
	constructor(tests) {
		this.tests = tests;
	}

	apply(compiler) {
		compiler.hooks.compilation.tap('InlineChunkWebpackPlugin', (compilation) => {
			// 1. 获取 html-webpack-plugin的 hooks
			const hooks = HtmlWebpackPlugin.getHooks(compilation);
			// 2. 注册 html-webpack-plugin的hooks -> alterAssetTagGroups
			hooks.alterAssetTagGroups.tap('InlineChunkWebpackPlugin', (assets) => {
				// 3. 从里面将script的runtime文件，变成inline script
				assets.headTags = this.getInlineChunk(assets.headTags, compilation.assets);
				assets.bodyTags = this.getInlineChunk(assets.bodyTags, compilation.assets);
			});

			// 删除 runtime 文件
			hooks.afterEmit.tap('InlineChunkWebpackPlugin', () => {
				// 3. 从里面将 script的 runtime 文件，变成 inline script
				Object.keys(compilation.assets).forEach((filepath) => {
					if (this.tests.some((test) => test.test(filepath))) {
						delete compilation.assets[filepath];
					}
				});
			});
		});
	}

	getInlineChunk(tags, assets) {
		/*
      目前：[
        {
          tagName: 'script',
          voidTag: false,
          meta: { plugin: 'html-webpack-plugin' },
          attributes: { defer: true, type: undefined, src: 'js/runtime~main.js.js' }
        },
      ]

      修改为：
        [
          {
            tagName: 'script',
            innerHTML: runtime文件的内容
            closeTag: true 
          },
        ]
    */

		return tags.map((tag) => {
			if (tag.tagName !== 'script') return tag;
			// 获取文件资源路径
			const filepath = tag.attributes.src;
			if (!filepath) return tag;

			if (!this.tests.some((test) => test.test(filepath))) return tag;

			return {
				tagName: 'script',
				innerHTML: assets[filepath].source(),
				closeTag: true,
			};
		});
	}
}

module.exports = InlineChunkWebpackPlugin;
```

**配置 webpack.config.js**

```js
const InlineChunkWebpackPlugin = require("./plugins/inline-chunk-webpack-plugin");

plugins: [
    new InlineChunkWebpackPlugin([/runtime(.*)\.js/]),
]
// 生成 runtime 文件
optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`,
    },
  },
```

