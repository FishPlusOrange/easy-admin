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
export const setToken = token => localStorage.setItem('token', token)

// 权限路由跳转
export const nextWithAccess = (to, next, access, routes) => {
  if (judgeAccess(to.name, access, routes)) {
    next()
  } else {
    next({ replace: true, name: 'error401' })
  }
}

// 路由权限判断
export const judgeAccess = (name, access, routes) => {
  return routes.some(route => {
    if (route.name === name) {
      return hasAccess(route, access)
    } else if (route.children && route.children.length) {
      return judgeAccess(name, access, route.children)
    }
  })
}

// 路由权限确认
export const hasAccess = (route, access) => {
  if (route.meta && route.meta.access) {
    return access.includes(route.meta.access)
  } else {
    return true // 没有 meta 字段表示有权限
  }
}
