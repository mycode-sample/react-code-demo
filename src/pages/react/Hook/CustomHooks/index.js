import React from 'react';
import CommonNav from '../../../../components/CommonNav';

export default function CustomHooks(props) {
  const nav = [
    {
      path: '/react/hook/custom-hooks/simple-custom-hook',
      name: '自定义简单hook',
    },
    {
      path: '/react/hook/custom-hooks/custom-hook-with-default-hook',
      name: '调用内置hook',
    }
  ];

  return(
    <div>
      <h1>自定义HOOK</h1>.
      <CommonNav nav={nav}/>
    </div>
  );
}
