<template>
  <div class="box ptb20 pr10">
    <FilterList />
    <Custom />
  </div>
</template>

<script>
  import FilterList from './FilterHistroy/FilterList'
  import Custom from './Custom/Custom'
  export default {
    name: '',
    components: {FilterList,Custom}
  }
</script>

<style scoped>
  .box{
    text-align: right;
  }

</style>