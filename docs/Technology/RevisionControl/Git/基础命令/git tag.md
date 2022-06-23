---
title: Git git tag
date: 2021-10-21
categories:
        - Git
tags:
        - Git
        - 命令
        - Github

---

# git tag

用于查看本地仓库的所有标签。tag 是 git 版本库的一个标记，指向某个 commit 提交的指针，它比**commit id**方便我们记忆。

## git tag TagName

给当前分支上的**HEAD**打上名为**TagName**的标签。

## git tag TagName CommitId

给 commit id 为**CommitId**的提交打上名为**TagName**的标签。

## git tag -a TagName -m "Instruction" CommitId

给 commit id 为**CommitId**的提交打上名为**TagName**的标签，并添加说明文字**Instruction**。

## git tag -d TagName

删除名为**TagName**的本地标签。
