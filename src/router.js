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
      routerData.push({
        path: current.path,
        component: Loadable({
          loader: () => import('./components/CommonIndex'),
          loading: ErrorPage,
        }),
      });
      getRouterData(current.children);
    } else {
      routerData.push({
        path: current.path,
        component: Loadable({
          loader: () => import(`./pages${current.component}`),
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
const headerMenu = router.map(current => ({
  path: current.path,
  name: current.name,
}))

const sideMenu = {};
router.map(current => {
  sideMenu[current.path] = current.children;
});

const configData =  {
  routerData,
  menuData,
  headerMenu,
  sideMenu,
};

export default configData;