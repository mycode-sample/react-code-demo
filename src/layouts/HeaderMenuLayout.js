import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMenuLayout(props) {
  const { menu,onClick } = props;
  return(
    <div style={{
      fontSize: 'xx-large',
      color: '#1890ff'
    }}>
      <Link to="/" style={{textDecoration: "none"}}>| 首页 |</Link>
      {
        menu.map(current => <a href="#" style={{paddingLeft: 5}}
          onClick={(e) => onClick(e, current.path)}>{current.name} |</a>
        )
      }
    </div>
  );
}