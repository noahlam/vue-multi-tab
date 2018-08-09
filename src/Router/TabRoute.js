// import Vue from "vue";

const route = Object.create(null)
route.install = function (vue) {
  // 第一个字符串是 组件名，第二个是组件路径，第三个是包名(如果不指定则已1.js,2.js....n.js命名)
	vue.component('home', (resolve) => {require.ensure([], ()=>resolve(require('@/Views/home.vue')), 'home')})
	vue.component('index', (resolve) => {require.ensure([], ()=>resolve(require('@/Views/index.vue')), 'index1')})
	vue.component('hello1', (resolve) => {require.ensure([], ()=>resolve(require('@/Views/hello1.vue')), 'hello1')})
	vue.component('hello2', (resolve) => {require.ensure([], ()=>resolve(require('@/Views/hello2.vue')), 'hello2')})
	vue.component('hello3', (resolve) => {require.ensure([], ()=>resolve(require('@/Views/hello3.vue')), 'hello3')})
}


export default route