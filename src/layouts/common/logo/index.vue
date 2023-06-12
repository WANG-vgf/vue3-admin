<template>
  <view class="common-logo" :class="{ 'c-aside--fold': appStore.siderCollapse }"> LOGO </view>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.common-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
  height: var(--common-header-height);

  &.c-aside--fold {
    transform: scale(0.5);
  }
}
</style>
