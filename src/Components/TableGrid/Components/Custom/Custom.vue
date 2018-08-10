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
      <div class="bdb pb20 dsf fww">
        <div v-for="(item, i) in formList" :key="i" ref="items" class="mr10"  draggable="true" @dragstart='dragForm($event, i)' @drop='dropForm($event, i)' @dragover='allowDropForm($event)'>
          <el-checkbox v-model="item.show" :label="item.label" border size="medium" > </el-checkbox>
        </div>
      </div>
      <div class="dsf aic title">
        <h4 class="blue mr10">表格显示列配置</h4>
        <span> （勾选后可在表格中显示该数据内容、拖拽可进行排序）</span>
      </div>
      <div class="bdb pb20 dsf fww">
        <div v-for="(item, i) in tableList" :key="i" ref="tableItems" class="mr10"  draggable="true" @dragstart='dragTable($event, i)' @drop='dropTable($event, i)' @dragover='allowDropTable($event)'>
          <el-checkbox v-model="item.show" :label="item.title" border size="medium" > </el-checkbox>
        </div>
      </div>
      <div class="ptb10 bdb tac">
        <el-button @click="toSetChange"  size="medium" type="primary">确认修改</el-button>
        <el-button @click="toResetChange"  size="medium" >恢复默认</el-button>
        <el-button @click="visible=false"  size="medium" >关闭窗口</el-button>
      </div>
    </div>
    <el-button :type="`${visible ? 'primary' : ''}`"  size="medium" slot="reference" icon="el-icon-setting">定制显示</el-button>
  </el-popover>
</template>

<script>
  import config from '../../TableConfig'
  export default {
    name: '',
    data () {
      return {
        config: config,
        visible: false,
        value: '',
        list: [
          {label: '备选项1', value: ''},
          {label: '备选项2', value: ''},
          {label: '备选项3', value: ''},
          {label: '备选项4', value: ''},
          {label: '备选项5', value: ''},
          {label: '备选项6', value: ''},
          {label: '备选项7', value: ''},
          {label: '备选项8', value: ''},
          {label: '备选项9', value: ''},
          {label: '备选项10', value: ''},
        ],
        moveDom: '', // 移动的元素
        changeDom: '', // 被移动到的
        moveIndex: 0, // 移动的对象的原始位置
        formList: [],
        tableList: []
      }
    },
    created () {
      this.tableList = JSON.parse(JSON.stringify(config.columns))
      this.formList = JSON.parse(JSON.stringify(config.fields))

    },
    methods: {
      // 表单数据移动位置
      dragForm (event, index) { //start
        if (navigator.userAgent.indexOf("Firefox") > -1) {
          event.dataTransfer.setData("imgInfo", event.currentTarget.id)
        }
        if (this.$refs.items.length > 1) {
          this.$refs.items.map(item => {
            item.children[0].oldClassName = item.children[0].className.replace(/redBorder/g, '')
          })
        }
        this.moveDom = event.currentTarget
        this.moveIndex = index
      },
      dropForm (event, index) { // end
        event.preventDefault();
        this.changeDom = event.currentTarget
        this.changeDom.children[0].className = this.changeDom.children[0].oldClassName
        let obj = this.formList.splice(this.moveIndex, 1)[0]
        this.formList.splice(index, 0, obj)
      },
      allowDropForm (event) { // moving
        event.preventDefault()
        this.changeDom = event.currentTarget
        if (this.$refs.items.length > 1) {
          this.$refs.items.map(item => {
            item.children[0].className = item.children[0].oldClassName
          })
          this.changeDom.children[0].className = this.changeDom.children[0].oldClassName + ' redBorder'
        }
      },
      // 表单数据移动位置 ---end

      // 表格数据移动位置
      dragTable (event, index) { //start
        if (navigator.userAgent.indexOf("Firefox") > -1) {
          event.dataTransfer.setData("imgInfo", event.currentTarget.id)
        }
        if (this.$refs.tableItems.length > 1) {
          this.$refs.tableItems.map(item => {
            item.children[0].oldClassName = item.children[0].className.replace(/redBorder/g, '')
          })
        }
        this.moveDom = event.currentTarget
        this.moveIndex = index
      },
      dropTable (event, index) { // end
        event.preventDefault();
        this.changeDom = event.currentTarget
        this.changeDom.children[0].className = this.changeDom.children[0].oldClassName
        let obj = this.tableList.splice(this.moveIndex, 1)[0]
        this.tableList.splice(index, 0, obj)
      },
      allowDropTable (event) { // moving
        event.preventDefault()
        this.changeDom = event.currentTarget
        if (this.$refs.tableItems.length > 1) {
          this.$refs.tableItems.map(item => {
            item.children[0].className = item.children[0].oldClassName
          })
          this.changeDom.children[0].className = this.changeDom.children[0].oldClassName + ' redBorder'
        }
      },
      // 表格数据移动位置 ---end

      // 保存修改
      toSetChange () {
        this.config.columns = this.tableList
        this.config.fields = this.formList
        this.visible = false
      },
      // 恢复
      toResetChange () {
        this.tableList = JSON.parse(JSON.stringify(config.columns))
        this.formList = JSON.parse(JSON.stringify(config.fields))
      }
    },
    watch: {
      visible (newValue) {
        if (newValue) {
          this.tableList = JSON.parse(JSON.stringify(config.columns))
          this.formList = JSON.parse(JSON.stringify(config.fields))
        }
      }
    }
  }
</script>

<style scoped>
  .contentWrap{
    width: calc(100vw - 260px);
    min-width: 80vw;
  }
  .title{
    color: #999;
  }
  .redBorder{
    border-color: red !important;
  }

</style>
<style>
  .filterHistoryWrap{
    padding: 0 10px;
  }
</style>