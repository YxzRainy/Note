---
title: Github
date: 2021-10-03
categories:
        - Github
tags:
        - Github

---

# Github

Github 不但可以是一个个人的免费仓库，它还是一个开源协作社区，通过 GitHub ，既可以让别人参与你的开源项目，也可以参与别人的开源项目。

## 参与一个的开源项目

### 克隆他人的开源项目

访问该项目的主页。

点击**Fork**先克隆这个的项目到自己的远程仓库中。

使用`git clone`将这个项目从自己的远程仓库中**clone**到本地。

```
git clone git@github.com:YxzRainy/YxzRainy.github.io.git
```

一定要从自己的账号下 clone 仓库，这样你才能推送修改。如果从别人的仓库地址克隆，你将不能推送修改，因为你没有权限。

如果你想修复这个开源的一个 bug，或者新增一个功能，立刻就可以开始干活，干完后，往自己的仓库推送。

## Issus

你可以提出 issue，供看到这个问题的任何人参与解决、讨论这个 issue，当 issue 得到解决时，仓库的所有者与 issue 的所有者就可以将这个 issue 关闭了。

## Pull Requests

简单来说就是：**我改进了你的代码，你拉回去看看吧**

当你想改进一个别人的项目 ，或想为别人的项目做贡献时，你将要走以下几个流程

- Fork 别人的仓库，相当于拷贝一份，毕竟不可能有人让你直接修改他的原仓库的。
- 将拷贝过来的仓库**clone**到本地分支，做一些修复，比如`git clone git@github.com:YxzRainy/YxzRainy.github.io.git`。
- 改进完成后，你希望仓库所有者接受你的修改，那么你需要在 Github 上创建一个**Pull Request**给原仓库所有者，意思是请求原仓库所有者合并你的分支。
- 原仓库所有者审查你做的这些修复后，如果它同意的话，就会将你做的修改合并到他自己的项目中，这样你就为他的这个项目做了贡献。
- 到这一步，整个**Pull Request**的过程就结束了。

## Repository

一个在 GitHub 的 repository 的地址路径一般由 **GitHub 的域名 + 仓库主人 + 仓库本身的名字 **组成，并且你可以通过这个地址访问一个已存在的公开库 。比如 https://github.com/YxzRainy/YxzRainy.github.io

在这个仓库中，你可以上传文件或添加文件，并且可以直接编辑部分文档文件，比如 html、txt 等等，当你每次对这个仓库中的内容进行修改时，你都可以提交修改信息，比如你这次对文件做
