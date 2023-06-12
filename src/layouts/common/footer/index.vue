<template>
  <footer
    class="common-footer transition-all-300"
    :class="{ 'c-sider--fold': appStore.siderCollapse }"
  >
    <div class="footer-outer">Copyright ©2023 WANG十二</div>
  </footer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.common-footer {
  height: var(--common-footer-height);
  padding-left: var(--common-sider-width);
  z-index: 97;

  &.c-sider--fold {
    padding-left: var(--common-sider-collapsed-width);
  }

  .footer-outer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: var(--c-white);
    box-shadow: 0 1px 2px #00152914;
  }
}
</style>
