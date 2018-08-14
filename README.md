### 介绍

这是一套基于 `vue` 和 `element-ui` , 实现了 `tab-router` (一个基于 tab 的路由) 的 **单页面**, **多页签** 应用程序。

我之前写这个项目的时候，有写了一篇 [记一次基于vue的spa多页签实践经验](https://github.com/noahlam/articles/blob/master/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%9F%BA%E4%BA%8Evue%E7%9A%84spa%E5%A4%9A%E9%A1%B5%E7%AD%BE%E5%AE%9E%E8%B7%B5%E7%BB%8F%E9%AA%8C.md)
然后就部分热心网友就在下面回复了一些其他类似的项目，我逐一查看了一下，发现基本都是基于 `vue-router` 和 `keep-alive ` 实现的，这种实现方法有两个比较明显的问题，第一是很难在页签内部跳转，比如我现在这个页签打开的是组件a,然后点击组件a里面的某个链接，我想跳转到组件b,但是是需要在页签不变的情况下打开，不能在新的页签打开，这样基于路由的就很难实现。
另一个问题就是 需要处理   `keep-alive` 的问题，有趟过 `keep-alive` 的坑的童鞋基本都了解。

那么我这个 `vue-multi-tab` 跟其他产品有什么不同呢？－－除了实现多页签功能以为，我们还有很多跟其他同类产品不同的特性，如下。

### 在线预览

[https://noahlam.github.io/vue-multi-tab/](https://noahlam.github.io/vue-multi-tab/)

### 快速上手
1. 安装,安装方式有2种,一种基于脚手架,另一种直接克隆,2中最终得到的结果是一样的,看你自己的选择

```
脚手架安装
1.$: sudo npm i tab-cli -g

2.$: tab-cli  根据提示输入项目名称
```

```
手动克隆
1.$: git clone https://github.com/noahlam/vue-multi-tab.git

2.$: cd vue-multi-tab && npm i
```

2. 项目结构

    开发的代码全部在 src 里面, src 以外的都是一些配置文件,如果你不需要配置,请直接关注 src 即可

    src/MainFrame 框架页内容

    src/Images  静态图片文件

    src/Router 路由配置, 路由表为 TabRouter.js

    src/Store Vuex 目录

    src/Styles 一些全局的公共样式

    src/Views 实际页面存放位置, 建议业务组件都放这里

### 主要特性：

1. 可以在页签内像 vue-router 一样跳转组件
1. 无需处理 `keep-alive` 问题
1. 双重历史记录(页签内部历史记录和页签历史记录)
1. 类似 `vue-router` 的 API（push,replace,back）
1. 所有组件均默认为异步加载(当然你也可以改成同步的)
1. 可以单 tab 刷新

### API 列表

> tips: 所有的 API 都是放在 this.$tab 对象下面，如 this.$tab.open(...)



1. open 打开一个页签

    如果当前页签未打开过,则打开一个新的页签,如果页签已存在,则跳转到当前页签.

    接收一个对象做参数,格式如下:

    ```javascript
    {
        title: '子菜单1-2',
        component: 'index',
        menuId: '1-2'
    }
    ```

    这个格式,其实就是菜单配置(见 src/Frame/MainConf.js)里的格式,这么设计,是方便直接在菜单列表上打开当前菜单

    ```vue
    <el-menu-item-group>
        <el-menu-item v-for="(item,index) in menuList"
                      :key="index"
                      @click="$tab.open(item)"
                      :index="item.menuId">
          {{item.title}}
        </el-menu-item>
    </el-menu-item-group>
    ```

    > tips: menuId 可以自己随意定义,但是要不重复, component 是组件的 `路由名称` (暂且这么称呼吧,其实就是类似 vue-router 的 path), 组件的路由表在 `src/Router/TabRoute.js` 里

1. close 关闭一个页签

    接收一个 menuId 作为参数,对应要关闭的 tab 的 menuId.如果 menuId 没传,或者传的 menuId 在打开的 tab 列表里面没找到对应的.则不做任何操作.

1. showTab 切换 tab

    接收一个 menuId 作为参数,对应要激活的 tab 的 menuId.如果menuId没传,或者传的 menuId 在打开的 tab 列表里面没找到对应的.则会不激活任何页签.

1. push  标签内跳转

    类似 vue 的 this.$router.push,可以在当前页签下跳转到另一个组件,且可以带参数

    ##### 参数说明:

    **第一个参数【必选】** 可以是字符串，也可以是对象
    1.String
    1.1 字符串不带参数，就是一个组件名。打开对应的组件
    1.2 字符串后带查询参数，会自动解析，并在目标组件可以通过 this.$tab.query() 获取,需要注意的是 query() 是一个函数,这个跟 vue-router 不同,不过返回的数据格式跟 this.$route.query 一样

    2.Object 第一个参数是一个对象的话，格式如下
    ```javascript
    {
        path:'组件名称',  // 必选
        query: {}        // 可选，Object类型，要带的查询参数,获取方式同上
    }
    ```

    **第二个参数【可选】**，是一个对象
    也是查询参数，这个参数会上面参数合并，如果刚好有同名的参数，则会覆盖上面的参数
    理论上，push()方法是可以在全局的任何地方使用，不过需要注意的是不管何时，在哪里push,push的目标始终是当前激活的那个tab.

    》tips: 这个方法完全就是模仿 vue-router 的 this.$router.push, 不过只是浅层次的模仿。

1. replace 标签内替换组件

    用法同 push,不同的是 replace 是直接替换当前历史记录,所以不会产生新的历史记录

1. back 标签内后退

    接收一个正整数作为后退的步数(可选,默认是1)

1. closeAll 关闭所有标签

    关闭所有打开的标签，除了首页外（目前的首页 `MainConf.homeTab` 配置是不能关闭的，如果你想首页能关闭，请配置成普通菜单）

1. closeOthers 关闭除当前标签外的所有标签

    接收一个 menuId 作为参数，除了跟这个 menuId 相匹配的 tab 不关，其他的 tab 全部关掉(首页依然是那么顽皮，关不掉，同上)

1. reShow 根据地址栏数据，回显标签和标签内的组件

    根据浏览器地址，回显当前 tab, 回显内容包括 1. 打开 tab, 2.得到上次的历史记录 3.打开 tab 里上次显示的组件 4.如果调用this.$tab.back() 方法，可以基于上次的历史记录返回。

1. query 获取 push,replace 传递的参数

    类似 this.$route.query,  query() 返回的也是一个对象。不过唯一点不同的是 我们这里的 **query() 是一个函数**，所以你应该在后面给他一对括号

    ```javascript
    let id = this.$tab.query().id
    ```
1. info 获取 当前激活的 tab 对象

    返回 当前激活的 tab 对象, 也是一个函数, 要这样调用 `this.$tab.info()`
