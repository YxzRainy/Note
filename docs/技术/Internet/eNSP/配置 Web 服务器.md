---
title: eNSP 配置 Web 服务器
date: 2022-03-21
categories:
        - 网络技术
tags:
        - eNSP
        - 交换机
        - 路由器
        - eNSP 实验
---

# 配置 Web 服务器

## 第一台客户机

10.0.1.10

10.0.1.1

域名服务器

10.0.2.10

Server

10.0.2.10

10.0.2.1

域名服务器

10.0.2.10

配置 router

sys

int e 0/0/0

ip add 10.0.2.1 255.255.255.0

quit

int g0/0/0

ip add 10.0.1.1 255.255.255.0

quit

save

配置 lsw

sys

int g0/0/1

port link type access

quit

int g0/0/2

port link type trunk

打开 client

目的 10.0.2.10

打开 Server

目的 10.0.1.10

新建本地

创建文件夹 ftp 和 http

新建 flag.txt

新建 index.html

分别启动

打开 Server

服务器信息

ftp 选择文件根目录

http 选择文件目录

dns

yxz.com

10.0.2.10

启动

打开路由器 开始抓包

打开 client

服务器地址 10.0.2.10

ftp client

http yxz.com
