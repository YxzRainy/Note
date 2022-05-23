---
title: npm 镜像
date: 2022-04-30 6:00:00
categories:
        - 包管理器
tags:
        - NPM
        - NodeJs
        - 学习笔记
---

# npm 镜像

因为 npm 服务器在国外，因此我们有时候 `install` 一些 package 的时候，会因为网络问题而下载失败，比如运行`npm install`时，出现以下错误：

```sh
 idealTree:Test: sill idealTree buildDeps
```

所以，我们需要换一个国内的镜像。

**配置源地址为国内的淘宝镜像：**

```sh
npm config set registry https://registry.npm.taobao.org
```

**使用 `nrm` 工具切换淘宝源**

```shell
npx nrm use tao
```

检查是否设置成功：

```sh
npm config get registry
# 淘宝镜像
https://registry.npm.taobao.org/
```

重新安装即可。
