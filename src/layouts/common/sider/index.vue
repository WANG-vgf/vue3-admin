<template>
  <div
    class="common-sider transition-all-300 position-h-full"
    :class="{ 'c-sider--fold': appStore.siderCollapse }"
  >
    <common-logo />

    <sider-menu />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';
import CommonLogo from '../logo/index.vue';
import SiderMenu from './components/memu/index.vue';

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.common-sider {
  display: flex;
  flex-direction: column;
  width: var(--common-sider-width);
  box-shadow: 2px 0 8px #1d23290d;
  background: var(--c-white);
  z-index: 98;

  &.c-sider--fold {
    width: var(--common-sider-collapsed-width);
  }
}
</style>
