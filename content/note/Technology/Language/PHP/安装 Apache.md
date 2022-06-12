---
title: 安装 Apache
date: 2021-01-07
categories:
        - 编程语言
tags:
        - 网络
        - 后端
        - 服务器
        - Note
---

# 安装 Apache

## 官方下载地址[Apache](https://www.apachehaus.com/cgi-bin/download.plx)

进不去的话，就挂个 VPN，下载好后解压，我们会得到一个名为 Apache24 的文件夹，我们先将这个文件夹放到你想要放置的目录，我这里是**D:\AppInstallPath\Apache24**.

## 目录文件解析

bin 和 cgi -bin 文件夹是 windows 下的一些可执行文件。

conf 文件夹是 Apache 的配置文件目录。

error 文件夹是 Apache 的错误日志。

htdoce 文件夹是 Apache 的默认主机地址（网站的根目录文件，默认为 index）。

modules 文件夹是 Apache 的模块，Apache 的所有功能都是模块化的，你想要什么功能，就可以在配置文件中去加载对应功能的模块（so 后缀的文件）

## bin 文件夹解析

ab.exe 是提供压力[[测试]]（当很多人访问你的网站时，你的网站是否能承载）的一个程序。

ApacheMonitor.exe 是管理右下角最小化的图标的。

httpd.exe 很重要。

## conf 文件夹解析

httpd.conf 是主配置文件。

extra 文件夹中都是子配置文件（比如 httpd-vhosts.conf），当我们需要用这些子配置文件的时候，我们需要到主配置中文件中去加载这些子配置文件。

## Httpd.exe

代表着服务器的进程，它运行之后，服务器才能运行。
