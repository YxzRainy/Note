---
title: C switch
date: 2022-01-03 6:00:00
updated: 2022-01-03 6:00:00
categories:
        - 编程技术
tags:
        - C
        - 学习笔记
---

# switch

它是一种选择控制语句。

switch 是选择控制语句，而不是循环控制语句，如果在 switch 中出现了 berak 语句，

该语句的功能只是退出 switch 语句转去执行它下面的语句，

在 switch 中，出现 continue 是错误的，除非当前 switch 在 for 或 while 之中。

当我们使用它时，它会去寻找与表达式结果所匹配的子表达式（case），并执行子表达式后面的所有语句，直到遇到 break 停止执行。

我们来看下面这个程序：

```C
#include <stdio.h>

int main () {
    char fraction ;
	printf("请输入您的等级：");
	scanf("%c", &fraction);
	// 测试请键入 A 
	switch(fraction) {
		case 'A' :
			printf("很棒！\n" );
		case 'B' :
			printf("还不错哦\n" );
		case 'C' :
			printf("做得好\n" );
			break;
		case 'D' :
			printf("您通过了\n" );
			break;
		case 'F' :
			printf("最好再试一下\n" );
			break;
		default :
			printf("无效的成绩\n" );
	}
	printf("您的等级是 %c\n", fraction);

	return 0;

}
```

当我们键入 A 时，会发现程序不仅仅执行了与主表达式匹配的子表达式 A 后面的代码块，连着后面的子表达式 B 和 C 后面的代码块也一起执行了。

```bash
请输入您的等级：A
很棒！
还不错哦
做得好
您的等级是 A
```

直到遇到了`printf("做得好\n" );`后面的`break;`，程序才停止执行。

```c
printf("做得好\n" );
break;
```

原因是因为程序是从上往下执行的，而`case`后面的子表达式只是一个入口，而当程序找到入口后，其他的入口就在进行判断了（相当于入口不存在了），因此，程序会继续执行下面的语句，直到遇到`break`终止整个程序。
