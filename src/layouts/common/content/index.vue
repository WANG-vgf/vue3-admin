<template>
  <main
    class="common-content transition-all-300"
    :class="{ 'c-aside--fold': appStore.siderCollapse }"
  >
    <div class="content-outer">
      <div class="content-inner"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.common-content {
  position: relative;
  flex: 1;
  padding-top: calc(var(--common-header-height) + var(--common-tab-height));
  padding-left: var(--common-aside-width);

  &.c-aside--fold {
    padding-left: var(--common-sider-collapsed-width);
  }

  .content-outer {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .content-inner {
    width: 100%;
    height: 100%;
    background: var(--c-white);
    box-shadow: 0 0 4px #00152914;
    border-radius: 12px;
  }
}
</style>
