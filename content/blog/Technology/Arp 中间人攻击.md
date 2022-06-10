---
title: Arp 中间人攻击
date: 2022-06-06
categories:
        - Technology
tags:
        - Arp
        - Linux
        - Vmware
        - Network Security
---

# Arp 中间人攻击

使用 Windows 7 登录到 Window Sever 2012 上搭建好的 FTP 服务器。

使用 kali

## 准备

Linux，用来模拟攻击机，本文用的是系统为 kali，其他系统可以参考。

Windows 7，用来模拟受害机。

Window Sever 2012，用于搭建 FTP 服务器，

Windows 本地环境，在 VMware 配置三台虚拟机

## 搭建 FTP 站点

打开服务器管理器的仪表板。

右上角管理 ，添加角色 Web 服务器：

![添加角色](https://image.yxzi.xyz/image/2022/06/10/添加角色.png)

勾选后一直下一步，在角色服务找到 **FTP 服务器**并勾选 ：

![角色服务](https://image.yxzi.xyz/image/2022/06/10/角色服务.png)

确认选项点击安装，等待安全完成即可。

![FTP安装完成.png](https://image.yxzi.xyz/image/2022/06/10/FTP安装完成.png)

## 配置 Linux

更新 Linux 软件列表

```sh
apt-get update
```

安装 dsniff 工具

```sh
apt-get install dsniff
```

## 使目标机器断网

我们现在要使受害机断网，先查看内网 ip

```sh
ifconfig
```

扫描内网网段

```sh
nbtscan -r 192.168.54.0/24
```

![扫描内网网段](https://image.yxzi.xyz/image/2022/06/07/扫描内网网段.png)

可以看到探测到了 ip 为 192.168.54.249，名为 WIN7-2022BXTBSK 的受害机。

**开启 arp 欺骗攻击：**

```sh
arpspoof -i eth0 -t 192.168.54.249 192.168.54.76
```

`-i` 指定攻击机的某一张网卡来进行攻击。

`-t`第一个 ip 指定受害机的 ip，第二个 ip 为内网默认网关（路由器）的 ip。

第一个参数可通过扫描确定，第二个参数可在攻击机中输入`netstat -rn`来查看：

![查看内网默网关](https://image.yxzi.xyz/image/2022/06/07/查看内网默认网关.png)

图中的 192.168.54.76 就是内网默认网关。

如图已经开始 arp 攻击了：

![开始攻击](https://image.yxzi.xyz/image/2022/06/07/开始攻击.png)

这时候我们就会发现受害机已经 ping 不通了：

![ping不通](https://image.yxzi.xyz/image/2022/06/07/ping不通.png)

至此，我们已经完成了 arp 欺骗的第一个目的：使目标机器断网。

并且开启本地防火墙并不能拦截我们的 arp 欺骗。

## 嗅探受害机的网络数据包

接下来，我们将使用 wireshark 来嗅探受害机的网络数据包

使用下面的命令来开启路由转发功能：

```
echo 1 > /proc/sys/net/ipv4/ip_forward
```

原本的 0 代表着不开启路由转发功能。

此时回到受害机可以看到网络连接恢复了正常，代表着就是我们攻击机的路由转发功能已成功开启。**此时受害机所有的网络请求包都会流经攻击机。**

打开流量分析神器 wireshark 并选择刚刚进行 arp 欺骗时所选择的那张网卡：

![选择网卡](https://image.yxzi.xyz/image/2022/06/07/选择网卡.png)

## 开始抓包

![开始抓包](http://image.yxzi.xyz/image/2022/06/07/开始抓包.png)

1. 在受害机输入地址：ftp://192.168.54.4:21。

2. 输入账号和密码，登录成功后返回到攻击机。

3. 抓包完成暂停 wireshark 抓包。

4. 过滤其他协议的数据包，只显示 FTP 数据包，

5. 查看数据看包，存储着我们刚刚输入的明文用户名、密码。

![查看数据包](https://image.yxzi.xyz/image/2022/06/07/查看数据包.png)



至此，我们成功模拟了一次 arp 欺骗攻击，并成功达到了让受害机断网、嗅探目标主机网络数据包。