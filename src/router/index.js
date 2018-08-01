import Vue from "vue";

function route (vue) {
	Vue.component('index', (resolve) => {require.ensure([], ()=>resolve(require('@/view/index.vue')), 'index1')})
	Vue.component('hello1', (resolve) => {require.ensure([], ()=>resolve(require('@/view/hello1.vue')), 'hello1')})
	Vue.component('hello2', (resolve) => {require.ensure([], ()=>resolve(require('@/view/hello2.vue')), 'hello2')})
	Vue.component('hello3', (resolve) => {require.ensure([], ()=>resolve(require('@/view/hello3.vue')), 'hello3')})
}


export default route