<template>
  <div v-if="floatMenuData.show" :class="{'mask':showFloat}">
    <div class="float-menu" :class="floatMenuData.mode===1?'vertical':'horizontal'">
      <div v-if="showFloat" class="float-menu-item" v-for="(temp,index) in floatMenuData.list" >
        <div class="sa-image" style="width: 26px; height: 26px; border-radius: 0px;">
          <el-image :src="temp.src" fit="contain">
            <template #error>
              <div class="el-image__wrapper">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
        </div>
        <div v-if="floatMenuData.isText" class="text" :style="{color:temp.title.color}">{{temp.title.text}}</div>
      </div>
      <div class="float-menu-button sa-flex sa-row-center" :class="{'fold':showFloat}"  style="background: rgb(255, 96, 0);" @click="handleHide()">
        <el-icon><CloseBold /></el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  floatMenuData:Object
})

const showFloat = ref(true)
//显示隐藏事件触发
function handleHide(){
  showFloat.value = !showFloat.value
}
</script>

<style lang="scss" scoped>
.mask {
  background: #eee;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.float-menu.vertical {
  flex-direction: column;
  .float-menu-item {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
.float-menu {
  position: absolute;
  right: 30px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.float-menu-item {
  margin-right: 10px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.float-menu-button {
  width: 42px;
  height: 42px;
  font-size: 20px;
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s linear;
  cursor: pointer;
  transform: rotateZ(135deg);
  -webkit-transform: rotateZ(135deg);
  &.fold {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
  }
}
.sa-image {
  display: inline-flex;
  width: 56px;
  height: 56px;
  overflow: hidden;
  flex-shrink: 0;
}
.sa-image .el-image__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>