---
title: Git git stash
date: 2021-10-21
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - Note
---

# git stash

将当前工作区的文件先暂存起来，等 bug 修改完成后，再将暂存的工作区文件内容拿出来继续工作。

## git stash apply

恢复后，**stash**内容并不删除，你需要用`git stash drop`来删除；

## git stash pop

恢复的同时把**stash**内容也删了。

## git stash list

查看将前被暂存的工作区。
