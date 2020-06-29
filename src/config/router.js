
const router = [
  {
    path: '/',
    name: 'basicLayout',
    component: () => import('../layouts/BasicLayout'),
    // component: BasicLayout,
    hideInMenu: true,
    hideInBreadCrumb: true,
    children: [
      {
        path: '/react',
        name: 'react学习',
        component: () => import('../pages/Welcome'),
        children: [
          {
            path: '/form',
            name: '表单',
            component: () => import('../pages/Form'),
          },
          {
            path: '/listAndKey',
            name: '列表和key',
            component: () => import('../pages/TabAndKey'),
          },
          {
            path: '/click',
            name: '事件处理',
            component: () => import('../pages/Handler'),
          },
          {
            path: '/lifeCycle',
            name: '生命周期',
            component: '../pages/LifeCycle'
          },
          {
            path: '/404',
            component: () => import('../pages/Exception'),
          },
        ],
      },
      {
        path: '/404',
        component: () => import('../pages/Exception'),
      }
    ],
  },
];

export default {
  router: router,
}