import axios from 'axios'
import qs from 'qs'
import { getToken, setToken } from '@/libs/util'

export default {
  state: {
    token: getToken()
  },
  getters: {},
  mutations: {
    setToken (state, payload) {
      const token = payload.token
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 用户登录
    userLogin ({ state, commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        axios.post('/user/login', qs.stringify({
          username,
          password
        }))
          .then(res => {
            const token = res.data.token
            commit('setToken', { token }) // 设置 Vuex 和 localStorage 的 token
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // 获取用户信息
    getUserInfo ({ state, commit }) {}
  }
}
