<template>
  <el-popover
     placement="bottom-end"
     :offset="122"
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
      <el-table :data="list" style="width: 100%" ref="table"  @selection-change="handleSelectionChange" empty-text="无历史查询">
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
      <div class="dsf jcb ptb20 bdb">
        <div class="dsf aic">
          <div class="mr10 footerBtn">
            <el-checkbox class="mr10" v-model="isSelectAll" label="全选" size="medium" @change="toSelectAll"> </el-checkbox>|<span class="ml10">删除</span>
          </div>
        </div>
        <el-pagination :current-page="12" :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="400">
        </el-pagination>
      </div>
      <div class="ptb10 tac">
        <el-button  size="medium" >清空全部数据</el-button>
        <el-button @click="visible=false"  size="medium" >关闭窗口</el-button>
      </div>
    </div>
    <el-button :type="`${visible ? 'primary' : ''}`"  size="medium" slot="reference" icon="el-icon-time">筛选历史</el-button>
  </el-popover>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        visible: false,
        value: '',
        list: [{}, {}, {}],
        isSelectAll: false // 是否全选
      }
    },
    methods: {
      handleSelectionChange (val) {
        console.log(val)
        this.isSelectAll = val.length >= this.list.length
      },
      toSelectAll () { // 全选的操作
        this.$refs.table.toggleAllSelection()
      }
    }
  }
</script>

<style scoped>
  .contentWrap{
    width: calc(100vw - 260px);
    min-width: 80vw;
  }
  .titleRight .el-input, .titleRight .el-select{
    width: 200px;
    margin-right: 10px;
  }
  .searchRight{
    margin-left: 10px;
    padding-left: 20px;
  }
  .footerBtn{
    padding: 7px 20px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    height: 36px;
    line-height: 20px;
    font-size: 14px;
    color: #606266;
  }
  .footerBtn span{
    cursor: pointer;
  }
  .footerBtn span:hover{
    color: #409EFF;
  }

</style>
<style>
  .filterHistoryWrap{
    padding: 0 10px;
  }
</style>