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
            path: '/react/core/Form',
            name: '表单',
          },
          {
            path: '/react/core/Handler',
            name: '事件处理',
          },
          {
            path: '/react/core/LifeCycle',
            name: '事件处理',
          },
          {
            path: '/react/core/ListAndKey',
            name: '列表和key',
          },
        ],
      },
      {
        path: '/react/advanced',
        name: '高级指引',
        children: [
          {
            path: '/react/advanced/CodeSplitting',
            name: '代码分割',
          }
        ],
      },
    ],
  },
];

export default router;