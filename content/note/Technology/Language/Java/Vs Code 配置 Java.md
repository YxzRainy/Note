---
title: Vs Code 配置 Java
date: 2021-10-03
categories:
        - 编程语言
tags:
        - Java
        - Vs Code
        - Note
---

# Vs Code 配置 Java

## 安装 vscode

## 安装 [JDK](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html)

## 配置系统环境变量

### 打开系统系统环境变量配置界面

1. 右击此电脑
2. 属性
3. 高级系统设置

4. 高级选项卡

5. 环境变量

6. 系统变量

### 新建 JAVA_HOME 变量

1. 变量名：JAVA_HOME。
2. 值为：Java JDK 的安装路径。
3. 确定

### 找到已存在的名为 Path 的变量

1. 编辑
2. 新建
3. 输入：**%JAVA_HOME%\jre\bin**，确定
4. 再新建，输入：**%JAVA_HOME%\bin**，确定
5. 保存即可

### 新建 Classpath 变量

1. 变量名：Classpath，

2. 值为：**.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;**

### 测试环境配置是否成功

快捷键 Win + R，搜索 cmd 并 Enter，然后在命令行输入**java**以及**javac**.

## 安装 vs code 扩展

java extension pack。

### 以下是自动安装的

Test Runner for Java。

Debugger for Java，调试 Java 代码。

Extension Pack for Java。

Maven for Java

## 创建一个 java 项目并运行

1. 接下来打开 Vs Code，快捷键 Ctrl + shift + p，然后输入**create**，选择**No build tools**.
2. 选择项目位置
3. 在顶部对话框输入项目名称
