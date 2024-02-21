<template>
  <div class="sa-header sa-flex sa-row-between">
    <div class="left sa-flex">
      <el-tooltip
          content="基础配置"
          placement="bottom"
          effect="light"
      >
        <div class="header-button sa-flex sa-row-center" @click="switchMode('basic')" :class="{'is-active': mode==='basic'}">
          <el-icon><Menu /></el-icon>
        </div>
      </el-tooltip>
      <el-tooltip
          content="首页"
          placement="bottom"
          effect="light"
      >
        <div class="header-button sa-flex sa-row-center" @click="switchMode('home')" :class="{'is-active': mode==='home'}">
          <el-icon><HomeFilled /></el-icon>
        </div>
      </el-tooltip>

      <el-tooltip
          content="个人设置"
          placement="bottom"
          effect="light"
      >
      <div class="header-button sa-flex sa-row-center" @click="switchMode('user')" :class="{'is-active': mode==='user'}">
        <el-icon><UserFilled /></el-icon>
      </div>
      </el-tooltip>
    </div>
    <div class="center sa-flex">
      <el-tooltip
          content="android"
          placement="bottom"
          effect="light"
      >
      <div class="header-icon sa-flex sa-row-center">
        <i class="iconfont iconandroid"></i>
      </div>
      </el-tooltip>
      <el-tooltip
          content="ios"
          placement="bottom"
          effect="light"
      >
      <div class="header-icon sa-flex sa-row-center el-tooltip__trigger el-tooltip__trigger">
        <i class="iconfont iconios"></i>
      </div>
      </el-tooltip>
      <div class="el-divider el-divider--vertical" role="separator" style="--el-border-style: solid;"></div>
      <el-tooltip
          content="微信小程序"
          placement="bottom"
          effect="light"
      >
      <div class="header-icon sa-flex sa-row-center">
        <i class="iconfont iconWechatMiniProgram"></i>
      </div>
      </el-tooltip>
      <el-tooltip
          content="微信公众号"
          placement="bottom"
          effect="light"
      >
      <div class="header-icon sa-flex sa-row-center">
        <i class="iconfont iconWechatOfficialAccount"></i>
      </div>
      </el-tooltip>
      <el-tooltip
          content="H5"
          placement="bottom"
          effect="light"
      >
      <div class="header-icon sa-flex sa-row-center">
        <i class="iconfont iconH5"></i>
      </div>
      </el-tooltip>
      <el-tooltip
          content="APP"
          placement="bottom"
          effect="light"
      >
      <div class="header-icon sa-flex sa-row-center">
        <i class="iconfont iconApp"></i>
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

const props = defineProps({
  mode:{
    type:String,
    default:''
  },
  basicData:{
    type:Object,
    default:''
  }
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