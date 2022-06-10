---
title: Git git add
date: 2021-10-21
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - Note
---

# git branch

一般用于对分支的操作，比如创建分支，查看分支等等，

## git branch

不带参数：列出本地已经存在的分支，并且在当前分支的前面用**\***标记

一个新的本地仓库，必须在`git add`且`git commit`之后，再使用`git branch`命令，才能显示出本地分支`master`。

## git branch BranchName

创建名为**BranchName**的分支，创建分支时需要是最新（当前分支的代码已经`git commit`）的环境，并且创建分支后**依然停留在当前分支**。

## git branch -d BranchName

删除名为**BranchName**的分支，如果在分支中有一些未**merge**的提交，那么会删除分支失败，此时可以使用`git branch -D BranchName`强制删除名为**BranchName**的分支

## git branch --set-upstream-to=origin/dev LocalDev

将名为**LocalDev**的本地分支与名为**origin/dev**的远程分支相关联。
