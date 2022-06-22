---
title: HTML Web Workers
date: 2022-03-28
categories:
        - Note
tags:
        - 前端
        - HTML
---

# Web Workers

用于创建一个不会影响前台处理的后台线程，并且在这个后台线程中创建多个子线程。

通过它，你可以将耗时较长的处理交给后台线程去执行，从而解决了之前因为某个耗时过长而跳出的一个提示用户脚本运行时间过长，导致用户不得不结束这个处理的尴尬局面，同时，也给程序员带来了一定的麻烦，因为我们不知道到底是 javascript 脚本程序出现问题，还是运算时间过长导致的问题。

## postMessage()

向 worker 的内部作用域发送一个消息。

## onmessage()

当`message` 事件发生时，该函数会被调用。

## 实例

**index.html**

```js
<input type="number" id="first">
<input type="number" id="second">
<div id="result">我会变哦</div>
```

**main.js**

```js
var myWorker = new Worker('worker.js');

var first = document.getElementById('first');
var second = document.getElementById('second');
var result = document.getElementById('result');
// 它们当中任意一个的值发生改变时，
// myWorker.postMessage([first.value,second.value]) 会将这 2 个值组成数组发送给 worker。
// 你可以在消息中发送许多你想发送的东西。

first.onchange = function () {
	myWorker.postMessage([first.value, second.value]);
	// 发送消息到 Worker.js
	console.log('Message posted to worker');
};

second.onchange = function () {
	myWorker.postMessage([first.value, second.value]);
	// 发送消息到 Worker.js
	console.log('Message posted to worker');
};

// 接收来自 worker.js 的消息
myWorker.onmessage = function (e) {
	result.textContent = e.data;
};

```

**worker.js**

```js
onmessage = function (e) {
	// 接收来自 main.js 的消息
	var workerResult = 'Result: ' + e.data[0] * e.data[1];
	// 将结果返回到 main.js
	postMessage(workerResult);
};

```

