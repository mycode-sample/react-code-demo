import { Layout, Typography } from 'antd';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import configData from '../router';
import HeaderMenuLayouts from './HeaderMenuLayout';
import SideRouter from './SideRouter';

const { Footer, Header, Sider, Content } = Layout;

const { routerData } = configData;

export default class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenu: [],
      sta: 'dadad',
    }
    this.handleHeaderMenuClick = this.handleHeaderMenuClick.bind(this);
  }

  handleHeaderMenuClick(e, path) {
    if(e) e.preventDefault();
    const { sideMenu } = configData;
    this.setState({
      sideMenu: sideMenu[path],
    })
  }

  render() {
  const history = createBrowserHistory();
  let { sideMenu } = this.state;
  if(sideMenu.length === 0) {
    sideMenu = configData.menuData[0].children;
  }
  return(
    <BrowserRouter history={history}>
      <Layout>
        <Header abc={this.state}>
          <HeaderMenuLayouts onClick={this.handleHeaderMenuClick} menu={configData.headerMenu}/>
        </Header>
        <Layout>
          <Sider style={{minHeight: 540}}>
            <SideRouter sideMenu={sideMenu}/>
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
}