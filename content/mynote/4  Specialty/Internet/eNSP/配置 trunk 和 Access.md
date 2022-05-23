---
title: eMSP 配置 trunk 和 Access
date: 2022-03-21 6:00:00
categories:
        - 网络技术
tags:
        - eNSP
        - 交换机
        - 路由器
        - eNSP 实验
---

# 配置 trunk 和 Access

**添加静态 mac**

改名，配置 IP 和子网掩码

第一台 pc ping 其他 pc

显示 mac 地址

设置 mac 地址

**划分 vlan**

改名

显示 vlan

其中一台 pc ping 剩余 pc

创建 vlan batch 1

进入接口 1 和 2

port link-type access

port defult vlan 10

quit

进入接口 3 和 4

port link-type access

port defult vlan 20

quit

相同 vlan 互相 ping

两台交换机分别有四台 pc

第一台交换机下有 vlan 10 和 vlan 20

第二台交换机下有 vlan 10 和 vlan 20
