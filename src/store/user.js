import { getToken, setToken } from '@/libs/util'

export default {
  state: {
    token: getToken()
  },
  getters: {},
  mutations: {},
  actions: {
    // 获取用户信息
    getUserInfo ({ state, commit }) {}
  }
}
