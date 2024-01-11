<template>
  <div class="left">
    <el-scrollbar class="left-main">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1" title="应用设置">
          <div class="sa-flex sa-flex-wrap">
            <div class="item tabbar is-active">
              <img src="/src/assets/images/decorate/tabbar.png">
              <span>底部导航</span>
            </div>
            <div class="item floatMenu">
              <img src="/src/assets/images/decorate/floatMenu.png">
              <span>悬浮按钮</span>
            </div>
            <div class="item popupImage">
              <img src="/src/assets/images/decorate/popupImage.png">
              <span>弹窗广告</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" title="主题色">
          <div class="sa-flex sa-flex-wrap">
            <div class="item orange is-active">
              <img src="/src/assets/images/decorate/orange.png">
              <span>淘宝橙</span>
            </div>
            <div class="item golden">
              <img src="/src/assets/images/decorate/golden.png">
              <span>香槟金</span>
            </div>
            <div class="item yellow">
              <img src="/src/assets/images/decorate/yellow.png">
              <span>美团黄</span>
            </div>
            <div class="item black">
              <img src="/src/assets/images/decorate/black.png">
              <span>低奢黑</span>
            </div>
            <div class="item green">
              <img src="/src/assets/images/decorate/green.png">
              <span>微信绿</span>
            </div>
            <div class="item purple">
              <img src="/src/assets/images/decorate/purple.png">
              <span>尊贵紫</span>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
const activeNames = ref(['1','2'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>
.sa-flex-wrap {
  flex-wrap: wrap;
}
.sa-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.left {
  flex-shrink: 0;
  width: 260px;
  height: 100%;
  background: var(--sa-background-assist);
  box-shadow: 0px 0px 0.24rem rgb(0 0 0 / 16%);
  transition: all 0.2s;
  position: relative;
  .el-collapse {
    --el-collapse-border-color: var(--el-border-color-lighter);
    --el-collapse-header-height: 32px;
    --el-collapse-header-bg-color: var(--el-fill-color-blank);
    --el-collapse-header-text-color: var(--el-text-color-primary);
    --el-collapse-header-font-size: 13px;
    --el-collapse-content-bg-color: var(--el-fill-color-blank);
    --el-collapse-content-font-size: 13px;
    --el-collapse-content-text-color: var(--el-text-color-primary);
    border-top: 1px solid var(--el-collapse-border-color);
    border-bottom: 1px solid var(--el-collapse-border-color);
    .el-collapse-item {
      .el-collapse-item__header {
        padding: 0 12px !important;
      }
    }
  }
  .left-icon, .right-icon {
    width: 24px;
    height: 84px;
    color: var(--sa-font);
    background: var(--sa-space);
    border-radius: 0 24px 24px 0;
    border: 1px solid var(--sa-space);
    box-shadow: 0 0 4px rgb(0 0 0 / 8%), 0 2px 6px rgb(0 0 0 / 6%), 0 4px 8px 2px rgb(0 0 0 / 4%);
    position: absolute;
    top: 50%;
    z-index: 1;
    margin-top: -42px;
    cursor: pointer;
  }
  .left-main{
    .item {
      width: 86px;
      height: 86px;
      border-right: 1px solid var(--sa-space);
      border-bottom: 1px solid var(--sa-space);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 40px;
      height: 40px;
      margin-bottom: 8px;
    }
  }
}
</style>