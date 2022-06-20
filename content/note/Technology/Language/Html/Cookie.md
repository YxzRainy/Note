---
title: HTML cookie
date: 2022-05-12
categories:
        - Note
tags:
        - 前端
        - HTML
        - 浏览器
        - 
---

# cookie

cookie 生命期为只在设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。 存放数据大小为 4K 左右，且有个数限制（各浏览器不同），一般不能超过 20 个。

Cookie总是保存在客户端中，按在客户端中的存储位置，可分为内存Cookie和硬盘Cookie。内存Cookie由浏览器维护，保存在内存中，浏览器关闭后就消失了，其存在时间是短暂的。硬盘Cookie保存在硬盘里，有一个过期时间，除非用户手工清理或到了过期时间，硬盘Cookie不会被删除，其存在时间是长期的。所以，按存在时间，可分为非持久Cookie和持久Cookie。

- 非持久 Cookie：是指没有设在 cookie 的 Expires（有效期）的属性，此时 cookie 将停留在客户端的内存中。
- 持久名 Cookie：是指设置了cookie的 Expires（有效期）属性，此时 Cookie 将保存到你的硬盘上。

### 不可跨域名性

域名www.google.com颁发的Cookie不会被提交到域名www.baidu.com去。这是由 Cookie 的隐私安全机制决定的。隐私安全机制能够禁止网站非法获取其他网站的Cookie。

### 一级域名的二级域名

正常情况下，同一个一级域名下的两个二级域名如www.helloweenvsfei.com和images.helloweenvsfei.com也不能交互使用Cookie，因为二者的域名并不严格相同。如果想所有helloweenvsfei.com名下的二级域名都可以使用该Cookie，需要设置Cookie的domain参数

**缺点**

**不能储存大数据且不易读取**

**优点**

Cookie 可以作为全局变量，这是它最大的一个优点。它最根本的用途是 Cookie 能够帮助 Web 站点保存有关访问者的信息，以下列举 cookie 的几种小用途。

- 保存用户登录信息。这应该是最常用的了。当您访问一个需要登录的界面，例如微博、百度及一些论坛，在登录过后一般都会有类似"下次自动登录"的选项，勾选过后下次就不需要重复验证。这种就可以通过 cookie 保存用户的id。

- 创建购物车。购物网站通常把已选物品保存在 cookie 中，这样可以实现不同页面之间数据的同步(同一个域名下是可以共享 cookie 的)，同时在提交订单的时候又会把这些 cookie传到后台。

- 跟踪用户行为。例如百度联盟会通过 cookie 记录用户的偏好信息，然后向用户推荐个性化推广信息，所以浏览其他网页的时候经常会发现旁边的小广告都是自己最近百度搜过的东西。这是可以禁用的。

### 属性

Domain（域）：Cookie的域；浏览器只向指定域中的服务器主机名发送Cookie，这样服务器就将Cookie限制在了特定的域中。jianshu.com域就与jianshu1.jianshu.com和jianshu1.jianshu2.jianshu.com相匹配，但与js.com就不匹配了。
