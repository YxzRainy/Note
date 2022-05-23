---
title: VueCli
date: 2022-05-13 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记
---

# VueCli

## [安装](https://cli.vuejs.org/zh/guide/installation.html)

全局安装：

```sh
npm install -g @vue/cli
```

安装完成后，用命令检查安装的版本

```sh
vue --version
```

## [创建项目](https://cli.vuejs.org/zh/guide/creating-a-project.html)

```sh
vue create vue-cli
```

接下来就是一些导航选择，根据自己选择即可。

## 运行工程

创建完成后，用`cd`进入 vue-cli 目录，再用`npm run serve`启动工程，出现以下提示即为运行成功：

```sh
  App running at:
  - Local:   http://localhost:8080/
  - Network: unavailable
```

Local：它会将工程托管到本地的一个服务器地址 http://localhost:8080/。

Network：运行时的网络状态。

## 项目中的目录文件

**node_modules**：保存着 Vue 所有直接或间接依赖的第三方库。

**public**：保存着页面模板。

**src**：源代码目录。

**package.json**：工程配置文件

- serve：开发环境，它会将工程托管到一个本地服务器进行预览。

- build：生产环境，它会将工程打包成一个**dist**文件夹，这个文件夹就是我们工程的源代码

**vue.config.js**：vue-cli 的配置文件，大部分都配置都是 webpack 配置

```
 "scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build"

 },
```

## 还原工程

使用`npm install`，它会根据**package.json**文件中的`dependencies`和`devDependencies`来还原**node_modules**目录

配置二年级
