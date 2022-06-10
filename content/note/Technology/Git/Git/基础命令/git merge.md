---
title: Git git merge
date: 2021-10-21
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - Note
---

# git merge

用于合并指定分支到当前分支

## git merge BranchName

将名为 BranchName 的分支合并到当前分支。

## git merge --no-ff -m "merge with no-ff" BranchName

合并名为 BranchName 的分支到当前分支，并创建一个新的 commit，所以加上`-m`参数，将 commit 的描述写进去。
