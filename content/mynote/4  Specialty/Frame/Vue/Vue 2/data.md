---
title: Vue data
date: 2022-05-15 6:00:00
updated: 2022-05-15 6:00:00
categories:
        - 前端框架
tags:
        - Vue
        - 前端
        - Vue 2
        - 学习笔记

---

# data

data 中的数据，不是直接在 Vue 实例中，而是在`_data:{}`中，而`_data:{}`在 Vue 实例中。

data 中的数据，Vue 使用了数据代理和数据劫持，从而实现了数据响应式。