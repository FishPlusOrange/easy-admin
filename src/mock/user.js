import { getParamObj } from '@/libs/util'

const USER_MAP = {
  FishPlusOrange: {
    token: 'admin_access_token',
    userInfo: {
      userId: 666,
      userName: '管理员',
      email: 'email@fishplusorange.com',
      avatar: '',
      access: ['admin']
    }
  }
}

export const userLogin = req => {
  const paramObj = getParamObj(req.body)
  return { token: USER_MAP[paramObj.loginName] ? USER_MAP[paramObj.loginName].token : '' }
}

export const userLogout = req => {
  console.log(req)
}

export const getInfo = req => {
  const paramObj = getParamObj(req.url.split('?')[1])
  let userInfo = {}
  for (let key in USER_MAP) {
    USER_MAP[key].token === paramObj.token && (userInfo = USER_MAP[key].userInfo)
  }
  return { userInfo }
}
