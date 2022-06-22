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

##  ! [rejected]        master -> master (non-fast-forward)error: failed to push some refs to 

```sh
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'github.com:YxzRainy/Notes.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details
```

先 `git pull origin master`，再`git push origin master`即可解决。
