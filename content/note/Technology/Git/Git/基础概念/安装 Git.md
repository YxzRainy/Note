---
title: 安装 Git
date: 2021-10-21
categories:
        - Git
tags:
        - Git
        - Github
        - Note
---

# 安装 Git

## 官网下载并安装

[Git (git-scm.com)](https://git-scm.com/)，下载完成后，默认选项安装即可。

安装完成后，右击后在菜单中选择 Git Bash ，蹦出一个类似命令行窗口的东西，就说明 Git 安装成功了！

```cmd
Rainy@Rainy MINGW64 /e/Rainy
```

## 配置个人信息

因为 Git 是分布式版本控制系统，所以，每台设备都必须自报家门，也就是在命令行输入你的 Github 用户名和 Email 地址。

首先，找一个合适的文件夹，右击 Git Bash，在命令行输入

```cmd
git config --global user name "Your Github UserName"
git config --global user email "Your Github Email"
```

注意`git config`命令的`--global`参数，用了这个参数，表示你这台设备上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的 UserName 和 Email 地址。
