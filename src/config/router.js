const router = [
  {
    path: '/react',
    name: 'react',
    children: [
      {
        path: '/react/core',
        name: '核心',
        children: [
          {
            path: '/react/core/form',
            component: '/react/core/Form',
            name: '表单',
          },
          {
            path: '/react/core/handler',
            component: '/react/core/Handler',
            name: '事件处理',
          },
          {
            path: '/react/core/life-cycle',
            component: '/react/core/LifeCycle',
            name: '事件处理',
          },
          {
            path: '/react/core/list-and-key',
            component: '/react/core/ListAndKey',
            name: '列表和key',
          },
        ],
      },
      {
        path: '/react/advanced',
        name: '高级指引',
        children: [
          {
            path: '/react/advanced/code-splitting',
            component: '/react/advanced/CodeSplitting',
            name: '代码分割',
          },
          {
            path: '/react/advanced/hoc',
            component: '/react/advanced/Hoc',
            name: 'hoc',
          },
        ],
      },
    ],
  },
];

export default router;