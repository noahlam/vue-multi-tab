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
    },
  }
</script>
<style scoped>
</style>