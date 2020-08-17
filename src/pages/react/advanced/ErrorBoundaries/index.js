import React from 'react';
import CommonNav from '../../../../components/CommonNav';

export default function ErrorBoundaries(props) {
  const nav = [
    {
      path: '/react/advanced/error-boundaries-demo',
      name: 'demo',
    },
  ];
  return(
    <div>
      <h1>错误边界</h1>
      <CommonNav nav={nav}/>
    </div>
  );
}