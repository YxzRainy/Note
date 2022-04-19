---
title: Hugo 安装
date: 2021-10-22 6:00:00
updated: 2021-10-22 17:48:00
categories:
        - 前端框架
tags:
        - GO
        - Hugo
        - 博客框架
        - 学习笔记
---

# Hugo 安装

源码编译安装，首先安装好依赖的工具

- [Git](http://git-scm.com/)
- [Mercurial](http://mercurial.selenic.com/)
- [Go](http://golang.org/) 1.3+ (Go 1.4+ on Windows)

我的环境是 windows，选择的安装方法是`Chocolatey (Windows)`，步骤如下：

1. 用`管理员身份`打开 windows 中的`Windows PowerShell`（命令提示符）。（windows 中搜索 powershell，右键“用管理员身份运行”）
2. 复制下方代码，然后执行

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

1. 输入 choco，查看是否安装成功。
2. 复制下方代码，然后执行

```bash
choco install hugo -confirm
```
