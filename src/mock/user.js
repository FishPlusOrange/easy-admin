export const userLogin = req => {
  return { token: 'superAdmin' }
}

export const userLogout = req => {
  console.log(req)
}

export const getInfo = req => {
  console.log(req)
}
