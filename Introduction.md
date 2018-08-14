### 介绍

`vue-multi-tab` 是一套基于 `vue` 和 `element-ui` 的 , 实现了 `tab-router` (一个基于 tab 的路由) 的 **单页面**, **多页签** 应用程序.

我之前写这个项目的时候,有写了一篇 [记一次基于vue的spa多页签实践经验](https://github.com/noahlam/articles/blob/master/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%9F%BA%E4%BA%8Evue%E7%9A%84spa%E5%A4%9A%E9%A1%B5%E7%AD%BE%E5%AE%9E%E8%B7%B5%E7%BB%8F%E9%AA%8C.md)
然后就部分热心网友就在下面回复了一些其他类似的项目,我逐一查看了一下,发现基本都是基于 `vue-router` 和 `keep-alive ` 实现的,这种实现方法有两个比较明显的问题,第一是很难在页签内部跳转,比如我现在这个页签打开的是组件a,然后点击组件a里面的某个链接,我想跳转到组件b,但是是需要在页签不变的情况下打开,不能在新的页签打开,这样基于路由的就很难实现.
另一个问题就是 需要处理   `keep-alive` 的问题,有趟过 `keep-alive` 的坑的童鞋基本都了解,基于以上原因,我决定给大家一个 `不太一样的实现方式`

那么我这个 `vue-multi-tab` 跟其他产品有什么不同呢?－－除了实现多页签功能以为,我们还有很多跟其他同类产品不同的特性,如下.

### 在线预览

[https://noahlam.github.io/vue-multi-tab/](https://noahlam.github.io/vue-multi-tab/)

### 主要特性：

1. 可以在页签内像 `vue-router` 一样跳转组件
1. 没有 `keep-alive`,所以也无需处理 `keep-alive` 问题
1. 双重历史记录(页签内部历史记录和页签历史记录)
1. 类似 `vue-router` 的 API(push,replace,back)
1. 所有组件均默认为异步加载(当然你也可以改成同步的)
1. 可以单 tab 刷新

### API 列表

1. open 打开一个页签
1. close 关闭一个页签
1. showTab 切换 tab
1. push  标签内跳转
1. replace 标签内替换
1. back 标签内后退
1. closeAll 关闭所有标签
1. closeOthers 关闭除当前标签外的所有标签
1. reShow 根据地址栏数据,回显标签和标签内的组件
1. query 获取 push,replace 传递的参数
1. info 获取 当前激活的 tab 对象

> tips: 更详细的 API 文档请看[这里](https://github.com/noahlam/vue-multi-tab/blob/master/README.md)

### 其他说明

项目地址 [vue-multi-tab](https://github.com/noahlam/vue-multi-tab.git),如果你觉得有用,给个 star 鼓励一下.

因为我本身就是个很讨厌记很多API的人,所以仅提供几个简单又能满足绝大部分需求的API,目的就是为了降低学习成本.

如果你觉得无法满足你的需求或使用中发现 bug 或疑问 欢迎 [在这里提issue](https://github.com/noahlam/vue-multi-tab/issues)

个人精力有限,还有很多地方需要你的共同参与,如果你兴趣一起维护,欢迎 pr.
