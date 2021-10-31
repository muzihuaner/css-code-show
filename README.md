## 欢哥的CSS代码演示工具

这个小工具用来实时演示css代码效果

#### 使用方法：  

1.打开 **index.html**,修改名为“skin”的div里的内容，比如下面这样

```html
<div class="skin">
		<div class="demo"></div>
</div>
```

2.打开**main.js**,修改const string=``中的内容为你的代码

```js
const string = `.demo{
width:20px;
height:20px
}`
```

3.使用浏览器打开**index.html**，就可以使用啦!



#### 选项：

你可以根据自己的需求点击对应的按钮

![image-20211031164021765](https://cdn.jsdelivr.net/gh/muzihuaner/huancdn/img/20211031164021.png)

#### TODO：

- [x] 语法高亮（[PrismJS](https://prismjs.com/)）
- [ ] 更容易地定义演示内容

#### 演示地址：

https://muzihuaner.github.io/css-code-show/Demo
