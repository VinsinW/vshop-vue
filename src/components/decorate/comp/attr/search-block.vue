<template>
  <div v-if="compName" class="right-title">
    <img :src="'/src/assets/images/decorate/'+compData.type+'.png'">
    <span>{{compName}}</span>
  </div>
  <div class="right-tab sa-flex">
    <div class="tab-item" :class="{'is-active':tab===1}" @click="handleSwitchTab(1)">内容</div>
    <div class="tab-item" :class="{'is-active':tab===2}" @click="handleSwitchTab(2)">样式</div>
    <div class="tab-item" :class="{'is-active':tab===3}" @click="handleSwitchTab(3)">数据</div>
  </div>

  <!--内容属性-->
  <div v-if="tab===1&&compData.data" class="card">
    <div class="title">默认文字</div>
    <div class="wrap">
      <el-form-item label="提示内容">
        <el-input v-model="compData.data.placeholder" placeholder="请输入提示内容"></el-input>
      </el-form-item>
      <el-form-item label="圆角" >
        <div class="d-slider sa-flex">
          <el-slider v-model="compData.data.borderRadius" />
          <el-input v-model.number="compData.data.borderRadius" :min="0" :max="100" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
    </div>
  </div>

  <!--组件样式-->
  <div v-if="tab===2&&compData.style" class="card">
    <Style :compStyle="compData.style"></Style>
  </div>

  <!--数据对象-->
  <el-scrollbar v-if="tab===3&&compData" class="cssCard">
    <Data :compData="compData"></Data>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import {mitt} from "/@/utils/mitt"
import Style from "../../attr/style.vue"
import Data from "../../attr/data.vue"

const props =  defineProps({
  compData:{
    type:Object,
    default:''
  },
  compName: {
    type:String,
    default:''
  }
})

//切换tab  1.内容 2.样式 3.数据
const tab = ref(1)
function handleSwitchTab(type){
  tab.value = type
}



</script>

<style lang="scss" scoped>

</style>