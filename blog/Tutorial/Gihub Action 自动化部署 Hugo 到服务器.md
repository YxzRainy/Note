---
title: Gihub Action 自动化部署 Hugo 到服务器
date: 2022-06-02
categories:
        - Tutorial
tags:
        - Hugo
        - SSH
        - GitHub
        - Github Action
---

# Gihub Action 自动化部署 Hugo 到服务器

> 大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 Actions.
>

## 写在前面

前几天刚接触 Gihub Action，只为了自动化部署我的 Hugo 博客，但是万万没想到，我断断续续折腾了一天都没有成功！一直卡在最后的部署环节，最后我索性换了一对密钥对，然后部署成功了......

## 主要实现

在本地搭建一个 Hugo 博客。

将本地博客推送到 Github 上进行版本控制。

利用 Github Action + SSH 登录到我们的服务器并实现自动化部署。

## 环境准备

[Git 2.35.1](https://git-scm.com/downloads)

[Github](https://github.com/) 账户

已安装[宝塔  7.9.2 ](https://bt.cn/new/download.html)的服务器

Windows 10 操作系统。

## 安装 Chocolatey

这里需要先安装 Chocolatey，因为之后会用它来安装 Hugo。

使用管理员身份运行 windows 中的 **Windows PowerShell**（不是 CMD），并执行：

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

输入 `choco`，查看 Chocolatey 是否安装成功。

![安装 hugo](https://gallery.yxzi.xyz/galleries/2022/06/15/%E5%AE%89%E8%A3%85hugo.png)

## 安装 Hugo

Hugo 有两个版本，一个是普通版本，不支持`Sass/SCSS`，另一个扩展版本，支持`Sass/SCSS`.

安装普通版本。

```
choco install hugo -confirm
```

安装支持`Sass/SCSS` 的版本。

```bash
choco install hugo-extended -confirm
```

等待安装完成后，使用 `hugo version` 来检查 hugo 是否安装成功。

![image-20220615142330432](https://gallery.yxzi.xyz/galleries/2022/06/15/hugo%E5%AE%89%E8%A3%85.png)

出现以上提示，就代表 hugo 已经安装成功了。

## 本地搭建站点

桌面右击选择 Git Bash Here，然后执行;

```sh
hugo new site ./site
```

我们会发现在桌面上多出了一个 site 文件夹：

![创建站点](http://image.yxzi.xyz/image/2022/06/08/创建站点.png)

### 新建文章

站点已经创建完成，接下来新建一篇文章，使用`cd site`进入 site 文件夹，并在`post/article.md`新建一篇文章。

```
hugo new post/article.md
```

**article.md** 被自动生成到了 `content/post/article.md` 目录。

![hugo新建文章](https://gallery.yxzi.xyz/galleries/2022/06/15/hugo%E6%96%B0%E5%BB%BA%E6%96%87%E7%AB%A0.png)

我们编辑 article.md：

```markdown
---
title: hello world
date: 2021-06-22
categories:
        - New
tags:
        - Hugo
        - GitHub
---

This is my first article!
```

至此，我们的第一篇文章已经写好了！

### 安装主题

我这里选择的是 **Yinyang** 作为演示，这是一个非常简约的黑白风格的主题。

使用`git clone git@github.com:joway/hugo-theme-yinyang.git themes/yinyang`来安装主题，其中`themes/yinyang`是主题的路径。

![hugo安装主题3](https://gallery.yxzi.xyz/galleries/2022/06/15/hugo%E5%AE%89%E8%A3%85%E4%B8%BB%E9%A2%983.png)

安装完主题后，还需要指定当前站点的主题为 yinyang。

打开 根目录的 `config.toml`，添加`theme = "yinyang"`.

![hugo安装主题2](https://gallery.yxzi.xyz/galleries/2022/06/15/hugo%E5%AE%89%E8%A3%85%E4%B8%BB%E9%A2%982.png)

### 本地预览站点

安装主题后，使用 `hugo serve`本地预览一下我们的站点。

可以看到下图中出现了`http://localhost:1313/`，我们按住 ctrl 点 ，浏览器会自动打开该地址。

![hugo本地预览站点](https://gallery.yxzi.xyz/galleries/2022/06/15/hugo%E6%9C%AC%E5%9C%B0%E9%A2%84%E8%A7%88%E7%AB%99%E7%82%B9.png)

OK，可以看到站点已经预览成功！但似乎点过于简约了。

![预览站点3](https://gallery.yxzi.xyz/galleries/2022/06/15/%E9%A2%84%E8%A7%88%E7%AB%99%E7%82%B93.png)

接下来配置一些博客的基本设置。

### 更多配置

```toml
baseURL = "https://yxzi.xyz"
languageCode = "en-us"
title = "Rainy's Blog"
theme = "yinyang"
DefaultContentLanguage = "cn"

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
  [markup.highlight]
    guessSyntax = true
    noClasses = true
    style = "bw"
    tabWidth = 2

[author]
  name = "Joway"
  homepage = "https://yxzi.xyz"

[params]
 mainSections = ["post"]
 headTitle = "Rainy'Blog"
 disqus = "Rainy" 

[[params.socials]]
 name = "About Me"
 link = "https://yxzi.xyz"
[[params.socials]]
 name = "Github"
 link = "https://github.com/YxzRainy"
```

该主题的更多配置请参考[yinyang](https://github.com/joway/hugo-theme-yinyang).

### 生成静态页面

使用 `hugo -D`来生成静态页面。

![生成静态页面](https://gallery.yxzi.xyz/galleries/2022/06/15/%E7%94%9F%E6%88%90%E9%9D%99%E6%80%81%E9%A1%B5%E9%9D%A2.png)

不出意外的话，所有静态页面都会生成到 `./public` 目录。

## 推送到 Github 远程库

### 创建远程库

创建一个仓库，仓库名随意，public。

![新建仓库](https://gallery.yxzi.xyz/galleries/2022/06/16/image-20220616001056989.png)



需要注意的是这个空仓库默认的分支名为**main**，和本地库的默认分支 **master** 并不是一样的。

![默认分支](https://gallery.yxzi.xyz/galleries/2022/06/16/%E9%BB%98%E8%AE%A4%E5%88%86%E6%94%AF.png)

### 同步远程库和本地库

先使用 `git init` 将当前目录初始为一个 Git 本地库，可以看到这个本地库的默认分支为**master**，和远程分支 main 不是一样的。

![初始化本地库](https://gallery.yxzi.xyz/galleries/2022/06/15/%E5%88%9D%E5%A7%8B%E5%8C%96%E6%9C%AC%E5%9C%B0%E5%BA%93.png)

因此，我们需要修改本地分支的名字

```sh
git branch -m master main
```

![修改本地的分支名](https://gallery.yxzi.xyz/galleries/2022/06/15/%E4%BF%AE%E6%94%B9%E6%9C%AC%E5%9C%B0%E7%9A%84%E5%88%86%E6%94%AF%E5%90%8D.png)

可以看到分支名被修改成了**main**.

接着回到远程库，复制当前远程库的链接，我这里是`git@github.com:YxzRainy/yxzrainy.github.io.git`。

![复制远程库链接](https://gallery.yxzi.xyz/galleries/2022/06/16/%E5%A4%8D%E5%88%B6%E8%BF%9C%E7%A8%8B%E5%BA%93%E9%93%BE%E6%8E%A5.png)



使用 `git remote add origin`将远程库与本地库关联起来，关联成功后没有任何提示。

![关联远程库1](https://gallery.yxzi.xyz/galleries/2022/06/16/%E5%85%B3%E8%81%94%E8%BF%9C%E7%A8%8B%E5%BA%931.png)



再使用`git pull origin main --allow-unrelated-histories`拉取远程分支并合并到本地。

![拉取远程分支2](https://gallery.yxzi.xyz/galleries/2022/06/16/%E6%8B%89%E5%8F%96%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF2.png)

此时的远程分支已经和本地分支同步。

### 将本地库推送到远程库

先将根目录中的所有文件添加到暂存区并提交。

```sh
git add .
git commit -m "My first Hugo blog"
```

**My first Hugo blog**是本次提交的信息，每次 `git commit` 都必须指定该信息。

![添加并提交4](https://gallery.yxzi.xyz/galleries/2022/06/16/%E6%B7%BB%E5%8A%A0%E5%B9%B6%E6%8F%90%E4%BA%A44.png)

最后使用`git push origin main`将刚才提交的文件推送到 **main** 远程分支。

![推送成功1](https://gallery.yxzi.xyz/galleries/2022/06/16/%E6%8E%A8%E9%80%81%E6%88%90%E5%8A%9F1.png)

回到之前创建的远程库，刷新一下页面，即可看到仓库中的文件和本地目录中的文件一模一样。

![回到远程库查看1](https://gallery.yxzi.xyz/galleries/2022/06/16/%E5%9B%9E%E5%88%B0%E8%BF%9C%E7%A8%8B%E5%BA%93%E6%9F%A5%E7%9C%8B1.png)

至此，我们已经将博客推送到 Github 上面了，我们可以很优雅的使用 GitHub 来作为博客的版本控制系统。

## 配置服务器

### 创建 Hugo 站点

打开宝塔，新建一个站点作为博客的访问地址，配置一个域名，并确保该域名已经解析到当前服务器，PHP 选择纯静态即可。

![宝塔新建站点](https://gallery.yxzi.xyz/galleries/2022/06/16/%E5%AE%9D%E5%A1%94%E6%96%B0%E5%BB%BA%E7%AB%99%E7%82%B9.png)

访问这个域名，出现以下界面说明站点搭建成功了。

![站点创建成功](https://gallery.yxzi.xyz/galleries/2022/06/16/%E7%AB%99%E7%82%B9%E6%90%AD%E5%BB%BA%E6%88%90%E5%8A%9F.png)

### 使用宝塔生成 SSH 密钥

使用宝塔的 SSH 管理器生成一个 SSH 密钥对。

![密钥](https://gallery.yxzi.xyz/galleries/2022/06/16/%E8%8E%B7%E5%BE%97SSH%E5%AF%86%E9%92%A5.png)

服务器密钥对一般存放在服务器的`/root/.ssh`路径中，一般需要将`id_rsa.pub`中的内容复制到`authorized_keys`中，但因为这里是使用宝塔自动生成的密钥对，因此无需我们手动复制（宝塔已经为我们配置好这一切）。

可以看到除了公钥，私钥`id_rsa`也生成了，私钥很重要，请别泄露给其他人。

![密钥目录](https://gallery.yxzi.xyz/galleries/2022/06/16/%E5%AF%86%E9%92%A5%E7%9B%AE%E5%BD%95.png)

至此，我们使用宝塔成功的在服务器上创建了一对密钥对，并将公钥放在了`/root/.ssh/authorized_keys`中，以后只需要在其他地方使用对应的私钥来登录我们的服务器。

### 使用腾讯云生成 SSH 密钥

如果不想用宝塔为我们生成的密钥对，那么我这里介绍以下使用腾讯云轻量服务器生成密钥对的方法。

来到轻量云服务器面板，选择密钥，再选择创建密钥。

![腾讯云创建密钥](https://gallery.yxzi.xyz/galleries/2022/06/16/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%88%9B%E5%BB%BA%E5%AF%86%E9%92%A5.png)

输入密钥对名称，并选择**创建新密钥对**。

![腾讯云创建密钥名称](https://gallery.yxzi.xyz/galleries/2022/06/16/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%88%9B%E5%BB%BA%E5%AF%86%E9%92%A5%E5%90%8D%E7%A7%B0.png)



密钥对创建完成，腾讯云自动将私钥文件下载到了本地，而公钥可以在密钥对信息里查看。

![腾讯云密钥创建成功](https://gallery.yxzi.xyz/galleries/2022/06/16/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AF%86%E9%92%A5%E5%88%9B%E5%BB%BA%E6%88%90%E5%8A%9F.png)

至此，我们已经在腾讯云轻量云服务器上成功创建了一对密钥对。

接着只需要将公钥复制到我们的服务器`/root/.ssh/authorized_keys`文件中，即可在其他地方使用对应的私钥来登录到我们的服务器。

## 部署到服务器

找到仓库菜单栏中的 Actions，设置一个 workflows。

![添加一个工作流](https://gallery.yxzi.xyz/galleries/2022/06/16/%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%B7%A5%E4%BD%9C%E6%B5%81.png)





接着配置 workflows 的名字，并将下方的默认 workflows 内容删除，我们可以在右侧的输入框搜索我们需要用到的包。

![配置工作流](https://gallery.yxzi.xyz/galleries/2022/06/16/%E9%85%8D%E7%BD%AE%E5%B7%A5%E4%BD%9C%E6%B5%81.png)

将默认workflows 中的内容删掉后，再将下方的代码粘贴到 workflows 中。

```yaml
name: Deploy Hugo
on:
  push: # 触发 workflows 时的事件
    branches:
      - main # 触发 push 事件的分支

jobs:
  Build_And_Deploy: # job id
    runs-on: ubuntu-latest # 指定运行 job 的运行环境
    steps:
      - name: Check Out
        uses: actions/checkout@v2
           
      - name: Setup Hugo # 安装 Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.91.2'
          extended: true
      
      - name: Build Hugo # 生成静态文件
        run: hugo --minify
        
      - name: Deploy
        uses: easingthemes/ssh-deploy@v2.2.11 # 使用 NodeJS 通过 ssh 部署 rsync 代码
        env:
         SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
         ARGS: "-rltgoDzvO"
         SOURCE: ${{ secrets.SOURCE }}
         REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
         REMOTE_USER: ${{ secrets.REMOTE_USER }}
         REMOTE_PORT: ${{ secrets.REMOTE_PORT }}
         TARGET: ${{ secrets.TARGET }}
```

其中一些是 **仓库的秘密环境变量**：

`SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}`：SSH 登录私钥，此前已经介绍了生成 SSH 私钥的两种方式。

`SOURCE: ${{ secrets.SOURCE }}`：仓库源路径，例如 **public/**.

`REMOTE_HOST: ${{ secrets.REMOTE_HOST }}`：远程主机地址，例如 **192.168.10.1**.

`REMOTE_USER: ${{ secrets.REMOTE_USER }}`：SSH 登录用户名，例如 **root**.

`REMOTE_PORT: ${{ secrets.REMOTE_PORT }}`：SSH 登录端口，例如 **21**.

`TARGET: ${{ secrets.TARGET }}`，远程路径，例如 **/home/Rainy/Site/hugo.yxzi.xyz**.

添加之后提交修改，可以写一些提交信息。

![提交修改](https://gallery.yxzi.xyz/galleries/2022/06/16/%E6%8F%90%E4%BA%A4%E4%BF%AE%E6%94%B9.png)

不出意外的话，提交之后的 workflows 会自动运行，我们可以切换到 Action 菜单中查看运行结果。

![action失败](https://gallery.yxzi.xyz/galleries/2022/06/16/action失败.png)

因为我们没有配置秘密环境变量，因此该 workflows 运行会失败，并且失败的步骤是 **Deploy**，并且可以点击运行失败的步骤来查看运行失败的错误信息。

![部署失败](https://gallery.yxzi.xyz/galleries/2022/06/16/%E9%83%A8%E7%BD%B2%E5%A4%B1%E8%B4%A5.png)



提示我们很多**必须的值**都没有输入。

这是因为这几个环境变量我们并没有配置，而没有配置的话，它只能使用默认值，而这些环境变量的默认值都为空。

### 配置秘密环境变量

配置环境变量很简单，选择 **Settings**，再选择侧栏的 **Secrets** 和 Actions，最后点击右上角的 **New repository secret** 来新建一个环境变量。

![配置秘密环境变量](https://gallery.yxzi.xyz/galleries/2022/06/16/%E9%85%8D%E7%BD%AE%E7%A7%98%E5%AF%86%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.png)

接着输入环境变量的名称和值，这里以`TARGET`来举例，其他的环境变量自行配置。

![环境变量举例](https://gallery.yxzi.xyz/galleries/2022/06/16/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E4%B8%BE%E4%BE%8B.png)

创建完成后的环境变量将会出现在**repository secret**下。

![环境变量创建完成](https://gallery.yxzi.xyz/galleries/2022/06/16/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%88%9B%E5%BB%BA%E5%AE%8C%E6%88%90.png)

接着我们需要一点时间来将所有的环境变量都配置完。

![环境变量配置完成](https://gallery.yxzi.xyz/galleries/2022/06/16/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E9%85%8D%E7%BD%AE%E5%AE%8C%E6%88%90.png)

完成后再回到 **Acitons** ，重新运行刚才运行失败的 workflows。

![重新运行工作流](https://gallery.yxzi.xyz/galleries/2022/06/16/%E9%87%8D%E6%96%B0%E8%BF%90%E8%A1%8C%E5%B7%A5%E4%BD%9C%E6%B5%81.png)

稍作等待，即可看到我们配置的 workflows 运行成功了！

![工作流运行成功](https://gallery.yxzi.xyz/galleries/2022/06/16/%E5%B7%A5%E4%BD%9C%E6%B5%81%E8%BF%90%E8%A1%8C%E6%88%90%E5%8A%9F.png)

回到宝塔，进入之前的站点根目录，可以看到多了很多文件，这些文件就是利用 Github Action + SSH 自动部署到我们服务器上的。

![部署成功2.png](https://gallery.yxzi.xyz/galleries/2022/06/16/部署成功2.png)

通过之前配置域名访问我们的网站，不出意外的话是可以访问成功的！

![访问成功2](https://gallery.yxzi.xyz/galleries/2022/06/16/%E8%AE%BF%E9%97%AE%E6%88%90%E5%8A%9F2.png)

但你应该发现了域名左侧有一个**不安全**提示，这是因为当前域名没有配置 SSl 证书导致的，所以浏览器会提示当前站点不太安全。

部分 SSL 证书是要钱的，但宝塔为我们提供了免费的 SSL 证书申请渠道。

### 宝塔配置免费 SSL 证书

打开站点设置，选择 SSL，这里有两种申请证书的途径可选，**宝塔 SSL** 和 **Let's Encrypt**，我这里选择 Let's Encrypt（因为宝塔 SSL 最多只能申请三张免费的 SSL 证书），然后点击**申请证书**。

![申请ssl证书](https://gallery.yxzi.xyz/galleries/2022/06/16/%E7%94%B3%E8%AF%B7ssl%E8%AF%81%E4%B9%A6.png)

勾选需要申请的域名，然后提交，等待证书申请完成即可。

![申请ssl证书2](https://gallery.yxzi.xyz/galleries/2022/06/16/%E7%94%B3%E8%AF%B7ssl%E8%AF%81%E4%B9%A62.png)

如果你看到下面的界面，就说明你的证书申请成功了，这里将强制 HTTPS 开启。

需要注意证书的到期时间，因为 SSL 到期后，域名就无法再通过 HTTPS 协议来访问。

![证书申请成功3](https://gallery.yxzi.xyz/galleries/2022/06/16/%E8%AF%81%E4%B9%A6%E7%94%B3%E8%AF%B7%E6%88%90%E5%8A%9F3.png)

重新访问站点，如果还是 HTTP 就 F5 + Ctrl 刷新一下，可以发现域名左侧的不安全已经消失了，并且传输协议也从 `http://`变成了`https://`，这也说明我们部署的 SSL 证书已经生效了。

## 添加搜索功能

如果你选择的 Hugo 主题没有搜索的功能，那么建议你可以试试下面这个方法。这里用**yinyang**主题进行演示。

使用 Vs Code 打开站点目录，进入到`site\themes\yinyang\layouts\partials\`目录，找到并打开 **header.html** ，并在该页面内合适的位置添加下面代码。

代码中的`clear`是一个清除输入框内容的图标，`search-results`是用于输出匹配到的结果的弹出框 。

```html
<div class="search">
    <span class="material-icons search-icon search-start">Search：</span>
    <input type="text" class="search-input" placeholder="Please enter..." />
    <div class="search-results"></div>
</div>
```

![添加搜索 html](https://gallery.yxzi.xyz/galleries/2022/06/16/%E6%B7%BB%E5%8A%A0%E6%90%9C%E7%B4%A2%20html.png)

接着是 CSS 代码，将其添加到`site\themes\yinyang\assets\css\`目录下的 **index.css** 中，位置随意，但我建议将其放到代码末端。。

```css
.search {
	position: relative;
	height: 30px;
	text-align: left;
	line-height: 30px;
}

.search .search-icon {
	float: left;
	height: 100%;
	line-height: 30px;
	user-select: none;
	width: 50px;
}

.search .search-input {
	float: left;
	width: 30%;
	height: 30px;
	line-height: 30px;
	border: 0;
	border-radius: 2px;
	box-sizing: border-box;
}

.search .search-results {
	display: none;
	z-index: 10;
	position: absolute;
	top: 30px;
	left: 50px;
	width: 30%;
	max-height: 400px;
	overflow: auto;
	text-align: left;
	background-color: #fff;
	border: 2px solid #000;
	box-sizing: border-box;

	border-radius: 3px;
}

.search .search-results .result-item {
	position: relative;
	background: rgb(255, 255, 255);
	color: #000;
	z-index: 1000;
	padding: 5px 10px;
	border-top: 0.1px solid rgba(193, 193, 193, 0.391);
	cursor: pointer;
}

.result-item mark {
	color: #000;
	background-color: #00ffff;
}

```

![添加搜索css](https://gallery.yxzi.xyz/galleries/2022/06/16/%E6%B7%BB%E5%8A%A0%E6%90%9C%E7%B4%A2css.png)

接下来就是重头戏了，搜索逻辑的实现。

在`site\themes\yinyang\static\js`目录下新建一个**search.js**文件，并将下方的代码复制到文件中。

![引入js](https://gallery.yxzi.xyz/galleries/2022/06/16/%E5%BC%95%E5%85%A5js.png)

```JavaScript
// 获取搜索框、搜索按钮、清空搜索、结果输出对应的元素
var searchBtn = document.querySelector('.search-start');
var searchInput = document.querySelector('.search-input');
var searchResults = document.querySelector('.search-results');

// 申明保存文章的标题、链接、内容的数组变量
var searchValue = '',
	arrItems = [],
	arrContents = [],
	arrLinks = [],
	arrTitles = [],
	arrResults = [],
	indexItem = [],
	itemLength = 0;
var tmpDiv = document.createElement('div');
tmpDiv.className = 'result-item';

// ajax 的兼容写法
var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status == 200) {
		xml = xhr.responseXML;
		arrItems = xml.getElementsByTagName('item');
		itemLength = arrItems.length;

		// 遍历并保存所有文章对应的标题、链接、内容到对应的数组中
		// 同时过滤掉 HTML 标签
		for (i = 0; i < itemLength; i++) {
			arrContents[i] = arrItems[i].getElementsByTagName('description')[0].childNodes[0].nodeValue.replace(/<.*?>/g, '');
			arrLinks[i] = arrItems[i].getElementsByTagName('link')[0].childNodes[0].nodeValue.replace(/<.*?>/g, '');
			arrTitles[i] = arrItems[i].getElementsByTagName('title')[0].childNodes[0].nodeValue.replace(/<.*?>/g, '');
		}
	}
};

// 开始获取根目录下 index.xml 文件内的数据
xhr.open('get', '/index.xml', true);
xhr.send();

// 输入框内容变化后就开始匹配，可以不用点按钮
// 经[[测试]]，onkeydown, onchange 等方法效果不太理想，
// 存在输入延迟等问题，最后发现触发 input 事件最理想，
// 并且可以处理中文输入法拼写的变化
searchInput.oninput = function () {
	setTimeout(searchConfirm, 0);
};
//输入框获取焦点的事件
searchInput.onfocus = function () {
	// 跳转页面后搜索结果依旧存在
	searchConfirm();
	if (searchInput.value != '' || indexItem.length != 0) {
		searchResults.style.display = 'block';
	}
};
// 输入框失去焦点事件
searchInput.onblur = function () {
	setTimeout(function () {
		searchResults.style.display = 'none';
		console.log(666);
	}, 100);
};

function searchConfirm() {
	if (searchInput.value == '') {
		searchResults.style.display = 'none';
	} else if (searchInput.value.search(/^\s+$/) >= 0) {
		// 检测输入值全是空白的情况
		searchInit();
		var itemDiv = tmpDiv.cloneNode(true);
		itemDiv.innerText = '请输入有效内容...';
		searchResults.appendChild(itemDiv);
	} else {
		// 合法输入值的情况
		searchInit();
		searchValue = searchInput.value;
		// 在标题、内容中查找
		searchMatching(arrTitles, arrContents, searchValue);
	}
}

// 每次搜索完成后的初始化
function searchInit() {
	arrResults = [];
	indexItem = [];
	searchResults.innerHTML = '';
	searchResults.style.display = 'block';
}

function searchMatching(arr1, arr2, input) {
	// 忽略输入大小写
	input = new RegExp(input, 'i');
	// 在所有文章标题、内容中匹配查询值
	for (i = 0; i < itemLength; i++) {
		if (arr1[i].search(input) !== -1 || arr2[i].search(input) !== -1) {
			// 优先搜索标题
			if (arr1[i].search(input) !== -1) {
				var arr = arr1;
			} else {
				var arr = arr2;
			}
			indexItem.push(i); // 保存匹配值的索引
			var indexContent = arr[i].search(input);
			// 此时 input 为 RegExp 格式 /input/i，转换为原 input 字符串长度
			var l = input.toString().length - 3;
			var step = 10;

			// 将匹配到内容的地方进行黄色标记，并包括周围一定数量的文本
			arrResults.push(arr[i].slice(indexContent - step, indexContent) + '<mark>' + arr[i].slice(indexContent, indexContent + l) + '</mark>' + arr[i].slice(indexContent + l, indexContent + l + step));
		}
	}

	// 输出总共匹配到的数目
	var totalDiv = tmpDiv.cloneNode(true);
	totalDiv.innerHTML = '检索到 <b>' + indexItem.length + '</b> 篇相关文章';
	searchResults.appendChild(totalDiv);

	// 未匹配到内容的情况
	if (indexItem.length == 0) {
		var itemDiv = tmpDiv.cloneNode(true);
		itemDiv.innerText = '未检索到到任何内容...';
		searchResults.appendChild(itemDiv);
	}

	// 将所有匹配内容进行组合
	for (i = 0; i < arrResults.length; i++) {
		var itemDiv = tmpDiv.cloneNode(true);
		itemDiv.innerHTML = '<b>' + arrTitles[indexItem[i]] + '</b><br/>' + arrResults[i];
		itemDiv.setAttribute('onclick', 'changeHref(arrLinks[indexItem[' + i + ']])');
		searchResults.appendChild(itemDiv);
	}
}

function changeHref(href) {
	// 在当前页面点开链接的情况
	// location.href = href;
	// 在新标签页面打开链接的代码，与上面二者只能取一个，自行决定
	window.open(href);
}
```

![添加搜索js](https://gallery.yxzi.xyz/galleries/2022/06/16/%E6%B7%BB%E5%8A%A0%E6%90%9C%E7%B4%A2js.png)

### 实现思路

1. 利用 `XMLHttpRequest()` 获取站内 **index.xml** 内的所有数据，保存到一个 **XML DOM** 对象。；
2. 将 XML 对象中的文章标题、链接、内容、索引等通过`getElementsByTagName()`等方法获取并保存到对应数组变量中。
3. 用户在输入框输入查找内容，提交后内容保存到一个字符串类型变量中。
4. 遍历保存文章内容的数组，通过`.search()`等方法和输入值进行匹配。
5. 匹配成功后得到所有匹配成功的数组元素的索引值，该索引值也是该内容的标题、链接数组对应的索引值；
6. 将最终搜集的文章标题、链接，以及匹配到的内容片段摘取输出到页面。

打开`site\themes\yinyang\layouts\partials`目录下的 **scripts.js**，将 **seacher.js** 引入到页面中。

![引入搜索js](https://gallery.yxzi.xyz/galleries/2022/06/16/%E5%BC%95%E5%85%A5%E6%90%9C%E7%B4%A2js.png)

在本地重新预览我们的站点，可以发现右上角多了一个搜索框，输入一些内容，会弹出一个搜索结果框，这说明我们的搜索框已经添加成功了。

![添加搜索成功](https://gallery.yxzi.xyz/galleries/2022/06/16/%E6%B7%BB%E5%8A%A0%E6%90%9C%E7%B4%A2%E6%88%90%E5%8A%9F.png)

最后只需要重新生成静态文件，推送的远程库，远程库上的 action 会自动执行，将静态文件部署到我们服务器上。
