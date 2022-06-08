---
title: Hugo + GitHub 搭建个人博客 
date: 2021-07-22 6:00:00
categories:
        - Technology
tags:
        - Hugo
        - GitHub
        - Note
---

# Hugo + GitHub 搭建个人博客 

## 准备

Git

Github 仓库

Windows 本地环境

## 安装 Chocolatey

因为我会用它来安装 Hugo，所以需要先安装 Chocolatey.

使用管理员身份运行 windows 中的 **Windows PowerShell**（不是 CMD），并执行：

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

输入 `choco`，查看 Chocolatey 是否安装成功。

## 安装 Hugo

Hugo 有两个版本，一个是普通版本，不支持`Sass/SCSS`，另一个扩展版本，支持`Sass/SCSS`.

安装普通版本

```
choco install hugo -confirm
```

安装支持`Sass/SCSS` 的版本

```bash
choco install hugo-extended -confirm
```

## 创建站点

桌面右击打开 Git Bash Here，然后执行;

```sh
hugo new site ./site
```

我们会发现在桌面上多出了一个 site 文件夹：

![创建站点](http://image.yxzi.xyz/image/2022/06/08/创建站点.png)

### 新建文章

站点已经创建好，接下来我们新建一篇文章，进入 site 文件夹，在当前目录下打开 Git Bash Here：

```
hugo new post/article.md
```

**article.md** 被自动生成到了 **content/post/article.md** 目录。

我们编辑 article.md：

```markdown
---
title: hello world
date: 2021-06-22 6:00:00
categories:
        - New
tags:
        - Hugo
        - GitHub
---


This is my first article!
```

至此，我的第一篇文章已经写好了！

## 安装主题

w 这里选择的是**Yinyang** 作为演示，在 site 目录打开 Git Bash Here：

```sh
git clone git@github.com:joway/hugo-theme-yinyang.git themes/yinyang
Cloning into 'themes/yinyang'...
remote: Enumerating objects: 791, done.
remote: Counting objects: 100% (167/167), done.
remote: Compressing objects: 100% (51/51), done.
remote: Total 791 (delta 124), reused 117 (delta 116), pack-reused 624
Receiving objects: 100% (791/791), 900.68 KiB | 777.00 KiB/s, done.
Resolving deltas: 100% (424/424), done.
```

安装完主题后，还需要进行一些配置。

打开 config.toml，添加`theme = "yinyang"`：

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'
theme = "yinyang"
```

## 本地预览站点

![本地预览站点](http://image.yxzi.xyz/image/2022/06/08/本地预览站点.png )



## 部署到 Github Page

## 添加搜索功能
