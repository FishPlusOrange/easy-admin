import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import iView from 'iview'
import routes from './routes'
import whiteList from './whiteList'
import { getToken, setToken } from '@/libs/util'

Vue.use(Router)

// Router
const router = new Router({
  routes,
  mode: 'history'
})

// 路由跳转前判断
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (token) {
    // 处于登录状态时向登录页跳转
    if (to.name === 'login') {
      next({ name: 'main' }) // 重定向至系统主页
    } else {
      if (store.getters.hasGotUserInfo) {
        next() // TODO 权限控制
      } else {
        store.dispatch('getUserInfo')
          .then(userInfo => {
            next() // TODO 权限控制
          })
          .catch(() => {
            setToken('') // 清空 token
            next({ name: 'login' })
          })
      }
    }
  } else {
    // 判断是否在免登陆白名单中
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next({ name: 'login' }) // 重定向至登录页
    }
  }
})

// 路由跳转后操作
router.afterEach(() => {
  iView.LoadingBar.finish()
})

export default router
