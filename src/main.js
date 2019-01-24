import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/vuex/store'
import axios from 'axios'
import qs from 'qs'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import http from '@/libs/http'
import api from '@/libs/api'
import common from '@/assets/js/common'

Vue.use(iView)
Vue.use(common)

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
