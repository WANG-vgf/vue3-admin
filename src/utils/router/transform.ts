import { RouteRecordRaw } from 'vue-router';
import { getLayoutComponent } from './component';

/**
 * 将权限路由转换成vue路由
 * @param routes - 权限路由
 */
export const transformRoutes = (routes: RouteRecordRaw[]) => {
  // =>todo 后续处理路由
  return routes.map((route) => transformItemRoute(route));
};

type ComponentActionType = Record<UnionKey.RouteComponentType, () => void>;

const transformItemRoute = (item: RouteRecordRaw) => {
  const resultRoute: RouteRecordRaw[] = [];

  const itemRoute = { ...item } as RouteRecordRaw;

  if (hasComponent(itemRoute)) {
    const actions: ComponentActionType = {
      basic() {
        itemRoute.component = getLayoutComponent('basic');
      },
      blank() {
        itemRoute.component = getLayoutComponent('blank');
      },
      multi() {},
      self() {},
    };
  }

  return item;
};

export const hasComponent = (item: RouteRecordRaw) => {
  return Boolean(item.component);
};
