---
title: Linux 命令
date: 2021-10-22
categories:
        - 服务器
tags:
        - Linux
---

# Linux 命令

## 重置 root 用户密码

`sudo passwd root`

## 列出已安装的模块

`sudo apt list --installed`

## 查看 Linux 版本信息

`lsb_release -a`

## 修改环境变量

`vim /etc/profile`

`vim /etc/environment`：该方法是修改系统环境配置文件，需要管理员权限或者对该文件的写入权限：

修改环境变量后使其立即生效

```
source /etc/profile
source /etc/environment
```



## chmod

