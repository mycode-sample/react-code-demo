import Loadable from 'react-loadable';
import ErrorPage from 'components/ErrorPage';
import router from 'config/router';
import BlankLayout from 'layouts/BlankLayout';

const routerData = [];

/**
 * 1.router配置中，第一层是header的菜单。第一层必须有children参数，此参数将作为侧边菜单
 * 2.侧边菜单中如果有children，则component不渲染，渲染CommonIndex组件
 * 3.侧边菜单的children会作为二级菜单。
 * 4.为了简化菜单，侧边栏的三级菜单建议使用hideInMenu，导航在二级菜单渲染的页面中进行
 */

function getRouterData(routerConfig) {
  if(! Array.isArray(routerConfig) && routerConfig.length > 0) {
    return {
      path: '/',
      component: BlankLayout
    }
  }
  /* eslint-disable array-callback-return */
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
/* eslint-disable array-callback-return */
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