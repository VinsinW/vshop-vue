<template>
  <div class="comp-wrap">
      <tabbar v-if="tempId=='tabbar' && mode=='basic'"/>
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
  }
})

const tempId = ref('tabbar')


mitt.on('event.active',(template)=>{
  tempId.value = template
})

</script>

<style lang="scss" scoped>

</style>