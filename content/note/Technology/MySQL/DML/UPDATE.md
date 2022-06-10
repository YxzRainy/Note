---
title: MySQL UPDATE
date: 2022-04-23
categories:
        - 数据库
tags:
        - SQL
        - DML
        - MySQL
        - Note
---

# UPDATE

用于修改或更新数据库中表的数据。

### 修改表中的数据

```MySQL
mysql> update rainy set name='zhu'where id=1;
Query OK, 2 rows affected (0.03 sec)
Rows matched: 2  Changed: 2  Warnings: 0
```

修改后重新查询表中的数据：

```MySQL
mysql> select * from rainy;
+------+------+
| id   | name |
+------+------+
|    1 | zhu  |
|    1 | zhu  |
+------+------+
2 rows in set (0.00 sec)
```
