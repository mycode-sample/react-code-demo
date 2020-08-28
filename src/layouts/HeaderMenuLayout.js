import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMenuLayout(props) {
  const { menu,onClick } = props;
  return(
    <div style={{
      fontSize: 'xx-large'
    }}>
      <Link to="/" style={{textDecoration: "none"}}>首页</Link>
      <span style={{color: "#1890ff"}}>{" | "}</span>
      {
        menu.map(current => <span style={{paddingLeft: 5}}
          onClick={(e) => onClick(e, current.path)}>{current.name}</span>
        )
      }
    </div>
  );
}