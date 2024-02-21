<template>
  <!--home 自定义主页-->
  <center-header v-if="mode=='home'" />
  <!--basic 基础设置-->
  <div v-if="mode=='basic'" class="comp-wrap">
    <tabbar v-if="temp.type=='tabbar' && basicData" :tabbarData="basicData.page.tabbar" :tempInfo="temp"/>
    <float-menu v-if="temp.type=='floatMenu'  && basicData" :floatMenuData="basicData.page.floatMenu" :tempInfo="temp"/>
    <popup-image v-if="temp.type=='popupImage' && basicData" :popupImageData="basicData.page.popupImage" :tempInfo="temp"/>
  </div>

  <!--home 自定义页面设置-->
  <Draggable
      v-if="mode=='home'"
      :group="state.groupComp"
      v-model="diyPage.page.data"
      item-key="1"
      handle=".comp-item"
      ghost-class="sortable-ghost"
      chosen-class="sortable-chosen"
      animation="300"
      class="comp-wrap"
      :style="mode=='basic'?'':'background-color:'+diyPage.page.style.background.color">
    <template #item="{ element }">
      <div class="comp-item" :class="[element.type]">
        <div class="comp-content" style="margin: 0px 0px 8px; border-radius: 0px; padding: 8px; background: rgb(255, 255, 255);">
        <component :is="compMap[element.type]"></component>
        </div>
        <div class="comp-label">{{ element.name }}</div>
      </div>
    </template>
  </Draggable>

</template>

<script lang="ts" setup>
import {mitt} from "/@/utils/mitt"
import Tabbar from "/@/components/decorate/template/tabbar.vue"
import FloatMenu from "/@/components/decorate/template/floatMenu.vue"
import PopupImage from "/@/components/decorate/template/popupImage.vue"
import CenterHeader from "/@/components/decorate/template/centerHeader.vue"
import SearchBlock from "/@/components/decorate/comp/search-block.vue"
import Draggable from 'vuedraggable'

const compMap:any = {
  searchBlock:SearchBlock
}

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

const temp = ref({
  group:'basic',
  name: '底部导航',
  type: 'tabbar'
})

const state = reactive({
  groupComp:{
    name:'Comp-item',
    pull:true,
    put:true
  }
})


onMounted(()=>{
  console.log(props.diyPage)
  mitt.on('event.active',(template)=>{
    temp.value = template
  });
})

onBeforeUnmount(()=>{
  mitt.off('event.active')
})



</script>

<style lang="scss" scoped>
.comp-item {
  position: relative;
  z-index: 10;
  cursor: pointer;
  .comp-content {
    background-size: 100% !important;
    background-repeat: no-repeat !important;
    overflow: hidden;
    min-height: 30px;
  }
  .comp-label {
    position: absolute;
    top: 0;
    left: -88px;
    z-index: 1;
    width: 80px;
    height: 32px;
    background: var(--sa-background-assist);
    box-shadow: 0px 0px 4px rgb(0 0 0 / 8%), 0px 2px 6px rgb(0 0 0 / 6%), 0px 4px 8px 2px rgb(0 0 0 / 4%);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    color: var(--sa-font);
  }
}
</style>