---
title: npm package.json
date: 2022-05-15 6:00:00
updated: 2022-05-15 6:00:00
categories:
        - 包管理器
tags:
        - NPM 
        - NodeJs
        - 学习笔记

---

# package.json

项目或模块的描述文件。

使用`npm install`安装模块的时候，会自动读取项目中`package.json`里面的 `dependencies` 和`devDependencies`的配置，来安装需要依赖的模块。

`install` 可简写为 `i`。

## name

模块名。

## version

模块版本号。

## description

模块描述。

`"^3.6.0"`表示安装 3.X.X 中最新的版本。
`"~3.6.0"`表示安装 3.0.X 中最新的版本。

`"3.6.0"`若不加`^`或`~`，则表示指定安装`3.6.0`这个版本。

```json
"dependencies": {
    "jquery": "^3.6.0"
}
```

## homepage

包的官网 `url`

## contributors

模块的其他贡献者

## main

程序的主入口文件。默认是模块根目录下的 `index.js`。

## script

脚本。

## repository

模块代码存放的地方，一般是版本控制器：`git`、`svn`等。

## keywords

关键字

## author

包的作者姓名

## license

## dependencies/devDependencies

依赖包列表。

`dependencies`是运行时依赖的包。

`devDependencies`是开发时依赖的包。