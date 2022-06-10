---
title: 启动 MySQL
date: 2022-04-21
categories:
        - 数据库
tags:
        - SQL
        - MySQL
        - Note
---

# 启动 MySQL

## 使用命令行

Window 操作系统中 Ctrl + Alt 打开 CMD，通过下面两条命令启动或关闭 MySQL

```sql
net start mysql # 启动 MySQL
net stop mysql # 关闭 MySQL
```

### 提示服务名无效

```sql
C:\Windows\system32>net start mysql
服务名无效。

请键入 NET HELPMSG 2185 以获得更多的帮助。
```

在 MySQL 安装目录下的 bin 目录下打开管理员的 cmd，并输入命令**.\mysqld.exe install**，回车即可：

```sql
D:\AppInstallPath\PhpStudy\phpstudy_pro\Extensions\MySQL5.7.26\bin>.\mysqld.exe install
Service successfully installed.
```

## 使用 PHPStudy

首页，直接启动 MySQL 即可，如果提示端口被占用，修改端口号即可。

## 登录服务端

### 隐藏密码登录

```sql
MySQL -h localhost -P 3306 -u root -p
```

`-h`表示主机。

`-P`表示端口号。

`-u`表示用户名。

`-p`表示密码。

输入命令后 Enter。

```sql
MySQL -h localhost -P 3306 -u root -p
Enter password:
```

输入密码，登录成功。

```sql
MySQL -h localhost -P 3306 -u root -p
Enter password: ******
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3
Server version: 5.7.26 MySQL Community Server (GPL)
.......
```

### 显示密码登录

当然，我们也可以直接以显示密码的方式登录：

```sql
MySQL -h localhost -P 3306 -u root -p123456
```

上面的命令可以简写为：

```sql
MySQL -u root -p123456
```

注意，这里的`-p123456`是不能有空格的。

```sql
>MySQL -h localhost -P 3306 -u root -p123456
MySQL: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 4
Server version: 5.7.26 MySQL Community Server (GPL)
```

MySQL 会提示我们用这种方式登录服务端是不安全的，所以还是建议使用第一种方式登录服务端。

## 退出服务端

使用`exit`命令或者 Ctrl + C。

```sql
mysql> exit
Bye
```
