---
title: Git git config user
date: 2021-10-21 6:00:00
updated: 2021-10-23 20:12:00
categories:
        - Git
tags:
        - Git
        - 命令
        - Github
        - 学习笔记
---
# git config user

## git config user.name "UserName" 

## git config user.email "Email"

对当前仓库设置名为**UserName**的用户名和名为**Email**的邮箱。

## git config --global user.name "UserName" 

## git config --global user.email "Email"

`git config`命令的`–global`参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对不同的仓库指定不同的用户名和 Email 地址。