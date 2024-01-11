<template>
  <div id="index" class="page-index  panel panel-default panel-intro">
    <el-container class="panel-block">
      <el-header>
        <sa-header></sa-header>
      </el-header>
      <el-main class="page-main sa-flex">
        <left-menu></left-menu>
        <diy-page></diy-page>
        <right-panel></right-panel>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import SaHeader from "/@/components/decorate/sa-header.vue";
import LeftMenu from "/@/components/decorate/left-menu.vue";
import DiyPage from "/@/components/decorate/diy-page.vue";
import RightPanel from "/@/components/decorate/right-panel.vue";

</script>

<style lang="scss" scoped>
.el-header {
  --el-header-padding: 0;
  --el-header-height: 48px;
  padding: var(--el-header-padding);
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--el-header-height);
}
.page-index{

  .panel-block{
    height: calc(100vh - 154px);
  }
}
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