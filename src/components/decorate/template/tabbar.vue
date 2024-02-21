<template>
  <div class="tabbar sa-flex" :style="{background:tabbarData.background.type==='color'?tabbarData.background.bgColor:'url('+tabbarData.background.bgImage+') 0% 0% / 100% 58px no-repeat'}">
    <div class="tabbar-item" v-for="(temp,index) in tabbarData.list" :style="{width:100/tabbarData.list.length+'%'}" :class="{'is-center':tabbarData.mode===2&&tabbarData.list.length%2===1&&index===Math.floor(tabbarData.list.length/2)}">
      <div class="top sa-flex sa-row-center">
        <div class="sa-image" style="width: 24px; height: 24px; border-radius: 0px;">
          <el-image v-if="tabbarData.layout!=2" :src="index===0?temp.activeIcon:temp.inactiveIcon" fit="contain">
            <template #error>
              <div class="el-image__wrapper">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
        </div>
      </div>
      <div v-if="tabbarData.layout!=3" class="text" :style="{color:(index===0?tabbarData.activeColor:tabbarData.inactiveColor)}">{{ temp.text }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props =  defineProps({
  tabbarData:Object
})

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
.sa-image .el-image__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabbar-item.is-center .top {
  width: 49px;
  height: 49px;
  border-radius: 50%;
  margin-bottom: 4px;
  background: linear-gradient(123deg, #fe8c00 0%, #ff6000 100%);
  box-shadow: 0 9px 13px 5px rgb(254 129 0 / 22%);
}
.tabbar-item.is-center .text {
  display: none;
}
</style>