<template>
  <div>
    <el-table :data="config.columns" border style="width: 100%">
      <el-table-column type="selection" width="55" align="center"> </el-table-column>
      <el-table-column v-for="(item, index) in config.columns" :sortable="item.sortable" prop="date" :label="item.title">
        <template slot-scope="scope">
          <div v-if="item.tpl" v-html="item.tpl"></div>
          <span v-else>{{item.displayField}}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="dsf jcb ptb20 bdb">
      <div></div>
      <el-pagination :current-page="12" :page-sizes="[100, 200, 300, 400]"
         :page-size="100"
         layout="total, sizes, prev, pager, next, jumper"
         :total="400">
      </el-pagination>
    </div>
    <div class="ptb20">
      <el-button class="footBtn" v-for="(item, index) in config.actions" :type="`${item.red ? 'danger' : 'primary'}`" :key="index">{{item.text}}</el-button>
    </div>
  </div>
  
</template>

<script>

  import config from './TableConfig'
  export default {
    name: 'TableList',
    data () {
      return {
        config: config
      }
    }
  }
</script>

<style scoped>
  .footBtn{
    min-width: 120px;
  }

</style>