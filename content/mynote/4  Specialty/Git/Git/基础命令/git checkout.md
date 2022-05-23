---
title: Git git checkout
date: 2021-10-21 6:00:00
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - 学习笔记
---

# git checkout

## $ git checkout --File

清空名为**File**文件的修改，注意不要忘记中间的 --，，如果不加 --，就变成了切换到 FileName 分支的命令。

```
$ git checkout -- ReadMe.txt
```

## git checkout .

清空在**工作区中**，对文件所作的所有修改，**.**表示当前目录的所有文件夹。

## git checkout Branch

```
to track remote branch 'BranchName' from 'origin'.
```

将当前分支切换到名为**BranchName**的分支

## git checkout -b BranchName

-b 参数相当于以下两条命令

```cmd
git branch BranchName
git checkout BranchName
```

## git checkout -b LocalBranch origin/RemoteBranch

在本地创建一个名为**LocalBranch**的分支，并创建一个名为**RemoteBranch**的远程分支。

这个远程分支和本地分支相对应，另外，本地和远程分支的名称最好一致。
