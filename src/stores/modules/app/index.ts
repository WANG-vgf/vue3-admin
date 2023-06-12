import { defineStore } from 'pinia';

interface AppState {
  /** 侧边栏折叠状态 */
  siderCollapse: boolean;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({ siderCollapse: false }),

  getters: {},

  actions: {
    /** 设置侧边栏折叠状态 */
    setSiderCollapse(collapse: boolean) {
      this.siderCollapse = collapse;
    },
  },
});
