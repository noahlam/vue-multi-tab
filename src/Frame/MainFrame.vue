<template>
  <div class="indexWrap">
    <!--头部栏 开始-->
    <header class="topWrap">
      <!--顶部栏 左侧-->
      <div class="dsf">
        <!--logo 开始-->
        <div class="topLogo">
          <img class="topLogo-img" src="@/Images/logo.png"/>
          <div class="topLogoText">Vue Multi Tab</div>
        </div>
        <!--logo 结束-->

        <!--应用名称 开始-->
        <div class="appName">
          <el-dropdown placement="bottom">
            <span class="appSelected">
              <i class="hx hx-hx_yingyongfenleiqita appNameIcon"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled>我的应用</el-dropdown-item>
              <el-dropdown-item v-for="(item,index) in config.application"
                                :key="index"
                                :divided="item.divided">

                <div class="appItem" @click="gotoApplication(item.url)">
                  <i :class='item.icon' class="appItem-icon" v-if="item.icon"></i>
                  <div>{{item.title}}</div>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!--应用名称 结束-->

        <!--当前项目名称-->
        <div class="currentProjectName">一个基于vue的单页面多页签应用程序</div>
      </div>

      <!--顶部栏 右侧-->
      <div class="dsf">
        <!--客户公司名称-->
        <div class="projectName">客户公司名称</div>
        <!--用户信息-->
        <div class="userInfoWrap">
          <div class="userInfo">
            <el-dropdown placement="bottom">
          <span class="mr10 dsf aic cfff">
            <img src="@/Images/default.jpg" class="avatar">
            张三丰
            <i class="el-icon-arrow-down ml10"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >修改密码</el-dropdown-item>
                <el-dropdown-item >基本信息</el-dropdown-item>
                <el-dropdown-item >手机号绑定/解绑</el-dropdown-item>
                <el-dropdown-item >操作日志</el-dropdown-item>
                <el-dropdown-item >退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </header>
    <!--头部栏 结束-->

    <!--主框架 开始-->
    <div class="middleWrap">
      <!--左侧 开始-->
      <transition name="left">
        <aside class="left" v-if="showMenu && !fullScreen">
          <!--搜索和收藏 开始-->
          <header class="searchAndFavor">
            <el-input placeholder="请输入内容" size="mini" v-model="searchText">
              <i class="el-icon-search searchiIcon" slot="suffix"></i>
            </el-input>
            <div class="myFavor">
              <el-dropdown placement="bottom">
                <i class="el-icon-star-on myFavorIcon"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item disabled>收藏夹</el-dropdown-item>

                  <el-dropdown-item v-for="(item,index) in config.favor"
                                    :key="index"
                                    :divided="index === 0">
                    <span @click="openTab(item)">{{item.title}}</span>
                    <i class="el-icon-close ml10" @click="config.removeCollect(item)"></i>
                  </el-dropdown-item>

                </el-dropdown-menu>
              </el-dropdown>

            </div>
          </header>
          <!--搜索和收藏 结束-->

          <!--左侧主菜单 开始-->
          <el-menu :default-active="currentTabIndex" :default-openeds="spreadedMenus">

            <el-submenu v-for="(item,index) in menuList" :key="index" :index="item.menuId">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(subItem,subIndex) in item.sub"
                              :key="subIndex"
                              @click="openTab(subItem)"
                              :index="subItem.menuId">
                  {{subItem.title}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
          <!--左侧主菜单 结束-->
        </aside>
      </transition>
      <!--左侧 结束-->


      <!--左侧 隐藏菜单按钮 开始-->
      <transition name="hideMenu">
        <div class="hideMenuButton" v-if="showMenu && !fullScreen" @click="showHideMenu(false)">
          <i class="el-icon-arrow-left"></i>
        </div>
      </transition>
      <!--左侧 隐藏菜单按钮 结束-->

      <!--左侧 显示菜单按钮 开始-->
      <transition name="showMenu">
        <div class="showMenuButton" v-if="!showMenu && !fullScreen" @click="showHideMenu(true)">
          <i class="el-icon-arrow-right"></i>
        </div>
      </transition>
      <!--左侧 显示菜单按钮 结束-->

      <!--右侧 开始-->
      <div :class="fullScreen? 'fullRight' : 'right'" ref="right">

        <!--打开的菜单(tab-bar) 开始-->
        <div class="tabWrap">
          <div class="tabBar">
            <el-tabs :value="currentTabIndex" @input="$tab.showTab" type="card" @tab-remove="$tab.close">

              <el-tab-pane
                  v-for="item in openedTabs"
                  :key="item.menuId"
                  :label="item.title"
                  :name="item.menuId"
                  :closable="item.menuId !== homeTabMenuId"
              >
                <el-dropdown slot="label" placement="bottom">
                   <span>
                      <i v-if="item.menuId === homeTabMenuId" class="hx hx-hx_zhuye tabIcon"></i>
                    <div v-else>{{item.title}}</div>
                   </span>

                  <el-dropdown-menu slot="dropdown"
                                    class="elDropdownMenu"
                                    :class="{hiddenDropDown:item.menuId !== currentTabIndex}">
                    <el-dropdown-item class="elDropdownItem">
                      <div class="tabDropdown">
                        <div class="tabDropdownRefresh" @click="reFreshTab(item)">
                          <i class="hx hx-hx_xshuaxin"></i> 刷新
                        </div>
                        <div class="tabDropdownLine"></div>
                        <div class="tabDropdownFavor" @click="config.addCollect(item)">
                          <i class="hx hx-hx_xshoucang"></i> 收藏
                        </div>
                      </div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <div class="content pr10">
                  <component :is="item.components[item.components.length - 1].path" v-if="item.components.length"></component>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="tabOperate">
            <el-dropdown trigger="click" placement="bottom-start">
              <!--<i class="el-icon-tickets"></i>-->
              <i class="hx hx-hx_gengduogongneng"></i>

              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="exitFullScreen" v-if="fullScreen">退出全屏</el-dropdown-item>
                <el-dropdown-item @click.native="enterFullScreen" v-else>全屏</el-dropdown-item>
                <el-dropdown-item @click.native="$tab.closeAll">关闭全部</el-dropdown-item>
                <el-dropdown-item @click.native="$tab.closeOthers">关闭其他标签</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>
        </div>

        <!--打开的菜单(tab-bar) 结束-->
        <!--<Router-Views></Router-Views>-->
      </div>
      <!--右侧 结束-->

    </div>
    <!--主框架 结束-->

  </div>
</template>
<script>
import config from './MainConf'

export default {
	data () {
		return {
			config: config,          // 全局配置
			showMenu: true,          // 是否显示左侧菜单
			fullScreen: false,       // 是否全屏
			searchText: '',           // 搜索框里的文字
			menuList: [],            // 复制一份菜单列表
			spreadedMenus: [],        // 要展开的菜单列表
		}
	},
	computed: {
		// 当前 tab 项的 name
		currentTabIndex () {
			return this.$store.getters.GetCurrentTabIndex
		},
		// 打开的页签列表
		openedTabs () {
			// console.log(this.$store.getters.GetOpenedTabs)
			return this.$store.getters.GetOpenedTabs
		},
    // 主页 tab 的 menuId
    homeTabMenuId () {
			return this.$store.getters.GetHomeTabMenuId
    }
	},
	watch: {
		searchText () {
			this.filterMenu()
		}
	},
	methods: {
		// 显示/隐藏 主菜单
		showHideMenu (bool) {
			this.showMenu = bool
		},
		// 全屏
		enterFullScreen () {
			let element = this.$refs['right']
			var requestMethod = element.requestFullScreen ||
				element.webkitRequestFullScreen ||
				element.mozRequestFullScreen ||
				element.msRequestFullScreen;
			// document.body.width = 1920
			// document.body.height = 1080
			requestMethod.call(document.body);
			this.fullScreen = true
		},
		// 退出全屏
		exitFullScreen () {
			this.fullScreen = false
			var exitMethod = document.exitFullscreen ||
				document.mozCancelFullScreen ||
				document.webkitExitFullscreen ||
				document.msExitFullScreen;
			exitMethod.call(document);
		},
		// 监听 ESC 按键
		listenKeyBoardEvent () {
			let that = this
			// 监听 ESC 按键
			window.onresize = function () {
				let isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled || false
				!isFull && that.exitFullScreen()
			}
		},
		// 跳转到对应的应用
		gotoApplication (url) {
			location.href = url
		},
		// 刷新组件
		reFreshTab (item) {
			let c = item.components
			item.components = []
			this.$nextTick(() => {
				item.components = c
			})
		},
		// 打开 页签
		openTab (item) {
			this.$tab.open(item)
			this.initializeMemu()
		},
		// 搜索菜单
		filterMenu () {
			let that = this
			this.spreadedMenus = []
			let keyword = this.searchText
			let menu = JSON.parse(JSON.stringify(this.config.menu))
			let newMenu = menu.filter(item => {
				item.sub = item.sub.filter(i => {
					return i.title.indexOf(keyword) > -1
				})
				return item.sub.length > 0 && this.spreadedMenus.push(item.menuId)
			})
			this.menuList = newMenu

		},
		initializeMemu () {
			this.menuList = JSON.parse(JSON.stringify(this.config.menu))
		},
		// 监听hash的变动
		listenHistory () {
			window.addEventListener('hashchange', (e) => {
				let url = location.href
				let indexOfSharp = url.indexOf('#')
				if (indexOfSharp > 0) {
					let hash = url.substr(indexOfSharp + 1)
					let tab = JSON.parse(Base64.decode(hash))
          if(tab.fromHistory) return
          tab.fromHistory = true
					this.$tab.open(tab)
				}
			})
		},
	},
		created () {
			this.$tab.reShow()
			this.listenKeyBoardEvent()
			this.initializeMemu()
      this.listenHistory()
		},
		mounted () {
		},
		beforeDestroy () {
		}
	}
</script>

<!--公共样式-->
<style>
  @import "~@/Styles/cover.css";
  @import "~@/Styles/common.css";
  @import "~@/Styles/iconfont/iconfont.css";
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
    border-right: 1px solid #53a9ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
  }

  .topLogo-img {
    height: 30px;
  }
  .topLogoText{
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
  }

  /*应用选择*/
  .appName {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 64px;
    /*background: #0680F9;*/
    background: #399CFF;
    color: #fff;
    border-right: 1px solid #53a9ff;
  }

  .appName:hover {
    background: #53a9ff;
  }

  .appNameIcon {
    font-size: 30px;
  }

  .appSelected {
    color: #fff;
    font-size: 30px;
  }

  .appItem {
    display: flex;
    align-items: center;
  }

  .appItem-icon {
    margin-right: 5px;
    font-size: 16px;
  }

  /*当前项目名称*/
  .currentProjectName {
    padding-left: 15px;
    line-height: 64px;
    font-size: 16px;
  }

  /*项目选择*/
  .projectName {
    padding-right: 10px;
    display: flex;
    align-items: center;
    border-right: 1px solid #53a9ff;
    /*color: red;*/
  }

  /*个人信息*/
  .userInfoWrap {
    padding-left: 10px;
  }

  .userInfoWrap:hover {
    background: #53a9ff;
  }

  .userInfo {
    margin: 12px 0;
    display: flex;
    align-items: center;
  }

  .avatar {
    width: 40px;
    height: 40px;
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

    -ms-overflow-style: none;

    /*-ms-scroll-chaining: chained;*/
    /*-ms-overflow-style: none;*/
    /*-ms-content-zooming: zoom;*/
    /*-ms-scroll-rails: none;*/
    /*-ms-content-zoom-limit-min: 100%;*/
    /*-ms-content-zoom-limit-max: 500%;*/
    /*-ms-scroll-snap-type: proximity;*/
    /*-ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);*/
    /*overflow: auto;*/
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

  .myFavor:hover {
    background: #3d76bc;
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
    position: fixed;
    top: 50%;
    left: 187px;
    transform: translate(0, -50%);

    background: #030A13;
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    z-index: 99;
  }

  /*显示菜单 按钮*/
  .showMenuButton {
    width: 12px;
    height: 50px;
    position: fixed;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);

    background: #030A13;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    z-index: 99;
  }

  /*显示/隐藏 按鈕 动画*/
  .hideMenu-enter-active, .hideMenu-leave-active {
    transition: all .5s;
  }

  .hideMenu-enter, .hideMenu-leave-to {
    left: -12px;
  }

  /*显示/隐藏 按鈕 动画*/
  .showMenu-enter-active, .showMenu-leave-active {
    transition: all .5s;
  }

  .showMenu-enter, .showMenu-leave-to {
    opacity: 0;
  }

  /*右侧布局*/
  .right {
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-shrink: 1;
    background: #fff;
    border-top: 1px solid #e6e6e6;
  }
  .fullRight {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    /*border-top: 1px solid #e6e6e6;*/
    z-index: 999;
  }

  .fullRight .content {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
  }

  .tabWrap {
    position: relative;
    width: 100%;
  }

  .tabBar {
    background: #F5F7FA;
    height: 46px;
    padding-top: 5px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  /*以下2个样式,是覆盖 element 下拉菜单的默认样式*/
  .elDropdownMenu {
    margin-top: 0 !important;
    padding: 3px 0;
  }

  /*没有选中的 tab 标签 要隐藏下拉菜单*/
  .hiddenDropDown {
    display: none !important;
  }

  .elDropdownItem:hover {
    background-color: #fff !important;
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
    border: 1px solid #e4e7ed;
  }

  .tabDropdown {
    display: flex;
    align-items: center;
  }

  .tabDropdown i {
    font-size: 20px;
    margin-right: 5px;
  }

  .tabDropdownLine {
    width: 1px;
    height: 16px;
    background: #E4E7ED;
  }

  .tabDropdownRefresh {
    color: #606266;
    font-size: 14px;
    padding-right: 10px;
    display: flex;
    align-items: center;
  }

  .tabDropdownRefresh:hover {
    color: #399CFF;
  }

  .tabDropdownFavor {
    color: #606266;
    font-size: 14px;
    padding-left: 10px;
  }

  .tabDropdownFavor:hover {
    color: #399CFF;
  }

  .content {
    width: 100%;
    height: calc(100vh - 130px);
    overflow-y: scroll;
    box-sizing: border-box;
  }
</style>
