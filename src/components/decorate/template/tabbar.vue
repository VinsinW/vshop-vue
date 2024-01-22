<template>
  <div class="tabbar sa-flex" style="background:  0% 0% / 100% 58px no-repeat rgb(255, 255, 255);">
    <div class="tabbar-item" style="width: 25%;">
      <div class="top sa-flex sa-row-center">
        <div class="sa-image" style="width: 24px; height: 24px; border-radius: 0px;">
          <el-image src="/src/assets/images/decorate/menu_icon/home_cur.gif" fit="contain"/>
        </div>
      </div>
      <div class="text" style="color: rgb(233, 180, 97);">首页</div>
    </div>
    <div class="tabbar-item" style="width: 25%;">
      <div class="top sa-flex sa-row-center">
        <div class="sa-image" style="width: 24px; height: 24px; border-radius: 0px;">
          <el-image src="/src/assets/images/decorate/menu_icon/class.png" fit="contain"/>
        </div>
      </div>
      <div class="text" style="color: rgb(140, 140, 140);">分类</div>
    </div>
    <div class="tabbar-item" style="width: 25%;">
      <div class="top sa-flex sa-row-center">
        <div class="sa-image" style="width: 24px; height: 24px; border-radius: 0px;">
          <el-image src="/src/assets/images/decorate/menu_icon/shop.png" fit="contain"/>
        </div>
      </div>
      <div class="text" style="color: rgb(140, 140, 140);">购物车</div>
    </div>
    <div class="tabbar-item" style="width: 25%;">
      <div class="top sa-flex sa-row-center">
        <div class="sa-image" style="width: 24px; height: 24px; border-radius: 0px;">
          <el-image src="/src/assets/images/decorate/menu_icon/my.png" fit="contain"/>
        </div>
      </div>
      <div class="text" style="color: rgb(140, 140, 140);">我的</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.tabbar {
  font-size: 12px;
  height: 58px;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
.tabbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>