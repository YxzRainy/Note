---
title: VMware 安装 Kali 2022.2
date: 2022-06-01
categories:
        - Tutorial
tags:
        - Linux
        - Vmware
---

# VMware 安装 Kali 2022.2

> Kali是基于 Debian 的 Linux 发行版操作系统，一开始是由 Offensive Security 的 Mati Aharoni 和 Devon Kearns 通过重写 BackTrack 来完成，用来进行数字取证。
>
> 它拥有超过 300 个渗透测试工具，拥有开源 Git 树等，甚至还集成了 600 多种黑客工具，完全可以想象到它的强大性。更重要的是，它是免费的。

## 写在前面

一个很简单的安装教程。

## 主要实现

在 VMware 上完成 Kali 2022.2 版本的**创建和安装**。

## 环境准备

[Kali 2022.2](https://www.kali.org/get-kali/#kali-bare-metal)  镜像

VMware Pro 16.1.2

Windows 10 操作系统。

## 创建 Kali

右上角文件——>新建虚拟机，选择**自定义（高级）**，进入下一步。

虚拟机硬件兼容性选择**Workstation 16.x**，进入下一步。

安装客户机操作系统选择**稍后安装操作系统**，进入下一步。

操作系统选择 Linux，版本选择 Debian 10.x 64 位，进入下一步。

![选择客户机操作系统](https://gallery.yxzi.xyz/galleries/2022/06/17/%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.png)

修改虚拟机的名字，并修改虚拟机的存储位置，一般不建议存储在 C 盘。进入下一步。

![安装kali2](https://gallery.yxzi.xyz/galleries/2022/06/17/%E5%AE%89%E8%A3%85kali2.png)

处理器内核数量根据需求来配置即可，推荐 **1 个处理器，2 个内核**。进入下一步。

虚拟机内存根据需求配置即可，推荐 **2048 MB**，进入下一步。

网络类型选择 **使用桥接模式**，进入下一步。

I/O 控制器选择 **LSI Logic**，一般默认就是该选项，进入下一步。

磁盘类型选择 **SCSI**，一般默认就是该选项，进入下一步。

磁盘选择**创建新的虚拟磁盘**，进入下一步。

![安装kali3](https://gallery.yxzi.xyz/galleries/2022/06/17/%E5%AE%89%E8%A3%85kali3.png)

硬盘容量根据需求配置即可，推荐 20 GB，然后勾选**将虚拟磁盘拆分成多个文件**，进入下一步。

![安装kali4](https://gallery.yxzi.xyz/galleries/2022/06/17/%E5%AE%89%E8%A3%85kali4.png)

指定磁盘文件的存储路径和名字，不建议存储在 C 盘，名字随意，进入下一步。

![安装kali5](https://gallery.yxzi.xyz/galleries/2022/06/17/%E5%AE%89%E8%A3%85kali5.png)

这里选择**自定义硬件**，选择侧栏菜单中的**新CD/DVD(IDE)**，并选择**使用 ISO 映像文件**，并选择 **ISO 所在的路径**，然后窗口，选择完成。

![安装kali6](https://gallery.yxzi.xyz/galleries/2022/06/17/%E5%AE%89%E8%A3%85kali6.png)

可以看到 kali 2022.2 已经出现在左侧的虚拟机列表，说明我们的虚拟机已经创建完成，接着可以启动 kali 2022.2 开始安装操作系统了。

![安装kali7](https://gallery.yxzi.xyz/galleries/2022/06/17/%E5%AE%89%E8%A3%85kali7.png)

## 安装 Kali

不出意外，你会看到如下界面，按键盘上的上下左右键来选择 **Graphical install**（图形界面安装），然后 Eeter，当然也可以选择 Install（文字界面安装），这两种方式**只是安装的时候的界面不一样，并不影响安装后的系统**，选哪个都行的。

![安装kali8](https://gallery.yxzi.xyz/galleries/2022/06/17/%E5%AE%89%E8%A3%85kali8.png)

接着就会有一段黑屏，稍作等待，然后选择一个合适的系统语言即可，进入下一步。

区域一般选择**中国**，当然你也可以选择其他的，进入下一步。

键盘配置选择**汉语**，完成后系统会**加载安装程序组的件**，稍作等待。

![kali安装9](https://gallery.yxzi.xyz/galleries/2022/06/18/kali%E5%AE%89%E8%A3%859.png)

配置你的**主机名**，当然你也可以用默认的 kali，我这里用的是 Rainy。

![kali安装10](https://gallery.yxzi.xyz/galleries/2022/06/18/kali%E5%AE%89%E8%A3%8510.png)

配置域名，如果你不知道域名是什么，那么可以输入**姓名首字母小写 + .com**，当然，你也可以不用写直接进入到下一步。

![kali安装11](https://gallery.yxzi.xyz/galleries/2022/06/18/kali%E5%AE%89%E8%A3%8511.png)

创建一个全新的用户，并配置它的名字，这个用户不同于 root 用户， 它只是一个普通用户。

自己设置个简单的比较好，毕竟经常用，输入比较方便

![kali安装12](https://gallery.yxzi.xyz/galleries/2022/06/18/kali%E5%AE%89%E8%A3%8512.png)

接着配置上一步创建的用户的登录名，这个用户名用来登录到 Kali.

![安装kali13](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%AE%89%E8%A3%85kali13.png)

接着配置用户的登录密码，需要输入两次，建议勾选显示明文密码。

![安装kali14](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%AE%89%E8%A3%85kali14.png)

此时系统会加载一些时钟设置和磁盘分区等，稍作等待。

接着磁盘分区，选择**向导-使用整个磁盘**，进入下一步。

![安装kali15](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%AE%89%E8%A3%85kali15.png)

接着选择要分区的磁盘，**保持默认选项**，进入下一步。

选择**将所有文件放在同一个分区中(推荐新手使用)**，进入下一步。

选择**结束分区设定并将修改写入磁盘**，进入下一步。

选择**是**

![kali安装16](https://gallery.yxzi.xyz/galleries/2022/06/18/kali%E5%AE%89%E8%A3%8516.png)

接着就开始安装基本系统，安装的速度有点拉了，稍作等待后进入下一步。

![安装kali17](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%AE%89%E8%A3%85kali17.png)

这一步**保持默认选项**，进入下一步。

![安装kali18](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%AE%89%E8%A3%85kali18.png)

接着开始安装软件，又是一段漫长的等待，呃....这次是真漫长....

等加载完成后，是否选择将 GRUB 安装到硬盘，选择**是**，进入下一步。

接着选择 **/dev/sda**。

![安装kali19](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%AE%89%E8%A3%85kali19.png)

等待 GRUB 安装完成，然后会有一个**结束安装进程**的加载进度，耐心等待加载完成即可。

安装完成后会提示我们点击**继续**来重启系统。

![安装kali20](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%AE%89%E8%A3%85kali20.png)

如果你看到了登录提示，就说明 kali 已经安装完成了！

接下来输入刚刚我们设置的用户名 rainy 和密码来登录到 kali。

![安装kali21](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%AE%89%E8%A3%85kali21.png)

稍作等待不要慌，可以看到我们已经来到了 kali 的桌面。

![安装kali22](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%AE%89%E8%A3%85kali22.png)

此致，我们已经完成了 kali 2022.2 的安装！