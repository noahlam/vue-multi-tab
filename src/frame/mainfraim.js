import Vue from 'vue'


import  "babel-polyfill";
// import VueRouter from 'vue-router'

import index from './mainfraim.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import route from '@/router/index'
//
// console.log(route)
route(Vue)


Vue.use(ElementUI);
// Vue.use(VueRouter)
new Vue({
    el: '#app',
    render: v => v(index)
})