<template>
  <div class="comp-content"
       :style="{
          background:compData.style?.background.type==='color'?compData.style?.background.bgColor:'url('+compData.style?.background.bgImage+') 0% 0% / 100% 58px no-repeat',
          margin:compData.style?.marginTop+'px '+compData.style?.marginRight+'px '+compData.style?.marginBottom+'px '+compData.style?.marginLeft+'px',
          borderRadius:compData.style?.borderRadiusTop+'px '+compData.style?.borderRadiusTop+'px '+compData.style?.borderRadiusBottom+'px '+compData.style?.borderRadiusBottom+'px',
          padding:compData.style?.padding+'px'
        }" >
  <div class="image-cube">
    <div class="image-cube-wrap" style="margin: -4px; height: 160px; position: relative;">
      <div v-for="(item,index) in compData.data.list" class="image-cube-item"
           :style="{
              width: 80*item.width-compData.+'px',
              height: 80*item.height+'px',
              top: 80*item.top+'px',
              left: 80*item.left+'px',
              padding:compData.data.space/2+'px'
            }">
        <div class="sa-image" style="width: 100%; height: 100%; border-radius: 8px;">
          <el-image :src="item.src" fit="cover">
            <template #error>
              <div class="el-image__wrapper">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
const props =  defineProps({
  compData: {
    type:Object,
    default:''
  }
})

</script>

<style lang="scss" scoped>
.image-cube .image-cube-item {
  position: absolute;
}
</style>