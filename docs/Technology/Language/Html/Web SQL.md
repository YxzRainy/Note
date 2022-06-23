---
title: HTML Web SQL
date: 2022-03-28
categories:
        - Note
tags:
        - 前端
        - HTML
---

# Web SQL

一种简单的存在服务器中的数据库，运行在javascript脚本中，其数据储存在计算机Application中Web SQL中

## openDatabase()

这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。

五个参数：

1. 数据库名称
2. 版本号
3. 描述文本
4. 数据库大小
5. 创建回调

第五个参数，创建回调会在创建数据库后被调用。

## transaction()

这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。

## executeSql()

这个方法用于执行实际的 SQL 语句。

## 实例

**HTML**

```HTML
<div id="status" name="status">状态信息</div>
```

**JS**

```js
var myDb = openDatabase('RainysDb', '1.0', 'Test DB', 2 * 1024 * 1024);
var msg;
var eid = 3;
var ename = '哈哈哈';

myDb.transaction(function (tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS RainysDb (id unique, webInfo)');
	tx.executeSql('INSERT INTO RainysDb (id, webInfo) VALUES (1, "自由无拘无束")');
	tx.executeSql('INSERT INTO RainysDb (id, webInfo) VALUES (2, "yxzi.xyz")');
	tx.executeSql('INSERT INTO RainysDb (id, webInfo) VALUES (?, ?)', [eid, ename]);
	msg = '<p>数据表已创建，且插入了三条数据。</p>';
	document.querySelector('#status').innerHTML = msg;
});

myDb.transaction(function (tx) {
	tx.executeSql(
		'SELECT * FROM RainysDb',
		[],
		function (tx, results) {
			var len = results.rows.length,
				i;
			msg = '<p>查询记录条数: ' + len + '</p>';
			document.querySelector('#status').innerHTML += msg;

			for (i = 0; i < len; i++) {
				msg = '<p><b>' + results.rows.item(i).webInfo + '</b></p>';
				document.querySelector('#status').innerHTML += msg;
			}
		},
		null
	);
});

```

