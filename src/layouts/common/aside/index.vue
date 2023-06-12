<template>
  <aside
    class="common-aside transition-all-300 position-h-full"
    :class="{ 'c-aside--fold': appStore.siderCollapse }"
  >
    <common-logo />
  </aside>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';
import CommonLogo from '../logo/index.vue';

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.common-aside {
  display: flex;
  flex-direction: column;
  width: var(--common-aside-width);
  box-shadow: 2px 0 8px #1d23290d;
  background: var(--c-white);
  z-index: 98;

  &.c-aside--fold {
    width: var(--common-sider-collapsed-width);
  }
}
</style>
