import Loadable from 'react-loadable';
import ErrorPage from './components/ErrorPage';
import router from './config/router';
import BlankLayout from './layouts/BlankLayout';

const routerData = [];

function getRouterData(routerConfig) {
  if(! Array.isArray(routerConfig) && routerConfig.length > 0) {
    return {
      path: '/',
      component: BlankLayout
    }
  }
  routerConfig.map(current => {
    if(current.children) {
      // 当前路由有子路由
      // console.log("有子路由", current);
      // routerData.push({
      //   path: current.path,
      //   component: Loadable({
      //     loader: () => import('./components/CommonIndex'),
      //     loading: ErrorPage,
      //   }),
      // });
      routerData.push(getRouterData(current.children));
    } else {
      // console.log("无子路由", current);
      routerData.push({
        path: current.path,
        component: Loadable({
          loader: () => import(`./pages${current.path}`),
          loading: ErrorPage
        }),
      });
    }
  });
}

function getMenuData(menuConfig) {
  return menuConfig.map(current => {
    if(current.children) {
      return {
        path: current.path,
        name: current.name,
        hideInMenu: current.hideInMenu ? current.hideInMenu : false,
        hideInBreadCrumb: current.hideInBreadCrumb ? current.hideInBreadCrumb : false,
        children: getMenuData(current.children),
      };
    } else {
      return {
        path: current.path,
        name: current.name,
        hideInMenu: current.hideInMenu ? current.hideInMenu : false,
        hideInBreadCrumb: current.hideInBreadCrumb ? current.hideInBreadCrumb : false,
      };
    }
  });
}

getRouterData(router);
const menuData = getMenuData(router);

console.log(routerData, menuData);

const configData =  {
  routerData,
  menuData,
};

export default configData;