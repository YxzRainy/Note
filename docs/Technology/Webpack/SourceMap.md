---
title: SourceMap
date: 2022-06-15
categories:
        - Tutorial
tags:
        - Node.js
        - 打包工具
        - Webpack
---

# SourceMap

Sourcemap 本质上是一个信息文件，里面储存着代码构建前后的对应位置信息。它记录了构建后的代码所对应的构建前的源代码的位置，是源代码和生产代码的映射。 

Sourcemap 解决了在打包过程中，代码经过压缩，去空格以及 babel 编译转化后，由于代码之间差异性过大，造成无法 debug 的问题。

它会生成一个 xxx.map 文件，里面包含源代码和构建后代码每一行、每一列的映射关系。当构建后的代码出错了，会通过 xxx.map 文件，从构建后代码的报错位置找到映射后源代码报错的位置，从而让浏览器提示源代码文件出错的位置，**帮助我们更快的定位到错误的位置**。

### 作用

简单说 Sourcemap 构建了处理前以及处理后的代码之间的一座桥梁，方便定位生产环境中出现 bug 的位置。因为现在的前端开发都是模块化、组件化的方式，在上线前对 js 和 css 文件进行合并压缩容易造成混淆。如果对这样的线上代码进行调试，肯定不切实际，sourceMap 的作用就是能够让浏览器的调试面版将生成后的代码映射到源码文件当中，开发者可以在源码文件中 debug，这样就会让程序员调试轻松、简单很多。

### 用法

#### 开发模式使用

`cheap-module-source-map` 

- 优点：打包编译速度快，只包含行映射。
- 缺点：没有列映射。

```javascript
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
};
```

#### 生产模式使用

`source-map`

- 优点：包含行/列映射
- 缺点：打包编译速度更慢

```javascript
module.exports = {
  mode: "production",
  devtool: "source-map",
};
```

### 参考链接

https://blog.csdn.net/weixin_40599109/article/details/107845431