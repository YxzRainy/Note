---
title: Hexo 更改博客主题
date: 2021-10-03 6:00:00
updated: 2021-10-23 19:41:00
categories:
        - Hexo
tags:
        - Github
        - Hexo
        - Git
        - 博客
---
# Hexo 更改博客主题

## 前言

配置完了 Hexo，你是否对自带的主题不满意呢？本篇文章将教你如何更改及美化 Hexo 主题。

## 下载主题

去 Hexo 的[Hexo Themes](https://hexo.io/themes/)下载一个你认为不错的主题。这里推荐 [Next](https://github.com/next-theme/hexo-theme-next)主题

![Next](Next.png)



## 更改基本站点信息

在你的博客根目录下打开**_config.yml**，将 Site 下的信息改为你自己的

```yaml
# Site
title: Rainy 的梦呓
subtitle: '至简'
description: 'My Blog And Note to sum up'
keywords: Blog note
author: Yxz
language: zh-CN
timezone: 'Asia/Shanghai'
```

同时 记得将 URL 下的 url 改为你自己的站点地址

```yaml
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://YxzRainy.github.io/Blog
```



## 切换到 Next 主题

在你的博客根目录下打开**_config.yml**，将 Extensions，下的 theme 改为 next。

```yaml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next
```

## 安装主题

在博客根目录新建一个 themes/next 文件夹。

将刚才下载好的主题文件夹中的配置文件复制到新建的 themes/next 中，并将 themes/next/_config.yml 复制到你的博客根目录，最后重命名为_**config.next.yml**即可。

## 配置 Next 主题

### 选择 Schemes

打开 _config.next.yml，首先可以看到 Scheme Settings，里面提供了四种模式，对应上面介绍 next 的图片的四种，可以根据自己的喜好更改。

```yaml
# Schemes
scheme: Muse
#scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

### 设置 icon

在 _config.next.yml 中，在 favicon 下，可以设置侧边栏头像以及站点icon。需要把你的icon放在 source/img/目录

```yaml
favicon:
 small: /img/avatar.jfif
 medium: /img/avatar.jfif
 apple_touch_icon: /img/avatar.jfif
 safari_pinned_tab: /images/logo.svg
```

### 设置菜单栏

在 menu 下，可以设置菜单显示内容，此版本 next 支持 font awesome 图标，可以去[Font Awesome](https://fontawesome.com/)寻找你喜欢的图标进行替换。注：相应的菜单栏需要有对应的页面才能打开，不然会 404 哦！

```yaml
menu:
 home: / || fa fa-home
 #about: /about/ || fa fa-user
 tags: /tags/ || fa fa-tags
 categories: /categories/ || fa fa-th
 archives: /archives/ || fa fa-archive
 guestbook: /guestbook/ || fa fa-book
 #schedule: /schedule/ || fa fa-calendar
 #sitemap: /sitemap.xml || fa fa-sitemap
 #commonweal: /404/ || fa fa-heartbeat
```

### 侧边栏设置

```yaml
#调整边栏左右
#position: left
position: right

# Sidebar Display (only for Muse | Mist), available values:
#  - post    expand on posts automatically. Default.
#  - always  expand for all pages automatically.
#  - hide    expand only when click on the sidebar toggle icon.
#  - remove  totally remove sidebar including sidebar toggle.
display: post

# Sidebar padding in pixels.
padding: 18
# Sidebar offset from top menubar in pixels (only for Pisces | Gemini).
offset: 12
```



### 设置已读进度条

将 reading_progress 的 enable 设置为 true 即可，位置颜色和高度都可以调整。

```
# Reading progress bar
reading_progress:
 enable: true
 # Available values: top | bottom
 position: bottom
 color: "#37c6c0"
 height: 3px

```

