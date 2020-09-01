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
          {
            path: '/react/advanced/error-boundaries',
            component: '/react/advanced/ErrorBoundaries',
            name: '错误边界',
          },
          {
            path: '/react/advanced/error-boundaries-demo',
            component: '/react/advanced/ErrorBoundaries/Demo',
            name: 'demo',
            hideInMenu: true,
          },
        ],
      },
      {
        path: '/react/dom',
        name: 'dom元素',
        component: '/react/dom',
        children: [
          {
            path: '/react/dom/inner-html',
            name: '内嵌HTML',
            component: '/react/dom/InnerHtml',
          },
        ],
      },
      {
        path: '/react/router',
        name: '路由',
        children: [
          {
            path: '/react/router/official-nest-router',
            component: '/react/MyRouter/OfficialNestRouter',
            name: '官方嵌套路由示例',
          },
          {
            path: '/react/router/official-nest-router-in-one',
            component: '/react/MyRouter/OfficialNestRouterInOne',
            name: '官方嵌套路由示例2',
          }
        ],
      },
      {
        path: '/react/hook',
        name: 'HOOK',
        children: [
          {
            path: '/react/hook/demo',
            name: 'Hook示例',
            component: '/react/Hook/HookDemo',
          }
        ],
      },
    ],
  },
];

export default router;