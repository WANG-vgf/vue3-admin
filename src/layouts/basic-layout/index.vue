<template>
  <view class="basic-layout">
    <common-aside />

    <common-header />

    <common-tab />

    <common-content />
  </view>
</template>

<script setup lang="ts">
import CommonAside from '@/layouts/common/aside/index.vue';
import CommonContent from '@/layouts/common/content/index.vue';
import CommonHeader from '@/layouts/common/header/index.vue';
import CommonTab from '@/layouts/common/tab/index.vue';
</script>

<style scoped lang="scss">
.basic-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
