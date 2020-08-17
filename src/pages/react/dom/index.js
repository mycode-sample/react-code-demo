import React from 'react';
import CommonNav from '../../../components/CommonNav';

export default function Dom(props) {
  const nav = [
    {
      name: '内嵌nav',
      path: '/react/dom/inner-html',
    }
  ];
  return(
    <div>
      <p>DOM元素</p>
      <CommonNav nav={nav}/>
    </div>
  );
}