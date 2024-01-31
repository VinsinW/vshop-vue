<template>
  <div class="comp-wrap">
      <tabbar v-if="tempId=='tabbar' && mode=='basic' && basicData" :tabbarData="basicData.page.tabbar"/>
      <float-menu v-if="tempId=='floatMenu' && mode=='basic'"/>
      <popup-image v-if="tempId=='popupImage' && mode=='basic'"/>
  </div>
</template>

<script lang="ts" setup>
import {mitt} from "/@/utils/mitt"
import Tabbar from "/@/components/decorate/template/tabbar.vue"
import FloatMenu from "/@/components/decorate/template/floatMenu.vue"
import PopupImage from "/@/components/decorate/template/popupImage.vue"

const props = defineProps({
  mode:{
    type:String,
    default:''
  },
  basicData:{
    type:Object
  },
})

const tempId = ref('tabbar')


onMounted(()=>{
  mitt.on('event.active',(template)=>{
      tempId.value = template
  })
})

onBeforeUnmount(()=>{
  mitt.off('event.active')
})



</script>

<style lang="scss" scoped>

</style>