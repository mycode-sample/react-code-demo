import { Layout, Menu, Typography } from 'antd';
import { createBrowserHistory } from 'history';
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import configData from '../router';

const { Footer, Header, Sider, Content } = Layout;
const { Item, SubMenu } = Menu;

const { routerData, menuData } = configData;

console.log(routerData);

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
            <Menu mode='inline' style={{
              minHeight: 500,
            }}>
              <SubMenu title='react'>
                <Item><Link to='/react/core/form'>表单</Link></Item>
                <Item><Link to='/react/core/lifeCycle'>生命周期</Link></Item>
                <Item><Link to='/react/core/handler'>事件处理</Link></Item>
                <Item><Link to='/react/core/listAndKey'>列表和key</Link></Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: 5,
              margin: 5,
            }}
          >
            {/* <Router history={history}> */}
              <Switch>
                {routerData.map(current => {
                  return <Route path={current.path} render={current.component}/>;
                })}
              </Switch>
            {/* </Router> */}
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