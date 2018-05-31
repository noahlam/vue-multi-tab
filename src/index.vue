<template>
  <div class="indexWrap">
    <!--头部栏 开始-->
    <header class="topHeader">
     <!--顶部栏 左侧-->
      <div class="dsf">
       <!--logo 开始-->
       <div class="topLogo">  logo+文字</div>
       <!--logo 结束-->

       <!--应用名称 开始-->
       <div class="appName">应用名称</div>
       <!--应用名称 结束-->
     </div>

      <!--顶部栏 右侧-->
      <div class="dsf">
        <div class="projectName"> 宁德市药械联合限价采购平台--项目名称</div>
        <div class="userInfo">用户名</div>
      </div>
    </header>
    <!--头部栏 结束-->

    <!--主框架 开始-->
    <div class="mainWrap">
      <!--左侧菜单 开始-->
      <aside class="leftMenu">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </aside>
      <!--左侧菜单 结束-->
      <router-view></router-view>
    </div>
    <!--主框架 结束-->

  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    created () {},
  }
</script>

<!--公共样式-->
<style>
  .dsf{display: flex}
  .jcc{justify-content: center;}
  .aic{align-items: center;}
</style>

<!--私有样式-->
<style scoped>
  .indexWrap{
    min-width: 1200px;
  }
  .topHeader{
    width: 100%;
    height: 60px;
    background: #f00;
    display: flex;
    justify-content: space-between;
  }
  .topLogo{
    width: 250px;
    height: 60px;
    background: #409EFF;
    display: flex;
    align-items: center;
    color:#fff;
  }
  .appName{
    display: flex;
    align-items: center;
  }
  .projectName{
    display: flex;
    align-items: center;
  }
  .userInfo{
    display: flex;
    align-items: center;
  }
  .mainWrap{
    width: 100%;
    height: calc(100vh - 60px);
    background: #8f949a;
    overflow: hidden;
    display: flex;
  }
  .leftMenu{
    width: 250px;
    height: 100%;
    display: block;
    background: #0a6cd6;
    overflow-y:scroll;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
  }
  .leftMenu::-webkit-scrollbar {display: none;}
</style>