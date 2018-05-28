import Vue from 'vue'
import VueRouter from 'vue-router'


import router from './router'
import app from './app'

Vue.use(VueRouter)
new Vue({
    el: '#app',
    router,
    render: v => v(app)
})