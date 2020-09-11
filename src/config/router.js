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
            name: '生命周期',
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
          },
          {
            path: '/react/hook/effect-hook/',
            name: 'effect hook',
            component: '/react/Hook/EffectHook',
          },
          {
            path: '/react/hook/effect-hook/class-count',
            name: 'class组件计数器',
            component: '/react/Hook/EffectHook/ClassCount',
            hideInMenu: true,
          },
          {
            path: '/react/hook/effect-hook/split-effect/class',
            name: '不适用effect hook',
            component: '/react/Hook/EffectHook/SplitEffect/ClassCompt',
            hideInMenu: true,
          },
          {
            path: '/react/hook/effect-hook/split-effect/hook',
            name: '使用effectHook',
            component: '/react/Hook/EffectHook/SplitEffect/HookCompt',
            hideInMenu: true,
          },
          {
            path: '/react/hook/effect-hook/split-effect/reduce-bugs',
            name: '减少bug',
            component: '/react/Hook/EffectHook/ReduceBugs',
            hideInMenu: true,
          },
          {
            path: '/react/hook/hook-rules',
            name: 'hook规则',
            component: '/react/Hook/HookRules',
          },
          {
            path: '/react/hook/custom-hooks',
            name: '自定义hook',
            component: '/react/Hook/CustomHooks',
          },
          {
            path: '/react/hook/custom-hooks/simple-custom-hook',
            name: '自定义简单hook',
            component: '/react/Hook/CustomHooks/SimpleCustomHook',
            hideInMenu: true,
          },
          {
            path: '/react/hook/custom-hooks/custom-hook-with-default-hook',
            name: '调用内置hook',
            component: '/react/Hook/CustomHooks/CustomHookWithDefaultHook',
            hideInMenu: true,
          }
        ],
      },
      {
        path: '/react/context',
        name: 'context',
        component: '/react/Contexts',
        children: [
          {
            path: '/react/context/no-context',
            name: '不使用context',
            component: '/react/Contexts/ContextDemo',
          },
          {
            path: '/react/context/use-context',
            name: '使用context',
            component: '/react/Contexts/UseContextDemo',
          },
          {
            path: '/react/context/api',
            name: 'api',
            component: '/react/Contexts/Api',
          },
          {
            path: '/react/context/dynamic-context',
            name: '动态context',
            component: '/react/Contexts/DynamicContext',
          },
          {
            path: '/react/context/nest-context',
            name: '嵌套context',
            component: '/react/Contexts/NestContext',
          },
          {
            path: '/react/context/multi-context',
            name: '消费多个context',
            component: '/react/Contexts/MultiContext',
          }
        ],
      }
    ],
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    children: [
      {
        path: '/javascript/js',
        name: 'js',
        component: '/JavaScript',
      }
    ],
  },
  {
    path: '/stylesheet',
    name: '层叠样式表',
    children: [
      {
        path: '/stylesheet/css',
        name: '层叠样式表',
        component: '/StyleSheet',
      },
    ],
  },
  {
    path: '/redux',
    name: 'redux',
    children: [
      {
        path: '/redux/todo',
        name: 'todo应用',
        children: [
          {
            path: '/redux/todo/official-todo',
            name: '官方todo示例',
            component: '/Redux/Todo/OfficialTodo',
          },
          {
            path: '/redux/todo/to-do-app',
            name: 'todo',
            component: '/Redux/Todo/TodoApp',
          },
        ],
      }
    ],
  },
];

export default router;