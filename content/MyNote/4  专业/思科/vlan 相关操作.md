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

删除vlan分配

conf t

interface f 0/18

no switchport access vlan 



接入模式 等于下行模式

interface f 0/18

switchport mode access

switchport mode access



验证端口状态



删除vlan

 no vlan 20



show vlan summary，

show vlan brief，

show interface vlan 20

show interface f0-/18 switchport







进全局 

vlan 10

name student 

exit

interface f0/12

switchport acces vlan 10 （指定删除10，不加10相当于删除全部？）

end

show vlan brief

确定划分完成



interface 0/12

no switchport vlan 10

