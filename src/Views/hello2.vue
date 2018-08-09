<template>
  <div class="wrap">
    我是 Hello 2
    <input type="button" value="后退" @click="goback">
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      goback() {
        this.$tab.back()
      }
    },
    created() {
      // console.log('路由查询参数',this.$tab.query())
    },
  }
</script>
<style scoped>
</style>