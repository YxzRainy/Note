---
title: Webpack 基本使用
date: 2022-06-15
categories:
        - Tutorial
tags:
        - Node.js
        - 打包工具
        - Webpack
---

# Webpack 基本使用

## 写在前面

最近学完了模块化，自然要开始学习 Webpack，我是直接学习的 Webpack 5，看的是 B 占尚硅谷 Webpack 5 的视频，本来想看 Webpack 4 的，但评论区有大佬说可以直接看 Webpack 5，所以我就花了几个周囫囵吞枣的将这玩意过了一遍。

### 主要内容

为什么使用 Webpack

Webpack 五大核心概念。

使用 Webpack 处理一些简单的资源。

Webpack 开发服务器的自动化。

Webpack 的两种模式。

使用 Webpack 对 CSS 进行一些处理，兼容性、压缩、提取为单独文件。

## 为什么使用

- 优化性能。
- 减少浏览器像服务器的请求次数。
- 节约服务器的带宽资源 。
- 使书写的代码向后兼容某些浏览器。

## 五大核心概念

**entry（入口）**：指定 Webpack 从哪个文件开始打包.

**output（输出）**：指定 Webpack 打包完的文件输出到哪里去，如何命名等。

**loader（加载器）**：Webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader 才能处理。

**plugins（插件）**：扩展 Webpack 的功能，所有插件都是构造函数。

**mode（模式）**：

- 开发模式：development。
- 生产模式：production。

## 处理图片资源

过去在 Webpack4 时，我们处理图片资源通过 `file-loader` 和 `url-loader` 进行处理

现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源。

添加图片资源 `src/images/1.png`并应用图片，然后引入 CSS 到 HTML



```css
.box {
	width: 200px;
	height: 200px;
	background-image: url('../images/1.png');
}
```

配置 **webpack.config.js**

```js
module: {
	rules: [
		{
			test: /\.(png|jpe?g|gif|webp)$/,
			type: 'asset',
		},
	];
}

```



## 处理 CSS 和 Less

**安装 `style-loader`和 `css-loader`**

`style-loader`：动态生成 `<style>` ，将 Css 样式插入到 `<style>` 中，使其生效。

`css-loader`：用 common.js 规范将 css 编译到 js 中

**在 main.js 中引入 index.css**

```js
import './css/index.css';
```

**配置 `webpack.config.js`** 

```js
module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
			test: /\.less$/i,
			use: ['less-loader'],
		},
    ],
},
```

Tip：`css-loader` 必须在 `style-loader`之后。

## 处理图片资源

过去在 Webpack4 时，我们处理图片资源通过 `file-loader` 和 `url-loader` 进行处理。

现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源。

```js
module: {
    rules: [
        {
            test: /\.txt|jpeg/,
            type: 'asset',
            parser: {
                // 支持处理 base 64
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 4kb
                },
            },
        },
    ],
},
```

**index.css**

```
.box2 {
	width: 100px;
	height: 100px;
	background-image: url('data:image/jpeg;base64...');
	background-size: cover;
}

```

### 自定义输出路径

```js
module: {
    rules: [
        {
            test: /\.txt|jpeg|png|gif/,
            type: 'asset',
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 4kb
                },
            },
            // 自定义输出路径
            generator: {
                // hash：图片的唯一hash 值，ext：文件扩展名 query：其他查询参数
                // hash :5：只取 hash 值前五位
                filename: 'static/images/[hash:5][ext][query]',
            },
        },
    ],
},
```

## 处理媒体资源

配置`webpack.config.js`

```js
module: {
    rules: [
        // 字体图标
        {
            test: /\.(ttf|woff2?|mp4|map4|map3|avi)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[hash:8][ext][query]',
            },
        },
    ],
},
```

main.js 引入 css 和 js。

```js
import './css/iconfont.css';
import './js/iconfont';
```

根据情况修改 `iconfont.css`中的`@font-face`路径，并添加必要的样式。

```css
@font-face {
	font-family: 'Iconfont'; /* Project id 2643512 */
	src: url('../font/iconfont.woff2') format('woff2'), url('../font/iconfont.woff') format('woff'), url('../font/iconfont.ttf') format('truetype');
}
/* Symbol 引用 */
.icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
```

