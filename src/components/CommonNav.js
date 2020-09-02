import React from 'react';
import { Link } from 'react-router-dom';

export default function CommonNav(props) {
  let { nav } = props;
  if(nav.length === 0) {
    nav = [
      {
        path: '/',
        name: '没有组件，回到首页',
      }
    ];
  }
  return(
    <div>
      <ul>
        {nav.map(current => (
          <li>
            <Link to={current.path}>{current.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}