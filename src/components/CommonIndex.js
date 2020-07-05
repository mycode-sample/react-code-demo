import React from 'react';
import { Link } from 'react-router-dom';
// import { getNavConfig } from '../utils/utils';
import router from '../config/router';

export default function CommonIndex(props) {
  // const navs = getNavConfig(router, window.location.pathname);
  return(
    <div>
      <h1>location: {window.location.pathname}</h1>
      {/* <ul>
        {navs.map(current => <li><Link to={current.path}>{current.name}</Link></li>)}
      </ul> */}
    </div>
  );
}