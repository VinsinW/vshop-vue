<template>
  <div class="right-title">
    <img src="/src/assets/images/decorate/tabbar.png">
    <span>底部导航</span>
  </div>
  <div class="right-tab sa-flex">
    <div class="tab-item" :class="{'is-active':tab===1}" @click="handleSwitchTab(1)">内容</div>
    <div class="tab-item" :class="{'is-active':tab===2}" @click="handleSwitchTab(2)">样式</div>
    <div class="tab-item" :class="{'is-active':tab===3}" @click="handleSwitchTab(3)">数据</div>
  </div>

  <!--导航样式-->
  <div v-if="tab===1" class="card">
    <div class="title">导航样式</div>
    <div class="wrap">
      <el-form-item label="选择样式">
        <el-radio-group v-model="tabbarData.mode" class="custom-radio-button">
          <el-radio-button :label="1"><i class="iconfont icontabbar-1"></i></el-radio-button>
          <el-radio-button :label="2"><i class="iconfont icontabbar-2"></i></el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="导航风格">
        <el-radio-group v-model="tabbarData.layout" class="custom-radio-button">
          <el-radio :label="1">文字+图片</el-radio>
          <el-radio :label="2">文字</el-radio>
          <el-radio :label="3">图片</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="默认颜色">
        <div class="d-color-picker sa-flex">
          <el-color-picker v-model="tabbarData.inactiveColor"/>
          <el-input v-model="tabbarData.inactiveColor"></el-input>
        </div>
      </el-form-item>

      <el-form-item label="选中颜色">
        <div class="d-color-picker sa-flex">
          <el-color-picker v-model="tabbarData.activeColor"/>
          <el-input v-model="tabbarData.activeColor"></el-input>
        </div>
      </el-form-item>
    </div>
  </div>
  <div v-if="tab===1" class="d-list">
    <div class="title">图标设置</div>
    <div class="wrap">
      <div>
        <Draggable
            v-model="tabbarData.list"
            item-key="1"
            handle=".move .sortable-drag"
            ghost-class="ghost"
            chosen-class="chosenClass"
            animation="300">
          <template #item="{ element }">
            <div class="list-item">
              <div class="move sa-flex">
                <i class="iconfont iconmove sortable-drag"></i>
                <span class="list-delete" @click="deleteMenuItem(element)">删除</span>
              </div>
              <el-form-item label="默认图片">
                <div class="sa-flex">
                  <div class="sa-uploader">
                    <div class="sa-flex sa-flex-wrap">
                      <div class="sa-uploader-item">
                        <el-image :src="element.inactiveIcon" :preview-src-list="[element.inactiveIcon]" fit="contain">
                          <template #error>
                            <div class="el-image__wrapper">
                              <el-icon><Plus /></el-icon>
                            </div>
                          </template>
                        </el-image>
                        <div v-if="element.inactiveIcon" class="mask">
                          <el-icon><CircleCloseFilled /></el-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="tip">建议尺寸：44*44</span>
                </div>
              </el-form-item>
              <el-form-item label="选中图片">
                <div class="sa-flex">
                  <div class="sa-uploader">
                    <div class="sa-flex sa-flex-wrap">
                      <div class="sa-uploader-item">
                        <el-image :src="element.activeIcon" :preview-src-list="[element.activeIcon]" fit="contain">
                          <template #error>
                            <div class="el-image__wrapper">
                              <el-icon><Plus /></el-icon>
                            </div>
                          </template>
                        </el-image>
                        <div v-if="element.activeIcon" class="mask">
                          <el-icon><CircleCloseFilled /></el-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="tip">建议尺寸：44*44</span>
                </div>
              </el-form-item>
              <el-form-item label="底部文字">
                <el-input v-model="element.text"></el-input>
              </el-form-item>
              <el-form-item label="选择链接">
                <el-input v-model="element.url"></el-input>
              </el-form-item>
            </div>
          </template>
        </Draggable>
      </div>
      <el-button class="add-button" @click="addMenuItem"><el-icon><plus /></el-icon> 添加</el-button>
    </div>
  </div>

  <!--组件样式-->
  <div v-if="tab===2" class="card">
    <div class="title">组件样式</div>
    <div class="wrap">
      <el-form-item label="导航背景">
        <el-radio-group v-model="tabbarData.background.type" class="custom-radio-button">
          <el-radio label="color">纯色</el-radio>
          <el-radio label="image">图片</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="tabbarData.background.type=='color'" label="选择颜色">
        <div class="d-color-picker sa-flex">
          <el-color-picker v-model="tabbarData.background.bgColor"/>
          <el-input v-model="tabbarData.background.bgColor"></el-input>
        </div>
      </el-form-item>
      <el-form-item v-if="tabbarData.background.type=='image'" label="选择图片">
        <div class="sa-uploader">
          <div class="sa-flex sa-flex-wrap">
            <div class="sa-uploader-item">
              <el-image :src="tabbarData.background.bgImage" :preview-src-list="[tabbarData.background.bgImage]" fit="contain">
                <template #error>
                  <div class="el-image__wrapper">
                    <el-icon><Plus /></el-icon>
                  </div>
                </template>
              </el-image>
              <div v-if="tabbarData.background.bgImage" class="mask">
                <el-icon><CircleCloseFilled /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </el-form-item>
    </div>
  </div>

  <!--数据对象-->
  <el-scrollbar v-if="tab===3" class="cssCard">
    <div>{</div>
    <div v-for="(value,key) in tabbarData" class="pl-2 sa-flex sa-col-top">
      <div class="cssKey mr-1">{{ key }}: </div>
      <div class="cssValue">{{ value }},</div>
    </div>
    <div>}</div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable'

const props =  defineProps({
  tabbarData:Object
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


</script>

<style lang="scss" scoped>

</style>