---
title: Webpack 优化代码性能 
date: 2022-06-15
categories:
        - Tutorial
tags:
        - Node.js
        - 打包工具
        - Webpack
---

# Webpack 优化代码性能

## Code Split

代码分割（Code Split）主要做了两件事：

1. 分割文件：将打包生成的文件进行分割，生成多个 js 文件。
2. 按需加载：需要哪个文件就加载哪个文件。

### 为什么使用

打包代码时会将所有 js 文件打包到一个文件中，体积太大了。我们如果只要渲染首页，就应该只加载首页的 js 文件，其他文件不应该加载。

所以我们需要将打包生成的文件进行代码分割，生成多个 js 文件，渲染哪个页面就只加载某个 js 文件，这样加载的资源就少，速度就更快。

### 什么是 chunk

打包的资源就是 chunk，输出出去叫 bundle。

#### [name] 是什么

[name] 是 webpack 命名规则，使用 chunk 的 name 作为输出的文件名。

####  chunk 的 name 是什么

比如： entry 中xxx: "./src/xxx.js", name 就是 xxx。注意是前面的 xxx，和文件名无关。

####  为什么需要这样命名

如果还是之前写法 main.js，那么打包生成两个入口文件都会叫 main.js，会导致覆盖。（实际上会直接报错的）

### 多入口文件使用

**安装模块**

```js
npm i webpack webpack-cli html-webpack-plugin -D
```

定义多个入口文件 **main.js**、**app.js**、**main.js**

配置 **webpack.prod.js**

```js
module.exports = {
	// 单文件入口
	// entry: './src/main.js',
	// 多文件入口
	entry: {
		main: './src/main.js',
		app: './src/app.js',
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].js',
		clean: true,
	},
};

```

### 代码复用

提取多个入口文件的重复代码，将其打包成一个额外的 js 文件，最后其他文件引用这个额外的 js 文件即可。

配置 **webpack.prod.js**

```js
module.exports = {
	optimization: {
		// 代码分割配置
		splitChunks: {
			chunks: 'all', // 对所有模块都进行分割
			// 以下是默认值
			// minSize: 20000, // 分割代码最小的大小
			// minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
			// minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
			// maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
			// maxInitialRequests: 30, // 入口js文件最大并行请求数量
			// enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
			// cacheGroups: { // 组，哪些模块要打包到一个组
			//   defaultVendors: { // 组名
			//     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
			//     priority: -10, // 权重（越大越高）
			//     reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
			//   },
			//   default: { // 其他没有写的配置会使用上面的默认值
			//     minChunks: 2, // 这里的minChunks权重更大
			//     priority: -20,
			//     reuseExistingChunk: true,
			//   },
			// },
			// 修改配置
			cacheGroups: {
				// 组，哪些模块要打包到一个组
				// defaultVendors: { // 组名
				//   test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
				//   priority: -10, // 权重（越大越高）
				//   reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
				// },
				default: {
					// 其他没有写的配置会使用上面的默认值
					minSize: 0, // 我们定义的文件体积太小了，所以要改打包的最小文件体积
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},
};
```

build 后查看文件，会发现多 build 了一个 js 文件，这个文件就是提取的公共代码模块。

### 动态 import，按需加载

动态导入，实现按需加载，同时模块也会被分割。

配置 **mian.js**

```js
let btn = document.getElementById('btn');

btn.onclick = function () {
    // 动态导入
	import('./js/test')
		.then((result) => {
			console.log('模块加载成功', result.default(9, 5));
		})
		.catch((err) => {
			console.log('模块加载失败', err);
		});
};
```

此时，test.js 只会当 btn 被点击的时候才加载。

### 单入口文件使用

```js
// 单入口
entry: "./src/main.js",
// 代码分割配置
  splitChunks: {
      // 对所有模块都进行分割
    chunks: "all", 
    // 其他内容用默认配置即可
},
```

### 自定义动态导入的模块名

配置 **main.js**。

```js
btn.onclick = function () {
	// webpackChunkName: "math"：这是 webpack 动态导入模块命名的方式
	// "math"将来就会作为 chunkFilename 中的 [name] 的值显示
	import(/* webpackChunkName: "math" */ './js/test')
		.then((result) => {
			console.log('模块加载成功', result.default(9, 5));
		})
		.catch((err) => {
			console.log('模块加载失败', err);
		});
};

```

