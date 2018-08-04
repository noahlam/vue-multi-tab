import store from "@/Store";

export default {
  state: {
    currentTabIndex: 'home',              // 当前显示的 tab

    openedTabs: [                         // 当前打开的 tab 列表
      {
        title: '首页',                    //  tab 显示标题
        menuId: 'home',                   //  tab 内部名称(用来识别当前打开的tab)
        components: [{ name: 'home' }],   //  tab 对应的组件
      }
    ],
  },
  getters: {
    // 获取 当前显示的 tab name
    GetCurrentTabIndex (state) {
      return state.currentTabIndex
    },
    // 获取 当前打开的 tab 列表
    GetOpenedTabs (state) {
      return state.openedTabs
    },

  },
  mutations: {
    // 设置 hash
    SetHash () {
      console.log('要记得设置hash啊亲')
      let h = '#?' + 'asdfasdf'
      location.hash = h
    },
    // 设置 当前显示的 tab name
    SetCurrentTabIndex (state,data) {
      state.currentTabIndex = data
    },
    // 添加 tab 到 tab 列表
    OpenedTabsPush (state,item) {
      // 设置当前要显示的 tab name
      state.currentTabIndex =  item.menuId

      // 判断 tab 项是否已存在
      let tabExsit = state.openedTabs.find(i => i.menuId === item.menuId)
      if (!tabExsit) {
        state.openedTabs.push({
          title: item.title,                      // 显示标题
          menuId: item.menuId,                    // 用于标记当前打开 tab 的 name
          components: [{name: item.component}],   //  tab 对应的组件
        })
      }

      if(!item.fromHash) store.commit('SetHash')
    },
    // 当前 tab 内部的跳转
    OpenedSubTabsPush (state,item) {
      state.openedTabs.map(i => {
        if(i.menuId === state.currentTabIndex) {
          i.components.push(item)
        }
      })
    },
    // 返回
    OpenedSubTabsBack (state,num = 0) {
      if (num < 1) num = 1
      let end = state.openedTabs.length - num
      state.openedTabs.map(i => {
        if(i.menuId === state.currentTabIndex && end > 0) {
          i.components = i.components.slice(0,end)
        }
      })

    },
    // 替换当前组件
    OpenedSubTabsReplace (state,item) {
      let index = state.openedTabs.length - 2
      state.openedTabs.map(i => {
        if(i.menuId === state.currentTabIndex) {
         i.components.splice(index,1,item)
        }
      })
    },
    // 从 tab 列表 移除 tab
    OpenedTabsRemove (state,menuId) {
      state.openedTabs = state.openedTabs.filter(item => {
        return item.menuId === 'home' || item.menuId !== menuId
      })

      // 查询当前标签是否被关闭，如果被关闭，则打开主页标签
      let tab =  state.openedTabs.find(item => item.menuId === menuId)
      if(!tab)   state.currentTabIndex = 'home'

      store.commit('SetHash')
    },
    // 关闭 其他的 tab
    CloseOthersTabs (state) {
      state.openedTabs = state.openedTabs.filter(item => {
        return item.menuId === 'home' || item.menuId === state.currentTabIndex
      })
      store.commit('SetHash')
    },
    // 关闭所有 tab
    CloseAllTabs (state) {
      state.openedTabs.length = 1
      state.currentTabIndex = 'home'
      store.commit('SetHash')
    },
  },
  actions: {

  },
}