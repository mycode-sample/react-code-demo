import React from 'react';
import CommonNav from '../../../../components/CommonNav';

export default function EffectHook(props) {
  const nav = [
    {
      path: '/react/hook/effect-hook/class-count',
      name: 'class组件实现计数器'
    },
    {
      path: '/react/hook/effect-hook/split-effect/class',
      name: '不使用effect hook',
    },
    {
      path: '/react/hook/effect-hook/split-effect/hook',
      name: '使用effect hook分离逻辑',
    },
    {
      path: '/react/hook/effect-hook/split-effect/reduce-bugs',
      name: '减少bug',
    },
  ];
  return(
    <div>
      <CommonNav nav={nav}/>
    </div>
  );
}