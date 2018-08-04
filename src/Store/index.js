import Vue from 'vue'
import Vuex from  'vuex'
import MainStore from '@/Frame/MainStore'

Vue.use(Vuex)

export default new Vuex.Store({
  //  模块化 store, 把需要 store 的数据导入到这里即可
  // store 格式参考 /src/Frame/MainStore.js
  modules: {
    MainStore,
  }
})
