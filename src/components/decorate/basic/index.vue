<template>
  <el-main class="page-main sa-flex">
    <left-menu></left-menu>
    <diy-page></diy-page>
    <right-panel></right-panel>
  </el-main>
</template>

<script lang="ts" setup>
import LeftMenu from "./left-menu.vue"
import DiyPage from "./diy-page.vue"
import RightPanel from "./right-panel.vue"
</script>

<style lang="scss" scoped>
.page-index .page-main .center {
  height: 100%;
  flex: 1;
  background: var(--sa-bg-assist-1);
  overflow-y: auto;
  position: relative;
  z-index: 0;
}
.sa-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.sa-row-center {
  justify-content: center;
}
</style>