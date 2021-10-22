---
title: SHH 密钥登录
date: 2021-10-22 6:00:00
updated: 2021-10-22 17:52:00
categories:
        - 服务器
tags:
        - Linux
        - SSH
        - 服务器
        - 宝塔
        - 网络安全
        - 学习笔记
---
# SHH 密钥登录

## 用 xshell 生成密钥

新建用户密钥生成向导

输入密钥长度，比如 2024，下一步

输入密钥名称、密码，下一步

将公钥保存为文件，完成

## 将公钥上传到服务器

我这里用的服务器是 Linux，以及宝塔面板。

进入服务器的**/root/.ssh**路径，在这个文件夹中新建**authorized_keys**文件，并将之前保存的公钥中的文件内容复制到新建的**authorized_keys**文件中。

## 配置 sshd_config

找到服务器下的**/etc/ssh/sshd_config**，点击编辑。

核对文件中的内容是否与一下内容一致，不一致请作出对应的的修改。

注意，一下内容前面的注释符号**#**请删掉。

```yaml
AuthorizedKeysFile .ssh/authorized_keys
PasswordAuthentication no
```

