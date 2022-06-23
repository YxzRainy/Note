---
title: Git git pull
date: 2021-10-21
categories:
        - Git
tags:
        - Git
        - 命令
        - Github

---

# git pull

从远程拉取分支并合并到本地分支。

### git pull origin master:dev

拉取远程仓库**origin**的**master**分支，并与本地的**dev**分支合并。

### git pull origin master

如果远程分支是与当前分支合并，则冒号后面的部分可以省略。

表示将远程仓库 master 分支中的内容同步到本地仓库 master 分支中，使用时必须保证远程与本地仓库的分支是一样的。

### git pull origin master --allow-unrelated-histories

允许不相关历史提，强制合并。