配置 **webpack.prod.js**

```js
output: {
    // 动态导入的模块的输出资源命名
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
     // 图片、字体等资源命名方式（注意用 hash）
     assetModuleFilename: "static/media/[name].[hash][ext]", 
},
```

## Preload / Prefetch

使浏览器在空闲的时间，加载后续需要使用的资源。

### 为什么用

我们前面已经做了代码分割，同时会使用 import 动态导入语法来进行代码按需加载（我们也叫懒加载，比如路由懒加载就是这样实现的）。

但是加载速度还不够好，比如：是用户点击按钮时才加载这个资源的，如果资源体积很大，那么用户会感觉到明显卡顿效果。

`Preload`：告诉浏览器立即加载资源（优先级较高，兼容性较好）。

`Prefetch`：告诉浏览器在空闲时才开始加载资源（优先级较低，兼容性较差）。

**共同点**

都只会加载资源，但并不会执行，且都有缓存。

**区别**

`Preload`只能加载当前页面需要使用的资源，`Prefetch`可以加载当前页面资源，也可以加载下一个页面需要使用的资源。

**分别在什么情况下使用**

当前页面优先级高的资源用 `Preload` 加载。

下一个页面需要使用的资源用 `Prefetch` 加载。

### 基本使用

**安装模块**

```js
npm i @vue/preload-webpack-plugin -D
```

配置 **webpack.prod.js**

```js
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");

plugins: [
		new PreloadWebpackPlugin({
			rel: 'preload',
			as: 'script',
			// rel: 'prefetch'
		}),
]

```

## Network Cache

将文件名变为一个唯一的 hash 值，确保更新前后文件名不一样，这样就可以做缓存了。

#### fullhash

webpack 4 是 hash，每次修改任何一个文件，所有文件名的 hash 至都将改变。所以一旦修改了任何一个文件，整个项目的文件缓存都将失效。

#### chunkhash

根据不同的入口文件（Entry）—— 进行依赖文件解析、构建对应的 chunk，生成对应的哈希值。我们 js 和 css 是同一个引入，会共享一个 hash 值。

#### contenthash

根据文件内容生成 hash 值，只有文件内容变化了，hash 值才会变化。所有文件 hash 值是独享且不同的。

### 为什么用

将来开发时我们对静态资源会使用缓存来优化，这样浏览器第二次请求资源就能读取缓存了，速度很快。

但是这样的话就会有一个问题, 因为前后输出的文件名是一样的，都叫 main.js，一旦将来发布新版本，因为文件名没有变化导致浏览器会直接读取缓存，不会加载新资源，项目也就没法更新了。本使用

配置 **webpack.prod.js**

```js
output: {
    filename: 'static/js/[name].[contenthash:8].js',
},

plugins: [
    // 使 css 生成的文件名带有 hash 值
	new MiniCssExtractPlugin({
		// 定义输出文件名和目录
		filename: 'static/css/[name].[contenthash:8].css',
		chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
	}),
];

```

**build 后间接导致 main.js 文件名被改变的问题**

- 当我们修改 math.js 文件再重新打包的时候，因为 contenthash 原因，math.js 文件 hash 值会发生变化（这是正常的）。
- 因为 main.js 文件的 hash 值也发生了变化，所以导致了 main.js 的缓存失效。
- 如果很多模块都互相依赖的情况，那么会出现其中一个模块发生变化，其他模块也会发生改变的连锁反应，即导致其他模块的缓存失效。

**产生的原因**

- 更新前：math.js 打包后实际为 **math.xxx.js,** main.js 引用的也是 **math.xxx.js**。
- 更新后：math.js 打包后变成了 **math.yyy.js** main.js 引用的也变成了 **math.yyy.js**，即每次打包 math.js 后所生成的文件名都不一样，间接导致了 main.js 也发生了变化

**解决**

将 hash 值单独保管在一个 runtime 文件中。

我们最终输出三个文件：main、math、runtime。当 math 文件发送变化，变化的是 math 和 runtime 文件，main 不变。

runtime **保存了文件的 hash 值和文件的依赖关系**，整个文件体积就比较小，所以当文件变化后，重新请求的代价也小。