挑选相应图标并获取类名，应用于页面。

```html
<svg class="icon" aria-hidden="true">
    <use xlink:href="#Icon-Close"></use>
</svg>
```

## 处理 JavaScript 资源

Webpack 对 js 处理是有限的，只能编译 js 中 ES 模块化语法，不能编译其他语法，导致 js 不能在 IE 等浏览器运行，因此需要做一些兼容性处理。

其次开发中，团队对代码格式是有严格要求的，我们不能由肉眼去检测代码格式，需要使用专业的工具来检测。

- 针对 **js 兼容性处理**，我们使用 Babel 来完成
- 针对**代码格式**，我们使用 Eslint 来完成

我们先完成 Eslint，检测代码格式无误后，在由 Babel 做代码兼容性处理。

### Eslint

用来检测 js 和 jsx 语法的工具。

#### 配置文件

配置文件由很多种写法：

- 新建`.eslintrc.*`，位于项目根目录，区别在于配置格式不一样。
  - `.eslintrc`
  - `.eslintrc.js`
  - `.eslintrc.json`
- `package.json` 中 `eslintConfig`：不需要创建文件，在原有的`package.json`基础上写。

#### 具体配置

以 `.eslintrc.js` 配置文件为例。

```js
module.exports = {
  // 解析选项
  parserOptions: {},
  // 具体规则
  rules: {},
  // 继承的规则
  extends: [],
  // ...
};
```

**parserOptions **

```js
parserOptions: {
  ecmaVersion: 6, // ES 语法版本
  sourceType: "module", // ES 模块化
  ecmaFeatures: { // ES 其他特性
    jsx: true // 如果是 React 项目，就需要开启 jsx 语法
  }
}
```

**rules** 

- `"off"` 或 `0` - 关闭规则
- `"warn"` 或 `1` - 开启规则，使用警告级别的错误：`warn` (不会导致程序退出)
- `"error"` 或 `2` - 开启规则，使用错误级别的错误：`error` (当被触发的时候，程序会退出)

```js
rules: {
  semi: "error", // 禁止使用分号
  'array-callback-return': 'warn', // 强制数组方法的回调函数中有 return 语句，否则警告
  'default-case': [
    'warn', // 要求 switch 语句中有 default 分支，否则警告
    { commentPattern: '^no default$' } // 允许在最后注释 no default, 就不会有警告了
  ],
  eqeqeq: [
    'warn', // 强制使用 === 和 !==，否则警告
    'smart' // https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告
  ],
}
```

**extends**

开发中一点点写 rules 太费劲了，所以有更好的办法，继承现有的规则。

