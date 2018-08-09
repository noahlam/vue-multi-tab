<template>
    <el-form :model="config.data" label-position="0" size="medium" class="dsf fww">
      <el-form-item v-for="(item, index) in config.fields" :key="index+1" class="grad20" v-show="index < 5 || ( isOpen && index >=5)">
        <el-input :key="index" class="w100" v-if="item.xtype==='textformfield'" v-model="config.data[item.name]" :placeholder="item.label"></el-input>
      </el-form-item>
      <el-form-item  class="grad20">
        <el-button class="btn" type="primary">查 询</el-button>
        <el-button class="btn" type="primary" v-if="config.fields.length>5" @click="toToggle"> {{isOpen ? '收缩' : '展开'}} <i :class="isOpen?'el-icon-caret-top' :'el-icon-caret-bottom'"></i></el-button>
      </el-form-item>
    </el-form>
  
</template>

<script>
  import config from './FormConfig'
  export default {
    name: '',
    data () {
      return {
        config: config,
        isOpen: false
      }
    },
    methods: {
      // 展开/ 收缩
      toToggle () {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped>
  .btn{
    width: 100px;
  }

</style>