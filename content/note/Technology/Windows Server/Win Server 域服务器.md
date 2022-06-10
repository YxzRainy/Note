---
title: 域服务器
date: 2021-11-02
categories:
        - 服务器
tags:
        - Win Server
        - 虚拟机
        - 域服务器
        - Note
---

# 域服务器

父域一

父域二

子域三

成员四

9 月 30 号 vmware

One

大规模联网用域

小规模联网用组

更大的规模用林

打开 one，和 two，three，fou

更改计算机属性 - 重命名计算机名

设置密码和用户名

设置 ipv4 属性

One

ip 192.168.10.1，255.255.255.0，192.168.10.1

Dns 127.0.0.1，变为 192.168.10.1

Two

ip 地址 192.168.10.2，255.255.255.0，192.168.10.1

Dns 192.168.10.1 变为 192.168.10.2 备用 dns 192.168.10.1

Three

ip 192.168.10.3，255.255.255.0，192.168.10.1

Dns 192.168.10.1

Four

ip 192.168.10.4，255.255.255.0，192.168.10.1

Dns 192.168.10.1

选择 one

服务器管理 - 添加角色 - 服务器角色

勾选 dns 服务器 和 active directory 服务，安装完成后重启

管理工具

本地安全策略 账户策略 密码策略 密码必须符合复杂性要求 禁用

虚拟机命令行输入

net user userName /passwordreq:yes

提升为域服务器

**部署配置**

添加新林，根域名 yxzi.xyz

**域控制器选项**

林功能级别和域功能级别保持默认

设置还原模式的密码

Dns 选项，不管，下一步

netbios 域名设置为 yxzi

**路径**，保持默认

**查看选项**，保持默认

先决条件检查

重启登录

用户和计算机

Two

更改 sid

windows，system32 ，sysprep，右击用管理员身份运行

选择通用，确定

重启

添加角色 域服务器和 dns 之后

虚拟机命令行输入

net user userName /passwordreq:yes

部署配置 将新域添加到现有林

子域

父域 yxzi.xyz

新域名 zxy

yxzi

点击选择

提供执行此操作所需的凭据

用户名 yxzi\One

密码

域控制器管理 勾选全局编录

设置还原密码

dns 下一步

其他选项 指定 one

路径，查看选项 默认下一步

检查，重启

重启

打开 Two

服务器管理，工具，

域和信任区

dns 正向查找区域

打开 Three 和 four

关机后在虚拟机配置文件 vmx 后缀中加入

hypervisor.cpuid.v0 = “FALSE”

mce.enable = “TRUE”

安装 hyper v

计算机属性 计算机域更改 隶属于 yxzi

用户名

yxzi\One

密码

重启

打开第三台的 hyper v 右击 hyper v 管理器

在第一台的计算机管理 computer 可以看到 three

运行 four

打开 three 的 服务器管理面板，hyper v，右击 hyper v 管理器

右击链接到服务器

在第一次导入虚拟机
