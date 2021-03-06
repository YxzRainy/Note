---
title: Java 基础
date: 2021-10-03
categories:
        - Note
tags:
        - Java
---

# 基础

## 类、对象 、属性、封装

类可以理解成对象的集合。比如 class person，定义一个人物类，这是一个抽象的概念。

对象可以理解为类中的一个元素，比如利用 person 这个人物类 new 一个“小明”，这个小明，就是一个具体的东西。

赋予这个小明一些属性，比如眼睛，鼻子，身高，这就是这个对象的属性。

赋予小明会编程、会跳舞唱歌的能力，这些就是这个对象的方法，你可以利用（调用）这些方法，让小明这个对象帮你写代码、唱首歌或跳支舞。

至于封装，我的理解是将内部的代码封装起来，然后提供一个接口供我们访问。比如电脑主机的开机键就是一个接口，我们点击开机键，就是调用这个电脑的一个接口，至于开机的内部过程或操作细节由电脑自行完成，我们无法干涉。

至于继承，还不知道。

## void 的作用

void 表示一个方法中没有 return 任何数据类型，如果方法中 return 了某种数据类型，那么 void 会被替换为这种数据类型。

```java
void Show1() {
    int a = 123;
}

int Show2() {
    int a = 123;
    return a;
}
```

public、protected、default（什么都不写）、private，表示访问控制的权限

```java
private void Show1() {
    int a = 123;
}

//   相当于 default int Show2()
int Show2() {
    int a = 123;
    return a;
}
```
