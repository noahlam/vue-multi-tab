<template>
  <div class="wrap">
    <h3>打开页签: this.$tab.open()</h3>
    <pre>
      如果当前页签未打开过,则打开一个新的页签
      如果页签已存在,则跳转到当前页签.
      接收一个对象做参数,格式如下:

      {
        title: '子菜单1-2',
        component: 'index',
        menuId: '1-2'
      },

      这个格式,其实就是菜单配置里的格式,这么设计,是方便直接在菜单列表上打开当前菜单

      &lt;el-menu-item-group&gt;
        &lt;el-menu-item v-for="(item,index) in menuList"
                      :key="index"

                      @click="$tab.open(item)"

                      :index="item.menuId"&gt;
          { {item.title} }
        &lt;/el-menu-item&gt;
      &lt;/el-menu-item-group&gt;
    </pre>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {},
    created() {
    },
  }
</script>
<style scoped>
</style>
