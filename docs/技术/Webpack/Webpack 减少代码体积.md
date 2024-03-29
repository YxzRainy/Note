---
title: Webpack 减少代码体积
date: 2022-06-15
categories:
        - Tutorial
tags:
        - Node.js
        - 打包工具
        - Webpack
---

# Webpack 减少代码体积

## Tree Shaking

用于移除 JavaScript 中的没有被使用的代码。

开发时我们定义了一些工具函数库，或者引用第三方工具函数库或组件库。

如果没有特殊处理的话我们打包时会引入整个库，但是实际上可能我们可能只用上了这些工具库中极小一部分代码。

如果我们将整个库都打包进来，体积就太大了。

**它依赖 `ES Module`。**

## 优化 Babel

Babel 为编译的每个文件都插入了辅助代码，使代码体积过大！

`@babel/plugin-transform-runtime`: 禁用了 Babel 自动对每个文件的 runtime 注入，而是引入 `@babel/plugin-transform-runtime` 并且使所有辅助代码从这里引用。

### 基本使用

安装模块

```
npm i @babel/plugin-transform-runtime -D
```

配置**webpack.config.js**

```js
module: {
	rules: [
		{
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				cacheCompression: false,
				// 减少代码体积
                plugins: ['@babel/plugin-transform-runtime'], 
			},
		},
	];
}

```

## Image Minimizer（报错）

压缩图片的插件`image-minimizer-webpack-plugin`。

开发如果项目中引用了较多图片，那么图片体积会比较大，将来请求速度比较慢。

我们可以对图片进行压缩，减少图片体积。

### 基本使用

**安装模块**

```sh
npm i image-minimizer-webpack-plugin imagemin -D

```

**无损压缩模块**

```sh
npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
```

**有损压缩模块**

```sh
npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo -D
```

配置 **webpack.config.js**

以无损压缩配置为例。

```js
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
        // 压缩图片
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                        ['gifsicle', { interlaced: true }],
                        ['jpegtran', { progressive: true }],
                        ['optipng', { optimizationLevel: 5 }],
                        [
                            'svgo',
                            {
                                plugins: [
                                    'preset-default',
                                    'prefixIds',
                                    {
                                        name: 'sortAttrs',
                                        params: {
                                            xmlnsOrder: 'alphabetical',
                                        },
                                    },
                                ],
                            },
                        ],
                    ],
                },
            },
        }),
    ],
},
```

