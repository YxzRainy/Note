---
title: 无法启动 MySQL
date: 2022-04-20
categories:
        - 软件使用
tags:

        - PHPStudy
---

# 无法启动 MySQL

## 错误一

打开 PHPStudy，启动 MySQL 失败，但用 CMD 可以正常启动 MySQL。

### 5.7.26 解决方案

管理员运行 CMD 输入：

```
net stop mysql
sc delete mysql
```

提示`[SC] DeleteService 成功`后，重新打开 PHPStudy，会发现 MySQL 可以正常启动了。

## 错误二

提示错误信息：

```
1045 access denied for user 'root'@'localhost' using password yes
```

### 5.7.26 解决方案

- 停用 MySQL 服务 没启动的可以省略

     ```sh
     net stop mysql
     ```

- 找到 MySQL 安装路径下的 **my.ini**

- 打开 my.ini 找到 [mysqld] 然后在下面加上 **skip_grant_tables**，表示启动 MySQL 服务的时候跳过权限表认证

- 启动数据库修改密码

- 刷新权限 flush privileges

- 再将的**my.ini**里的**skip_grant_tables** 去掉，因为启动 MySQL 服务的时候不能让它跳过权限表认证

- 最后重启 MySQL 即可。
