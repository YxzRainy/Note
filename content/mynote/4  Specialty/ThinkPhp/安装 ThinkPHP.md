---
title: 安装 ThinkPHP
date: 2021-10-22 6:00:00
updated: 2021-10-22 17:58:00
categories:
        - PHP 框架
tags:
        - PHP
        - ThinkPHP
        - 学习笔记
---

# 安装 ThinkPHP

## 安装 Composer

在 Windows 中，你需要下载并运行 [Composer](https://getcomposer.org/Composer-Setup.exe)

安装 composer 时开启 openssl 配置，目录为（php.ini 配置文件的目录中的php.exe）

比如 D:\phpstudy_pro\Extensions\php\php7.3.4nts



### 第一次报错

```
  [Composer\Downloader\TransportException]
  curl error 28 while downloading https://repo.packagist.org/packages.json: Timeout was reached
```

解决方法：修改全局文件(推荐) 
 composer config -g repo.packagist composer https://packagist.phpcomposer.com

### 第二次报错

```
 [InvalidArgumentException]
  Could not find package topthink/think with version 6.0.x-dev.
```

切换 composer 镜像地址：阿里云镜像

composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

## 安装 Thinkphp 开发版

我们这里下载开发版的 [ThinkPhp](https://www.kancloud.cn/manual/thinkphp6_0/1037479)

composer create-project topthink/think=6.0.x-dev tp


在上一步创建的 tp 文件夹中执行 php think run（确保当前目录有 think 文件）

最后在浏览器输入 http://localhost:8000/