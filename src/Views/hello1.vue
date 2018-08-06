<template>
  <div class="wrap">
    我是 Hello 1
    <input type="text" value="123">
    <input type="button" value="跳转" @click="goto">
    <input type="button" value="替换" @click="replaceTo">
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      goto () {
        // 参数说明
        // 第一个参数【必选】 可以是字符串，也可以是对象
        // 1.字符串
        //   1.1 字符串不带参数，就是一个组件名。打开对应的组件
        //   1.2 字符串后带查询参数，会自动解析，并最终可以通过 this.$tab.query() 获取

        // 2.对象 第一个参数是一个对象的话，格式如下
        // {
        //    path:'组件名称',  // 必选
        //    query: {}        // 可选，Object类型，要带的查询参数
        // }
        //
        // 第一个参数【可选】，是一个对象
        // 也是查询参数，这个参数会上面参数合并，如果刚好有同名的参数，则会覆盖上面的参数
        //
        this.$tab.push('hello2?id=1&num=2',{age:188})
      },
      replaceTo () {
        this.$tab.replace({
          path: 'hello2'
        })
      },
    },
    created() {
    },
  }
</script>
<style scoped>
  .wrap{
    width: 100%;
    height: 1200px;
    background: #f5f5f5;
    /*overflow-y: scroll;*/
    box-sizing: border-box;
  }
</style>