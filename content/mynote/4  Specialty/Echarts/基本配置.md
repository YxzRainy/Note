---
title: Echarts 基本配置
date: 2021-10-27 6:00:00
updated: 2021-10-28 6:00:00
categories:
        - 可视化库
tags:
        - 前端
        - 图表
        - 可视化
        - 学习笔记
        - Echarts

---

## 初始化

初始化一个 Echarts 实例，参数是一个 dom，它决定了图表最终呈现的位置。

```js
var myChart = echarts.init(document.getElementById('main'));
```

## 绘制图表

用一个对象作为配置项，绘制整个图表。

```js
var option = {}
```

### 标题

```JavaScript
title: {
    text: '运动品牌科技水平',
    //标题文本点击tiao超链接
    link: 'https://yxzi.xyz/'
},
```

### X轴

```JavaScript
xAxis: {
    // 轴类型为类目轴
    type: 'category',
    // 类目轴的类别名称
    data: ['李宁', '安踏', '匹克', '迪卡侬', '耐克', '阿迪达斯']
},
```

### Y轴

```JavaScript
yAxis: {
    // 轴类型为数值轴，数值轴是不需要设置data属性，
    // 因为数值轴针对xAxis的data中的类别名称去series的data中去寻找对应的数据
    type: 'value',
},
```

### series

一个系列配置。

```JavaScript
series: [
        {
            // 表示下面data中的数据表示的是哪一方面的数据，这里表示的是科技水平
            name: '科技水平',
            // 定义图标的类型，这里是柱状图
            type: 'bar',
            // xAxis 中与类目相对应的数据
            data: [22, 15, 12, 15, 80, 40]
        }
    ] 
```

## 将配置项设置给 Echarts 实例对象

```javascript
myChart.setOption(option)
```

