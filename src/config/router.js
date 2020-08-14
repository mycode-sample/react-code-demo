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
          {
            path: '/react/advanced/refs',
            component: '/react/advanced/refs',
            name: 'refs',
          },
          {
            path: '/react/advanced/forwardRef',
            component: '/react/advanced/ForwardRef',
            name: '转发ref',
          },
          {
            path: '/react/advanced/renderProps',
            component: '/react/advanced/renderProps',
            name: 'render props',
          },
          {
            path: '/react/advanced/uncontrolled-component',
            component: '/react/advanced/UncontrolledComponents',
            name: '非受控组件',
          },
          {
            path: '/react/advanced/uncontrolled-component/demo',
            component: '/react/advanced/UncontrolledComponents/NameForm',
            name: '使用ref获取表单输入',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
];

export default router;