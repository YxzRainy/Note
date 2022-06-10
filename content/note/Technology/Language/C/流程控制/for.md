---
title: C for
date: 2022-04-03
categories:
        - 编程语言
tags:
        - C
        - 循环控制
        - Note
---

# for

执行 1，判断 2，当 2 为 true 时则执行 A，之后再执行 3，此后一直判断 2，直到 2 为 false 时并结束循环；如果 2 为 false，则直接结束循环。

```c
for(1; 2; 3)
{
    A;
}
```

**其中：**

1 只执行一次。

3 执行完后才意味着一次 for 循环执行完毕。

3 执行完后一定会再执行一次 2，且不管表达式 2 的结果为 true 或 false 都会执行一次 2。

```c
#include <stdio.h>
int main(void) {
	int sum = 0;
	for (int i = 1;i < 10;i++)
	  printf("%d\n", i);
	//0 - 10 的自然数。
}
```

#### 1 - 10 所有奇数之和

```c
#include <stdio.h>
int main(void) {
	int sum = 0;
	for (int i = 1;i < 10;i += 2)
	  sum += i;
	printf("%d\n", sum);
}
```

#### 1 - 10 所有能被 3 整除的数的和

```c
#include <stdio.h>
int main(void) {
	int sum = 0;
	for (int i = 0;i < 10;i++) {
		if (i % 3 == 0) {
			sum += i;
		}
	}
	printf("%d\n", sum);
}
```

#### 1 - 10 所有奇数的个数

```c
#include <stdio.h>
int main(void) {
	int num = 0;
	for (int i = 1;i < 10;i += 2)
	        num++;
	printf("奇数个数 = %d\n", num);
}
```

#### 1 - 10 所有奇数的平均值

```c
#include <stdio.h>
int main(void) {
	int sum = 0;
	int num = 0;
	int mean = 0;
	for (int i = 1;i < 10;i += 2) {
		sum += i;
		num++;
		mean = sum / num;
	}
	printf("奇数之和 = %d\n", sum);
	printf("奇数个数 = %d\n", num);
	printf("平均值= %d\n", mean);
}
```

#### 1 - 10 所有奇数和偶数的和

```c
#include <stdio.h>
int main(void) {
	int OddSum = 0;
	int EvenSum = 0;
	for (int i = 1;i < 10;i += 2) {
		OddSum += i;
		printf("%d\n", i);
	}
	for (int j = 0;j < 10;j += 2) {
		EvenSum += j;
		printf("%d\n", j);
	}
	printf("奇数和 = %d\n", OddSum);
	printf("偶数和 = %d\n", EvenSum);
}
```

### 强制类型转换

将表达式的值转换为指定的数据类型。

```c
(指定的数据类型)(表达式)
```

#### 降序

```c
#include <stdio.h>
int main(void) {
	float sum = 1;
	for (int i = 1;i < 10;i++) {
		//sum = 1 / (float)(i);//使用强制类型转换
		sum = 1.0 / i;
		//这样也可以
		printf("%d\n", sum);
	}
	printf("和 = %f\n", sum);
	//float 必须用 %f 输出
}
```

### 浮点数的储存问题

float 和 double 类型的数据不能保证可以精确的存储某个小数，也就是你将 5.5 赋给 x，此时变量 x 中，实际储存的可能是 5.49999999999，即 x 中可能储存的是一个近似值。

```c
//有一个浮点型变量 x，如何判断 x 的值是否为零？
float x = 0;
if (| x - 0.000001 | < 0.000001)//该行有错，2021年2月8日17:20:53 无法解决
printf("是零\n"); else
        printf("不是零\n");
//循环中更新的变量不能定义成浮点型（i++ 或 ++i）
for (float i = 1;i < 1000;i++)
    printf("%0.99f\n",i);
//该行有可能会返回近似值
```

### for 循环嵌套

执行 1，判断 2，2 为 true，执行 4，判断 5，5 为 true，执行 A，再执行 6，判断 5，5 为 false，执行 3，判断 2，2 为 false，执行 B。

```c
#include <stdio.h>
int main(void) {
	for (1; 2; 3)
	        for (4; 5; 6)
	            A;
	B;
}
```

```c
#include <stdio.h>
int main(void) {
	int i, j;
	for (i = 0; i < 10; i++)//该循环执行了 10 次
	for (j = 0; j < 10; j++)//该循环被外层循环执行了 10 次
	printf("内层 %d\n", j);
	//每次循环返回 0 - 9
	printf("i = %d\n", i);
	//最终 i 为 10
	printf("j = %d\n", j);
	//最终 j 为 10
}
```
