<template>
  <div class="right-title">
    <img src="/src/assets/images/decorate/tabbar.png">
    <span>底部导航</span>
  </div>
  <div class="right-tab sa-flex">
    <div class="tab-item is-active">内容</div>
    <div class="tab-item">样式</div>
    <div class="tab-item">数据</div>
  </div>
  <div class="card">
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
  <div class="d-list">
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
                        <el-image :src="element.inactiveIcon" fit="contain">
                          <template #error>
                            <div class="el-image__wrapper">
                              <el-icon><Plus /></el-icon>
                            </div>
                          </template>
                        </el-image>
                        <div class="mask">
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
                        <el-image :src="element.activeIcon" fit="contain">
                          <template #error>
                            <div class="el-image__wrapper">
                              <el-icon><Plus /></el-icon>
                            </div>
                          </template>
                        </el-image>
                        <div class="mask">
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
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable'

const props =  defineProps({
  tabbarData:Object
})

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
.sa-uploader .el-image__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sa-uploader .sa-uploader-item:hover .mask {
  height: 20px;
  position: absolute;
  /* top: 0; */
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(38, 38, 38, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--el-color-white);
  cursor: pointer;
}
.sa-uploader .sa-uploader-item .mask {
  display: none;
}
</style>