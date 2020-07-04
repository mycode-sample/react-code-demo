import Loadable from 'react-loadable';
import ErrorPage from './components/ErrorPage';
import router from './config/router';
import BlankLayout from './layouts/BlankLayout';

function getRouterData(routerConfig) {
  if(! Array.isArray(routerConfig) && routerConfig.length > 0) {
    return {
      path: '/',
      component: BlankLayout
    }
  }
  routerConfig.map(current => {
    const route = [];
    if(current.children) {
      // 当前路由有子路由
      console.log("有子路由", current);
      route.push({
        path: current.path,
        component: Loadable({
          loader: () => import('./components/CommonIndex'),
          loading: ErrorPage,
        }),
      });
      route.push(getRouterData(current.children));
    } else {
      console.log("无子路由", current);
      router.push({
        path: current.path,
        component: Loadable({
          loader: () => import(`./pages/${current.path}`),
          loading: ErrorPage
        }),
      });
    }
  });
  return router;
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

const routerData = getRouterData(router);
const menuData = getMenuData(router);

console.log(routerData, menuData);

const configData =  {
  routerData,
  menuData,
};

export default configData;