---
title: C scanf
date: 2022-01-03
categories:
        - Note
tags:
        - C
---

# scanf

通过键盘将数据输入到变量中。

将从键盘输入的字符转化为输入控制符所规定类型的数据，然后存入以输入参数的值为地址的变量中。

使用 scanf 之前先使用 printf 提示用户以什么样的方式输入内容。

scanf 中使用非输入控制符时，尽量使用空格，不建议使用其他的符号。

#### scanf("输入控制符",输入参数)

```c
int i;
scanf("%d",&i);//i& 表示变量 i 的地址，& 是一个取地址符，也就是将输入的整数类型的值放入到变量 i 中。
printf("%d\n",i);
```

#### scanf("非输入控制符 输入控制符",输入参数)

```c
int i;
scanf("z%d",&i);//非输入控制符 z （z 可以是任意值）必须同输入控制符一起输入 。
printf("i = %d\n",i);
```
