---
title: Webpack 提高打包构建速度
date: 2022-06-15
categories:
        - Tutorial
tags:
        - Node.js
        - 打包工具
        - Webpack
---

# Webpack 提高打包构建速度

## HotModuleReplacement

HotModuleReplacement（HMR/热模块替换）：在开发模式下，替换、添加或删除模块，而无需重新加载整个页面。

### 基本使用

**配置 `webpack.dev.js`**

```js
module.exports = {
  devServer: {
    host: "localhost", 
    port: "3000", 
    open: true, 
    hot: true, // 开启 HMR 功能（只能用于开发环境）
  },
};
```

默认情况下，webpack 支持 CSS 热模块替换，不支持 JS  热模块替换。

### 支持 JS 热模块替换

配置 **main.js**

```js
// 判断是否支持HMR功能
if (module.hot) {
	module.hot.accept('./js/count.js', function () {
		console.log('conut.js 文件被修改了');
	});
}
```

注意， **main..js** 无法支持热模块替换。

## oneOf

打包时，每个文件都会经过所有 loader 处理，虽然因为 `test` 正则原因实际没有处理上，但是都要过一遍。比较慢。

`oneOf` 使得只要匹配上一个 loader，那么在这之后的 loader 就不再匹配了。

### 基本使用

将所有 loader 放到 oneOf 数组中即可。

```js
module: {
    rules: [
        {
            
            oneOf: [
                {
                    // 提取 CSS 插件
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
    ],
},
```

## Include/Exclude

两种方式只能使用一种。

**include**：包含，只处理 xxx 文件、

**exclude**：排除，除了 xxx 文件以外其他文件都进行处理。

```js
module: {
	rules: [
		{
			test: /\.m?js$/,
            // include: path.resolve(__dirname, "../src"), // z只处理 ../src 下的文件，也可以用 exclude()
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {},
			},
		},
	];
}

```

## Cache

对 Eslint 检查 和 Babel 编译结果进行缓存。

### 基本使用

**Babel 缓存**

```js
{
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            // 开启 babel 编译缓存
            cacheDirectory: true,
            // 缓存文件不要压缩
            cacheCompression: false,
        },
    },
},
```

**Eslint 缓存**

```js
plugins: [
    new ESLintWebpackPlugin({
        context: path.resolve(__dirname, '../src'),
        // 开启缓存
        cache: true, 
        // 缓存目录
        cacheLocation: path.resolve(
          __dirname,
          "../node_modules/.cache/.eslintcache"
        ),
    }),
]
```

## Thead

多个进程同时进行打包，速度更快。

### 基本使用

**安装模块**

```js
npm i thread-loader -D
```

配置**webpack.prod.js**

```js
// webpack.prod.js
const path = require('path');
// nodejs核心模块，直接使用
const os = require('os');

const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取 CSS 为单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// CSS 压缩
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');
// cpu核数
const threads = os.cpus().length;
// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
	return [
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
		preProcessor,
	].filter(Boolean);
};
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
				use: getStyleLoaders(),
			},
			{
				test: /\.less$/i,
				use: getStyleLoaders('less-loader'),
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

				use: [
					{
						loader: 'thread-loader', // 开启多进程
						options: {
							workers: threads, // 数量
						},
					},
					{
						loader: 'babel-loader',
						options: {
							// 开启 babel 编译缓存
							cacheDirectory: true,
							// 缓存文件不要压缩
							cacheCompression: false,
						},
					},
				],
			},
		],
	},
	plugins: [
		new ESLintWebpackPlugin({
			context: path.resolve(__dirname, '../src'),
			cache: true,
			// 缓存目录
			cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
			// 开启多进程
			threads,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
		}),
		// 提取 CSS 为单独文件
		new MiniCssExtractPlugin({
			filename: 'static/css/main.css',
		}),
		// // css压缩
		// new CssMinimizerPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [
			// css压缩也可以写到optimization.minimizer里面，效果一样的
			new CssMinimizerPlugin(),
			// 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
			new TerserPlugin({
				// 开启多进程
				parallel: threads,
			}),
		],
	},

	mode: 'production',
	devtool: 'source-map',
};

```

