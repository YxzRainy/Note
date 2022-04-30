---
title: 提示 hosts 不同步
date: 2022-04-20 6:00:00 9
updated: 2022-04-20 6:00:00
categories:
        - 软件使用
tags:
        - 学习笔记
        - PHPStudy
---

# 提示 hosts 不同步

大概率是**C:\Windows\System32\drivers\etc** 路径中的 hosts 出现了一下问题：

- hosts 文件的后缀名不对，hosts 文件没有后缀名。
- hosts 中的内容为空。
- hosts 内容底部没有添加网站域名

```yaml
# Copyright (c) 1993-1999 Microsoft Corp.

# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.

# This file contains the mappings of IP addresses to host names. Each

# entry should be kept on an individual line. The IP address should

# be placed in the first column followed by the corresponding host name.

# The IP address and the host name should be separated by at least one

# space.

# Additionally, comments (such as these) may be inserted on individual

# lines or following the machine name denoted by a '#' symbol.

# For example:

# 102.54.94.97 rhino.acme.com # source server

# 38.25.63.10 x.acme.com # x client host

# 网站域名
127.0.0.1 localhost

127.0.0.1 a.com
```

