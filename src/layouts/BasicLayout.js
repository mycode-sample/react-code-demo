import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { createBrowserHistory } from 'history';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function BasicLayout(props) {
  const history = createBrowserHistory();
  return(
    <div>
      <h1>hello</h1>
      {props.children}
    </div>
  );
}