<template>
  <div class="sa-header sa-flex sa-row-between">
    <div class="left sa-flex">
      <el-tooltip
          v-for="(item,index) in page.pageTypeList"
          :content="item.label"
          placement="bottom"
          effect="light"
      >
        <div class="header-button sa-flex sa-row-center" @click="switchMode(item.type)" :class="{'is-active': mode===item.type}">
          <i class="iconfont" :class="'icon'+item.type"></i>
        </div>
      </el-tooltip>
    </div>
    <div class="center sa-flex">
      <el-tooltip
          v-for="(item,index) in page.systemList"
          :content="item.label"
          placement="bottom"
          effect="light"
      >
      <div class="header-icon sa-flex sa-row-center">
        <i class="iconfont" :class="'icon'+item.type"></i>
      </div>
      </el-tooltip>
      <div class="el-divider el-divider--vertical" role="separator" style="--el-border-style: solid;"></div>
      <el-tooltip
          v-for="(item,index) in page.platformList"
          :content="item.label"
          placement="bottom"
          effect="light"
      >
      <div class="header-icon sa-flex sa-row-center">
        <i class="iconfont" :class="'icon'+item.type"></i>
      </div>
      </el-tooltip>

      <div class="el-divider el-divider--vertical" role="separator" style="--el-border-style: solid;"></div>
    </div>
    <div class="right sa-flex">
      <el-tooltip
          content="保存预览"
          placement="bottom"
          effect="light"
      >
      <div class="header-button sa-flex sa-row-center">
        <i class="iconfont iconpreview" @click="handleSave()"></i>
      </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VsSvg from "/@/components/icon/svg.vue";
import {service} from "/@/service";
import {mitt} from "/@/utils/mitt";
import {useDiyPageStore} from "/@/store/decorate/diypage";
import { page } from "/@/modules/page"

const props = defineProps({
  mode:{
    type:String,
    default:''
  },
  basicData:{
    type:Object,
    default:''
  },
})


const emits = defineEmits(['evenSwitchMode'])
const switchMode:string = (mode:string)=>{
  emits('evenSwitchMode',mode)
}

function handleSave(){
  console.log("保存数据：",props.basicData)
}
</script>

<style lang="scss" scoped>
.sa-row-between {
  justify-content: space-between;
}
.sa-header {
  --sa-border:#eee;
  --el-header-padding: 0;
  border-bottom: 1px solid var(--sa-border);
  .iconfont {
    width: 24px;
    font-size: 20px;
    color: var(--sa-subfont);
    cursor: pointer;
  }
  .el-icon{
    color:  var(--sa-subfont);
  }
  .header-icon {
    height: 100%;
    margin-right: 4px;
    margin-left: 4px;
    cursor: pointer;
  }
  .center {
    padding: 0 8px;
    border-left: 1px solid var(--sa-border);
    border-top: none;
    border-bottom: none;
  }
}
.sa-flex {
  display: flex;
  flex-direction: row;
  align-items: center;

  .header-button {
    width: 48px;
    height: 40px;
    border-right: 1px solid var(--sa-border);
    cursor: pointer;
    &.is-active {
      background: var(--el-color-primary);
      color: #ffffff;
      .el-icon{
        color: var(--sa-background-assist);
      }
      .iconfont{
        color: var(--sa-background-assist);
      }
    }
  }
  .sa-row-center {
    justify-content: center;
  }
}
.el-divider--vertical{
  display: inline-block;
  width: 1px;
  height: 40px;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
  border-left: 1px var(--el-border-color) var(--el-border-style);
}
.right .header-button {
  border-right: none;
  border-left: 1px solid var(--sa-border);
}
</style>