---
title: npm install
date: 2022-05-15 6:00:00
updated: 2022-05-15 6:00:00
categories:
        - 包管理器
tags:
        - NPM 
        - NodeJs
        - 学习笔记
---

# npm install

在当前项目中，读取`package.json`里面的 `dependencies` 和`devDependencies`的配置来安装需要依赖的模块。

`install` 可简写为 `i`。

## npm install jquery

在当前项目中安装 jquery 模块，默认安装的是最新版本。

## npm install jquery -g

全局安装 jquery 模块，默认安装的是最新版本。

## npm install jquery@3

安装 jquery 3.X.X 中的最新版本。

## npm install jquery@3.0.1

安装指定版本的模块，也可用于将模块更新到指定版本。

## npm install --save

`--save`是默认值，在 `package.js`文件的 dependencies 字段写入依赖，表示**运行依赖**（生产环境使用，项目上线后依旧会带着该模块）。

```json
"dependencies": {
    "jquery": "^3.6.0"
}
```

### npm install --save-dev

在 `package.js`文件的 **devDependencies** 字段写入依赖，表示**开发依赖**（开发环境使用，项目上线后不会再带着该模块）。

```json
"devDependencies": {
    "jquery": "^3.6.0"
}
```
