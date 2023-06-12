<template>
  <header
    class="common-header transition-all-300 position-w-full"
    :class="{ 'c-aside--fold': appStore.siderCollapse }"
  >
    <div class="header-outer">
      <div class="collapse-wrap" @click="appStore.setSiderCollapse(!appStore.siderCollapse)">
        <el-icon><Switch /></el-icon>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.common-header {
  height: var(--common-header-height);
  padding-left: var(--common-aside-width);
  z-index: 97;

  &.c-aside--fold {
    padding-left: var(--common-sider-collapsed-width);
  }

  .header-outer {
    width: 100%;
    height: 100%;
    background: var(--c-white);
    box-shadow: 0 1px 2px #00152914;
  }

  .collapse-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 100%;
    cursor: pointer;

    &:hover {
      background-color: rgba(246, 246, 246, 1);
    }
  }
}
</style>
