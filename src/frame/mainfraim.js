import Vue from 'vue'
// import VueRouter from 'vue-router'

import index from './mainfraim.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import route from '@/router/index'
//
// console.log(route)
route(Vue)




// Vue.component('index', (resolve) => {require(['@/view/index.vue'], resolve)})
// Vue.component('hello1', (resolve) => {require(['@/view/hello1.vue'], resolve)})
// Vue.component('hello2', (resolve) => {require(['@/view/hello2.vue'], resolve)})
// Vue.component('hello3', (resolve) => {require(['@/view/hello3.vue'], resolve)})



Vue.use(ElementUI);
// Vue.use(VueRouter)
new Vue({
    el: '#app',
    render: v => v(index)
})