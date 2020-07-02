import { Layout, Menu, Typography } from 'antd';
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const { Footer, Header, Sider, Content } = Layout;
const { Item, SubMenu } = Menu;

export default function BasicLayout(props) {
  const history = createBrowserHistory();
  return(
    <BrowserRouter history={history}>
      <Layout>
        <Header>
          <Typography>
            <Typography.Title
              level={4}
              style={{
                color: 'white',
                margin: 5,
                padding: 5,
              }}
            >
              react学习
            </Typography.Title>
          </Typography>
        </Header>
        <Layout>
          <Sider>
            <Menu mode='inline'>
              <SubMenu title='react'>
                <Item><Link to='/react/form'>表单</Link></Item>
                <Item><Link to='/react/lifeCycle'>生命周期</Link></Item>
                <Item><Link to='/react/handler'>事件处理</Link></Item>
                <Item><Link to='/react/listAndKey'>列表和key</Link></Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: 5,
              margin: 5,
            }}
          >
            {props.children}
          </Content>
        </Layout>
        <Footer>
          <Typography>
            <Typography.Title
              level={4}
              style={{
                margin: 5,
                padding: 5,
              }}
            >
              react学习
            </Typography.Title>
          </Typography>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}