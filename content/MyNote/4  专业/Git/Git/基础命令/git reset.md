---
title: Git git reset
date: 2021-10-21 6:00:00
updated: 2021-10-23 20:14:00
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - 学习笔记
---

# git reset

用于回退版本。

## git reset --hard VersionNumber

可以指定回退到某一次提交后的版本号上，VersionNumber 为**commit id**

## git reset HEAD FileNmae

将 FileName 在暂存区的修改回退到工作区，即把 FileNmae 在暂存区中删除。这里的 HEAD 表示 FileNmae 最新的版本。

## git reset --hard HEAD^

在 Git 中，用**HEAD**表示当前版本，上一个版本就是**HEAD^**，上上一个版本就是**HEAD^^**，当然往上 100 个版本写 100 个**^**比较不方便，所以我们写成**HEAD~100**。
