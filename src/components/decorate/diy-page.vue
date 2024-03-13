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
      v-if="mode=='home'&&diyPage.page.data"
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
      <div v-if="element&&diyPage.page.data[index].type===element.type" class="comp-item" :class="[element.type,{'is-active':currentComp.index==index}]" @click="onSelectComp(index,element.type)">
        <component :is="compMap[element.type]" :compData="diyPage.page.data[index]"></component>
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
import Draggable from 'vuedraggable'
import { page } from "/@/modules/page"
import Tabbar from "/@/components/decorate/template/tabbar"
import FloatMenu from "/@/components/decorate/template/floatMenu"
import PopupImage from "/@/components/decorate/template/popupImage"
import CenterHeader from "/@/components/decorate/template/centerHeader"
import compMap from "/@/components/decorate/comp/template"

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
  const type = e.clone.classList[1]
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
</style>