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
       <div class="appName">
         <el-dropdown style="min-width: 200px">
            <span class="appSelected">
              应用名称1<i class="el-icon-arrow-down ml10"></i>
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
     </div>

      <!--顶部栏 右侧-->
      <div class="dsf">
        <div class="projectName">
          <el-dropdown>
            <span class="mlr30">
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
          <el-dropdown >
          <span class="mr10 dsf aic">
            <img src="@/assets/default.jpg" class="avatar">
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
    <div class="mainWrap">
      <!--左侧菜单 开始-->
      <aside class="leftMenu">
        <div class="leftSearch">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
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
  .mlr30{margin: 0 30px;}
  .ml10{margin-left: 10px}
  .mr10{margin-right: 10px}
  .ml20{margin-left: 20px}
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
    display: flex;
    justify-content: space-between;
  }
  .topLogo{
    width: 250px;
    height: 60px;
    background: #409EFF;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
  }
  .appName{
    display: flex;
    align-items: center;
  }
  .appSelected{
    margin-left: 20px;
    color:#409EFF;
  }
  .appItem{
    padding-left: 30px;
    padding-right: 30px;
  }
  .projectName{
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
  .userInfo{
    display: flex;
    align-items: center;
  }
  .avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
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
  .leftSearch{

  }
</style>