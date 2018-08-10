<template>
  <div class="wrap">
    <Form />

    <FilterAndCustom />
    <TableList />

  </div>
</template>
<script>
  import TableList from '@/Components/Table/TableList'
  import Form from '@/Components/Form/Form'
  import FilterAndCustom from '@/Components/FilterAndCustom'
  export default {
    components: {TableList,Form,FilterAndCustom},
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