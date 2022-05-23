---
title: Git git config alias
date: 2021-10-21 6:00:00
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - 学习笔记
---

# git config alias

## git config alias.ShorthandName OriginalName

将`git OriginalName`命令修改（通常为简写）为`git ShorthandName`，且只对当前 Git 仓库有效，配置文件在当前仓库的**.git/config**中。

## git config --global alias.ShorthandName OriginalName

加上`--global`参数可以对当前用户下的所有仓库起作用，配置文件在 C 盘用户目录下的一个**.gitconfig**文件中。
