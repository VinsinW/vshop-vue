<template>
  <div id="index" class="page-index  panel panel-default panel-intro">
    <el-container class="panel-block">
      <el-header>
        <sa-header v-if="basicFlag&&basicData" :mode="mode" :basicData="basicData" @evenSwitchMode="handleSwitchMode"></sa-header>
      </el-header>
      <el-main class="page-main sa-flex">
        <!--左侧设置栏目 Begin-->
        <div class="left" :class="isCollapse.left?'is-collapse':''">
          <left-menu v-if="basicFlag&&basicData" :mode="mode" :basicData="basicData" />
          <left-menu v-if="mode=='home'&&diyPage" :mode="mode" :diyPage="diyPage" />
          <div class="left-icon sa-flex sa-row-center" @click="handleCollapse('left')">
            <el-icon><ArrowLeft /></el-icon>
          </div>
        </div>
        <!--左侧设置栏目 End-->

        <!--手机模拟DIY Begin-->
        <div  class="center sa-flex sa-row-center" @click.self="handlePage">
          <div id="html2canvasWrap" class="center-main basic is-android">
            <diy-page v-if="mode=='basic'&&basicFlag&&basicData" :mode="mode" :basicData="basicData" />
            <diy-page v-if="mode=='home'&&diyPage" :mode="mode" :diyPage="diyPage" />
          </div>
        </div>
        <!--手机模拟DIY End-->

        <!--组件属性 Begin-->
        <div class="right" :class="isCollapse.right?'is-collapse':''">
          <right-panel v-if="mode=='basic'&&basicFlag&&basicData" :mode="mode" :basicData="basicData" />
          <right-panel v-if="mode=='home'&&diyPage" :mode="mode" :diyPage="diyPage" />
          <div class="right-icon sa-flex sa-row-center" @click="handleCollapse('right')">
            <el-icon><ArrowRight /> </el-icon>
          </div>
        </div>
        <!--组件属性 End-->
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import '/@/assets/decorate.scss'
import SaHeader from "/@/components/decorate/sa-header.vue"
import LeftMenu from "/@/components/decorate/left-menu.vue"
import DiyPage from "/@/components/decorate/diy-page.vue"
import RightPanel from "/@/components/decorate/right-panel.vue"
import { page } from "/@/modules/page"
import {mitt} from "/@/utils/mitt";
import {isEmpty} from "lodash-es";
import {service} from "/@/service";

/**
 * 处理左右栏目收缩
 * @param direction
 */
const isCollapse = reactive({
  left:false,
  right:false
})
function handleCollapse(direction){
  isCollapse[direction] = !isCollapse[direction]
}

/**
 * 处理DIY模板切换
 * @param val
 */
const mode = ref('basic');
function handleSwitchMode(val){
  mode.value = val
  if(val=='home'){
    getHomePageService()
  }
}

/**
 * 切换HOME页面
 */
function handlePage(){
  if(mode.value == 'home'){
    const template = {
      group:'home',
      name: '页面设置',
      type: 'page'
    }
    mitt.emit('event.active',template)
    const currentComp = {
      index: -1, // -2=未选中|-1=选中页面
      type: null,
      right: {}
    }
    mitt.emit('event.currentComp',currentComp);
    getHomePageService()
  }
}

const basicData = ref()
const diyPage= ref()
const basicFlag = ref(false)

/**
 * 获取基础配置数据
 */
async function getBasicPageService(){
  function next(res){
    basicData.value = res
    basicFlag.value = true
  }
  if(isEmpty(basicData.value)){
    await service.request('http://127.0.0.1:9000/src/json/1392.json').then(next)
  } else {
    next(basicData.value)
  }
}
getBasicPageService()

/**
 * 获取首页配置数据
 */
async function getHomePageService(){
  function next(res){
    diyPage.value = res
  }
  if(isEmpty(diyPage.value)){
    await service.request('http://127.0.0.1:9000/src/json/1392home.json').then(next)
  } else {
    next(diyPage.value)
  }
}

</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  height: fit-content;
}
.page-index{
  .panel-block{
    height: calc(100vh - 154px);
  }
}
</style>