Eslint 推荐规则`"extends": "eslint:recommended"`。详见 [Eslint 推荐规则](https://eslint.bootcss.com/docs/rules/)。

```javascript
module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    // 我们书写的规则会覆盖掉 eslint:recommended 的规则
    eq: ["warn", "smart"],
  },
};
```

我们书写的规则会比继承的规则优先级更高。

#### 在 Webpack 中使用

下载包

```sh
npm i eslint-webpack-plugin eslint -D
npm install eslint --save-dev
```

配置 `.eslintrc.js` 

```js
module.exports = {
  // 继承 Eslint 规则
  extends: ["eslint:recommended"],
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    "no-var": 2, // 不能使用 var 定义变量
  },
};

```

配置 `webpack.config.js`

```js
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module: {
    plugins: [
        new ESLintWebpackPlugin({
          // 指定检查文件的根目录
          context: path.resolve(__dirname, "src"),
        }),
    ],
}
```

#### VSCode Eslint 插件

打开 VSCode，下载 Eslint 插件，即可不用编译就能看到错误，可以提前解决

但是此时就会对项目所有文件默认进行 Eslint 检查了，我们 dist 目录下的打包后文件就会报错。但是我们只需要检查 src 下面的文件，不需要检查 dist 下面的文件。

因此我们可以在项目根目录下配置一个`.eslintignore`文件

```yaml
# 忽略dist目录下所有文件
dist
```

### Babel

JavaScript 编译器。

主要用于将 ES6 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

#### 配置文件

配置文件由很多种写法：

- **babel.config.***
  - `babel.config.js`
  - `babel.config.json`
- **.babelrc.***
  - `.babelrc`
  - `.babelrc.js`
  - `.babelrc.json`
- `package.json` 中 `babel`：不需要创建文件，在原有文件基础上写。

#### 具体配置

以 `babel.config.js` 配置文件为例。

**presets**

预设，就是一组 Babel 插件，扩展 Babel 功能

- `@babel/preset-env`: 一个智能预设，允许使用最新的 JavaScript。
- `@babel/preset-react`：一个用来编译 React jsx 语法的预设。
- `@babel/preset-typescript`：一个用来编译 TypeScript 语法的预设。

```js
module.exports = {
  // 预设
  presets: [],
};

```

#### 在 Webpack 中使用

下载包

```bash
npm install -D babel-loader @babel/core @babel/preset-env
```

配置 **webpack.config.js**

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

建议将`options:{presets: ['@babel/preset-env']}`书写在根目录下的`babel.config.js`中。

## 处理 HTML 资源

将 `.html` 资源打包到 dist 目录。

新的 html 文件有两个特点：

- 内容和源文件一致
- 自动引入打包生成的 js 等资源

**安装**

```sh
npm install --save-dev html-webpack-plugin
```

**配置 webpack.config.js**

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			// 以 public/index.html 为模板创建文件
			template: path.resolve(__dirname, 'public/index.html'),
		}),
	],
};
```

## 开发服务器自动化

每次写完代码都需要手动输入指令才能编译代码，太麻烦了，我们希望一切自动化。

**使用开发服务器时，所有代码都会在内存中编译打包，并不会输出到 dist 目录下。**

**安装包**

```text
npm i webpack-dev-server -D
```

配置 **webpack.config.js**

```js
module.exports = {
	// 开发服务器
	devServer: {
		host: 'localhost', // 启动服务器域名
		port: '3000', // 启动服务器端口号
		open: true, // 是否自动打开浏览器
	},
};
```

**运行**

```sh
npx webpack serve
```

## webpack.config.js 示例

在项目根目录的`webpack.config.js`中配置。

```js
// Node.js的核心模块，专门用来处理文件路径
const path = require('path');
// 导入插件
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	// 入口
	// 相对路径或绝对路径
	entry: './src/main.js',
	// 输出
	output: {
		// path: 文件输出目录，必须是绝对路径
		// path.resolve() 返回一个绝对路径
		// __dirname 当前文件的文件夹绝对路径，dist 是一个文件夹名
		// 表示输出到当前路径下的 dist 文件夹中
		path: path.resolve(__dirname, 'dist'),

		// 定义入口文件输出路径
		filename: 'static/js/main.js',
		// 打包之前先清空 dist 目录中的内容再进行打包
		clean: true,
	},
	// 加载器
	module: {
		rules: [
			{
				// 检查 .css 文件
				test: /\.css$/i,

				use: ['style-loader', 'css-loader'],
				// loader: []：只能使用一个 loader
				// use:[] 可以使用多个 loader
			},
			{
				test: /\.less$/i,
				use: ['less-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|webp)$/,
				type: 'asset',
			},
			// 处理图片
			{
				test: /\.txt|jpeg|png|gif/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
                        // 10 kb
						maxSize: 10 * 1024, 
					},
				},
				generator: {
					// hash：图片的唯一hash 值，ext：文件扩展名 query：其他查询参数
					// hash :5：只取 hash 值前五位
					filename: 'static/images/[hash:5][ext][query]',
				},
			},
			// 字体图标
			{
				test: /\.(ttf|woff2?|mp4)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/media/[hash:8][ext][query]',
				},
			},
			// babel 配置
			{
				test: /\.m?js$/,
				// 排除编译 node_modules 或 bower_components 中的代码
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					// Babel 的配置，建议写在根目录下的 Babel.config.js 中
					options: {
						// presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	// 插件
	plugins: [
		// 使用插件
		new ESLintWebpackPlugin({
			// 指定检查文件的根目录
			context: path.resolve(__dirname, 'src'),
		}),
		new HtmlWebpackPlugin({
			// 以 public/index.html 为模板创建文件
			template: path.resolve(__dirname, 'public/index.html'),
		}),
	],
    // 开发服务器
	devServer: {
		host: 'localhost', // 启动服务器域名
		port: '3000', // 启动服务器端口号
		open: true, // 是否自动打开浏览器
	},
	// 开发模式
	mode: 'development',
};
// Node.js的核心模块，专门用来处理文件路径
const path = require('path');
// 导入插件
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	// 入口
	// 相对路径或绝对路径
	entry: './src/main.js',
	// 输出
	output: {
		// path: 文件输出目录，必须是绝对路径
		// path.resolve() 返回一个绝对路径
		// __dirname 当前文件的文件夹绝对路径，dist 是一个文件夹名
		// 表示输出到当前路径下的 dist 文件夹中
		path: path.resolve(__dirname, 'dist'),

		// 定义入口文件输出路径
		filename: 'static/js/main.js',
		// 打包之前先清空 dist 目录中的内容再进行打包
		clean: true,
	},
	// 加载器
	module: {
		rules: [
			{
				// 检查 .css 文件
				test: /\.css$/i,

				use: ['style-loader', 'css-loader'],
				// loader: []：只能使用一个 loader
				// use:[] 可以使用多个 loader
			},
			{
				test: /\.less$/i,
				use: ['less-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|webp)$/,
				type: 'asset',
			},
			// 处理图片
			{
				test: /\.txt|jpeg|png|gif/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 4kb
					},
				},
				generator: {
					// hash：图片的唯一hash 值，ext：文件扩展名 query：其他查询参数
					// hash :5：只取 hash 值前五位
					filename: 'static/images/[hash:5][ext][query]',
				},
			},
			// 字体图标
			{
				test: /\.(ttf|woff2?|mp4)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/media/[hash:8][ext][query]',
				},
			},
			// babel 配置
			{
				test: /\.m?js$/,
				// 排除编译 node_modules 或 bower_components 中的代码
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					// Babel 的配置，建议写在根目录下的 Babel.config.js 中
					options: {
						// presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	// 插件
	plugins: [
		// 使用插件
		new ESLintWebpackPlugin({
			// 指定检查文件的根目录
			context: path.resolve(__dirname, 'src'),
		}),
		new HtmlWebpackPlugin({
			// 以 public/index.html 为模板创建文件
			template: path.resolve(__dirname, 'public/index.html'),
		}),
	],
    // 开发服务器
	devServer: {
        // 服务器域名
		host: 'localhost', 
         // 服务器端口号
		port: '3000',
        // 是否自动打开浏览器
		open: true, 
	},
	// 开发模式
	mode: 'development',
};

```



## 模式

### 开发模式

这个模式下我们主要做两件事：

- 编译代码，使浏览器能识别运行。
  - 开发时我们有样式资源、字体图标、图片资源、html 资源等，webpack 默认都不能处理这些资源，所以我们要加载配置来编译这些资源

- 代码质量检查，树立代码规范。

  - 提前检查代码的一些隐患，让代码运行时能更加健壮。

  - 提前检查代码规范和格式，统一团队编码风格，让代码更优雅美观。

#### webpack.dev.js

```js
// webpack.dev.js
const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/main.js',
	output: {
		path: undefined,
		filename: 'static/js/main.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,

				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/i,
				use: ['less-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|webp)$/,
				type: 'asset',
			},
			{
				test: /\.txt|jpeg|png|gif/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024,
					},
				},
				generator: {
					filename: 'static/images/[hash:5][ext][query]',
				},
			},
			{
				test: /\.(ttf|woff2?|mp4)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/media/[hash:8][ext][query]',
				},
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {},
				},
			},
		],
	},
	plugins: [
		new ESLintWebpackPlugin({
			context: path.resolve(__dirname, '../src'),
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
		}),
	],
	devServer: {
		host: 'localhost',
		port: '3000',
		open: true,
	},
	mode: 'development',
};

