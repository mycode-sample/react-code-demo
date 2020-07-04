// 获取首页导航
export function getNavConfig(routerConfig, path) {
  if(path.endsWith('/')) {
    path = path.subStr(0, path.length -1);
  }
  return routerConfig.map(current => {
    if(current.path == path) {
      const menus = current.children.map(current => ({
        path: current.path,
        name: current.name,
      }));
    } else {
      getNavConfig(current.children);
    }
  })
}