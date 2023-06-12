<template>
  <view
    class="common-tab transition-all-300 position-w-full"
    :class="{ 'c-sider--fold': appStore.siderCollapse }"
  >
    <div class="tab-outer"></div>
  </view>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.common-tab {
  top: var(--common-header-height);
  height: var(--common-tab-height);
  padding-left: var(--common-sider-width);
  z-index: 96;

  &.c-sider--fold {
    padding-left: var(--common-sider-collapsed-width);
  }

  .tab-outer {
    width: 100%;
    height: 100%;
    background: var(--c-white);
    box-shadow: 0 1px 2px #00152914;
  }
}
</style>
