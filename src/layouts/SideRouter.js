import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Item, SubMenu } = Menu;

function renderMenu(menu) {
  console.log(menu);
  return menu.map(current => {
    if(current.hideInMenu) {
      return null;
    }else if(current.children) {
      return <SubMenu title={current.name}>
        {renderMenu(current.children)}
      </SubMenu>;
    } else {
      return <Item>
        <Link to={current.path}>{current.name}</Link>
      </Item>;
    }
  });
}

export default function SideRouter(props) {
  const { sideMenu } = props;

  return(
    <Menu mode="inline">
      {renderMenu(sideMenu)}
    </Menu>
  );
}