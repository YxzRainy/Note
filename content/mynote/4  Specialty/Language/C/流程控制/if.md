---
title: C if
date: 2022-04-03 6:00:00
categories:
        - 编程语言
tags:
        - C
        - 选择控制
        - 学习笔记
---

## if

在程序当中,并不是所有的语句都是自上而下依次的执行，有时候会依据条件来选择性的执行某段代码，这个时候就需要用到 if 语句。

如果 1 为真，则执行 A；如果 1 为假，则不执行 A。

```c
#include <stdio.h>
int main(void) {
	if (1)
	        A；
}
```

```c
#include <stdio.h>
int main(void) {
	if (2 > 1)
	        printf("if 语句为 true\n");
}
```

if 语句默认只能控制 A，不能控制 B（即无论 1 为 true 还是 false， B 都会执行）。

```c
#include <stdio.h>
int main(void) {
	if (1)
	        A;
	B;
}
```

```c
#include <stdio.h>
int main(void) {
	if (2 > 1)
	        printf("被 if 语句控制\n");
	printf("不被 if 语句控制\n");
}
```

if 语句默认只能控制一个 A，如果想控制多个语句（A 和 B），就必须将 A 和 B 用 {} 括起来。

```c
#include <stdio.h>
int main(void) {
	if(1) {
		A;
		B;
	}
}
```

```c
#include <stdio.h>
int main(void) {
	if (2 > 1) {
		printf("被 if 语句控制\n");
		printf("被 if 语句控制\n");
	}
}
```

### if else

if else 语句会判定 1 的真假，表达式为 true 则执行 A 和 B；1 为 false 则执行 C；D 为必须执行的语句（D 不受 if 语句控制）。

```c
#include <stdio.h>
int main(void) {
	if (1) {
		A;
		B;
	} else
	        C;
	D;
}
```

```c
#include <stdio.h>
int main(void) {
	if (4 > 2) {
		printf("正确\n");
		printf("二次确认也正确\n");
	} else
	        printf("不正确\n");
	printf("必定会执行\n");
}
```

### if else 连续

使用 if else 语句连续判断 1、2、4，若某个表达式为 true 则返回其对应的 A、B、C、D，若 1、2、3 全部为 false，则返回 D。

```c
#include <stdio.h>
int main(void) {
	if (1)
	        printf("A\n"); else if (2)
	        printf("B\n"); else if (3)
	        printf("C\n"); else
	        printf("D\n");
}
```

```c
#include <stdio.h>
int main(void) {
	if (4 == 2)
	        printf("表达式一为假\n"); else if (2 == 5)
	        printf("表达式二也为假\n"); else if (3 == 7)
	        printf("表达式三还是为假\n"); else
	        printf("三个表达式全部为假\n");
}
```

if else 被分割

```c
#include <stdio.h>
int main(void) {
	if (4 == 2)
	        printf("不正确\n"); else if (2 == 5)
	        printf("也不正确\n");
	printf("程序会因为该行报错\n");
	//该行将原本完整的 if else 语句分割了，导致下面的 if 语句不完整。 else if (3 == 7)
	        printf("还是不正确\n"); else
	        printf("全部错误\n");
}
```

#### 互换两个值

```c
#include <stdio.h>
int main(void) {
	int i = 3;
	int j = 5;
	int t;
	//定义临时的变量 t。
	t = i;
	//将变量 i 的值赋给变量 t，作为变量 i 值的备份。
	i = j;
	//将变量 j 的值赋给变量 i，这时的变量 i 和变量 t 的值相同。
	j = t;
	//将变量 t 中的值，也就是 i 的值赋给变量 j。
	printf("i = %d\nj = %d\n", i, j);
}
```

#### 返回最大值

```c
#include <stdio.h>
int main(void) {
	int a, b, c;
	printf("请输入三个数：");
	scanf("%d %d %d", &a, &b, &c);
	if (a == b || b == c || c == a)
	        printf("请勿输入相同的值！\n"); else {
		if (a > b && a > c)
		            printf("a 最大!\n"); else if (b > a && b > c)
		            printf("b 最大!\n"); else if (c > a && c > b)
		            printf("c 最大!\n");
	}
}
```

#### 降序

```c
#include <stdio.h>
int main(void) {
	int a, b, c, t;
	printf("请输入三个值：\n");
	scanf("%d %d %d", &a, &b, &c);
	if (b > a) {
		t = a;
		a = b;
		// 将 b 赋给 a，使 b 代替 a 最大的位置
		b = t;
		//使 a 代替 b 中间的位置
	}
	if (c > a) {
		t = a;
		a = c;
		// 将 c 赋给 a，使 c 代替 a 最大的位置
		c = t;
		// 使 a 代替 c 最小的位置
	}
	if (c > b) {
		t = b;
		b = c;
		//将 c 赋给 b，使 c 代替 b 中间的位置
		c = t;
		//使 b 代替 c 最小的位置
	}
	printf("最大值：%d\n中间值：%d\n最小值：%d\n", a, b, c);
	//默认为 a 最大，b 次之，c 最小；比较三个值大小使得 a、b、c，交换最大、中间、最小的位置。
}
```
