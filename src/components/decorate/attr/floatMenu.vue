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
    <div class="title">展示图标</div>
    <div class="wrap">
      <el-form-item label="状态">
        <el-radio-group v-model="floatMenuData.show" class="custom-radio-button">
          <el-radio :label="0">关闭</el-radio>
          <el-radio :label="1">开启</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="悬浮样式">
        <el-radio-group v-model="floatMenuData.mode" class="custom-radio-button">
          <el-radio :label="1">垂直</el-radio>
          <el-radio :label="2">水平</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="显示名称">
        <el-radio-group v-model="floatMenuData.isText" class="custom-radio-button">
          <el-radio :label="0">不显示</el-radio>
          <el-radio :label="1">显示</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>

    <div v-if="tab===1" class="d-list">
    <div class="title">功能图标</div>
      <div class="wrap">
        <div>
          <Draggable
              v-model="floatMenuData.list"
              item-key="1"
              handle=".move .sortable-drag"
              ghost-class="ghost"
              chosen-class="chosenClass"
              animation="300">
            <template #item="{ element }">
              <div class="list-item">
                <div class="move sa-flex">
                  <i class="iconfont iconmove sortable-drag"></i>
                  <span class="list-delete" @click="deleteItem(element)">删除</span>
                </div>
                <el-form-item label="按钮图片">
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
                    <span class="tip">建议尺寸：80*80</span>
                  </div>
                </el-form-item>
                <el-form-item label="按钮名称">
                  <div class="d-text-color sa-flex">
                    <el-input v-model="element.title.text"></el-input>
                    <div class="color sa-flex">
                      <el-color-picker v-model="element.title.color"/>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item label="按钮链接">
                  <el-input v-model="element.url">
                    <template #append>选择</template>
                  </el-input>
                </el-form-item>
              </div>
            </template>
          </Draggable>
        </div>
        <el-button class="add-button" @click="addItem"><el-icon><plus /></el-icon> 添加</el-button>
      </div>
    </div>
  </div>

  <!--数据对象-->
  <el-scrollbar v-if="tab===3" class="cssCard">
    <div>{</div>
    <div v-for="(value,key) in floatMenuData" class="pl-2 sa-flex sa-col-top">
      <div class="cssKey mr-1">{{ key }}: </div>
      <div class="cssValue">{{ value }},</div>
    </div>
    <div>}</div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable'

const props =  defineProps({
  floatMenuData:Object,
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
const deleteItem = (e)=>{
  const list = props.floatMenuData.list.filter(item=>item!=e)
  props.floatMenuData.list = list
  console.log(list)
}

/**
 * 菜单项添加
 */
const addItem = ()=>{
  const item = {
    src: "",
    url: "",
    title: {
      text: "",
      color: ""
    }
  }
  props.floatMenuData.list.push(item)
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
.sa-image .el-image__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-image__wrapper {
  width: 100%;
  height: 100%;
}
</style>