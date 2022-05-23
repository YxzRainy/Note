---
title: MySQL INSERT
date: 2022-04-23 6:00:00
categories:
        - 数据库
tags:
        - SQL
        - DML
        - MySQL
        - 学习笔记
---

# INSERT

用于向数据库中的表插入数据。

## 插入数据

使用`insert into TableName;`来插入一些数据，TableName 是要插入数据的表的名称。

```MySQL
mysql> insert into rainy (id,name) values(1,'su');
Query OK, 1 row affected (0.00 sec)
```

我们插入数据后重新查询表中的数据：

```MySQL
mysql> select * from rainy;
+------+------+
| id   | name |
+------+------+
|    1 | su   |
|    1 | su   |
+------+------+
2 rows in set (0.00 sec)
```
