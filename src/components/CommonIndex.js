import React from 'react';

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