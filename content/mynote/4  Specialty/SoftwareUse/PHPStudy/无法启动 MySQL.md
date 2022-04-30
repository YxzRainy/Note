---
title: 无法启动 MySQL
date: 2022-04-20 6:00:00 9
updated: 2022-04-20 6:00:00
categories:
        - 软件使用
tags:
        - 学习笔记
        - PHPStudy
---

# 无法启动 MySQL

打开 PHPStudy，启动 MySQL 失败，但用 CMD 可以正常启动MySQL。

## 管理员运行 CMD

```
net stop mysql
sc delete mysql
```

提示`[SC] DeleteService 成功`后，重新打开 PHPStudy，会发现 MySQL 可以正常启动了。