---
title: Git git cherry-pick
date: 2021-10-21 6:00:00
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - 学习笔记
---

# git cherry-pick

对于多分支的代码库，将代码从一个分支转移到另一个分支是常见需求。

这时分两种情况。一种情况是，你需要另一个分支的所有代码变动，那么就采用合并（`git merge`）。另一种情况是，你只需要部分代码变动（某几个提交），这时可以采用 Cherry pick。

## git cherry-pick commitHash

将指定的**commitHash**，应用于当前分支。这会在当前分支产生一个新的提交，当然它们的哈希值会不一样。
