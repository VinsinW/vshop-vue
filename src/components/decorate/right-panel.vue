<template>
    <el-scrollbar class="right-main">
      <el-form label-width="60px">
        <tabbar v-if="temp.type=='tabbar' && mode=='basic' && basicData" :tabbarData="basicData.page.tabbar" :tempInfo="temp"/>
        <float-menu v-if="temp.type=='floatMenu' && mode=='basic' && basicData" :floatMenuData="basicData.page.floatMenu" :tempInfo="temp"/>
        <popup-image v-if="temp.type=='popupImage' && mode=='basic' && basicData" :popupImageData="basicData.page.popupImage" :tempInfo="temp"/>
        <setting v-if="currentComp.index==-1 && diyPage" :setting="diyPage.page.style" :tempInfo="temp" />
        <search-block v-if="currentComp.type=='searchBlock' && diyPage" :searchBlock="diyPage.page.data[currentComp.index]" :compName="page.compNameObj[currentComp.type].label"/>
      </el-form>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import Tabbar from '/@/components/decorate/attr/tabbar'
import FloatMenu from '/@/components/decorate/attr/floatMenu'
import PopupImage from '/@/components/decorate/attr/popupImage'
import Setting from '/@/components/decorate/attr/setting'
import SearchBlock from '/@/components/decorate/comp/attr/search-block'
import {mitt} from "/@/utils/mitt";
import { page } from "/@/modules/page"

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

//当前选中组件
const currentComp = reactive({
  index: null, // -2=未选中|-1=选中页面
  type: null,
  right: {}
})


onMounted(()=>{
  mitt.on('event.active',(template)=>{
    temp.value = template
  });
  mitt.on('event.currentComp',(current)=>{
    currentComp.index = current.index
    currentComp.type = current.type
    currentComp.right = current.right
  });
})


onBeforeUnmount(()=>{
  mitt.off('event.active')
  mitt.off('event.currentComp')
})


</script>

<style lang="scss" scoped>

</style>