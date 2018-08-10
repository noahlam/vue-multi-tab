<template>
  <div>
    <div class="dsf jcb aic ptb10" v-show="config.showCollect">
      <h4 class="m0 collectTitle"><i class="el-icon-star-on mr10"></i>收藏的数据</h4>
      <el-button size="medium" icon="el-icon-close" @click="config.showCollect = false">关闭收藏</el-button>
    </div>
    <el-table :data="listData" ref="table" border style="width: 100%" class="bgt"  @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"> </el-table-column>
      <el-table-column v-for="(item, index) in config.columns" v-if="item.show" :key="index" :sortable="item.sortable" prop="date" :label="item.title">
        <template slot-scope="scope">
          <!--<div v-if="item.tpl" v-html="item.tpl"></div>-->
          <!--<span v-else>{{item.displayField}}</span>-->
          <div v-html="handleField(item, scope.row)"></div>
        </template>
      </el-table-column>
    </el-table>
    <div class="dsf jcb ptb20 bdb">
      <div class="dsf aic">
        <el-checkbox class="mr10" v-model="isSelectAll" label="全选" border size="medium" @change="toSelectAll"> </el-checkbox>
        <div class="mr10 collectBtn" v-show="!config.showCollect">
          <span class="mr10">加入收藏</span>|<span class="ml10" @click="config.showCollect = true">查看收藏</span>
        </div>

        <el-dropdown  trigger="click" placement="top">
          <el-button class="el-dropdown-link"  size="medium"> 导出 </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="XML">导出XML</el-dropdown-item>
            <el-dropdown-item command="CSV">导出CSV</el-dropdown-item>
            <el-dropdown-item command="EXCEL">导出EXCEL</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-pagination :current-page="12" :page-sizes="[100, 200, 300, 400]"
         :page-size="100"
         layout="total, sizes, prev, pager, next, jumper"
         :total="400">
      </el-pagination>
    </div>
    <div class="ptb20 dsf">
      <div class="mr20" v-for="(item, index) in config.actions" :key="index">
        <el-tooltip v-if="item.tooltip" class="item" effect="dark" :content="btnToolTip(item)" placement="top">
          <el-button class="footBtn"
                     :type="`${item.red ? 'danger' : 'primary'}`"
                     @click="toClickBtn(item)"
          >{{item.text}}</el-button>
        </el-tooltip>
        <el-button v-else class="footBtn"
                   :type="`${item.red ? 'danger' : 'primary'}`"
                   @click="toClickBtn(item)"
        >{{item.text}}</el-button>
      </div>

    </div>
  </div>
  
</template>

<script>

  import config from '../../TableConfig'
  export default {
    name: 'TableList',
    data () {
      return {
        config: config,
        selectList: [],
        isSelectAll: false // 是否全选
      }
    },
    computed : {
      listData () {
        return this.config.listData.filter(item => {
          return config.showCollect ? item.collect : true
        })
      }
    },
    methods: {
      // 处理每个单元格要显示的数据
      handleField (item, dataItem) {
        if (item.tpl) {
          return item.tpl.replace('{name}', dataItem[item.name])
        } else {
          return dataItem[item.displayField]
        }
      },
      // 选中的数据
      handleSelectionChange (val) {
        this.selectList = val
        this.isSelectAll = val.length >= this.config.listData.length
      },
      // 全选
      toSelectAll () {
        this.$refs.table.toggleAllSelection()
      },

      // 按钮的tooltip
      btnToolTip (btnItem) {
        if (btnItem.type === 'onerow') {
          if (this.selectList.length !== 1) {
            return btnItem.tooltip + '，只有选中一行'
          }
        } else if (btnItem.type === 'batch') {
          if (this.selectList.length <= 1) {
            return btnItem.tooltip + '，至少选择两行'
          }
        }
        return btnItem.tooltip
      },
      // 按钮点击
      toClickBtn (btnItem) {
        // type: 'onerow|batch|normal', //按钮的模式onerow只有选中一行时才能点击，batch需要选中大于1条，normal一直可操作，默认为normal
        if (btnItem.type === 'onerow') {
          if (this.selectList.length !== 1) {
            this.$message.error('请选择一条数据')
            return false
          }
        } else if (btnItem.type === 'batch') {
          if (this.selectList.length <= 1) {
            this.$message.error('请选择大于一条数据')
            return false
          }
        }

        // 下面是点击可操作的

      }
    }
  }
</script>

<style scoped>
  .footBtn{
    min-width: 120px;
  }
  .collectBtn{
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    height: 36px;
    line-height: 1;
    font-size: 14px;
    color: #606266;
  }
  .collectBtn span{
    cursor: pointer;
  }
  .collectBtn span:hover{
    color: #409EFF;
  }
  .collectTitle{
    font-size: 16px;
  }
  .collectTitle i{
    color: #666;
  }

</style>