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
  <div v-if="tab===1" class="card">
    <div class="title">
      魔方样式
      <div class="tip">每格尺寸：187*187</div>
    </div>
    <div class="wrap">
        <div class="d-cube">
          <table>
            <tbody>
            <tr v-for="row in aspect.w">
              <td v-for="col in aspect.h" class="image-cube-item"
                  :class="{'is-active':state.isFlag&&row>=state.activeBlock.minRow&&row<=state.activeBlock.maxRow&&col>=state.activeBlock.minCol&&col<=state.activeBlock.maxCol}"
                  :style="{width: state.scale+'px',height: state.scale+'px'}"
                  @click="onSelectImageCube(row,col)"
                  @mousemove="onMoveImageCube(row,col)">
                <el-icon><Plus /></el-icon>
              </td>
            </tr>
            </tbody>
          </table>
          <template  v-if="compData.data?.list">
            <div v-for="(item,index) in compData.data.list" class="position-item sa-flex sa-row-center" :class="{'is-active':state.activeImage==index}"
            :style="{
              width:state.scale*item.width+'px',
              height:state.scale*item.height+'px',
              top:state.scale*item.top+'px',
              left:state.scale*item.left+'px'
            }" @click.self="handleActive(index)">
              {{item.width+'*'+item.height}}
              <el-icon class="circle-close-filled" @click.stop="handleDelItem(index)"><CircleCloseFilled /></el-icon>
            </div>
          </template>
        </div>
      <template v-if="compData.data?.list">
        <el-form-item v-if="compData.data.list[state.activeImage]" label="上传图片">
          <div class="sa-flex">
            <div class="sa-uploader">
              <div class="sa-flex sa-flex-wrap">
                <div class="sa-uploader-item">
                  <el-image :src="compData.data.list[state.activeImage].src" :preview-src-list="[compData.data.list[state.activeImage].src]" fit="contain">
                    <template #error>
                      <div class="el-image__wrapper">
                        <el-icon><Plus /></el-icon>
                      </div>
                    </template>
                  </el-image>
                  <div v-if="compData.data.list[state.activeImage].src" class="mask">
                    <el-icon @click="deleteImg(compData.data.list[state.activeImage],'src')"><CircleCloseFilled /></el-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item v-if="compData.data.list[state.activeImage]" label="链接">
          <el-input v-model="compData.data.list[state.activeImage].url">
            <template #append>选择</template>
          </el-input>
        </el-form-item>
        <el-form-item label="上圆角" >
          <div class="d-slider sa-flex">
            <el-slider v-model="compData.data.borderRadiusTop" />
            <el-input v-model.number="compData.data.borderRadiusTop" :min="0" :max="100" type="number">
              <template v-slot:suffix>PX</template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="下圆角" >
          <div class="d-slider sa-flex">
            <el-slider v-model="compData.data.borderRadiusBottom" />
            <el-input v-model.number="compData.data.borderRadiusBottom" :min="0" :max="100"  type="number">
              <template v-slot:suffix>PX</template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="间距" >
          <div class="d-slider sa-flex">
            <el-slider v-model="compData.data.space" />
            <el-input v-model.number="compData.data.space" :min="0" :max="100" type="number">
              <template v-slot:suffix>PX</template>
            </el-input>
          </div>
        </el-form-item>
      </template>
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
import Style from "./style"
import Data from "./data"

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

const aspect = {w:4,h:4}

const state = reactive({
  position:{
    start:{row:0,col:0},
    end:{row:0,col:0}
  },
  activeBlock:{
    arrRow:[],
    arrCol:[],
    minRow:0,
    maxRow:0,
    minCol:0,
    maxCol:0,
  },
  isFlag:false,
  activeImage:0,
  scale: 66
})

/**
 * 选择图像魔方模块组,生成选择范围
 * @param row 行数
 * @param col 列数
 * */
function onSelectImageCube(row,col){
  if(!state.isFlag){
    state.position.start.row=row
    state.position.start.col=col
    state.isFlag = true
  }else{
    onMoveImageCube(row,col)
    state.activeBlock.arrRow = [state.position.start.row, row].sort()
    state.activeBlock.arrCol = [state.position.start.col, col].sort()
    const item = {
      "width": state.activeBlock.maxCol-state.activeBlock.minCol+1,
      "height": state.activeBlock.maxRow-state.activeBlock.minRow+1,
      "top": state.activeBlock.minRow-1,
      "left": state.activeBlock.minCol-1,
      "src": "",
      "url": ""
    }
    props.compData.data.list.push(item)
    state.activeImage = props.compData.data.list.length-1
    state.activeBlock = {
      minCol:0,
      maxCol:0,
      minRow:0,
      maxRow:0
    }
    state.isFlag = false
  }
}

/**
 * 图像魔方模块组移动停留选择范围
 * @param row 行数
 * @param col 列数
 * */
function onMoveImageCube(row,col){
  if(state.isFlag){
    state.activeBlock.arrRow = [state.position.start.row,row].sort()
    state.activeBlock.arrCol = [state.position.start.col,col].sort()
    //排除重叠部分
    const flag = props.compData.data.list.some((item) => {
      return isOverlap(item, {
        "width": state.activeBlock.arrCol[1]-state.activeBlock.arrCol[0]+1,
        "height": state.activeBlock.arrRow[1]-state.activeBlock.arrRow[0]+1,
        "top": state.activeBlock.arrRow[0]-1,
        "left": state.activeBlock.arrCol[0]-1,
      });
    });
    if(!flag){
      state.activeBlock={
        minCol:state.activeBlock.arrCol[0],
        maxCol:state.activeBlock.arrCol[1],
        minRow:state.activeBlock.arrRow[0],
        maxRow:state.activeBlock.arrRow[1]
      }
    }
  }
}

/**
 * 重叠判断
 * @param cube1 第一个块
 * @param cube2 第二个块
 * */
function isOverlap(cube1,cube2){
    const start1 = {x:cube1.left,y:cube1.top}
    const end1 = {x:cube1.left+cube1.width,y:cube1.top+cube1.height}
    const start2 = {x:cube2.left,y:cube2.top}
    const end2 = {x:cube2.left+cube2.width,y:cube2.top+cube2.height}

    //判断是否重叠
    if(start1.x>=end2.x || start2.x>=end1.x || start1.y>=end2.y || start2.y>=end1.y) {
      return false
    }
    return true
}

/**
 * 选择当前操作魔方板块
 * @param index 触发选项
 * */
function handleActive(index){
  state.isFlag = false
  state.activeImage = index
}

/**
 * 删除数组指定项
 * @param index 触发选项
 * */
function handleDelItem(index){
  state.isFlag = false
  props.compData.data.list.splice(index,1)
  state.activeImage = props.compData.data.list.length-1
}



//切换tab  1.内容 2.样式 3.数据
const tab = ref(1)
function handleSwitchTab(type){
  tab.value = type
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