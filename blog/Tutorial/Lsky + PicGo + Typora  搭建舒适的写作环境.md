---
title: Lsky + PicGo + Typora 搭建舒适的写作环境
date: 2022-06-12
categories:
        - Tutorial
tags:
        - Lsky
        - PicGo
        - Typora
        - Markdown
---

# Lsky + PicGo + Typora  搭建舒适的写作环境

## 写在前面

在这之前，我在使用 Typora 时，如果要在一篇文章中插入图片，那么通常需要以下几步：

1. 截图并保存图片到本地。
2. 上传图片到图床。
3. 复制图片链接到 Typora 中。

这......我想换谁也没心思写文章了，因此，我利用百度大法，找到了 PicGo 这个好东西，这使我写文章时舒适了不少。

## 主要实现

在服务器上搭建 Lsky Pro.

配置 PicGo 和 Typora，实现将图片粘贴到 Typora 中，即可自动将图片上传到 Lsky Pro.

## 环境准备

[Lsky Pro 2.0.4](https://docs.lsky.pro/)

[PicGo 2.3.0](https://github.com/Molunerfinn/PicGo/releases)

[Typora 1.2.5](https://typoraio.cn/)

已安装[宝塔 7.9.2](https://bt.cn/new/download.html) 的服务器

Windows 10 操作系统。

## 安装 Lsky Pro

到 GitHub 上去下载 Lsky Pro 的源码：[Lsky Pro for Github](https://github.com/lsky-org/lsky-pro/releases)

安装教程请参考：[Lsky Pro 官方文档](https://docs.lsky.pro/docs/v2/quick-start/installation.html#%E4%B8%8B%E8%BD%BD%E6%AD%A3%E5%BC%8F%E7%89%88%E6%9C%AC)

## 安装 PicGo

到 GitHub 上去下载 [PicGo 2.3.0](https://github.com/Molunerfinn/PicGo/releases) 的 exe 文件，然后安装即可。

## 通过 PicGo 上传图片到 Lsky Pro

启动 PicGo 并安装 lankong 插件。

![配置PicGo](https://gallery.yxzi.xyz/galleries/2022/06/18/%E9%85%8D%E7%BD%AEPicGo.png)

### 获取 Token 并配置

来到 Lsky Pro 的管理后台，选择左侧**接口**菜单，并用在线 POST工具 获取 Token。

链接为**你的接口 Url + /token**，post 参数为：**email=Your Email&password=YourPassword**。

![获取token](https://gallery.yxzi.xyz/galleries/2022/06/18/%E8%8E%B7%E5%8F%96toke.png)

获取到 Token 后，回到 PicGo，选择侧栏的**图床设置**，再选择 **lankong**。

版本选择 **V2**，Server 配置**你的图床域名**，Auth Token** 配置 **Bearer 1|YourToken**，然后确定。

![配置PicGo2](https://gallery.yxzi.xyz/galleries/2022/06/18/%E9%85%8D%E7%BD%AEPicGo2.png)

接着随便找一张图片用 PicGo 上传，如果上传成功的话，可以在图床中看到刚才上传的图片。

## 配置 Typora

启动 Typora，进入**偏好设置**，选择**图像**，选择**插入图片时进行上传图片**的操作，上传服务选择 **PicGo(APP)**，并配置 **PicGo.exe 所在的路径**。

![配置typora](https://gallery.yxzi.xyz/galleries/2022/06/18/%E9%85%8D%E7%BD%AEtypora.png)

配置完成后点击左下方**验证图片上传选择**，可以看到弹出了一个**验证成功的对话框**。

![typora验证](https://gallery.yxzi.xyz/galleries/2022/06/18/typora%E9%AA%8C%E8%AF%81.png)

最后，我们截图并粘贴到 Typora 中，PicGo 会自动将刚刚粘贴到 Typora 中的截图上传到图床上。

## 一些建议

下面的建议也许会使我们写作时麻烦一点，但是从长远看来，我认为这是值得的。

### 上传前重命名

强烈建议开启 PicGo 的这个选项，这能让我们更加方便的管理图床上的图片。

![上传前重命名](https://gallery.yxzi.xyz/galleries/2022/06/18/%E4%B8%8A%E4%BC%A0%E5%89%8D%E9%87%8D%E5%91%BD%E5%90%8D.png)

因为一般插入到 Typora 中的图片都是截图（反正我是），而截图一般都是用时间戳来命名的，导致上传到图床上的图片可读性并不高，也不利于图床后期维护大量图片。

![开启上传重命名2](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%BC%80%E5%90%AF%E4%B8%8A%E4%BC%A0%E9%87%8D%E5%91%BD%E5%90%8D2.png)

开启上传前重命名，每次插入图片时，PicGo 会让我们先重命名图片，然后再上传，当然也可以取消本次重命名，以图片本身的名字上传。

![开启上传前重命名3](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%BC%80%E5%90%AF%E4%B8%8A%E4%BC%A0%E5%89%8D%E9%87%8D%E5%91%BD%E5%90%8D3.png)

### Typora 图片重命名

同样的，插入到 Typora 中的图片也需要重命名，并且需要与上传后的图片名保持一致。

![开启上传前重命名](https://gallery.yxzi.xyz/galleries/2022/06/18/%E5%BC%80%E5%90%AF%E4%B8%8A%E4%BC%A0%E5%89%8D%E9%87%8D%E5%91%BD%E5%90%8D.png)

重命名后：

![typora重命名](https://gallery.yxzi.xyz/galleries/2022/06/18/typora%E9%87%8D%E5%91%BD%E5%90%8D.png)

### 一篇文章一个相册

我觉得这能让我们更加方便的查找图床上或文章中的图片，也更利于图片的后期维护。

即**将一篇文章中的所有图片，在图床上建一个相册来存储，相册名用文章名命名**。

![一篇文章一个相册](https://gallery.yxzi.xyz/galleries/2022/06/18/%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0%E4%B8%80%E4%B8%AA%E7%9B%B8%E5%86%8C.png)

至此，我们已经搭建好了一个非常舒适的 markdown 写作环境。