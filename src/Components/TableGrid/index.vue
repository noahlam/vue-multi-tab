<template>
  <div>
    <Form />

    <div class="box ptb10">
      <FilterList />
      <Custom />
    </div>

    <TableList />
  </div>
</template>

<script>
  import TableList from './Components/Table'
  import Form from './Components/Form'
  // import FilterAndCustom from './Components/FilterAndCustom'
  import FilterList from './Components/FilterHistroy/FilterList'
  import Custom from './Components/Custom/Custom'
  export default {
    components: {TableList,Form, FilterList, Custom},
    name: 'index'
  }
</script>

<style scoped>
  .box{
    text-align: right;
  }

</style>