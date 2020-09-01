import React from 'react';
import CommonNav from '../../../../components/CommonNav';

export default function EffectHook(props) {
  const nav = [
    {
      path: '/react/hook/effect-hook/class-count',
      name: 'class组件实现计数器'
    },
  ];
  return(
    <div>
      <CommonNav nav={nav}/>
    </div>
  );
}