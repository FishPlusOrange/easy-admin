import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 完整路由表
const fullRouterMap = [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/components/Login'], resolve)
  },
  {
    path: '/main',
    name: 'main',
    component: resolve => require(['@/components/Main'], resolve)
  }
]

const router = new Router({
  mode: 'history',
  routes: fullRouterMap
})

export default router
