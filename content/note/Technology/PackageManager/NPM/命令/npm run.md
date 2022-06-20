---
title: npm install
date: 2022-05-15
categories:
        - 包管理器
tags:
        - NPM
        - NodeJs

---

# npm run

`package.json`的`scripts`字段，可以用于指定脚本命令，供`npm`直接调用。`npm run`会创建一个 Shell，执行指定的命令。

`start`和`test`属于特殊命令，可以省略 run，其余的都得带上 run。

`npm run`的参数：

- 如果不加任何参数，直接运行，会列出`package.json`里面所有可以执行的脚本命令
- 可配置参数，格式是加上两个连词线（--）
