---
title: MySQL COUNT
date: 2022-04-25 6:00:00
categories:
        - 数据库
tags:
        - SQL
        - 函数
        - MySQL
        - 分组函数
        - 学习笔记
---

# COUNT

## COUNT(\*)

统计表的行数，在统计结果的时候，不会忽略字段值为 NULL 的行。

这种写法用的比较多，因为在一般的存储引擎下，`COUNT(*)`的效率通常比较高。

## COUNT(1)

忽略所有字段，1 表示一个固定值，也可以用 COUNT(2)、COUNT(3) 代替，在统计结果的时候，不会忽略字段值为 NULL 的行。

## COUNT(字段名)

统计指定字段名的值有多少行，字段值为 NULL 的行会被忽略统计。

## COUNT(DISTINCT 字段名)

统计指定字段名的值有多少行，，字段值为 NULL 或重复的行会被忽略统计。
