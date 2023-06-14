import { constantRoutes } from '@/router';
import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';

interface RouteState {
  /** 菜单 */
  menus: RouteRecordRaw[];
}

export const useRouteStore = defineStore('route-store', {
  state: (): RouteState => ({
    menus: constantRoutes,
  }),

  getters: {},

  actions: {},
});
