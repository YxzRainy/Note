---
title: npm tree-node-cli
date: 2021-11-21
categories:
        - Note
tags:
        - NPM
        - Package
---

# tree-node-cli

## tree-node-cli

`tree --help`：显示命令详细信息。

`tree -d` ：只显示文件夹。

`tree -L n`： 显示项目的层级。n 表示目录层级数。比如想要显示目录三层结构，可以用`tree -L 3`。

`tree -I pattern`： 用于过滤不想要显示的文件或者文件夹。比如你想要过滤项目中的 vendor 文件夹，可以使用`tree -I "vendor"。

`tree > tree.md`： 将项目结构输出到`tree.md`文件中。