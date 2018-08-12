<template>
  <div class="wrap">
    <input type="button" value="后退" @click="goback">
    <h3>后退: this.$tab.back()</h3>
    <pre>
      接收一个正整数作为后退的步数(可选,默认是1)
    </pre>
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
