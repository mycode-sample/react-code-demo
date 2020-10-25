import { Layout } from 'antd';
import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from 'pages/Welcome';
import { getConfigData } from '../router';
import GlobalFooter from './GlobalFooter';
import HeaderMenuLayouts from './HeaderMenuLayout';
import SideRouter from './SideRouter';

const { Footer, Header, Sider, Content } = Layout;

const configData = getConfigData();

const { routerData } = configData;

export default class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenu: [],
      openSubMenuKeys: [],
    }
    this.handleHeaderMenuClick = this.handleHeaderMenuClick.bind(this);
    this.handleSubMenuClick = this.handleSubMenuClick.bind(this);
  }

  handleSubMenuClick(openKeys) {
    const { openSubMenuKeys } = this.state;
    const keys = openKeys.find(current => openSubMenuKeys.indexOf(current) === -1);
    this.setState({
      openSubMenuKeys: [keys],
    })
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
  let { sideMenu, openSubMenuKeys } = this.state;
  if(sideMenu.length === 0) {
    sideMenu = configData.menuData[0].children;
  }
   return(
      <BrowserRouter history={history}>
        <Layout>
          <Header>
            <HeaderMenuLayouts onClick={this.handleHeaderMenuClick} menu={configData.headerMenu}/>
          </Header>
          <Layout>
            <Sider style={{
              minHeight: "500px",
              background: "#f0f2f5",
            }}>
              <SideRouter
                sideMenu={sideMenu}
                handleSubMenuClick={this.handleSubMenuClick}
                selectedKeys={openSubMenuKeys}
              />
            </Sider>
            <Content
              style={{
                padding: 5,
                margin: 5,
                background: "#f0f2f5",
                border: "solid 20px #fff",
                height: 650
              }}
            >
              <Switch>
                {routerData.map((current) => {
                  return <Route exact path={current.path} component={current.component}/>;
                })}
                <Route path="/" component={Welcome}/>
              </Switch>
            </Content>
          </Layout>
          <Footer style={{
            padding: '0 auto 0',
            backgroundColor: "#001529",
            color: "rgb(240, 242, 245)"
          }}>
            <GlobalFooter/>
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}