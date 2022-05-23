---
title: Cisco 配置 Rip V2
date: 2021-12-03 6:00:00
categories:
        - 网络技术
tags:
        - 网络
        - Cisco
        - 学习笔记
        - Cisco 实验
---

# 配置 Rip V2

## 配置 R1

```
enable
configure terminal
ip route 0.0.0.0 0.0.0.0 s0/0/1
router rip
version 2
no auto-summary
network 192.168.1.0
network 192.168.2.0
passive-interface gig 0/0
default-information originate
```

## 配置 R2

```
enable
conf t
router rip
version 2
no auto-summary
network 192.168.2.0
network 192.168.3.0
network 192.168.4.0
passive-interface gig 0/0
```

## 配置 R3

```
enable
conf t
router rip
version 2
no auto-summary
network 192.168.4.0
network 192.168.5.0
passive-interface gig 0/0
```
