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
            name: '表单',
          },
          {
            path: '/react/core/handler',
            name: '事件处理',
          },
          {
            path: '/react/core/lifeCycle',
            name: '事件处理',
          },
          {
            path: '/react/core/listAndKey',
            name: '列表和key',
          },
        ],
      },
    ],
  },
];

export default router;