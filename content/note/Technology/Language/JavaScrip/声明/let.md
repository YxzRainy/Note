## let

变量无法重复声明，避免变量污染。

块级作用域，变量只在当前代码块`{}`的作用域中有效，一个`{}`就是一个作用域。

```js
{
	let b = 1;
}
console.log(b);
```

但不影响作用域链。

```js
a = 3;
function fun() {
	console.log(a);
}
fun();
```

不进行变量声明提升

```
console.log(a);
let a = 1;
```