```js
optimization: {
    splitChunks: {
        chunks: 'all', 
    },
    // 提取 runtime 文件
    runtimeChunk: {
        // runtime文件命名规则
        name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
},
```

## Core-js

`core-js` 是专门用来做 ES6 以及以上 API 的 `polyfill`（做垫片/补丁）就是用社区上提供的一段代码，可以使我们在不兼容某些新特性的浏览器上，使用这些新特性。

### 为什么用

过去我们使用 Babel 对 js 代码进行了兼容性处理，其中使用`@babel/preset-env` 智能预设来处理兼容性问题。

它能将 ES6 的一些语法进行编译转换，比如箭头函数、`...`运算符等。但是如果是 `async()` 、`promise` 对象、数组的一些方法（`includes()`）等，Babel  并不能处理。

所以此时我们 js 代码仍然存在兼容性问题，一旦遇到低版本浏览器会直接报错。所以我们想要将 js 兼容性问题彻底解决。

### 使 Eslint 支持最新的标准

**安装模块**

```sh
npm i @babel/eslint-parser -D
```

配置**.eslintrc.js**

```js
module.exports = {
	parser: '@babel/eslint-parser',
};
```

打包构建

```text
npm run build
```

此时观察打包输出的 js 文件，我们发现 Promise 语法并没有编译转换，所以我们需要使用 `core-js` 来进行 `polyfill`。

### 基本使用

**安装模块**

```sh
npm i core-js
```

**手动全部引入**

配置 **main.js**

```js
import "core-js";
```

这样引入会将所有兼容性代码全部引入，体积太大了（200 kb+）。我们只想引入 **promise** 的 `polyfill`，那么可以按需引 。

**手动按需引入**

配置 **main.js**

```js
import "core-js/es/promise";
```

只引入打包 **promise** 的 `polyfill`，打包体积更小（33 kb）。但是将来如果还想使用其他新特性，**手动按需引入兼容性代码将会变得很麻烦**。

**自动按需引入**

配置 **Babel.config.js**

```js
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				// 按需加载 core-js 的 polyfill
				useBuiltIns: 'usage',
				corejs: 3,
			},
		],
	],
};
```

此时就会自动根据我们代码中使用的 ES 语法，来按需加载相应的 `polyfill` 。

## PWA

渐进式网络应用程序（Progressive Web Application - PWA），是一种可以提供类似于 Native App（原生应用程序） 体验的 Web App 的技术。

它可以使得网页在 **离线（offline）** 时依旧能够继续运行。PWA 内部通过 Service Workers 技术实现。

### 为什么用

开发 Web App 项目，项目一旦处于网络离线情况，就没法访问了，因此，我们希望给项目提供离线体验。

### 基本使用

**安装模块**

```js
npm install workbox-webpack-plugin --save-dev
```

配置 **webpack.prod.js**，创建出一个 Service Worker。

```js
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');


plugins: [
    new WorkboxPlugin.GenerateSW({
        // 这些选项帮助快速启用 ServiceWorkers
        // 不允许遗留任何“旧的” ServiceWorkers
        clientsClaim: true,
        skipWaiting: true,
    }),
]
```

生成了两个额外的文件：`service-worker.js` 和名称冗长的 `workbox-6716fad7.js`

#### 注册 Service Worker

配置 **main.js**

```js
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then((registration) => {
				console.log('SW registered: ', registration);
			})
			.catch((registrationError) => {
				console.log('SW registration failed: ', registrationError);
			});
	});
}
```

build 后的路径问题

此时如果直接通过 VSCode 访问打包后页面，在浏览器控制台会发现 `SW registration failed`。

因为我们打开的访问路径是：`http://127.0.0.1:5500/dist/index.html`。此时页面会去请求 `service-worker.js` 文件，请求路径是：`http://127.0.0.1:5500/service-worker.js`，这样找不到会 404。

实际 `service-worker.js` 文件路径是：`http://127.0.0.1:5500/dist/service-worker.js`。

**解决**

安装模块

```js
npm i serve -g
```

运行

```sh
serve dist
```

接着访问http://localhost:3000。

打开可控制台，出现 **SW registered:  ServiceWorkerRegistration**说明 Service Worker 注册成功了！

