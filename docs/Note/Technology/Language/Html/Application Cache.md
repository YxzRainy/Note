---
title: HTML Application Cache
date: 2022-03-05
categories:
        - Note
tags:
        - 前端
        - HTML
---

# Application Cache

允许浏览器在本地存储页面所需要的资源，使得页面离线也可以访问。

通俗点说：**当页面有些元素它们是不变的，你可以使用 Application Cache 技术离线缓存掉，每次访问这些缓存掉的元素就不需要再请求服务器了，当有些东西经常变，那就让它们每次请求服务器吧！**

## Application Cache的配置文件

首先需要在服务器上建立一个文件，里面的内容确定了哪些文件需要缓存，哪些文件不需要，如果资源无法访问会使用什么页面等

这个文件一般为`.appcache`类型，称为缓存清单(cache manifest)文件，一个完整的缓存清单文件如下：

```objectivec
CACHE MANIFEST
# version xx.xx.xx
CACHE:
needBeCached.png
needBeCached2.js
 
NETWORK:
notNeedBeCached.html
notNeedBeCached2.css
 
FALLBACK:
/ 404.html
```

可以看到，文件的头部信息`CACHE MANIFEST`用来标注这个文件是缓存清单文件，其后一般情况下（最好是）跟着一行标明版本的注释，这行注释非常重要，将在后面文件加载部分详细介绍这行注释的重要性

### CACHE部分

除了头部信息，这个缓存清单文件分为几部分，第一部分为CACHE部分:

```objectivec
CACHE:
needBeCached.png
needBeCached2.js
```

这一部分标注了哪些资源文件需要被缓存可以列出多个

如果有路径，如需要缓存blog下的blog.css文件，可以写成`blog/blog.css`。

另外`CACHE:`可以被省略，让需要缓存的资源文件直接跟在注释之后

### NETWORK部分

第二部分为NETWORK部分：

```vbnet
NETWORK:
notNeedBeCached.html
notNeedBeCached2.css
```

这一部分定义了哪些文件不需要缓存，这些文件需要与服务器连接

与CACHE一样，可以定义多个资源，而如果直接输入一个文件夹路径，也是合法的，比如`/blog`这样，blog文件夹下的所有文件都不会被缓存

可以使用通配符来，如除了上面CACHE中定义的资源，其他都必须与服务器连接：

```vbnet
NETWORK:
*
```

需要注意一点是，载有这个manifest文件的HTML文档将一定会缓存，这个会在后面再次提到

### FALLBACK部分

第三部分为FALLBACK部分：

```vbnet
FALLBACK:
/ 404.html
```

这一部分指定了一个后备页面，当资源无法访问时，浏览器会使用该页面

同样可以定义多条记录，每条记录列出两个URI，一个表示资源，一个表示后备页面。需要注意的是两个资源文件都需要使用相对路径切与manifest文件同源

同样可以使用通配符

### 保存和引用manifest文件

manifest文件可以保存在服务器上，保存为`.appcache`后缀，但必须与应用本身同源。在HTML文档中，可以指定清单文件的相对路径和绝对URL。需要注意的是，manifest文件的MIME类型必须是`text/cache-manifest`

需要在HTML文档中引入manifest文件，可以使用类似如下代码：

```html
<!doctype html>
<html manifest="manifest.appcache">
...

</html>
```

这样，HTML文档加载后，就会根据manifest.appcache的内容来缓存资源文件，在下次访问相同页面的时候，会直接使用缓存的资源文件来进行加速

## 缓存和加载机制

在第一次访问时，浏览器加载完HTML文档后，会查看其是否有引入manifest文件。若引入，则加载manifest文件，然后根据manifest的文件内容进行资源的缓存，并缓存当前文档

之后访问，浏览器首先会查看manifest文件是否被修改（无论是内容还是注释），如果被修改，将当做第一次访问，重新根据manifest文件内容进行缓存

如果应用缓存存在，且manifest没有被修改，浏览器直接从缓存中加载文档（注意：加载文档）和资源，不会访问网络（注意：无论联网与否，都不会访问网络）

在缓存多个资源文件时，浏览器下载资源文件会先放在一个临时的缓存中，如果有任何一个资源文件下载失败，浏览器将停止其他缓存资源的下载，并清除临时缓存。如果所有资源文件都被成功下载，浏览器将会把这些资源文件以及引用manifest文件的HTML文档移动到永久离线缓存中

## 满满的都是坑

### 一些小坑

1. 需要注意的是manifest文件放在服务器上，MIME类型必须是`text/cache-manifest`，如果使用 Apache，需要修改.htaccess文件。IE下默认application/octet-stream，需要在服务器指定
2. 每个需要缓存的页面的html都需要加入manifest属性
3. 不要将manifest文件本身加入缓存，如果加入，浏览器将不会检测到服务器上manifest的更新，页面版本将万年不变
4. 不要以为一个资源文件加载失败，其他文件就会被缓存，原因参见缓存和加载机制的最后一段

### 一些大坑

1. 在manifest文件中定义的资源全部被成功加载后，这些资源文件连同引用manifest文件的HTML文档一并被移动到永久离线缓存中。所以如果想只缓存js、css、图片等文件，而不希望缓存HTML文档以保持获得最新内容的情况来说，这就是个大坑
2. 根据Application Cache的加载机制，如果仅仅修改资源文件的内容（没有修改资源文件的路径或名称），浏览器将直接从本地离线缓存中获取资源文件。所以在每次修改资源文件的同时，需要修改manifest文件，以触发资源文件的重新加载和缓存。这其中，最有效的方式是修改manifest文件内部的版本注释（所以说那句注释相当重要）
3. 如果资源没有被缓存，在而没有设置NETWORK的情况下，将会无法加载（浏览器不会去网络上进行加载），所以需要使用通配符来表明除了CACHE中确定的资源以外，其他资源都需要去网络上加载