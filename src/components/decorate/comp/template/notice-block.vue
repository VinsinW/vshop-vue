<template>
  <div class="comp-content"
       :style="{
          background:compData.style?.background.type==='color'?compData.style?.background.bgColor:'url('+compData.style?.background.bgImage+') 0% 0% / 100% 58px no-repeat',
          margin:compData.style?.marginTop+'px '+compData.style?.marginRight+'px '+compData.style?.marginBottom+'px '+compData.style?.marginLeft+'px',
          borderRadius:compData.style?.borderRadiusTop+'px '+compData.style?.borderRadiusTop+'px '+compData.style?.borderRadiusBottom+'px '+compData.style?.borderRadiusBottom+'px',
          padding:compData.style?.padding+'px'
        }">


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

</style>