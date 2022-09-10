---
title: SSH 密钥
date: 2021-10-22
categories:
        - 服务器
tags:
        - Linux
---

# SSH 密钥

**authorized_key：** SSH 登录本机时的公钥，它必须处于 `/root/.ssh`目录中。这个文件主要是允许哪个主机可以通过私钥免密访问，就会把那个主机的公钥填到这个文件里面。

**id_rsa.pub：** SSH 公钥。

**id_rsa：**SSH 登录服务器时的私钥，在服务器上经过 rsa 算法生成的私钥，与公钥是一对的密钥对，用于链接存放着公钥**authorized_key**的服务器。

当然，我们也可以不用宝塔为我们生成的密钥对，我这里是使用的腾讯云生成的密钥对。



进入服务器的**/root/.ssh**路径，在这个文件夹中新建**authorized_keys**文件，并将之前保存的公钥中的文件内容复制到新建的**authorized_keys**文件中。