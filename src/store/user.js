import axios from 'axios'
import qs from 'qs'
import { getToken, setToken } from '@/libs/util'

export default {
  state: {
    token: getToken(),
    userInfo: {
      userId: '',
      userName: '',
      email: '',
      avatar: '',
      access: ''
    }
  },
  getters: {
    hasGotUserInfo (state) {
      return !!state.userInfo.userId
    }
  },
  mutations: {
    setToken (state, payload) {
      const token = payload.token
      state.token = token
      setToken(token)
    },
    setUserInfo (state, payload) {
      const userInfo = payload.userInfo
      state.userInfo = userInfo
    }
  },
  actions: {
    // 用户登录
    userLogin ({ state, commit }, { loginName, password }) {
      return new Promise((resolve, reject) => {
        axios.post('/user/login', qs.stringify({
          loginName,
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
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        axios.get('/user/getInfo', {
          params: {
            token: state.token
          }
        })
          .then(res => {
            const userInfo = res.data.userInfo
            commit('setUserInfo', { userInfo })
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
