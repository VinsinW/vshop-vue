<template>
  <div class="right-title">
    <img :src="'/src/assets/images/decorate/'+compData.type+'.png'">
    <span>{{compName}}</span>
  </div>
  <div class="right-tab sa-flex">
    <div class="tab-item" :class="{'is-active':tab===1}" @click="handleSwitchTab(1)">内容</div>
    <div class="tab-item" :class="{'is-active':tab===2}" @click="handleSwitchTab(2)">样式</div>
    <div class="tab-item" :class="{'is-active':tab===3}" @click="handleSwitchTab(3)">数据</div>
  </div>

  <!--内容属性-->
  <div v-if="tab===1" class="card">
    <div class="title">
      魔方样式
      <div class="tip">每格尺寸：187*187</div>
    </div>
    <div class="wrap">
      <div>
        <div class="d-cube">
          <table>
            <tbody>
            <tr v-for="row in 4">
              <td v-for="col in 4" class="image-cube-item"
                  :class="{'is-active':(state.isFlag&&state.position.start.row==row && state.position.start.col==col)||(state.isFlag&&row>=state.sort.arrRow[0]&&row<=state.sort.arrRow[1]&&col>=state.sort.arrCol[0]&&col<=state.sort.arrCol[1])}"
                  style="width: 66px; height: 66px;"
                  @click="onSelectImageCube(row,col)"
                  @mousemove="onMoveImageCube(row,col)">
                <el-icon><Plus /></el-icon>
              </td>
            </tr>
            </tbody>
          </table>
          <div v-for="(item,index) in compData.data.list" class="position-item sa-flex sa-row-center" :class="{'is-active':state.activeImage==index}"
          :style="{
            width:66*item.width+'px',
            height:66*item.height+'px',
            top:66*item.top+'px',
            left:66*item.left+'px'
          }">
            {{item.width+'*'+item.height}}
            <el-icon class="circle-close-filled"><CircleCloseFilled /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--组件样式-->
  <div v-if="tab===2" class="card">
    <div class="title">组件样式</div>
    <div class="wrap">
      <el-form-item label="组件背景">
        <el-radio-group v-model="compData.style.background.type" class="custom-radio-button">
          <el-radio label="color">纯色</el-radio>
          <el-radio label="image">图片</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="compData.style.background.type=='color'" label="选择颜色">
        <div class="d-color-picker sa-flex">
          <el-color-picker v-model="compData.style.background.bgColor"/>
          <el-input v-model="compData.style.background.bgColor"></el-input>
        </div>
      </el-form-item>
      <el-form-item v-if="compData.style.background.type=='image'" label="选择图片">
        <div class="sa-uploader">
          <div class="sa-flex sa-flex-wrap">
            <div class="sa-uploader-item">
              <el-image :src="compData.style.background.bgImage" :preview-src-list="[compData.style.background.bgImage]" fit="contain">
                <template #error>
                  <div class="el-image__wrapper">
                    <el-icon><Plus /></el-icon>
                  </div>
                </template>
              </el-image>
              <div v-if="compData.style.background.bgImage" class="mask" @click="deleteImg(compData.style.background,'bgImage')">
                <el-icon><CircleCloseFilled /></el-icon>
              </div>
            </div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="上间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="compData.style.marginTop" />
          <el-input v-model="compData.style.marginTop" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="右间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="compData.style.marginRight" />
          <el-input v-model="compData.style.marginRight" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="下间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="compData.style.marginBottom" />
          <el-input v-model="compData.style.marginBottom" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="左间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="compData.style.marginLeft" />
          <el-input v-model="compData.style.marginLeft" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="上圆角" >
        <div class="d-slider sa-flex">
          <el-slider v-model="compData.style.borderRadiusTop" />
          <el-input v-model="compData.style.borderRadiusTop" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="下圆角" >
        <div class="d-slider sa-flex">
          <el-slider v-model="compData.style.borderRadiusBottom" />
          <el-input v-model="compData.style.borderRadiusBottom" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="内间距" >
        <div class="d-slider sa-flex">
          <el-slider v-model="compData.style.padding" />
          <el-input v-model="compData.style.padding" type="number">
            <template v-slot:suffix>PX</template>
          </el-input>
        </div>
      </el-form-item>
    </div>
  </div>


  <!--数据对象-->
  <el-scrollbar v-if="tab===3" class="cssCard">
    <div>{</div>
    <div v-for="(value,key) in compData" class="pl-2 sa-flex sa-col-top">
      <div class="cssKey mr-1">{{ key }}: </div>
      <div class="cssValue">{{ value }},</div>
    </div>
    <div>}</div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import {mitt} from "/@/utils/mitt"

const props =  defineProps({
  compData:{
    type:Object,
    default:''
  },
  compName:String
})


const state = reactive({
  position:{
    start:{row:0,col:0},
    end:{row:0,col:0}
  },
  sort:{
    arrRow:[],
    arrCol:[]
  },
  isFlag:false,
  activeImage:0
})


function onSelectImageCube(row,col){
  if(!state.isFlag){
    state.position.start.row=row
    state.position.start.col=col
    state.isFlag = true
  }else{
    state.position.end.row=row
    state.position.end.col=col
    state.isFlag = false
  }
}

function onMoveImageCube(row,col){
  if(state.isFlag){
    state.sort.arrRow = [state.position.start.row,row].sort()
    state.sort.arrCol = [state.position.start.col,col].sort()
  }
}


//切换tab  1.内容 2.样式 3.数据
const tab = ref(1)
function handleSwitchTab(type){
  tab.value = type
}



</script>

<style lang="scss" scoped>
.d-cube {
  position: relative;
  margin: 0 auto 16px;
  border-spacing: 0;
  border-collapse: collapse;
  .image-cube-item {
    border: 1px solid var(--sa-border);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &.is-active {
      background-color: var(--sa-background-hex-hover);
    }
    .el-icon {
      color: var(--sa-place);
    }
  }
  .position-item {
    position: absolute;
    background: var(--sa-background-hex-active);
    border: 1px solid var(--el-color-primary);
    cursor: pointer;
    &.is-active .circle-close-filled {
      display: block;
    }
    .circle-close-filled {
      display: none;
      font-size: 12px;
      color: var(--el-color-primary);
      background: #fff;
      border-radius: 6px;
      position: absolute;
      top: -6px;
      right: -6px;
      z-index: 10;
    }
  }
}
table{
  border-collapse: collapse;
  border-spacing: 0;
}
</style>