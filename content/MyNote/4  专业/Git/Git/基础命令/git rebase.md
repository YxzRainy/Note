---
title: Git git rebase
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
# git rebase

用于把一个分支的所有修改（commit）合并到当前分支。

rebase 操作可以把本地未 push 的分叉提交历史整理成直线；

## git rebase BranchName

`git rebase`会把当前分支**master**的每个commit 丢弃掉，并且把它们临时保存为**patch**(这些**patch**放到**.git/rebase**目录中)，然后将**BranchName**分支上的**commit**更新到**master**分支上，最后把保存的这些补丁应用到更新后的**master**分支上。

当**master**分支更新之后，它会指向原来**BranchName**分支上的**commit**，而那些原本在自己身上的**commit**已经被丢弃了。如果运行垃圾收集命令, 这些被丢弃的提交就会删除。

因为原本在**master**分支上的commit被丢弃了，因此，这时候的分支就变为了一条直线，

### 与 git merge 的区别

![img](https://img-my.csdn.net/uploads/201206/14/1339683149_4793.jpg)

![img](https://img-my.csdn.net/uploads/201206/14/1339683149_4793.jpg)

当我们使用`Git log`来参看**commit**时，其**commit**的顺序也有所不同。

