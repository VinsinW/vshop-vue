<template>
  <!--home 自定义主页-->
  <center-header v-if="mode=='home'" />
  <!--basic 基础设置-->
  <div v-if="mode=='basic'&&basicData" class="comp-wrap">
    <tabbar v-if="temp.type=='tabbar' && basicData" :tabbarData="basicData.page.tabbar" :tempInfo="temp"/>
    <float-menu v-if="temp.type=='floatMenu'  && basicData" :floatMenuData="basicData.page.floatMenu" :tempInfo="temp"/>
    <popup-image v-if="temp.type=='popupImage' && basicData" :popupImageData="basicData.page.popupImage" :tempInfo="temp"/>
  </div>

  <!--home 自定义页面设置-->
  <Draggable
      v-if="mode=='home'"
      :group="state.groupComp"
      v-model="diyPage.page.data"
      item-key=""
      handle=".comp-item"
      ghost-class="sortable-ghost"
      chosen-class="sortable-chosen"
      animation="300"
      class="comp-wrap"
      @end="onEnd"
      :style="mode=='basic'?'':'background-color:'+diyPage.page.style.background.color">
    <template #item="{element,index}">
      <div class="comp-item" :class="[element.type,{'is-active':currentComp.index==index}]" @click="onSelectComp(index,element.type)">
        <div class="comp-content" style="border-radius: 0px; padding: 8px;"
             :style="{
          background:diyPage.page.data[index].style.background.type==='color'?diyPage.page.data[index].style.background.bgColor:'url('+diyPage.page.data[index].style.background.bgImage+') 0% 0% / 100% 58px no-repeat',
          margin:diyPage.page.data[index].style.marginTop+'px '+diyPage.page.data[index].style.marginRight+'px '+diyPage.page.data[index].style.marginBottom+'px '+diyPage.page.data[index].style.marginLeft+'px',
          borderRadius:diyPage.page.data[index].style.borderRadiusTop+'px '+diyPage.page.data[index].style.borderRadiusTop+'px '+diyPage.page.data[index].style.borderRadiusBottom+'px '+diyPage.page.data[index].style.borderRadiusBottom+'px',
          padding:diyPage.page.data[index].style.padding+'px'
        }" >
          <component :is="compMap[element.type]" :compData="diyPage.page.data[index]"></component>
        </div>
        <div class="comp-label">{{page.compNameObj[element.type].label}}</div>
        <div class="comp-tools">
          <el-icon v-if="index>0" @click.stop="onUpComp(index,element.type)"><ArrowUp /></el-icon>
          <el-icon v-if="index<diyPage.page.data.length-1" @click.stop="onDownComp(index,element.type)"><ArrowDown /></el-icon>
          <el-icon @click.stop="onCopyComp(index,element.type)"><CopyDocument /></el-icon>
          <el-icon @click.stop="onDelete(index,element.type)"><Delete /></el-icon>
        </div>
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
import SearchBlock from "/@/components/decorate/comp/template/search-block.vue"
import Draggable from 'vuedraggable'
import { page } from "/@/modules/page"

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


//初始化配置
const temp = ref({
  group:'basic',
  name: '底部导航',
  type: 'tabbar'
})

//拖拽组件配置
const state = reactive({
  groupComp:{
    name:'Comp-item',
    pull:true,
    put:true
  }
})

//当前选中组件
const currentComp = reactive({
  index: null, // -2=未选中|-1=选中页面
  type: null,
  right: {}
})


const onSelectComp = (index,type=null,right={})=>{
  currentComp.index = index
  currentComp.type = type
  currentComp.right = props.diyPage.page.data[index]
  mitt.emit('event.currentComp',currentComp)
}


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

/**
 * 组件上移
 * @param index 组件ID
 */
const onUpComp = (index,type)=>{
  props.diyPage.page.data.splice(
      index-1,
      2,
      props.diyPage.page.data[index],
      props.diyPage.page.data[index-1],
  )
  onSelectComp(index-1,type)
}

/**
 * 组件下移
 * @param index 组件ID
 */
const onDownComp = (index,type)=>{
  props.diyPage.page.data.splice(
      index,
      2,
      props.diyPage.page.data[index+1],
      props.diyPage.page.data[index],
  )
  onSelectComp(index+1,type)
}

/**
 * 组件拖拽排序
 * @param e
 */
const onEnd = (e)=>{
  const type = e.item.classList[1]
  onSelectComp(e.newIndex,type)
}

const onCopyComp = (index,type)=>{
  props.diyPage.page.data.splice(index,0,JSON.parse(JSON.stringify(props.diyPage.page.data[index])))
  onSelectComp(index+1,type)
}

const onDelete=(index,type)=>{
  props.diyPage.page.data.splice(index,1)
  onSelectComp(-2)
}

</script>

<style lang="scss" scoped>
.comp-item {
  position: relative;
  z-index: 10;
  cursor: pointer;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    cursor: move;
    display: none;
  }
  &.is-active{
    &::before {
      display: flex;
      border: 1px solid var(--el-color-primary);
    }
    .comp-label {
      color: #fff;
      background: var(--el-color-primary);
    }
    .comp-tools {
      display: flex;
    }
  }
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
  .comp-tools {
    position: absolute;
    top: 0;
    right: -40px;
    z-index: 1;
    width: 32px;
    background: var(--sa-background-assist);
    box-shadow: 0px 0px 4px rgb(0 0 0 / 8%), 0px 2px 6px rgb(0 0 0 / 6%), 0px 4px 8px 2px rgb(0 0 0 / 4%);
    border-radius: 2px;
    padding-top: 8px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .el-icon {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
}
</style>