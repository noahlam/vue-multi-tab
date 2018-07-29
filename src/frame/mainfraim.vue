<template>
  <div class="indexWrap">
    <!--头部栏 开始-->
    <header class="topWrap">
      <!--顶部栏 左侧-->
      <div class="dsf">
        <!--logo 开始-->
        <div class="topLogo"> logo+文字</div>
        <!--logo 结束-->

        <!--应用名称 开始-->
        <div class="appName">
          <el-dropdown>
            <span class="appSelected">
              <i class="el-icon-menu"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="min-width: 200px">
              <el-dropdown-item disabled>系统名称1</el-dropdown-item>
              <el-dropdown-item class="appItem">应用名称1</el-dropdown-item>
              <el-dropdown-item class="appItem">应用名称2</el-dropdown-item>
              <el-dropdown-item disabled divided>系统名称2</el-dropdown-item>
              <el-dropdown-item class="appItem">应用名称1</el-dropdown-item>
              <el-dropdown-item class="appItem">应用名称2</el-dropdown-item>
              <el-dropdown-item disabled divided>系统名称3</el-dropdown-item>
              <el-dropdown-item class="appItem">应用名称1</el-dropdown-item>
              <el-dropdown-item class="appItem">应用名称2</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!--应用名称 结束-->

        <div class="currentProjectName">耗材联采限价采购-宁德耗材联合谈判</div>
      </div>

      <!--顶部栏 右侧-->
      <div class="dsf">
        <div class="projectName">
          <el-dropdown>
            <span class="mlr30 cfff">
              宁德市药械联合限价采购平台<i class="el-icon-arrow-down ml10"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>宁德市药械联合限价采购平台</el-dropdown-item>
              <el-dropdown-item>三明市药械联合限价采购平台</el-dropdown-item>
              <el-dropdown-item>福州市药械联合限价采购招标项目</el-dropdown-item>
              <el-dropdown-item>宁德市药械联合限价采购平台</el-dropdown-item>
              <el-dropdown-item>宁德市药械联合限价采购平台</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="userInfo">
          <el-dropdown>
          <span class="mr10 dsf aic cfff">
            <img src="@/images/default.jpg" class="avatar">
            用户名
            <i class="el-icon-arrow-down ml10"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>基本信息</el-dropdown-item>
              <el-dropdown-item>手机号绑定/解绑</el-dropdown-item>
              <el-dropdown-item>操作日志</el-dropdown-item>
              <el-dropdown-item>退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header>
    <!--头部栏 结束-->

    <!--主框架 开始-->
    <div class="middleWrap">
      <!--左侧 开始-->
      <transition name="left">
        <aside class="left" v-if="showMenu">
          <!--搜索和收藏 开始-->
          <header class="searchAndFavor">
            <el-input placeholder="请输入内容" size="mini">
              <i class="el-icon-search searchiIcon" slot="suffix" @click="onSearch"></i>
            </el-input>
            <div class="myFavor">
              <el-dropdown>
                <i class="el-icon-star-on myFavorIcon"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item disabled>收藏夹</el-dropdown-item>
                  <el-dropdown-item divided style="padding-right: 10px;">
                    <span @click="openFavorPage">页面名称1</span>
                    <i class="el-icon-close ml10" @click="deleteFavor"></i>
                  </el-dropdown-item>
                  <el-dropdown-item style="padding-right: 10px;">
                    <span @click="openFavorPage">页面名称2</span>
                    <i class="el-icon-close ml10" @click="deleteFavor"></i>
                  </el-dropdown-item>
                  <el-dropdown-item style="padding-right: 10px;">
                    <span @click="openFavorPage">页面名称3</span>
                    <i class="el-icon-close ml10" @click="deleteFavor"></i>
                  </el-dropdown-item>
                  <el-dropdown-item style="padding-right: 10px;">
                    <span @click="openFavorPage">页面名称4</span>
                    <i class="el-icon-close ml10" @click="deleteFavor"></i>
                  </el-dropdown-item>
                  <el-dropdown-item style="padding-right: 10px;">
                    <span @click="openFavorPage">页面名称5</span>
                    <i class="el-icon-close ml10" @click="deleteFavor"></i>
                  </el-dropdown-item>

                </el-dropdown-menu>
              </el-dropdown>

            </div>
          </header>
          <!--搜索和收藏 结束-->

          <!--左侧主菜单 开始-->
          <el-menu>

            <el-submenu v-for="(item,index) in config.menu" :key="index" :index="item.index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(subItem,subIndex) in item.sub"
                              :key="subIndex"
                              @click="addTab(subItem)"
                              :index="subItem.index">
                  {{subItem.name}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <!--<el-submenu index="1">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>导航一</span>-->
              <!--</template>-->
              <!--<el-menu-item-group>-->
                <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
              <!--</el-menu-item-group>-->
            <!--</el-submenu>-->

            <!--<el-submenu index="2">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span>导航二</span>-->
              <!--</template>-->
              <!--<el-menu-item-group>-->
                <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
                <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
              <!--</el-menu-item-group>-->
            <!--</el-submenu>-->

            <!--<el-submenu index="3">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-document"></i>-->
                <!--<span>导航三</span>-->
              <!--</template>-->
              <!--<el-menu-item-group>-->
                <!--<el-menu-item index="3-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="3-2">选项2</el-menu-item>-->
                <!--<el-menu-item index="3-3">选项3</el-menu-item>-->
              <!--</el-menu-item-group>-->
            <!--</el-submenu>-->

            <!--<el-submenu index="4">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-setting"></i>-->
                <!--<span>导航四</span>-->
              <!--</template>-->
              <!--<el-menu-item-group>-->
                <!--<el-menu-item index="4-1">选项1</el-menu-item>-->
                <!--<el-menu-item index="4-2">选项2</el-menu-item>-->
                <!--<el-menu-item index="4-3">选项3</el-menu-item>-->
              <!--</el-menu-item-group>-->
            <!--</el-submenu>-->

          </el-menu>
          <!--左侧主菜单 结束-->

          <!--左侧 隐藏菜单按钮 开始-->
          <div class="hideMenuButton" v-if="showMenu" @click="showHideMenu(false)">
            <i class="el-icon-arrow-left"></i>
          </div>
          <!--左侧 隐藏菜单按钮 结束-->

        </aside>
      </transition>
      <!--左侧 结束-->

      <!--左侧 显示菜单按钮 开始-->
      <transition name="showMenu" v-if="!showMenu">
        <div class="showMenuButton" @click="showHideMenu(true)">
          <i class="el-icon-arrow-right"></i>
        </div>
      </transition>
      <!--左侧 显示菜单按钮 结束-->

      <!--右侧 开始-->
      <div class="right">

        <!--打开的菜单(tab-bar) 开始-->
        <div class="tabWrap">
          <div class="tabBar">
            <el-tabs v-model="currentTab" type="card" @tab-remove="removeTab">
              <el-tab-pane
                  v-for="(item, index) in openedTabs"
                  :key="item.name"
                  :label="item.title"
                  :name="item.name"
                  :closable="item.name !== 'index'"
              >
                <el-dropdown  slot="label" placement="bottom">
                  <i v-if="item.isHome" class="el-icon-location tabIcon"></i>
                  <div v-else>{{item.title}}</div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <div class="tabDropdown">
                        <div class="tabDropdownRefresh">
                            <i class="el-icon-refresh"></i> 刷新
                        </div>
                        <div class="tabDropdownFavor tabDropdownFavorActivity">
                          <i class="el-icon-star-off"></i> 收藏
                        </div>
                      </div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <!--{{item.component}}-->
                <component :is="item.component"></component>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="tabOperate">
            <el-dropdown  trigger="click">
              <i class="el-icon-tickets"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>全屏</el-dropdown-item>
                <el-dropdown-item>关闭全部</el-dropdown-item>
                <el-dropdown-item>关闭其他标签</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>
        </div>

        <!--打开的菜单(tab-bar) 结束-->

        <!--<router-view></router-view>-->
      </div>
      <!--右侧 结束-->

    </div>
    <!--主框架 结束-->

  </div>
</template>
<script>
  import config from './mainconf'
  import index from '@/view/index'
  import hello1 from '@/view/hello1'
  import hello2 from '@/view/hello2'
  import hello3 from '@/view/hello3'
  export default {
    components:{index, hello1, hello2, hello3 },
    data() {
      return {
        config: config,
        showMenu: true,

        // 以下是 tab-bar 的数据
        currentTab: 'index',
        openedTabs: [
          {
            title: '首页',
            name: 'index',
            component: 'index'
          }
        ],
        tabIndex: 1,

        // 收藏页面列表
        favorList: [
          {name: '组件管理', component: ''},
          {name: '注册证管理', component: ''},
          {name: '产品管理', component: ''},
        ]
      }
    },
    methods: {
      // 显示/隐藏 主菜单
      showHideMenu(bool) {
        this.showMenu = bool
      },
      // 打开收藏页面
      openFavorPage() {
        console.log('打开收藏页面')
      },
      // 删除收藏夹项
      deleteFavor(e) {
        console.log('删除收藏夹项')
      },
      // 搜索
      onSearch() {
        console.log('搜索')
      },
      // 删除 tab 项
      removeTab(targetName) {
        console.log('删除 tab 项', targetName)
      },
      // 打开新的 tab  项
      addTab(item) {

        this.currentTab = item.name

        // 判断 tab 项是否已存在
        if(this.openedTabs.find(i => i.name === item.name)){
          return
        }

        this.openedTabs.push({
          title: item.name,    // 显示标题
          name:item.name,      // 用于标记当前打开 tab 的 name
          component: item.component,   // tab 里显示的组件
        });

      },
    },
    created() {
    },
  }
</script>

<!--公共样式-->
<style>
  @import "~@/styles/cover.css";

  .cfff {
    color: #fff;
  }

  .mlr30 {
    margin: 0 30px;
  }

  .mr5 {
    margin-right: 5px;
  }

  .ml10 {
    margin-left: 10px;
  }

  .mr10 {
    margin-right: 10px;
  }

  .ml20 {
    margin-left: 20px;
  }

  .mr20 {
    margin-right: 20px;
  }

  .pr10 {
    padding-right: 10px;
  }

  .dsf {
    display: flex;
  }

  .jcc {
    justify-content: center;
  }

  .aic {
    align-items: center;
  }

  .csp {
    cursor: pointer;
  }
</style>

<!--私有样式-->
<style scoped>
  /*总容器*/
  .indexWrap {
    min-width: 1200px;
  }

  /*顶部栏*/
  .topWrap {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    background: #399CFF;
    color: #fff;
  }

  /*头部logo*/
  .topLogo {
    width: 200px;
    height: 100%;
    background: #0680F9;
    border-right:1px solid #6DB6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
  }

  /*应用选择*/
  .appName {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 64px;
    background: #0680F9;
    color: #fff;
  }

  .appSelected {
    color: #fff;
    font-size: 30px;
  }

  .appItem {
    padding-left: 30px;
    padding-right: 30px;
  }

  /*当前项目名称*/
  .currentProjectName {
    padding-left: 15px;
    line-height: 64px;
    font-size: 16px;
  }

  /*项目选择*/
  .projectName {
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: red;
  }

  /*个人信息*/
  .userInfo {
    display: flex;
    align-items: center;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  /*主容器*/
  .middleWrap {
    width: 100%;
    height: calc(100vh - 64px);
    overflow: hidden;
    display: flex;
    position: relative;
  }

  /*主菜单*/
  .left {
    width: 200px;
    height: 100%;
    display: block;
    /*background: #fff;*/
    background: #071526;
    /*border-right: 1px solid #e6e6e6;*/
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .left::-webkit-scrollbar {
    display: none;
  }

  /*菜单显示/隐藏 动画*/
  .left-enter-active, .left-leave-active {
    transition: width .5s;
  }

  .left-enter, .left-leave-to {
    width: 0px;
  }

  /*搜索和收藏*/
  .searchAndFavor {
    padding: 8px 5px 0 5px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    /*border-bottom: 1px solid #e6e6e6;*/
    background: #163B65;
    height: 46px;
  }

  .searchiIcon {
    font-size: 20px;
    line-height: 28px;
  }

  .myFavor {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #2b5992;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }

  .myFavorIcon {
    color: #fff;
    font-size: 20px;
    line-height: 28px;
  }

  /*隐藏菜单 按钮*/
  .hideMenuButton {
    width: 12px;
    height: 50px;
    background: rgb(3, 10, 19);
    position: absolute;
    top: 50%;
    left: 187px;
    transform: translate(0, -50%);
    border-radius: 10px 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    z-index: 99;
  }

  /*显示菜单 按钮*/
  .showMenuButton {
    width: 12px;
    height: 50px;
    background: rgb(3, 10, 19);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    border-radius: 0px 10px 10px 0px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    z-index: 99;
  }

  /*显示/隐藏 按鈕 动画*/
  .showMenu-enter-active, .showMenu-leave-active {
    transition: opacity .5s;
  }

  .showMenu-enter, .showMenu-leave-to {
    opacity: 0;
  }

  /*右侧布局*/
  .right {
    width: 100%;
    background: #fff;
    border-top: 1px solid #e6e6e6;
  }

  .tabWrap {
    position: relative;
  }

  .tabBar {
    background: #F5F7FA;
    height: 46px;
    padding-top: 5px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .tabIcon {
    font-size: 20px;
    line-height: 30px;
    box-sizing: border-box;
  }

  .tabOperate {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 5px;
    top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 3px;
  }

  .tabDropdown{
    display: flex;
  }
  .tabDropdown i {
    font-size: 20px;
    margin-right: 5px;
  }

  .tabDropdownRefresh {
    color:#606266;
    font-size: 14px;
    padding-right: 10px;
    border-right: 1px solid #E4E7ED;
    display: flex;
    align-items: center;
  }
  .tabDropdownFavor{
    color:#606266;
    font-size: 14px;
    padding-left: 10px;
  }

  .tabDropdownFavorActivity{
    color:#399CFF;
  }
</style>