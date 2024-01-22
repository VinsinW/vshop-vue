<template>
  <div class="popup-image">
    <div class="mask"></div>
    <div class="popup-image-item" style="margin-right: -146px; margin-bottom: -227px; z-index: 0;">
      <div class="sa-image">
        <el-image src="/src/assets/images/banner/banner01.png"  fit="contain"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.popup-image-item {
  width: 292px;
  height: 454px;
  position: absolute;
  right: 50%;
  bottom: 50%;
  margin-right: -146px;
  margin-bottom: -227px;
  border: 1px solid var(--sa-border);
  background: #fff;
  border-radius: 4px;
  .sa-image {
    width: 292px;
    height: 454px;
    .el-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>