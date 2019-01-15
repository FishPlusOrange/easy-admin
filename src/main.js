import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/vuex/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import http from '@/libs/http'
import api from '@/libs/api'
import common from '@/assets/js/common'

Vue.use(iView)
Vue.use(common)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
