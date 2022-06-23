---
title: MySQL SHOW
date: 2022-04-23
categories:
        - 数据库
tags:
        - SQL
        - MySQL

---

# SHOW

## SHOW ENGINES

查看 MySQL 支持的存储引擎。

```sql
SHOW ENGINES;
```

```sql
# 显示二进制文件以及文件大小（需要开启二进制日志记录功能）
SHOW {BINARY | MASTER} LOGS

# 显示二进制文件的执行过程
SHOW BINLOG EVENTS [IN 'log_name'] [FROM pos] [LIMIT [offset,] row_count]

# 显示MySQL当前支持哪些字符集
SHOW CHARACTER SET [like_or_where]

# 显示MySQL支持字符集的排序规则
SHOW COLLATION [like_or_where]

# 显示表的列信息（等同于DESC，需要先创建表）
SHOW [FULL] COLUMNS FROM tbl_name [FROM db_name] [like_or_where]

# 显示已经创建的库，创建时的语句
SHOW CREATE DATABASE db_name

# 显示已经创建的事件，创建时的语句
SHOW CREATE EVENT event_name

# 显示已经创建的函数，创建时的语句
SHOW CREATE FUNCTION func_name

# 显示已经创建的存储过程，创建时的语句
SHOW CREATE PROCEDURE proc_name

# 显示已经创建的表，创建时的语句
SHOW CREATE TABLE tbl_name

# 显示已经创建的触发器，创建时的语句
SHOW CREATE TRIGGER trigger_name

# 显示已经创建的视图，创建时的语句
SHOW CREATE VIEW view_name

# 显示mysql中所有数据库的名称
SHOW DATABASES [like_or_where]

# 显示存储引擎的详细信息
SHOW ENGINE engine_name {STATUS | MUTEX}

# 显示数据库支持的存储引擎和默认存储引擎
SHOW [STORAGE] ENGINES

# 显示最后一个执行语句所产生的错误信息
SHOW ERRORS [LIMIT [offset,] row_count]

# 显示事件信息
SHOW EVENTS

# 服务器内部调试，显示一个指定存储的内部实现的表示形式过程
SHOW FUNCTION CODE func_name

# 显示存储函数信息（需要先创建存储函数）
SHOW FUNCTION STATUS [like_or_where]

# 显示指定用户拥有的权限
SHOW GRANTS FOR user

# 显示表索引信息（需要先创建索引）
SHOW INDEX FROM tbl_name [FROM db_name]

# 显示Master当前正在使用的二进制信息
SHOW MASTER STATUS

# 列举在表缓存中当前被打开的非TEMPORARY表
SHOW OPEN TABLES [FROM db_name] [like_or_where]

# 显示MySQL插件信息
SHOW PLUGINS

# 服务器内部调试，显示一个指定存储的内部实现的表示形式过程
SHOW PROCEDURE CODE proc_name

# 显示存储过程信息（需要先创建存储过程）
SHOW PROCEDURE STATUS [like_or_where]

# 显示MySQL所支持的所有权限，及权限可操作的对象
SHOW PRIVILEGES

# 显示系统中正在运行的所有进程，普通用户只能查看自己的进行信息
SHOW [FULL] PROCESSLIST

# 显示当前会话执行语句资源使用情况
SHOW PROFILE [types] [FOR QUERY n] [OFFSET n] [LIMIT n]

# 显示当前会话执行语句资源使用情况
SHOW PROFILES

# 显示relaylog事件信息（需要先做主从复制）
SHOW RELAYLOG EVENTS [IN 'log_name'] [FROM pos] [LIMIT [offset,] row_count]

# 显示Master主机上已注册的复制主机列表（需要先做主从复制）
SHOW SLAVE HOSTS

# 显示Slave主机状态信息（需要先做主从复制）
SHOW SLAVE STATUS [FOR CHANNEL channel]

# 显示MySQL状态信息
SHOW [GLOBAL | SESSION] STATUS [like_or_where]

# 显示表属性信息
SHOW TABLE STATUS [FROM db_name] [like_or_where]

# 显示当前数据库中所有表的名称
SHOW [FULL] TABLES [FROM db_name] [like_or_where]

# 显示触发器信息（需要先创建触发器）
SHOW TRIGGERS [FROM db_name] [like_or_where]

# 显示MySQL变量信息
SHOW [GLOBAL | SESSION] VARIABLES [like_or_where]

# 显示最后一个执行语句所产生的警告信息
SHOW WARNINGS [LIMIT [offset,] row_count]
```
