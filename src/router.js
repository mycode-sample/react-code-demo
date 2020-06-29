import React from 'react';
import { Route } from 'react-router-dom';
import config from './config/router';
import Welcome from './pages/Welcome';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

const router = config.router;

// 从config中获取路由信息
const getRouterConfig = (config) => {
  if(config.length === 0) {
    return <Route exact path="/" component={Welcome}/>
  }
  return config.map(item => {
    const Component = Loadable({
      loader: item.component,
      loading: <Spin/>
    });
    if(item.children) {
      return(
        <Route exact path={item.path}>
          <Component/>
          {getRouterConfig(item.children)}
        </Route>
      );
      // return getRouterConfig(item.children);
    } else {
      return (
        <Route exact path={item.path}>
          <Component/>
        </Route>
        // <Route exact component={item.component}/>
      );
      // return <Component/>
    }
  });
}

// const routerConfig = getRouterConfig(config.router);
// const routerConfig = getRouterConfig([]);
const routerConfig = <Route exact path="/" component={Welcome}/>;

export default routerConfig;
