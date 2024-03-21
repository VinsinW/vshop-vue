<template>
  <div class="right-title">
    <img :src="'/src/assets/images/decorate/'+tempInfo.type+'.png'">
    <span>{{ tempInfo.name }}</span>
  </div>
  <div class="right-tab sa-flex">
    <div class="tab-item" :class="{'is-active':tab===1}" @click="handleSwitchTab(1)">内容</div>
    <div class="tab-item" :class="{'is-active':tab===3}" @click="handleSwitchTab(3)">数据</div>
  </div>

  <div v-if="tab===1" class="d-list">
    <div class="title">展示图标</div>
    <div class="wrap">
      <div>
        <Draggable
            v-model="popupImageData.list"
            item-key="1"
            handle=".move .sortable-drag"
            ghost-class="ghost"
            chosen-class="chosenClass"
            animation="300">
          <template #item="{ element }">
            <div class="list-item" >
              <div class="move sa-flex">
                <i class="iconfont iconmove sortable-drag"></i>
                <span class="list-delete" @click="deleteItem(element)">删除</span>
              </div>
              <el-form-item label="广告图">
                <div class="sa-flex">
                  <div class="sa-uploader">
                    <div class="sa-flex sa-flex-wrap">
                      <div class="sa-uploader-item">
                        <el-image :src="element.src" :preview-src-list="[element.src]" fit="contain">
                          <template #error>
                            <div class="el-image__wrapper">
                              <el-icon><Plus /></el-icon>
                            </div>
                          </template>
                        </el-image>
                        <div v-if="element.src" class="mask">
                          <el-icon @click="deleteImg(element,'src')"><CircleCloseFilled /></el-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="按钮链接">
                <el-input v-model="element.url">
                  <template #append>选择</template>
                </el-input>
              </el-form-item>
              <el-form-item label="显示次数">
                <el-radio-group v-model="element.show" class="custom-radio-button">
                  <el-radio :label="1">仅显示一次</el-radio>
                  <el-radio :label="2">每次显示</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
          </template>
        </Draggable>
      </div>
      <el-button class="add-button" @click="addItem"><el-icon><plus /></el-icon> 添加</el-button>
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
  popupImageData:Object,
  tempInfo:Object
})

//切换tab  1.内容 2.样式 3.数据
const tab = ref(1)
function handleSwitchTab(type){
  tab.value = type
}

/**
 * 删除操作
 * @param e 删除项目
 */
const deleteItem = (e)=>{
  const list = props.popupImageData.list.filter(item=>item!=e)
  props.popupImageData.list = list
}

/**
 * 添加操作
 */
const addItem = ()=>{
 const item = {
   src: "",
   url: "",
   show: 1
 }
 props.popupImageData.list.push(item)
}
/**
 * 删除选项图片
 * @param e  所选项
 * @param key 所选项图片属性
 */
const deleteImg = (e,key)=>{
 e[key] = ''; //图片属性赋值为空
}


</script>

<style lang="scss" scoped>

</style>