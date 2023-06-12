<template>
  <el-menu
    default-active="2"
    class="sider-menu"
    :collapse="appStore.siderCollapse"
    unique-opened
    :collapse-transition="false"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>

      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.sider-menu {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #e1e1e1 transparent;
  border-right: none;

  &::-webkit-scrollbar-thumb {
    background-color: #e1e1e1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #e1e1e1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: #0000;
    border-radius: 0;
  }
}
</style>
