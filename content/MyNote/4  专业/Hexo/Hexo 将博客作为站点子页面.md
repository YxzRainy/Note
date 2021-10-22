---
title: Hexo 将博客作为站点子页面
date: 2021-10-03 6:00:00
updated: 2021-10-23 19:42:00
categories:
        - Hexo
tags:
        - Github
        - Hexo
        - Git
        - 博客
---
# Hexo 将博客作为站点子页面

## 前言

如果你想如何在 GitHub 的 repository 中上传自己写的网页作为首页，hexo 生成的博客页作为其子页？即自己写的页面作为 UserName.github.io 的页面，将 hexo 博客放在 UserName.github.io/blog 上，那么，这个教程也许可以帮到你。

本教程的前提是你已经用 hexo 将博客搭建在 UserName.github.io 的仓库上了。

## 新建仓库

在 github 上新建一个仓库，名字随意，我的是 Blog。

然后本地初始化一个 master 分支，并且将原仓库 clone 到本地分支，并且 开启仓库的 GitHub Pages.，需要注意的是，这里的本地分支目前是没有 CNAME 文件 的。

## 修改 Hexo 的配置文件

打开配置文件 \_config.yml，找到 #URL 下的 url 和 root，将 url 修改为**https:// UesrName.github.io/新建的仓库名**（我这里是 Blog），然后将 root 修改为**/新建的仓库名/**。

```yaml
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://YxzRainy.github.io/Blog
root: /Blog/
```

再下滑找到 deploy:下的 repo，将地址改为你新建的 Clone 地址。

```yaml
deploy:
    type: git
    repo: git@github.com:YxzRainy/Space.git
    branch: master
```

## 重新部署博客

在新建的本地分支依次输入命令

```
hexo clean
hexo g
hexo d
```

这样你的博客就已经被部署到 https://UserName.github.io/Space/ 上了

## 清空原来的仓库

现在可以将原来的仓库清空了，清空之后就可以用 Git 命令将主页面的布局文件上传到原来的仓库 [**https://UserName.github.io/**](https://UserName.github.io/) 上了。

## 通过超链接跳转到博客页面

你现在就可以在主页面放一个超链接，比如 a 元素 ，通过它跳转到你的博客页面就完成了。

```html
<a href="Blog/"></a>
```