```

#### 运行 dev 模式

```sh
npx webpack serve --config ./config/webpack.dev.js
```

### 生产模式

生产模式是开发完代码后，需要将代码部署上线。

这个模式下我们主要对代码进行优化、压缩，让其运行性能更好。

#### webpack.prod.js

```js
// webpack.prod.js
const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'static/js/main.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,

				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/i,
				use: ['less-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|webp)$/,
				type: 'asset',
			},
			{
				test: /\.txt|jpeg|png|gif/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024,
					},
				},
				generator: {
					filename: 'static/images/[hash:5][ext][query]',
				},
			},
			{
				test: /\.(ttf|woff2?|mp4)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/media/[hash:8][ext][query]',
				},
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {},
				},
			},
		],
	},
	plugins: [
		new ESLintWebpackPlugin({
			context: path.resolve(__dirname, '../src'),
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
		}),
	],

	mode: 'production',
};

```



#### 运行 prod 模式

```sh
npx webpack --config ./config/webpack.prod.js
```

### 配置运行指令

为了方便运行不同模式的指令，我们将指令定义在 **package.json** 中 **scripts** 配置中。

```json
// package.json
{
  "scripts": {
    "start": "npm run dev",
    "dev": "npx webpack serve --config ./config/webpack.dev.js",
    "build": "npx webpack --config ./config/webpack.prod.js"
  }
}
```

#### 运行命令

```bash
npm run start # 开发模式
npm run dev # 开发模式
npm run build # 生产模式
```

## 提取 Css 为单独的文件

Css 文件目前被打包到 js 文件中，当 js 文件加载时，会创建一个 `<style>`来生成样式，这样对于网站来说，会出现闪屏现象，用户体验不好。

我们应该使用单独的 Css 文件，通过 `<link>`来加载性能才好。

**安装 [Plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin)**

建议与 [`css-loader`](https://webpack.docschina.org/loaders/css-loader/) 一起使用。

```sh
npm install --save-dev mini-css-extract-plugin
```

配置**webpack.config.js**

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  module: {
    rules: [
      	{
          test: /\.css$/i,
		  use: [MiniCssExtractPlugin.loader, 'css-loader'],
		},
		{
		  test: /\.less$/i,
		  use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader'],
		},
    ],
  },
   plugins: [
       new MiniCssExtractPlugin()
   ],
};
```

