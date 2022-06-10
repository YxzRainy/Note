---
title: Git git push
date: 2021-10-21
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - Note
---

# git push

在使用`git commit`命令将你进行的修改从暂存区提交到本地版本库后，只剩下最后一步将本地版本库的分支推送到远程服务器上对应的分支了。

`git push`的一般形式为`git push <远程主机名> <本地分支名> <远程分支名>`，例如`git push origin master：refs/for/master`，即是将本地的 master 分支推送到远程主机 origin 上的 master 分支， origin 是远程主机名。第一个 master 是本地分支名，第二个 master 是远程分支名，分支名是可以修改的。

### git push origin master

将本地**master**分支内容推送到远程库**origin**的**master**分支上，这里的**master**表示是远程服务器上的**master**分支和本地分支重名后的简写。

### git push -u origin master.

-u 表示 Git 不但会将本地 master 分支内容推送到远程库 origin 的 master 分支上，还会把本地的**master**分支和远程的**master**分支关联起来，在以后推送内容时就可以直接使用`git push`命令了，即可以省略**origin master**。

### git push origin ：refs/for/master

如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，等同于`git push origin –delete master`

### git push origin TagName

推送名为**TagName**的标签到远程库。

### git push origin :refs/tags/TagName

删除名为**TagName**的远程标签。

### git push origin --tags

推送全部未推送到远程库的本地标签。
