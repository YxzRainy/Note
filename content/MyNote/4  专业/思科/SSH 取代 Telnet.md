---
title: Cisco SSH 取代 Telnet
date: 2021-10-22 6:00:00
updated: 2021-10-22 17:25:00
categories:
        - 网络技术
tags:
        - 网络
        - SSH
        - Cisco
        - 交换机
        - 路由器
        - 学习笔记
---

# ssh 取代 telnet

## 远程登录

进入 PC 的 Desktop，选择 Command Prompt，

输入密码并登录。

保护密码

进入特权模式，保存

## 加密密码

在全局模式下：

```txt
Serverce password-encryption
```

## SSH 加密通信

```
ip domian-name username
ip ssh version 2
crypto key generate rsa
```
