---
title: ARP 欺骗
date: 2022-06-06
categories:
        - Tutorial
tags:
        - Arp
        - Linux
        - Vmware
        - Network Security
---

# ARP 欺骗

> ARP 欺骗（ARP Spoofing），又称 ARP 毒化（ARP Poisoning，，网上上多译为 ARP 病毒）或 ARP 攻击，它是针对以太网地址解析协议（ARP）的一种攻击技术，通过欺骗局域网内访问者 PC 的网关 MAC 地址，使访问者 PC 错以为攻击者更改后的 MAC 地址是网关的 MAC，导致网络不通。
>
> 此种攻击可让攻击者获取局域网上的数据包甚至可篡改数据包，且可让网上上特定计算机或所有计算机无法正常连线。
>

## 写在前面

临近期末，我们网络安全的作业就是实现一个 Arp 中间人攻击的实验，为此不得不研究一下 Linux 和虚拟机，虽然大一的时候学了点，但也就学了一点。

## 主要实现

在 Window Sever 2012 上创建新用户，并**搭建 FTP 站点**。

在 Windows 7 上用新用户**访问 FTP 站点**。

在 Linux 上使用 arp 欺骗技术**抓取 Windows 7 的数据包（用户名密码等）**。

## 环境准备

Kali 2022.2  虚拟机，用来模拟攻击者。

Windows 7 X64 虚拟机，用于访问 FTP 站点，用来模拟受害机。

Window Sever 2012 虚拟机，用于搭建 FTP 站点。

VMware Pro 16.1.2，配置以上三台虚拟机。

Windows 10 操作系统。

## 安装虚拟机

此处只演示 Kali 的安装过程，~~Windows 7 和 Window Sever 2012 就不作演示，网上一大堆教程~~。