## CSS 兼容性处理

**安装模块**

```sh
npm i postcss-loader postcss postcss-preset-env -D

```

配置 **webpack.config.js**

必须配置到`css-loader`之后。

```js
module.exports ={
    {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            'postcss-preset-env', // 能解决大多数样式兼容性问题
                        ],
                    },
                },
            },
        ],
    },
}
```

### 控制兼容性程度

我们可以在 `package.json` 文件中添加 `browserslist` 来控制样式的兼容性做到什么程度。

```json
{
  // 兼容 ie 8 以上
  "browserslist": ["ie >= 8"]
}
```

实际开发中，一般这样写

```json
{
  // 所有浏览器最近两个版本
  // 覆盖百分之99 的浏览器
  // 不要已经死了的版本
  "browserslist": ["last 2 version", "> 1%", "not dead"]
}
```

### 封装`loader()`

```js
// 获取处理样式的 Loaders
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 能解决大多数样式兼容性问题
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};

module: {
    rules: [
        {
            test: /\.css$/i,
            use: getStyleLoaders(),
        },
        {
            test: /\.less$/i,
            use: getStyleLoaders('lees-loader'),
        },
    }
}
```

## CSS 压缩

将 CSS 文件中的代码进行压缩，提升性能。

安装[CssMinimizerWebpackPlugin](https://webpack.docschina.org/plugins/css-minimizer-webpack-plugin/)

```sh
npm install css-minimizer-webpack-plugin --save-dev
```

配置 **webpack.config.js**

```js
// CSS 压缩
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	plugins: [
		// css 压缩
		new CssMinimizerPlugin(),
	],
};
```

