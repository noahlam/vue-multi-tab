import store from '@/Store/index'

const RouterMethods = Object.create(null)




RouterMethods.install = function (Vue, options) {
  Vue.prototype.$tab = {
    // 设置当前显示的 tab name
    setIndex(data) {
      store.commit('SetCurrentTabIndex', data)
    },
    // 打开新的 tab  项
    open (item) {
      store.commit('OpenedTabsPush', item)
    },
    // 删除 tab 项
    close (menuId) {
      store.commit('OpenedTabsRemove',menuId)
    },
    push(item) {
      store.commit('OpenedSubTabsPush',item)
    },
    back(num) {
      store.commit('OpenedSubTabsBack',num)
    },
    replace(item) {
      store.commit('OpenedSubTabsReplace',item)
    },
    // 关闭所有 tab
    closeAll () {
      store.commit('CloseAllTabs')
    },
    // 关闭其他标签
    closeOthers () {
      store.commit('CloseOthersTabs')
    },
  }
}

export default RouterMethods