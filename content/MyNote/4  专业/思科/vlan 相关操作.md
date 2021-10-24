---
title: Cisco vlan 相关操作
date: 2021-10-22 6:00:00
updated: 2021-10-22 17:24:00
categories:
        - 网络技术
tags:
        - 网络
        - Cisco
        - 交换机
        - 路由器
        - 学习笔记
---

# vlan 相关操作

## 重命名 Vlan

```yaml
enable 
configure terminal 
vlan 10 
name MyVlan
```

## 删除vlan分配

```
configure terminal
interface f 0/18
no switchport access vlan 
```

## 删除vlan

```
 no vlan 20
```
