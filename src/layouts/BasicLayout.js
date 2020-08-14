import { Layout, Menu, Typography } from 'antd';
import { createBrowserHistory } from 'history';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import configData from '../router';
import Welcome from '../pages/Welcome';

const { Footer, Header, Sider, Content } = Layout;
const { Item, SubMenu } = Menu;

const { routerData, menuData } = configData;

function renderMenu(menu) {
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
              <Link to="/" style={{textDecoration: "none"}}>react</Link>
            </Typography.Title>
          </Typography>
        </Header>
        <Layout>
          <Sider style={{minHeight: 540}}>
            <Menu mode="inline">
              {renderMenu(menuData)}
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
              {routerData.map((current) => {
                return <Route exact path={current.path} component={current.component}/>;
              })}
              <Route path="/" component={Welcome}/>
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
              react
            </Typography.Title>
          </Typography>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}