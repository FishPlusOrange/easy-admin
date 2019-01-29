export default [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/components/login'], resolve)
  },
  {
    path: '/main',
    name: 'main',
    component: resolve => require(['@/components/main'], resolve)
  }
]
