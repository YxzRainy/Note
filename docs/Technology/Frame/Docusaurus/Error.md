---
title: Docusaurus
date: 2022-04-30
categories:
        - Technology
tags:
        - Frame
        - ReactDocusaurus
---

# Docusaurus

```sh
yarn build
yarn run v1.22.18
warning ..\..\package.json: No license field
$ docusaurus build
[INFO] [zh-Hans] Creating an optimized production build...
i Compiling Client
i Compiling Server
√ Client: Compiled successfully in 17.53s
√ Server: Compiled successfully in 1.01m
[ERROR] Unable to build website for locale zh-Hans.
[ERROR] Error: Docusaurus found broken links!

Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.

Exhaustive list of all broken links found:

- On source page path = /docs/Note/Technology/RevisionControl/Git/基础操作/首次添加远程库:
   -> linking to %5BGitHub%5D(https://github.com/) (resolved as: /docs/Note/Technology/RevisionControl/Git/基础操作/%5BGitHub%5D(https://github.com/))

    at reportMessage (C:\Users\Rainy\Desktop\my-website\node_modules\@docusaurus\utils\lib\jsUtils.js:88:19)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

 markdown 文件中的**链接引用的路径**或**特殊符号**所导致的错误。

### 解决

根据错误信息修改正确即可