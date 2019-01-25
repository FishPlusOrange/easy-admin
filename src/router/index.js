import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex'
import iView from 'iview'
import routes from './routes'
import whiteList from './whiteList'

Vue.use(Router)

// Router
const router = new Router({
  routes,
  mode: 'history'
})

// 路由跳转前判断
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

// 路由跳转后操作
router.afterEach(() => {
  iView.LoadingBar.finish()
})

export default router
