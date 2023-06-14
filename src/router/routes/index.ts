import { RouteRecordRaw } from 'vue-router';

/** 根路由: / */
export const ROOT_ROUTE: RouteRecordRaw = {
  name: 'root',
  path: '/',
  redirect: '/home',
  meta: {
    title: 'Root',
  },
};

/** 固定的路由 */
export const constantRoutes: RouteRecordRaw[] = [
  // ROOT_ROUTE,
  {
    name: 'home',
    path: '/home',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    name: 'about',
    path: '/about',
    meta: {
      title: '关于',
    },
    component: () => import('@/views/about/index.vue'),
  },
];
