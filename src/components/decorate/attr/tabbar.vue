<template>
  <div class="right-title">
    <img src="/src/assets/images/decorate/tabbar.png">
    <span>底部导航1</span>
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
        <el-radio-group v-model="tabbar.mode" class="custom-radio-button">
          <el-radio-button :label="1"><i class="iconfont icontabbar-1"></i></el-radio-button>
          <el-radio-button :label="2"><i class="iconfont icontabbar-2"></i></el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="导航风格">
        <el-radio-group v-model="tabbar.layout" class="custom-radio-button">
          <el-radio :label="1">文字+图片</el-radio>
          <el-radio :label="2">文字</el-radio>
          <el-radio :label="3">图片</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="默认颜色">
        <div class="d-color-picker sa-flex">
          <el-color-picker v-model="tabbar.inactiveColor"/>
          <el-input v-model="tabbar.inactiveColor"></el-input>
        </div>
      </el-form-item>

      <el-form-item label="选中颜色">
        <div class="d-color-picker sa-flex">
          <el-color-picker v-model="tabbar.activeColor"/>
          <el-input v-model="tabbar.activeColor"></el-input>
        </div>
      </el-form-item>
    </div>
  </div>
  <div class="d-list">
    <div class="title">图标设置</div>
    <div class="wrap">
      <div>
        <div class="list-item" v-for="(temp,index) in tabbar.list">
          <div class="move sa-flex">
            <i class="iconfont iconmove sortable-drag"></i>
            <span class="list-delete">删除</span>
          </div>
          <el-form-item label="默认图片">
            <div class="sa-flex">
              <div class="sa-uploader">
                <div class="sa-flex sa-flex-wrap">
                  <div class="sa-uploader-item" data-draggable="true">
                    <el-image src="/src/assets/images/decorate/menu_icon/home_cur.gif" fit="contain"></el-image>
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
                  <div class="sa-uploader-item" data-draggable="true">
                    <el-image src="/src/assets/images/decorate/menu_icon/home.png" fit="contain"></el-image>
                  </div>
                </div>
              </div>
              <span class="tip">建议尺寸：44*44</span>
            </div>
          </el-form-item>
          <el-form-item label="底部文字">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="选择链接">
            <el-input></el-input>
          </el-form-item>
        </div>
      </div>
      <el-button class="add-button"><el-icon><plus /></el-icon> 添加</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tabbar = reactive({
  mode: 1, // 1 2
  layout: 1, // 1=文字+图片 2=文字 3=图片
  inactiveColor: '#EEEEEE',
  activeColor: '#000000',
  list: [],
  background: {
    type: 'color', // color=纯色 image=背景图
    bgImage: '',
    bgColor: '#FFFFFF',
  },
})
</script>

<style lang="scss" scoped>

</style>