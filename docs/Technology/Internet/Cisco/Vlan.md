---
title: Cisco Vlan
date: 2021-09-12
categories:
        - 网络技术
tags:
        - 网络
        - Cisco

---

# Vlan

## 重命名 Vlan

```txt
enable
configure terminal
vlan 10
name MyVlan
```

## 删除 Vlan 分配

```txt
enable
configure terminal
interface f 0/18
no switchport access vlan
```

## 删除 Vlan

```txt
no vlan 20
```

## 配置 Vlan 的 IP

```txt
enable
configure terminal
interface vlan 1
ip address 192.168.10.1 255.255.255.0
```
