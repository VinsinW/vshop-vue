<template>
  <div class="right-title">
    <img :src="'/src/assets/images/decorate/'+searchBlock.type+'.png'">
    <span>{{compName}}</span>
  </div>
  <div class="right-tab sa-flex">
    <div class="tab-item" :class="{'is-active':tab===1}" @click="handleSwitchTab(1)">内容</div>
    <div class="tab-item" :class="{'is-active':tab===2}" @click="handleSwitchTab(2)">样式</div>
    <div class="tab-item" :class="{'is-active':tab===3}" @click="handleSwitchTab(3)">数据</div>
  </div>

  <!--内容属性-->
  <div v-if="tab===1" class="card">
    <div class="title">默认文字</div>
    <div class="wrap">
      <el-form-item label="提示内容">
        <el-input v-model="searchBlock.data.placeholder" placeholder="请输入提示内容"></el-input>
      </el-form-item>
      <el-form-item label="圆角" >
        <div class="d-slider sa-flex">
          <el-slider v-model="searchBlock.data.borderRadius" />
          <el-input v-model="searchBlock.data.borderRadius" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
    </div>
  </div>

  <!--组件样式-->
  <div v-if="tab===2" class="card">
    <div class="title">组件样式</div>
    <div class="wrap">
      <el-form-item label="组件背景">
        <el-radio-group v-model="searchBlock.style.background.type" class="custom-radio-button">
          <el-radio label="color">纯色</el-radio>
          <el-radio label="image">图片</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="searchBlock.style.background.type=='color'" label="选择颜色">
        <div class="d-color-picker sa-flex">
          <el-color-picker v-model="searchBlock.style.background.bgColor"/>
          <el-input v-model="searchBlock.style.background.bgColor"></el-input>
        </div>
      </el-form-item>
      <el-form-item v-if="searchBlock.style.background.type=='image'" label="选择图片">
        <div class="sa-uploader">
          <div class="sa-flex sa-flex-wrap">
            <div class="sa-uploader-item">
              <el-image :src="searchBlock.style.background.bgImage" :preview-src-list="[searchBlock.style.background.bgImage]" fit="contain">
                <template #error>
                  <div class="el-image__wrapper">
                    <el-icon><Plus /></el-icon>
                  </div>
                </template>
              </el-image>
              <div v-if="searchBlock.style.background.bgImage" class="mask" @click="deleteImg(searchBlock.style.background,'bgImage')">
                <el-icon><CircleCloseFilled /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="上间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="searchBlock.style.marginTop" />
          <el-input v-model="searchBlock.style.marginTop" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="右间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="searchBlock.style.marginRight" />
          <el-input v-model="searchBlock.style.marginRight" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="下间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="searchBlock.style.marginBottom" />
          <el-input v-model="searchBlock.style.marginBottom" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="左间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="searchBlock.style.marginLeft" />
          <el-input v-model="searchBlock.style.marginLeft" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="上圆角" >
        <div class="d-slider sa-flex">
          <el-slider v-model="searchBlock.style.borderRadiusTop" />
          <el-input v-model="searchBlock.style.borderRadiusTop" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="下圆角" >
        <div class="d-slider sa-flex">
          <el-slider v-model="searchBlock.style.borderRadiusBottom" />
          <el-input v-model="searchBlock.style.borderRadiusBottom" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="内间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="searchBlock.style.padding" />
          <el-input v-model="searchBlock.style.padding" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
    </div>
  </div>


  <!--数据对象-->
  <el-scrollbar v-if="tab===3" class="cssCard">
    <div>{</div>
    <div v-for="(value,key) in searchBlock" class="pl-2 sa-flex sa-col-top">
      <div class="cssKey mr-1">{{ key }}: </div>
      <div class="cssValue">{{ value }},</div>
    </div>
    <div>}</div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import {mitt} from "/@/utils/mitt"

const props =  defineProps({
  searchBlock:{
    type:Object,
    default:''
  },
  compName:String
})

//切换tab  1.内容 2.样式 3.数据
const tab = ref(1)
function handleSwitchTab(type){
  tab.value = type
}



</script>

<style lang="scss" scoped>

</style>