import React from 'react';
import { Nav } from '../../Nav';

export default function DemoApplication(props) {
  return(
    <div>
      <Nav/>
      <div>当前页面:</div>
      <div>{window.location.href}</div>
      <div>父组件: {props.parent}</div>
    </div>
  );
}