安装 Kali 20222.2 的教程在这里：[VMware 安装 Kali 2022.2](https://yxzi.xyz/archives/vmware-an-zhuang-kali20222)

## 配置网络适配器

将三台虚拟机的网络适配器都配置为 bridge 模式，此处仅演示了 Windows 7，其余两台虚拟机同理。

![配置桥接模式](https://gallery.yxzi.xyz/galleries/2022/06/13/配置桥接模式.png)

## 配置 IP

**Window Sever 2012**

- IP Adress：192.168.10.66
- Network：255.255.255.0
- Gateway：192.168.10.1

**Windows 7**

- IP Adress：192.168.10.200
- Network：255.255.255.0
- Gateway：192.168.10.1

### 配置 Windows 的 IP 

右下角图标——>更改适配器设置——>右击网络，

![配置ip地址](https://gallery.yxzi.xyz/galleries/2022/06/13/配置ip地址.png)

### 配置 Linux 的 IP

IP Address：192.168.10.100

Netmask：255.255.255.0

Gateway：192.168.10.1

首先打开文件，按 `i`进入插入模式，

```sh
sudo vi /etc/network/interfaces
```

一般来说，如果你没有配置过，该文件中默认会有以下内容：

![linuxip默认内容](https://gallery.yxzi.xyz/galleries/2022/06/14/linuxip%E9%BB%98%E8%AE%A4%E5%86%85%E5%AE%B9.png)

我这里将其中两行删掉了，并插入了以下内容：

```sh
auto eth0                  # 设置自动启动 eth0 网卡
iface eth0 inet static     # 配置静态 IP
address 192.168.10.100     # IP 地址
netmask 255.255.255.0      # 子网掩码
gateway 192.168.10.1       # 默认网关
```
**Tip：# 后面的注释信息不要加进去。**
![ip地址](https://gallery.yxzi.xyz/galleries/2022/06/13/ip地址.png)

修改完成后按 Esc 键退出插入模式，并输入`:wq`保存后退出。

重启网络，使配置生效。

```sh
sudo /etc/init.d/networking restart
```

![重启网络](https://gallery.yxzi.xyz/galleries/2022/06/13/重启网络.png)

再次使用`ipconfig`查看本机 IP.

!![ip修改成功](https://gallery.yxzi.xyz/galleries/2022/06/13/ip%E4%BF%AE%E6%94%B9%E6%88%90%E5%8A%9F.png)

可以发现 IP 已经修改成功了！

**Tip：用这种方式修改 Linux IP 地址，有一个缺点，就是每隔一段时间， 重新登录 Linux 用户，之前配置好的 IP 就会改变，但问题不大，在 root 用户重启一下网络即可`sudo /etc/init.d/networking restart`**

## 调试主机之间的通信

### 主机之间互相 ping 通

此时三台主机是能够互相 ping 通的，这里只演示使用 Window 7 来 ping 其余两台主机。

![测试ping](https://gallery.yxzi.xyz/galleries/2022/06/13/%E6%B5%8B%E8%AF%95pi.png)

可以看到，这里成功 ping 通了其他两台主机，其中 **192.168.10.66** 是 Window Sever 2012 的 IP，**192.168.10.100** 是  linux 的 IP。

### 查看 arp 表

使用 `arp -a` 命令来查看系统缓存 arp 表，再使用`ipconfig`来查看本机 IP.

![arp和ipconfig](https://gallery.yxzi.xyz/galleries/2022/06/13/arp%E5%92%8Cconfig%E4%BF%A1%E6%81%AF.png)

可以看到本机的 IP 是 **192.168.10.200**，同一网段中还有两台主机，一台的 IP 为 **192.168.10.66**（Window Sever 2012 ），另一台的 IP 为 **192.168.10.100**（Linux），其中 **192.168.10.1** 是默认网关。

你如果时间充裕，可以去查看一下 Window Sever 2012  和 Linux 的 IP，是否如上所述。

**Window Sever 2012 的 IP ：**

![win2012ip](https://gallery.yxzi.xyz/galleries/2022/06/13/win2012i.png)

以及 **Linux 的 IP**：

![linuxip](https://gallery.yxzi.xyz/galleries/2022/06/13/linux%20i.png)

可以看到两台主机的 IP 确实如我们所想的那样。

保证三台主机可以互相 ping 通之后，接下来就可以开始创建新用户了。

## 更改计算机名

启动 Window Sever 2012，打开开始菜单并**右击这台电脑**，选择属性。

![计算机属性](https://gallery.yxzi.xyz/galleries/2022/06/13/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%B1%9E%E6%80%A7.png)

可以看到当前计算机的名字，点击右侧的**更改设置**，并在弹出的窗口中选择计算机名选项卡，并点击更改。

![更改](https://gallery.yxzi.xyz/galleries/2022/06/13/%E6%9B%B4%E6%94%B9.png)

接下来只需要输入想要修改的名字，我这里是 zxy，然后点击确定之后会提示我们重启，确定即可。

![更改计算机名](https://gallery.yxzi.xyz/galleries/2022/06/14/%E6%9B%B4%E6%94%B9%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%90%8D.png)

之后系统会提示是否立即重新启动计算机，**强烈建议选择立即重新启动**，因为在某些时候，重启虚拟主机也许会导致与 IP 相关的配置被重置 。

**Tip：计算机名不能和用户名相同**，如果你先创建了个名为 Rainy 的用户，然后再将计算机名改为 Rainy，系统并不会警告你，但是，**这会导致你使用 Rainy 用户无法登录到 FTP 站点**！

来验证一下，此时已将计算机名改为了 **zxy**，然后尝试新建一个用户 **zxy**，看看是否如上所说的那样。

![新建zxy.](https://gallery.yxzi.xyz/galleries/2022/06/14/%E6%96%B0%E5%BB%BAzxy.png)

可以看到，确实无法创建 **zxy** 用户，这是因为再有些系统中，计算机名和用户名是不能一样的。

这也是为什么我把更改用户名放到创建新用户之前的原因（~~本来是之后的 dage~~）。

如果你要问我为什么，那我也不知道！！！

## 创建新用户

更改了用户名之后，我们就可以开始创建新用户了！

打开服务器管理，点击右上角的工具选项，并选择计算机管理：

![计算机管理](https://gallery.yxzi.xyz/galleries/2022/06/12/计算机管理.png)

选择本地用户和组——右击用户——>新用户：

![新建用户](https://gallery.yxzi.xyz/galleries/2022/06/12/新建用户.png)

配置用户名和密码，请记住用户名和密码，我们之后会使用该用户登录 FTP 站点，完成后点击创建。

用户名一般随意，除非你像我一样是为了~~应付~~完成考试。

**Tip：用户名不能和之前配置的计算机名相同**。

![image-20220612235350447](https://gallery.yxzi.xyz/galleries/2022/06/12/配置用户名和密码.png)

关闭窗口后即可查看刚才创建的用户 Rainy。

![创建的用户](https://gallery.yxzi.xyz/galleries/2022/06/13/创建的用户.png)

OK，用户创建成功后，接下来就可以开始搭建 FTP 站点了。

## 搭建 FTP 站点

### 创建物理路径

打开 Window Sever 2012 ，我们先创建站点的物理路径，打开此电脑，并在`C:\intepub\ftproot\`下新建文件**test.txt**，没有 ftproot文件夹的话新建一个，因为某些特殊清空，我在**test.txt**中写入了一些文本内容。

![创建站点物理路径](https://gallery.yxzi.xyz/galleries/2022/06/13/image-20220613130200847.png)

### 添加 Web 服务

创建好物理路径后，打开服务器管理器。右上角管理 ，选择添加角色和功能——>来到左侧服务器角色选项——>勾选 Web 服务器。

![添加 Web 角色](https://gallery.yxzi.xyz/galleries/2022/06/12/添加 Web 角色.png)

勾选后一直下一步，在角色服务找到 **FTP 服务器**并勾选 ：

![添加FTP服务](https://gallery.yxzi.xyz/galleries/2022/06/12/添加FTP服务.png)

下一步，再点击安装，等待安装完成即可。

![安装完成.png](https://gallery.yxzi.xyz/galleries/2022/06/12/安装完成.png)

安装完成后，服务器管理器的左上角会多出一个 IIS 的选项，单击切换到 IIS 管理器，并打开 IIS 管理器：

![打开IIS管理器](https://gallery.yxzi.xyz/galleries/2022/06/12/打开IIS管理器.png)

### 添加 FTP 站点

进入 IIS 管理器后，点开左侧折叠菜单，找到网站并右击，选择添加 FTP 站点。

![添加FTP站点](https://gallery.yxzi.xyz/galleries/2022/06/12/添加FTP站点.png)

配置站点的名称，并选择站点的物理路径，也就是我们之前创建的这个物理路径也是站点的根目录。

该路径通常需要自己创建，我这里选择的是 C 盘中的 web 文件夹，完成后进入下一步。

![配置物理路径](https://gallery.yxzi.xyz/galleries/2022/06/13/%E9%85%8D%E7%BD%AE%E7%89%A9%E7%90%86%E8%B7%AF%E5%BE%84.png)

给站点配置 IP 地址和端口，IP 选择本机 IP 即可，端口默认即可，当然你也可以修改，并选择无 SSL，进入到下一步。

![配置IP和端口](https://gallery.yxzi.xyz/galleries/2022/06/13/%E9%85%8D%E7%BD%AEIP%E5%92%8C%E7%AB%AF%E5%8F%A3.png)

身份验证**勾选基本**，

授权设置为**只允许刚才我创建的用户 Rainy 访问**，

权限全部都勾上，最后点击完成。

![配置访问权限](https://gallery.yxzi.xyz/galleries/2022/06/13/配置访问权限.png)

窗口关闭后就可以看到我创建的名为 FTP Web 的站点，点击侧菜单中的浏览选项来查看站点的根目录。

![浏览站点目录](https://gallery.yxzi.xyz/galleries/2022/06/13/%E6%B5%8F%E8%A7%88%E7%AB%99%E7%82%B9%E7%9B%AE%E5%BD%95.png)

打开此电脑或浏览器，我这里用的是我的电脑，在地址栏输入刚才配置好的 IP 和 端口`ftp://192.168.10.66:21`，最后回车。

![搭建成功](https://gallery.yxzi.xyz/galleries/2022/06/13/image-20220613201957369.png)

出现了一个登录页面，这说明我的站点依旧搭建成功！

接下来输入之前创建的用户名和密码，

![开始登录](https://gallery.yxzi.xyz/galleries/2022/06/13/%E5%BC%80%E5%A7%8B%E7%99%BB%E5%BD%95.png)

登录成功后就可以看到之前创建的物理路径中的文件`test.txt`，

![成功登录](https://gallery.yxzi.xyz/galleries/2022/06/13/%E6%88%90%E5%8A%9F%E7%99%BB%E5%BD%95.png)

当然，这没什么，但是你可以在 Windows 7 这个主机上通在浏览器中输入`ftp://192.168.10.66:21`来登录到你 FTP 站点，并访问或下载其中的文件。

说干就干！打开 Windows 7，输入`ftp://192.168.10.66:21`，并输入用户名和密码，点击登录，不出意外是可以登录成功的，然后我们来访问一下`test.txt`可以看到之前写入的文本内容。

![win7访问](https://gallery.yxzi.xyz/galleries/2022/06/13/win7%E8%AE%BF%E9%97%AE.png)

### 关闭防火墙

我这里需要关闭 Window Sever 2012 的防火墙，其实如果你成功完成了此前的所有操作，那么不关防火墙也是问题不大的，但我这里因为某些特殊情况，需要关闭防火墙。

点击开始菜单，再点击一下左下角的箭头，就可以看到防火墙的选项。

![关闭防火墙](https://gallery.yxzi.xyz/galleries/2022/06/13/%E5%85%B3%E9%97%AD%E9%98%B2%E7%81%AB%E5%A2%99.png)

确保防火墙是关闭的就没问题了，有的主机有可能默认就是关闭，这种情况就不用管了。

![成功关闭防火墙](https://gallery.yxzi.xyz/galleries/2022/06/13/%E6%88%90%E5%8A%9F%E5%85%B3%E9%97%AD%E9%98%B2%E7%81%AB%E5%A2%99.png)

至此，我们已经完成了 FTP 站点的搭建和访问，就差最后一步使用 Linux 抓取登录用户名和密码了。

## Ettercap + Wireshark 进行 arp 欺骗

先更新 Linux 软件列表。

```
sudo apt update
```

安装 ettercap 和 Wireshark，如果有的话无需安装，一般 kali 都自带这两个软件。

```
 sudo apt-get install wireshark
 sudo apt-get install ettercap-text-only 
 sudo apt-get install ettercap-graphical
```

### 启动混杂模式

配置  ettercap 之前先启动网卡 eth0 的混杂模式。

```
ifconfig eth0 promisc
```

取消混杂模式可以用：`ifconfig eth0 -promisc`.

### 开始 arp 欺骗

接着在 root 用户下输入 `sudo ettercap -G` 启动 ettercap 图形界面：，G 指的是 GUI。

![启动ettercap图形界面](https://gallery.yxzi.xyz/galleries/2022/06/13/启动ettercap图形界面.png)

开启中间人嗅探，并选择网卡**eth0**

![开启中间人嗅探](https://gallery.yxzi.xyz/galleries/2022/06/14/%E5%BC%80%E5%90%AF%E4%B8%AD%E9%97%B4%E4%BA%BA%E5%97%85%E6%8E%A2.png)

搜索并显示主机列表，可以看到两台主机的 IP，分别是 Window Sever 2012 的 IP **192.168.10.66** 和 Windows 7  的 IP**192.168.10.200**。

![搜索主机列表](https://gallery.yxzi.xyz/galleries/2022/06/14/%E6%90%9C%E7%B4%A2%E4%B8%BB%E6%9C%BA%E5%88%97%E8%A1%A8.png)

分别将 **192.168.10.66** 到 Target 1、 **192.168.10.200** 到 Target 2。

![添加目标](https://gallery.yxzi.xyz/galleries/2022/06/14/%E6%B7%BB%E5%8A%A0%E7%9B%AE%E6%A0%87.png)

点击右上角小地球，选择 **Arp posisoning**，开启 Arp 欺骗。

![开启arp](https://gallery.yxzi.xyz/galleries/2022/06/14/%E5%BC%80%E5%90%AFar.png)

点击 OK 即可。

![arp开启2](https://gallery.yxzi.xyz/galleries/2022/06/14/arp%E5%BC%80%E5%90%AF2.png)

### 捕获数据包

通过 `sudo wireshark`打开 wireshark（3.6.0），当然，也可以才软件列表中打开，区别在于：命令方式打开是亮色的主题（类似于下面），软件列表中打开是暗色主题。

![打开wireshark](https://gallery.yxzi.xyz/galleries/2022/06/14/%E6%89%93%E5%BC%80wireshark.png)

打开捕获选项，勾选混杂模式，选择网卡**eth0**，开始。

![选择eth0](https://gallery.yxzi.xyz/galleries/2022/06/14/%E9%80%89%E6%8B%A9eth0.png)

开始捕获，处于红色状态就是处于捕获状态。

![image-20220614192930060](https://gallery.yxzi.xyz/galleries/2022/06/14/%E5%BC%80%E5%A7%8B%E6%8D%95%E8%8E%B71.png)

开启捕获之后，程序的中间部分会出现源源不断的数据包，这些都是两台目标主机所接收的数据包，现在都已经被 kali 这个中间人捕获到了。

![数据包](https://gallery.yxzi.xyz/galleries/2022/06/14/%E6%95%B0%E6%8D%AE%E5%8C%85.png)

### Windows 7 登录到 FTP

接着，启动 Windows 7，打开浏览器，在地址栏输入`ftp://192.168.10.66`，输入用户名和密码，登录到  Window Sever 2012 上的 FTP 站点。

![win访问ftp](https://gallery.yxzi.xyz/galleries/2022/06/14/win%E8%AE%BF%E9%97%AEft.png)

登录成功之后回到 wireshark，停止捕获，因此数据包太多了，因此需要在过滤器中输入ftp，来过滤非 ftp 协议的数据包。

![image-20220614194852718](https://gallery.yxzi.xyz/galleries/2022/06/14/%E6%88%90%E5%8A%9F%E6%8D%95%E8%8E%B7.png)

可以看到，kali 已经成功捕获到了用户名和密码！并且可以看到数据包的源 IP 以及目的 IP.

## Arpspoof + Wireshark 进行 arp 欺骗

启动 kali，安装 arpspoof 和 wireshark，如果有的话无需安装。

```sh
sudo apt-get install dsniff
sudo apt-get install wireshark
```

一般来说，此处可以进行 arp 断网攻击，但因为某些原因，导致这里的环境无法进行演示。

### 开启 arp 欺骗

先开启 kali 的路由转发功能：

```
echo 1 > /proc/sys/net/ipv4/ip_forward
```

原本的 0 代表着不开启路由转发功能。

开启 arp 欺骗，此时的受害机 **192.168.10.200** 是可以正常上网的，但**受害机所有的网络请求包都会流经攻击者**。

```sh
arpspoof -i eth0 -t 192.168.10.200 192.168.10.1
```

### 捕获数据包

因为上面已经演示过了，因此这里只作简单的文字描述。

1. 启动 wireshark 并选择刚刚进行 arp 欺骗时所选择的网卡 eth0.
2. 左上角点击开始捕获，启动 Windows 7，使用`ftp://192.168.10.66:21`访问 FTP 站点并输入账号密码，成功登录后返回 kali。
3. 暂停 wireshark 捕获数据包，并过滤除了 ftp 之外的所有数据包。
4. 找到含有用户名和密码的数据包。

![抓包成功2](https://gallery.yxzi.xyz/galleries/2022/06/15/%E6%8A%93%E5%8C%85%E6%88%90%E5%8A%9F2.png)

可以看到其中有两个数据包存储着我们刚刚输入的**明文用户名、密码**。

至此，我们成功模拟了一次 arp 欺骗攻击，并成功**嗅探目标主机的网络数据包**。