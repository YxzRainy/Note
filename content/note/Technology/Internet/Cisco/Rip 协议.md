---
title: Cisco Rip 协议
date: 2021-10-22
categories:
        - 网络技术
tags:
        - 网络
        - Cisco
        - Note
---

# Rip 协议

RIP 协议是比较老的一款动态路由协议，这款协议现在用的已经很少了；

RIP 协议在 IPv4 里分成两个版本，目前就 RIPv2 版本来讲的话，其实也有很多问题，

比如

1. 根据路由器或者三层转发设备的条数来判断路径优劣这种判断机制是不准确的。
2. 最大条数只有 15 跳也限制了 RIP 的网络规模。
3. RIP 运行的速度比较慢，而且可能产生环路对网络有很大的影响。

## router rip

启用 Rip

## version 2

切换到 RipV2 版本

## network

通告该路由器的所有直连网络，通告之后，

该路由器的路由表就会显示除了通告外的所有网络的路由表的本地接口和远程网络的数量是一样的.

## show ip protocol

显示该路由器的路由协议，路由表前面的大写字母叫做路由来源

## no auto-summary

禁用该路由器上的自动汇总

## passive-interface g0/1

将连接局域网的接口 g 0/1 配置为被动接口，

## default-information originate

配置路由器的完全指定默认路由的默认信息来源
