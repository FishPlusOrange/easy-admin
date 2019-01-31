export default [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/components/login'], resolve),
    meta: {
      showInMenu: false
    }
  },
  {
    path: '/main',
    name: 'main',
    component: resolve => require(['@/components/main'], resolve),
    meta: {
      showInMenu: false
    }
  },
  {
    path: '/401',
    name: 'error_401',
    component: resolve => require(['@/components/error/401'], resolve),
    meta: {
      showInMenu: false
    }
  },
  {
    path: '*',
    name: 'error_404',
    component: resolve => require(['@/components/error/404'], resolve),
    meta: {
      showInMenu: false
    }
  }
]
