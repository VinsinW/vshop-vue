<template>
  <div class="right-title">
    <img :src="'/src/assets/images/decorate/'+tempInfo.type+'.png'">
    <span>{{ tempInfo.name }}</span>
  </div>
  <div class="right-tab sa-flex">
    <div class="tab-item" :class="{'is-active':tab===1}" @click="handleSwitchTab(1)">内容</div>
    <div class="tab-item" :class="{'is-active':tab===3}" @click="handleSwitchTab(3)">数据</div>
  </div>

  <div v-if="tab===1" class="card">
    <div class="title">页面背景</div>
    <div class="wrap">
      <el-form-item label="背景色">
        <div class="d-color-picker sa-flex">
          <el-color-picker v-model="setting.background.color"/>
          <el-input v-model="setting.background.color"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="背景图">
        <div class="sa-flex">
          <div class="sa-uploader">
            <div class="sa-flex sa-flex-wrap">
              <div class="sa-uploader-item">
                <el-image :src="setting.background.src" :preview-src-list="[setting.background.src]" fit="contain" @click="handleUpload">
                  <template #error>
                    <div class="el-image__wrapper">
                      <el-icon><Plus /></el-icon>
                    </div>
                  </template>
                </el-image>
                <div v-if="setting.background.src" class="mask">
                  <el-icon @click="deleteImg(setting.background,'src')"><CircleCloseFilled /></el-icon>
                </div>
              </div>
            </div>
          </div>
          <span class="tip">建议宽度：750</span>
        </div>
      </el-form-item>
    </div>
  </div>
  <div v-if="tab===1" class="card">
    <div class="title">头部设置</div>
    <div class="wrap">
      <el-form-item label="头部样式">
        <el-radio-group v-model="setting.navbar.mode" class="custom-radio-button">
          <el-radio label="inner">标准</el-radio>
          <el-radio label="normal">沉浸式</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="背景">
        <el-radio-group v-model="setting.navbar.type" class="custom-radio-button">
          <el-radio label="color">纯色</el-radio>
          <el-radio label="image">图片</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="选择颜色">
        <div class="d-color-picker sa-flex">
          <el-color-picker v-model="setting.navbar.color"/>
          <el-input v-model="setting.navbar.color"></el-input>
        </div>
      </el-form-item>
    </div>
  </div>

  <!--数据对象-->
  <el-scrollbar v-if="tab===3" class="cssCard">
    <Data :compData="compData"></Data>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable'
import Data from "./data.vue"

const props =  defineProps({
  setting:Object,
  tempInfo:Object
})

//切换tab  1.内容 2.样式 3.数据
const tab = ref(1)
function handleSwitchTab(type){
  tab.value = type
}

/**
 * 菜单项删除操作
 * @param e 删除项目
 */
const deleteMenuItem = (e)=>{
  const list = props.tabbarData.list.filter(item=>item!=e)
  props.tabbarData.list = list
  console.log(list)
}

/**
 * 菜单项添加
 */
const addMenuItem = ()=>{
 const itemMenu = {
   inactiveIcon: "",
   activeIcon: "",
   url: "",
   text: ""
 }
  props.tabbarData.list.push(itemMenu)
}
/**
 * 删除选项图片
 * @param e  所选项
 * @param key 所选项图片属性
 */
const deleteImg = (e,key)=>{
  e[key] = ''; //图片属性赋值为空
}


const handleUpload = ()=>{

}

</script>

<style lang="scss" scoped>

</style>