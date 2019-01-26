// 解析参数
export const getParamObj = body => {
  const keyValueArr = body.split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    let keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}

// 获取 token
export const getToken = () => {
  const token = localStorage.token
  if (token) return token
  return !!token
}

// 设置 token
export const setToken = token => {
  token ? localStorage.setItem('token', token) : localStorage.removeItem('token')
}
