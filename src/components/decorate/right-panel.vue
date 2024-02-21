<template>
    <el-scrollbar class="right-main">
      <el-form label-width="60px">
        <tabbar v-if="temp.type=='tabbar' && mode=='basic' && basicData" :tabbarData="basicData.page.tabbar" :tempInfo="temp"/>
        <float-menu v-if="temp.type=='floatMenu' && mode=='basic' && basicData" :floatMenuData="basicData.page.floatMenu" :tempInfo="temp"/>
        <popup-image v-if="temp.type=='popupImage' && mode=='basic' && basicData" :popupImageData="basicData.page.popupImage" :tempInfo="temp"/>
        <setting v-if="temp.type=='page' && mode=='home' && diyPage" :setting="diyPage.page.style" :tempInfo="temp" />
      </el-form>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import Tabbar from '/@/components/decorate/attr/tabbar'
import FloatMenu from '/@/components/decorate/attr/floatMenu'
import PopupImage from '/@/components/decorate/attr/popupImage'
import Setting from '/@/components/decorate/attr/setting'
import {mitt} from "/@/utils/mitt";

const props = defineProps({
  mode:{
    type:String,
    default:''
  },
  basicData:{
    type:Object
  },
  diyPage:{
    type:Object
  }
})

//默认组件显示
const temp = ref({
  group:'basic',
  name: '底部导航',
  type: 'tabbar'
})

onMounted(()=>{
  mitt.on('event.active',(template)=>{
    console.log(template)
    temp.value = template
  });
})


onBeforeUnmount(()=>{
  mitt.off('event.active')
})


</script>

<style lang="scss" scoped>

</style>