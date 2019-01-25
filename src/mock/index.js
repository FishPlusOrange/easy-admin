import Mock from 'mockjs'
import { userLogin, userLogout, getInfo } from './user'

// 全局延时
Mock.setup({
  timeout: '500-1000'
})

Mock.mock(/\/user\/login/, 'post', userLogin)
Mock.mock(/\/user\/logout/, 'post', userLogout)
Mock.mock(/\/user\/getInfo/, 'get', getInfo)

export default Mock
