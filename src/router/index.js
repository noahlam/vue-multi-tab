import Vue from "vue";

function route (vue) {
  // 第一个字符串是 组件名，第二个是组件路径，第三个是包名(如果不指定则已1.js,2.js....n.js命名)
	Vue.component('home', (resolve) => {require.ensure([], ()=>resolve(require('@/view/index.vue')), 'home')})
	Vue.component('hello1', (resolve) => {require.ensure([], ()=>resolve(require('@/view/hello1.vue')), 'hello1')})
	Vue.component('hello2', (resolve) => {require.ensure([], ()=>resolve(require('@/view/hello2.vue')), 'hello2')})
	Vue.component('hello3', (resolve) => {require.ensure([], ()=>resolve(require('@/view/hello3.vue')), 'hello3')})
}


export default route