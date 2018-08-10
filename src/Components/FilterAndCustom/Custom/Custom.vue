<template>
  <el-popover
     placement="bottom-end"
     width="80vw"
     popper-class="filterHistoryWrap"
     v-model="visible">
    <div class="contentWrap">
      <div class="dsf aic title">
        <h4 class="blue mr10">筛选条件配置</h4>
        <span> （勾选后可查询该数据、拖拽可进行排序）</span>
      </div>
      <div class="bdb pb20">
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
      </div>
      <div class="dsf aic title">
        <h4 class="blue mr10">表格显示列配置</h4>
        <span> （勾选后可在表格中显示该数据内容、拖拽可进行排序）</span>
      </div>
      <div class="bdb pb20">
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="value" label="备选项1" border size="medium"></el-checkbox>
      </div>
      <div class="ptb10 bdb tac">
        <el-button @click="visible=false"  size="medium" >关闭窗口</el-button>
      </div>
    </div>
    <el-button :type="`${visible ? 'primary' : ''}`"  size="medium" slot="reference">定制显示</el-button>
  </el-popover>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        visible: false,
        value: '',
        list: []
      }
    }
  }
</script>

<style scoped>
  .contentWrap{
    width: 80vw;
  }
  .title{
    color: #999;
  }

</style>
<style>
  .filterHistoryWrap{
    padding: 0 10px;
  }
</style>