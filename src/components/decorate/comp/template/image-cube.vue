<template>
  <div class="comp-content"
       :style="{
          background:compData.style?.background.type==='color'?compData.style?.background.bgColor:'url('+compData.style?.background.bgImage+') 0% 0% / 100% 58px no-repeat',
          margin:compData.style?.marginTop+'px '+compData.style?.marginRight+'px '+compData.style?.marginBottom+'px '+compData.style?.marginLeft+'px',
          borderRadius:compData.style?.borderRadiusTop+'px '+compData.style?.borderRadiusTop+'px '+compData.style?.borderRadiusBottom+'px '+compData.style?.borderRadiusBottom+'px',
          padding:compData.style?.padding+'px'
        }" >
  <div class="image-cube" v-if="compData.data?.list.length>0">
    <div class="image-cube-wrap" style="position: relative;" :style="{height:maxHeight*scale-compData.style?.marginRight/maxHeight-compData.style?.marginLeft/maxHeight-compData.style?.padding/maxHeight*2+compData.data.space/2+'px',margin:-compData.data.space/2+'px'}">
      <div v-for="(item,index) in compData.data.list" class="image-cube-item"
           :style="{
              width:scale*item.width-(compData.style?.marginRight+compData.style?.marginLeft+compData.style?.padding*2-compData.data.space)/4*item.width+'px',
              height:scale*item.height-(compData.style?.marginRight+compData.style?.marginLeft+compData.style?.padding*2-compData.data.space)/4*item.height+'px',
              top:scale*item.top-(compData.style?.marginRight+compData.style?.marginLeft+compData.style?.padding*2-compData.data.space)/4*item.top+'px',
              left:scale*item.left-compData.style?.marginRight/4*item.width<=0?0+'px':scale*item.left-(compData.style?.marginRight+compData.style?.marginLeft+compData.style?.padding*2-compData.data.space)/4*item.width+'px',
              padding:compData.data.space/2+'px'
            }">
        <div class="sa-image" style="width: 100%; height: 100%; overflow:hidden;" :style="{borderRadius:compData.data.borderRadiusTop+'px '+compData.data.borderRadiusTop+'px '+compData.data.borderRadiusBottom+'px '+compData.data.borderRadiusBottom+'px'}">
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
import {forEach} from "lodash-es";


const props =  defineProps({
  compData: {
    type:Object,
    default:''
  },
  scale:{
    type:Number,
    default:80
  }
})
//计算最大行高
const maxHeight = computed(()=>{
  let size = 0;
  props.compData.data.list.forEach((item)=>{
    size = item.height+item.top>size?item.height+item.top:size
  })
  return size
})


</script>

<style lang="scss" scoped>
.image-cube .image-cube-item {
  position: absolute;
}
</style>