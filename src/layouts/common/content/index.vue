<template>
  <main
    class="common-content transition-all-300"
    :class="{ 'c-sider--fold': appStore.siderCollapse }"
  >
    <div class="content-outer">
      <div class="mock"></div>
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
  margin-top: calc(var(--common-header-height) + var(--common-tab-height));
  padding-left: var(--common-sider-width);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #e1e1e1 transparent;

  &::-webkit-scrollbar-thumb {
    background-color: #e1e1e1;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #e1e1e1;
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: #0000;
    border-radius: 0;
  }

  &.c-sider--fold {
    padding-left: var(--common-sider-collapsed-width);
  }

  .content-outer {
    padding: 20px;
  }

  .mock {
    width: 100%;
    height: 200px;
    background: #fff;
    border-radius: 10px;
  }
}
</style>
