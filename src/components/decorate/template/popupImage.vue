<template>
  <div class="popup-image">
    <div class="mask"></div>
    <div v-for="(item,index) in popupImageData.list" class="popup-image-item"
         :style="[{'margin-right':-146-20*index+'px'},{'margin-bottom':-227-20*index+'px'},{'z-index':index}]" @click="handleFloat(index)">
      <div class="sa-image">
        <el-image :src="item.src"  fit="contain">
          <template #error>
            <div class="el-image__wrapper">
              <el-icon><Picture /></el-icon>
            </div>
          </template>
        </el-image>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props =  defineProps({
  popupImageData:Object,
})
/**
 * 触发浮动层排序
 * @param i 获取置顶层
 */
function handleFloat(i){
  const list = document.getElementsByClassName('popup-image-item')
  list.forEach((item,index)=>{
    if(index!=i){
      item.style.zIndex=index
    }else{
      item.style.zIndex=200
    }
  })
}
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