<template>
  <div  class="center sa-flex sa-row-center">
    <div id="html2canvasWrap" class="center-main basic is-android">
      <div class="comp-wrap">
        <div class="tabbar sa-flex" style="background:  0% 0% / 100% 58px no-repeat rgb(255, 255, 255);">
          <div class="tabbar-item" style="width: 25%;">
            <div class="top sa-flex sa-row-center">
              <div class="sa-image" style="width: 24px; height: 24px; border-radius: 0px;">
                <div class="el-image"><img src="/src/assets/images/decorate/menu_icon/home_cur.gif"
                                           class="el-image__inner" style="object-fit: contain;"><!--v-if--><!--v-if-->
                </div>
              </div>
            </div>
            <div class="text" style="color: rgb(233, 180, 97);">首页</div>
          </div>
          <div class="tabbar-item" style="width: 25%;">
            <div class="top sa-flex sa-row-center">
              <div class="sa-image" style="width: 24px; height: 24px; border-radius: 0px;">
                <div class="el-image"><img src="/src/assets/images/decorate/menu_icon/class.png"
                                           class="el-image__inner" style="object-fit: contain;"><!--v-if--><!--v-if-->
                </div>
              </div>
            </div>
            <div class="text" style="color: rgb(140, 140, 140);">分类</div>
          </div>
          <div class="tabbar-item" style="width: 25%;">
            <div class="top sa-flex sa-row-center">
              <div class="sa-image" style="width: 24px; height: 24px; border-radius: 0px;">
                <div class="el-image"><img src="/src/assets/images/decorate/menu_icon/shop.png"
                                           class="el-image__inner" style="object-fit: contain;"><!--v-if--><!--v-if-->
                </div>
              </div>
            </div>
            <div class="text" style="color: rgb(140, 140, 140);">购物车</div>
          </div>
          <div class="tabbar-item" style="width: 25%;">
            <div class="top sa-flex sa-row-center">
              <div class="sa-image" style="width: 24px; height: 24px; border-radius: 0px;">
                <div class="el-image"><img src="/src/assets/images/decorate/menu_icon/my.png"
                                           class="el-image__inner" style="object-fit: contain;"><!--v-if--><!--v-if-->
                </div>
              </div>
            </div>
            <div class="text" style="color: rgb(140, 140, 140);">我的</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.comp-wrap {
  position: relative;
  flex: 1;
  background: #ffffff;
  background-repeat: no-repeat !important;
  background-size: contain !important;
}
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
.center-main {
  position: absolute;
  top: 18px;
  width: 320px;
  min-height: calc(100% - 26px);
  background: var(--sa-background-assist);
  display: flex;
  flex-direction: column;
}
.center-main::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 50%;
  right: 0;
  bottom: -8px;
  z-index: 1;
  margin-left: -167.5px;
  width: 320px;
  height: inherit;
  border: 8px solid var(--sa-title);
  box-sizing: content-box;
  pointer-events: none;
  cursor: move;
  overflow: hidden;
  border-radius: 16px;
}
.sa-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>