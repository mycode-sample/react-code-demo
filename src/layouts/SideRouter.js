import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Item, SubMenu } = Menu;

function renderMenu(menu) {
  return menu.map(current => {
    if(current.hideInMenu) {
      return null;
    }else if(current.children) {
      return <SubMenu
        title={current.name}
        key={current.path}
      >
        {renderMenu(current.children)}
      </SubMenu>;
    } else {
      return <Item key={current.path}>
        <Link to={current.path}>{current.name}</Link>
      </Item>;
    }
  });
}

export default function SideRouter(props) {
  const { selectedKeys, handleSubMenuClick, sideMenu } = props;

  return(
    <Menu
      mode="inline"
      openKeys={selectedKeys}
      onOpenChange={handleSubMenuClick}
    >
      {renderMenu(sideMenu)}
    </Menu>
  );
}