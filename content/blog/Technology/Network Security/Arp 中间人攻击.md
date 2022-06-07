---
title: Arp 中间人攻击
date: 2022-06-06 6:00:00
categories:
        - Network Security
tags:
        - Arp
        - Linux
        - Note
---

# Arp 中间人攻击

## 预备

### 所需工具

kali linux 虚拟机（攻击机）

安装：

- disniff(用于自动化完成 arp 欺骗)
- nbtscan（用于内网主机发现）、
- wirshark（用于嗅探受害机网络流量包）

windows 7 虚拟机（模拟受害机）

### 配置 kali

**apt-get update**

更新kali软件列表

**apt-get install dsniff**

**安装dsniff工具**

## 使目标机器断网

查看内网 ip

```
ifconfig
```

扫描内网网段

```sh
nbtscan -r 192.168.54.0/24
```

![扫描内网网段](http://image.yxzi.xyz/image/2022/06/07/扫描内网网段.png)

可以看到探测到了 ip 为 192.168.54.249、名为 WIN7-2022BXTBSK 

HA受害机。

开启 arp 欺骗攻击

```sh
arpspoof -i eth0 -t 192.168.54.249 192.168.54.76
```

其中，`-i` 指定攻击机的某一张网卡来进行攻击，

`-t`第一个 ip 指定受害机的ip，第二个 ip 为内网默认网关（一般

来说是路由器）的 ip。

第一个参数可通过扫描确定，第二个参数可在攻击机中输入`netstat -rn`来查看：

![查看内网默网关](http://image.yxzi.xyz/image/2022/06/07/查看内网默认网关.png)

如图已经开始 arp 攻击了：

![开始攻击](http://image.yxzi.xyz/image/2022/06/07/开始攻击.png)

这时候我们就会发现受害机已经 ping 不通了：

![ping 不通](http://image.yxzi.xyz/image/2022/06/07/ping 不通.png)
至此，我们已经完成了 arp 欺骗的第一个目的：使目标机器断网。

并且开启本地防火墙并不能拦截我们的 arp 欺骗。

## 嗅探受害机的网络数据包

接下来，我们开始进行第二个阶段的攻击，嗅探受害机的网络数据包

```
echo 1 > /proc/sys/net/ipv4/ip_forward
```

原本的0代表着不开启路由转发功能。

此时回到受害机可以看到网络连接恢复了正常也就是我们攻击机的路由转发功能已成功开启。

此时受害机所有的网络请求包都会流经攻击机！

## wireshark

打开流量分析神器 wireshark 并选择刚刚进行 arp 欺骗时所选择的那张网卡：

![选择网卡](http://image.yxzi.xyz/image/2022/06/07/选择网卡.png)

## 开始抓包

![开始抓包](http://image.yxzi.xyz/image/2022/06/07/开始抓包.png)

1. 在受害机输入地址：ftp://192.168.54.4:21。

2. 输入账号和密码，登录成功后返回到攻击机。

3. 抓包完成暂停 wireshark 抓包。

4. 过滤其他协议的数据包，只显示 FTP 数据包，

5. 查看数据看包，存储着我们刚刚输入的明文用户名、密码。

![查看数据包](http://image.yxzi.xyz/image/2022/06/07/查看数据包.png)



至此，我们成功模拟了一次 arp 欺骗攻击，并成功达到了让受害机断网、嗅探目标主机网络数据包。