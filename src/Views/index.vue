<template>
  <div>
    <h3>关闭页签: this.$tab.close()</h3>
    <pre>
      接收一个 menuId 作为参数,对应要关闭的 tab 的 menuId.
      如果 menuId 没传,或者传的 menuId 在打开的 tab 列表里面没找到对应的.则不做任何操作.
    </pre>
  </div>
</template>
<script>

  export default {
    data() {
      return {}
    },
    methods: {},
    created() {
    },
  }
</script>
<style scoped>
</style>
