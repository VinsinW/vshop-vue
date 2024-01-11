<template>
  <div class="sa-header sa-flex sa-row-between">
    <div class="left sa-flex">
      <div class="header-button sa-flex sa-row-center is-active el-tooltip__trigger el-tooltip__trigger">
        <el-icon><Menu /></el-icon>
      </div>
      <div class="header-button sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <el-icon><HomeFilled /></el-icon>
      </div>
      <div class="header-button sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <el-icon><UserFilled /></el-icon>
      </div>
    </div>
    <div class="center sa-flex">
      <div class="header-icon sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <i class="iconfont iconandroid"></i>
      </div>
      <div class="header-icon sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <i class="iconfont iconios"></i>
      </div>
      <div class="el-divider el-divider--vertical" role="separator" style="--el-border-style: solid;"><!--v-if--></div>
      <div class="header-icon sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <i class="iconfont iconWechatMiniProgram"></i>
      </div>
      <div class="header-icon sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <i class="iconfont iconWechatOfficialAccount"></i>
      </div>
      <div class="header-icon sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <i class="iconfont iconH5"></i>
      </div>
      <div class="header-icon sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <i class="iconfont iconApp"></i>
      </div>
      <div class="el-tooltip__trigger">

      </div>
    </div>
    <div class="right sa-flex">
      <div class="header-button sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <el-icon class="icon-vs"><vs-svg name="view"></vs-svg></el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VsSvg from "/@/components/icon/svg.vue";
</script>

<style lang="scss" scoped>
.sa-row-between {
  justify-content: space-between;
}
.sa-header {
  --sa-border:#eee;
  --el-header-padding: 0;
  border-bottom: 1px solid var(--sa-border);
  .iconfont {
    width: 24px;
    font-size: 20px;
    color: var(--sa-subfont);
    cursor: pointer;
  }
  .el-icon{
    color:  var(--sa-subfont);
  }
  .header-icon {
    height: 100%;
    margin-right: 4px;
    margin-left: 4px;
    cursor: pointer;
  }
  .center {
    padding: 0 8px;
    border-left: 1px solid var(--sa-border);
    border-top: none;
    border-bottom: none;
  }
}
.sa-flex {
  display: flex;
  flex-direction: row;
  align-items: center;

  .header-button {
    width: 48px;
    height: 40px;
    border-right: 1px solid var(--sa-border);
    cursor: pointer;
  }
  .sa-row-center {
    justify-content: center;
  }
}
.el-divider--vertical{
  display: inline-block;
  width: 1px;
  height: 40px;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
  border-left: 1px var(--el-border-color) var(--el-border-style);
}
</style>