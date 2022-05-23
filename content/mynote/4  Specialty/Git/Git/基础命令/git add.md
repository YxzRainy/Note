---
title: Git git add
date: 2021-10-21 6:00:00
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - 学习笔记
---

# git add

将我们需要提交的代码从工作区添加到暂存区，也就是告诉 git ，我们要提交哪些文件。之后就可以使用`git commit`命令进行提交了。

## git add .

添加当前目录所有的文件，. 表示当前目录的所有文件夹。

## git add FileName

添加文件名为 FileNmae 的文件，FileNmae 代表需要被添加的文件的名字，比如 git add ReadMe.txt，即表示添加这个 ReadMe.txt 文件，

### 添加多个文件时，文件名使用空格分开即可

```
git add FileName1 FileName2 FileName3
```

### 多次 git add

```cmd
git add FileName1
git add FileName2
git add FileName3
```

## git add -f

`git add .`不会添加被**.gitignore**忽略的文件，而`git add -f .` 强制添加所有文件，即使是被**.gitignore**忽略的文件也添加。
