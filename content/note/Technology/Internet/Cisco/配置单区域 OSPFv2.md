---
title: Cisco 配置单区域 OSPFv2
date: 2021-12-12
categories:
        - 网络技术
tags:
        - 网络
        - Cisco

        - Cisco 实验
---

# 配置单区域 OSPFv2

## 配置 R1

```
enable
configure terminal

router ospf 10
router-id 1.1.1.1
network 172.16.1.0 0.0.0.255 area 0
network 172.16.3.0 0.0.0.3 area 0
network 192.168.10.4 0.0.0.3 area 0
passive-interface GigabitEthernet0/0
```

## 配置 R2

```
enable
configure terminal

router ospf 10
router-id 2.2.2.2
network 172.16.2.0 0.0.0.255 area 0
network 172.16.3.0 0.0.0.3 area 0
network 192.168.10.8 0.0.0.3 area 0
passive-interface GigabitEthernet0/0
```

## 配置 R3

```
enable
configure terminal

router ospf 10
router-id 3.3.3.3
network 192.168.1.0 0.0.0.255 area 0
network 192.168.10.4 0.0.0.3 area 0
network 192.168.10.8 0.0.0.3 area 0
passive-interface GigabitEthernet0/0
```
