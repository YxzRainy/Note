---
title: Git Error
date: 2021-10-21
categories:
        - Git
tags:
        - Git
        - 命令
        - Github

---

# Error

## fatal: refusing to merge unrelated histories

今天使用`git pull origin main`拉取分支的时候，提示`fatal: refusing to merge unrelated histories`，原因是两个分支是两个不同的版本，具有不同的提交历史。

![git错误1](https://gallery.yxzi.xyz/galleries/2022/06/15/git%E9%94%99%E8%AF%AF1.png)

使用`git pull origin master --allow-unrelated-histories`可以解决，允许不相关历史提，强制合并。

![git问题1解决](https://gallery.yxzi.xyz/galleries/2022/06/15/git%E9%97%AE%E9%A2%981%E8%A7%A3%E5%86%B3.png)

## ! [rejected]        master -> master (non-fast-forward)error: failed to push some refs to 

```sh
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'github.com:YxzRainy/Notes.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details
```

先 `git pull origin master`，再`git push origin master`即可解决。

## Git 检测不到 Hexo themes 下的文件夹被更改

执行 `git rm -r --cached .`之后，再正常提交即可。

## fatal: unable to access 'https://github.com/username/xxx.git/': Failed to connect to github.com port 443 after 22410 ms: Timed out

因为 git 在拉取或者提交项目时，中间会有 git 的http和https代理，但是我们本地环境本身就有SSL协议了，所以取消git的https代理即可，不行再取消http的代理。

### 方法一

1、在项目文件夹的命令行窗口执行下面代码，然后再 git [commit](https://so.csdn.net/so/search?q=commit&spm=1001.2101.3001.7020) 或 git clone

```bash
//取消 http 代理
git config --global --unset http.proxy
//取消 https 代理 
git config --global --unset https.proxy
```

取消 git 本身的 https 代理，使用自己本机的代理，如果没有的话，其实默认还是用 git 的

2、再进入 cmd 窗口输入以下代码 ，清除缓存后再重新进行 git [操作](https://so.csdn.net/so/search?q=操作&spm=1001.2101.3001.7020) 即可

```bash
ipconfig/flushdns
```

重新 git。

### 方法二

科学上网（vpn）
这样就能提高服务器连接速度，能从根本解决 time out 443问题

### 方法三

