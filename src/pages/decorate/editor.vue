<template>
  <div id="index" class="page-index  panel panel-default panel-intro">
    <el-container class="panel-block">
      <el-header>
        <sa-header v-if="basicFlag&&basicData" :mode="mode" :basicData="basicData" @evenSwitchMode="handleSwitchMode"></sa-header>
      </el-header>
      <el-main class="page-main sa-flex">
        <!--左侧设置栏目 Begin-->
        <div class="left" :class="isCollapse.left?'is-collapse':''">
          <left-menu :mode="mode" />
          <div class="left-icon sa-flex sa-row-center" @click="handleCollapse('left')">
            <el-icon><ArrowLeft /></el-icon>
          </div>
        </div>
        <!--左侧设置栏目 End-->

        <!--手机模拟DIY Begin-->
        <div  class="center sa-flex sa-row-center">
          <div id="html2canvasWrap" class="center-main basic is-android">
            <diy-page v-if="basicFlag&&basicData" :mode="mode" :basicData="basicData" />
          </div>
        </div>
        <!--手机模拟DIY End-->

        <!--组件属性 Begin-->
        <div class="right" :class="isCollapse.right?'is-collapse':''">
          <right-panel v-if="basicFlag&&basicData"  :mode="mode" :basicData="basicData"/>
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
import {useDiyPageStore} from "/@/store/decorate/diypage";


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
}

const basicData = ref()
const basicFlag = ref(false)
const diyPage = useDiyPageStore()
//获取页面DIY配置数据
async function loadBasic(){
  await diyPage.setBasicPage()
  basicData.value = diyPage.getBasicPage
  basicFlag.value = true
}
loadBasic()
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