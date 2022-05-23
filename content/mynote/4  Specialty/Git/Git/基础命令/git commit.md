---
title: Git git commit
date: 2021-10-21 6:00:00
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - 学习笔记
---

# git commit

将暂存区中的内容添加到本地仓库，相当于确认提交暂存区中的内容。

每次使用`git commit`命令我们都会在本地版本库生成一个 40 位的哈希值，这个哈希值也叫 commit-id，
commit-id 在版本回退的时候是非常有用的，它相当于一个快照，可以在未来的任何时候通过与`git reset`的组合命令回到这里.

## git commit -m ‘message’

-m 参数表示可以直接输入后面的 “message”，如果不加 -m 参数，那么是不能直接输入 message 的，而是会调用一个编辑器一般是 vim 来让你输入这个 message。message 即是我们用来简要说明这次提交的语句，比如对文件进行了哪些修改、谁进行的修改等等。

## 常见错误

用 git 提交的时候，报错:

```bash
pathspec 'commit'' did not match any file(s) known to git
```

后来发现用单引号提交报错，改成双引号就成功了

```bash
git commit -m "first commit"
```
