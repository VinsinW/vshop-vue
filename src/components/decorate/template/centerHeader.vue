<template>
  <div class="center-header">
    <el-image src="/src/assets/images/decorate/header-android.png"></el-image>
    <div class="WechatMiniProgram-wrap sa-flex sa-row-right">
      <div class="center-navbar">
        <div class="navbar-wrap"></div>
      </div>
      <el-image class="WechatMiniProgram" src="/src/assets/images/decorate/header-WechatMiniProgram.png" fit="contain"></el-image>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.center-header .WechatMiniProgram-wrap {
  height: 50px;
  padding: 0 6px 0 0;
}
.center-header .WechatMiniProgram-wrap .WechatMiniProgram {
  height: 35px;
}
.center-header .center-navbar {
  padding: 9px 6px;
  width: 100%;
}
</style>