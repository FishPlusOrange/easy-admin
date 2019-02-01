export default [
  {
    path: '/',
    redirect: { name: 'Login' }
  },
  {
    path: '/login',
    name: 'Login',
    component: resolve => require(['@/components/login'], resolve),
    meta: {
      showInMenu: false
    }
  },
  {
    path: '/main',
    name: 'Main',
    component: resolve => require(['@/components/main'], resolve),
    meta: {
      showInMenu: false
    }
  },
  {
    path: '/401',
    name: 'Error401',
    component: resolve => require(['@/components/error/401'], resolve),
    meta: {
      showInMenu: false
    }
  },
  {
    path: '*',
    name: 'Error404',
    component: resolve => require(['@/components/error/404'], resolve),
    meta: {
      showInMenu: false
    }
  }
]
