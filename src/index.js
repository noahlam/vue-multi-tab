import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

import router from './router'
import app from './app'

Vue.use(ElementUI)
Vue.use(VueRouter)
new Vue({
    el: '#app',
    router,
    render: v => v(app)
})