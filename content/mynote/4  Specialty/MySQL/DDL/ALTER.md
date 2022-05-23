---
title: MySQL ALTER
date: 2022-04-22 6:00:00
categories:
        - 数据库
tags:
        - SQL
        - DDL
        - MySQL
        - 学习笔记
---

# ALTER

修改数据表名或者修改数据表的字段.

## 修改表名

ALTER TABLE 旧表名 RENAME 新表名。

```mysql
ALTER TABLE rainy RENAME Su;
```

## 修改字段

ALTER TABLE 表名 CHANGE 旧字段名 新字段名 新数据类型。

```mysql
ALTER TABLE su CHANGE rainy apple VARCHAR(20);
```

## 修改字段的排列位置

ALTER TABLE 表名 MODIFY 字段名 1 VARCHAR(20) AFTER 字段名 2;

```MySQL
ALTER TABLE su MODIFY rainy VARCHAR(20) AFTER two;
```

删除字段
