<template>
  <view class="basic-layout">
    <common-sider />

    <common-header />

    <common-tab />

    <common-content />

    <common-footer />
  </view>
</template>

<script setup lang="ts">
import CommonContent from '@/layouts/common/content/index.vue';
import CommonFooter from '@/layouts/common/footer/index.vue';
import CommonHeader from '@/layouts/common/header/index.vue';
import CommonSider from '@/layouts/common/sider/index.vue';
import CommonTab from '@/layouts/common/tab/index.vue';
</script>

<style scoped lang="scss">
.basic-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
