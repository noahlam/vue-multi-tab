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
        this.$tab.push({
          name: 'hello2'
        })
      },
      replaceTo () {
        this.$tab.replace({
          name: 'hello2'
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