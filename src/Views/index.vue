<template>
  <div>
    <h3>关闭页签: this.$tab.close()</h3>
    <pre>
      接收一个 menuId 作为参数,对应要关闭的标签的 menuId.
      如果menuId没传,或者传的menuId,在一打开的tab列表里面没找到对应的tab.则不做任何操作.
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
