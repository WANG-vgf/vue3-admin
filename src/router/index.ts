import { transformRoutes } from '@/utils';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createRouterGuard } from './guard';
import { constantRoutes } from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: transformRoutes(constantRoutes),
});

/** 安装路由 */
export async function setupRouter(app: App) {
  app.use(router);
  // 路由守卫
  createRouterGuard(router);
  await router.isReady();
}

export * from './routes';
