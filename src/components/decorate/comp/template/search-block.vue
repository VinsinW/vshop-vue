<template>
  <div class="comp-content"
       :style="{
          background:compData.style?.background.type==='color'?compData.style?.background.bgColor:'url('+compData.style?.background.bgImage+') 0% 0% / 100% 58px no-repeat',
          margin:compData.style?.marginTop+'px '+compData.style?.marginRight+'px '+compData.style?.marginBottom+'px '+compData.style?.marginLeft+'px',
          borderRadius:compData.style?.borderRadiusTop+'px '+compData.style?.borderRadiusTop+'px '+compData.style?.borderRadiusBottom+'px '+compData.style?.borderRadiusBottom+'px',
          padding:compData.style?.padding+'px'
        }">
    <div class="search-block sa-flex sa-row-between" :style="'border-radius:'+compData.data?.borderRadius+'px'">
      <div class="sa-flex">
        <el-icon><Search /></el-icon>
        <div class="placeholder sa-m-l-8">{{compData.data?.placeholder}}</div>
      </div>
      <div class="keywords sa-flex"></div>
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
.search-block {
  height: 32px;
  background: #fff;
  border: 1px solid #eee;
  padding: 0 12px;
  font-size: 14px;
  color: #b0b3bf;
}
</style>