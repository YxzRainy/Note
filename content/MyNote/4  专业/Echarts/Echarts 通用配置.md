---
title: Echarts 通用配置
date: 2021-10-30 6:00:00
updated: 2021-10-30 6:00:00
categories:
        - 可视化库
tags:
        - 前端
        - 图表
        - 可视化
        - 学习笔记
        - Echarts
---

# Echarts 通用配置

## title

图表的标题。

### 标题的样式

在**title**下配置`textStyle`、

```JavaScript
textStyle: {
  color: '#008c8c',
},
```

### 标题的边框

在**title**下配置：

```JavaScript
borderWidth: 5,
borderColor: '#008c8c',
borderRadius: 3,
```

### 标题的位置

在**title**下配置：

```javascript
left: 10,
top: 20,
```

## tooltip

提示框组件

用于配置鼠标滑过或点击图表时的提示框。

### 显示框的触发范围

在**tooltip**下配置`trigger`

```js
trigger: 'axis',
```

### 显示框触发方式

在**tooltip**下配置`triggerOn`

```js
triggerOn: 'click ',
```

### 自定义提示框内容

字符串模板

```JavaScript
formatter: '{b} 的科技水平是 {c}'
```

回调函数

```JavaScript
formatter: function (arg) {
     return arg[0].name + '的运动科技水平是' + arg[0].data
}
```

## toolbox

图表的工具栏。

### 打开工具栏配置项

```js
feature: {}
```

### 导出图片

以图片的形式导出图表

```js
saveAsImage: {},
```

### 数据视图工具

可以展现当前图表所用的数据，编辑后可以动态更新。

```js
dataView: {},
```

### 还原所有配置项

```
restore: {},
```

### 数据区域的缩放

```js
dataZoom: {},
```

### 图表类型的动态切换

```js
magicType: {
    type: ['bar', 'line']
}
```

## legend

图表的图例组件。它展现了不同系列所对应不同的颜色和名字。可以通过点击某个图例来控制对应的系列显示与否。

### 增加系列

准备另外一组系列的数据。

```
var yArr2 = [30, 20, 84]
```

在**series**配置：

```JavaScript
{
    name: '跑鞋知名度',
    type: 'bar',
    data: yArr2,
}
```

在**option**下配置`legend`

**data 数组中的每个字符串必须与 series 下对象的某个 name 属性相匹配，否则无法显示图例**。

series 里面有了 name 值则 legend 里面的 data 可以删掉。

```JavaScript
legend: {
    data: ['跑鞋科技水平', '跑鞋知名度']
},
```

