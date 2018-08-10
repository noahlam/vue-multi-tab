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
        <div v-for="(item, i) in list" :key="i" ref="items" class="mr10"  draggable="true" @dragstart='drag($event, i)' @drop='drop($event, i)' @dragover='allowDrop($event)'>
          <el-checkbox v-model="item.value" :label="item.label" border size="medium" > </el-checkbox>
        </div>
      </div>
      <div class="dsf aic title">
        <h4 class="blue mr10">表格显示列配置</h4>
        <span> （勾选后可在表格中显示该数据内容、拖拽可进行排序）</span>
      </div>
      <div class="bdb pb20">
        <el-checkbox v-for="(item, i) in list" :key="i" v-model="item.value" :label="item.label" border size="medium"> </el-checkbox>
      </div>
      <div class="ptb10 bdb tac">
        <el-button @click="visible=false"  size="medium" type="primary">确认修改</el-button>
        <el-button @click="visible=false"  size="medium" >恢复默认</el-button>
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
      }
    },
    methods: {
      // 移动位置
      drag (event, index) { //start
        if (navigator.userAgent.indexOf("Firefox") > -1) {
          event.dataTransfer.setData("imgInfo", event.currentTarget.id)
        }
        if (this.$refs.items.length > 1) {
          this.$refs.items.map(item => {
            item.children[0].oldClassName = item.children[0].className
          })
        }
        this.moveDom = event.currentTarget
        this.moveIndex = index
      },
      drop (event, index) { // end
        event.preventDefault();
        this.changeDom = event.currentTarget
        this.changeDom.children[0].className = this.changeDom.children[0].oldClassName
        let obj = this.list.splice(this.moveIndex, 1)[0]
        this.list.splice(index, 0, obj)
      },
      allowDrop (event) { // moving
        event.preventDefault()
        this.changeDom = event.currentTarget
        if (this.$refs.items.length > 1) {
          this.$refs.items.map(item => {
            item.children[0].className = item.children[0].oldClassName
          })
          this.changeDom.children[0].className = this.changeDom.children[0].oldClassName + ' redBorder'
        }
      },
      // 移动位置 ---end
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