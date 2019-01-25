export default [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/components/Login'], resolve)
  },
  {
    path: '/main',
    name: 'main',
    component: resolve => require(['@/components/Main'], resolve)
  }
]
