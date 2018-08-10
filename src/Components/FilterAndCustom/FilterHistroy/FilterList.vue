<template>
  <el-popover
     placement="bottom-end"
     :offset="102"
     width="80vw"
     popper-class="filterHistoryWrap"
     v-model="visible">
    <div class="contentWrap">
      <div class="dsf jcb bdb aic">
        <h4>筛选历史</h4>
        <div class="titleRight dsf jce aic">
          <el-date-picker v-model="value" size="medium" type="datetime" placeholder="查询时间"> </el-date-picker>
          <el-select v-model="value" filterable placeholder="输入查询人"  size="medium">
            <el-option value="1"> 第一个</el-option>
            <el-option value="2"> 第二个</el-option>
            <el-option value="3"> 第三个</el-option>
          </el-select>
          <div class="searchRight ptb10 bdl">
            <el-input v-model="value" size="medium" placeholder="输入关键字"></el-input>
            <el-button size="medium"  type="primary">查询</el-button>

          </div>
        </div>
      </div>
      <el-table :data="list" style="width: 100%"  @selection-change="handleSelectionChange" empty-text="无历史查询">
        <el-table-column type="selection" width="55" align="center"> </el-table-column>
        <el-table-column prop="date" label="查询内容">
          <template slot-scope="scope">
            企业名称：
          </template>
        </el-table-column>
        <el-table-column prop="date" label="查询时间" sortable>
          <template slot-scope="scope">
            2018.01.09 12:00
          </template>
        </el-table-column>
        <el-table-column prop="date" label="查询人">
          <template slot-scope="scope">
            2018.01.09 12:00
          </template>
        </el-table-column>
        <el-table-column prop="date" label="操作">
          <template slot-scope="scope">
            <el-button size="small" type="primary" >查询</el-button>
            <el-button size="small" >置顶</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="ptb10 bdb tac">
        <el-button @click="visible=false"  size="medium" >关闭窗口</el-button>
      </div>
    </div>
    <el-button :type="`${visible ? 'primary' : ''}`"  size="medium" slot="reference">筛选历史</el-button>
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
  .titleRight .el-input, .titleRight .el-select{
    width: 200px;
    margin-right: 10px;
  }
  .searchRight{
    margin-left: 10px;
    padding-left: 20px;
  }

</style>
<style>
  .filterHistoryWrap{
    padding: 0 10px;
  }
</style>