import VueRouter from 'vue-router'

import index from  '@/view/index'  //首页

const routes = [
	{path: '/', name: 'index', component: index},  // 首页
]

const router = new VueRouter({routes})

export default router