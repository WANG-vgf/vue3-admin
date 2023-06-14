import { Router } from 'vue-router';

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export const createRouterGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    // 开始 loadingBar
    // window.$loadingBar?.start();
    // 页面跳转权限处理
    // await createPermissionGuard(to, from, next);
    console.log('beforeEach');
    console.log(to);
    console.log(from);
    next();
  });
  router.afterEach((to) => {
    console.log('afterEach');
    console.log(to);
    // 设置document title
    // useTitle(to.meta.i18nTitle ? t(to.meta.i18nTitle) : to.meta.title);
    // 结束 loadingBar
    // window.$loadingBar?.finish();
  });
};
