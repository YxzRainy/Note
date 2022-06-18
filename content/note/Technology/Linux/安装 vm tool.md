---
title: Linux 安装 VMware Tools
date: 2021-10-22
categories:
        - 服务器
tags:
        - SSH
        - WinSCP
        - 网络安全
        - Note

---

VMware Tools是虚拟机和物理机交换数据的一个强大工具，可以让虚拟机自适应窗口大小，以及物理机和虚拟机之间的复制黏贴操作等，能够更方便我们使用虚拟机的操作系统，接下来我们就在KALI中安装VMware Tools

 首先打开虚拟机，单击虚拟机选项卡下的安装 VMware Tools选项



 就会看到位置选项卡下多了一个VMware Tools的光驱标志，单击它



 copy Vmwaretool文件       



 paste到桌面



 然后打开终端，cd 进Desktop（桌面）目录

ls 可看到有 VMwareTools-10.1.6-5214329.tar.gz文件

 用  tar zxvf VMwareTools-10.1.6-5214329.tar.gz  这个命令解压压缩包。



 进入vmware-tools-distrib文件夹，



输入 ./vmware-install.pl开始安装，之后一直回车使用默认的即可         



这样就可以完成VMware Tools的安装了。

卸载命令

1、运行 /usr/bin/vmware-uninstall-tools.pl

    或 运行rpm -e open-vm-tools-desktop
————————————————
版权声明：本文为CSDN博主「李川一」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_45830924/article/details/120132971