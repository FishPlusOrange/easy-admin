import Mock from 'mockjs'
import { loginByUsername } from './user'

// 全局延时
Mock.setup({
  timeout: '300-600'
})

// 用户登录
Mock.mock(/\/user\/login/, 'post', loginByUsername)
