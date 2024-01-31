<template>
  <el-scrollbar class="left-main">
    <el-collapse v-model="activeNames[mode]">
      <el-collapse-item v-for="(mod,index) in leftComponent(mode)" :name="mode+'-'+mod.type" :title="mod.name">
        <div class="sa-flex sa-flex-wrap">
          <div v-for="(item,index) in mod.data" class="item" :class="{'is-active':leftData.activeBasic==item.type},{'is-active':leftData.activeTheme==item.type}"   @click="handleClick(mod.type,item.type)">
            <img :src="'/src/assets/images/decorate/'+item.type+'.png'">
            <span>{{item.name}}</span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { mitt } from "/@/utils/mitt";
import {service} from "/@/service";
const props = defineProps({
  mode:{
    type:String,
    default:''
  }
})

const leftData = reactive({
  activeBasic: 'tabbar',
  activeTheme: 'orange',
})

//左侧页面配置信息
const pageLeft = {
  basic: [
    {
      name: '应用设置',
      type: 'basic',
      data: [
        { name: '底部导航', type: 'tabbar'},
        { name: '悬浮按钮', type: 'floatMenu'},
        { name: '弹窗广告', type: 'popupImage'},
      ],
    },
    {
      name: '主题色',
      type: 'theme',
      data: [
        { name: '淘宝橙', type: 'orange'},
        { name: '香槟金', type: 'golden'},
        { name: '美团黄', type: 'yellow'},
        { name: '低奢黑', type: 'black'},
        { name: '微信绿', type: 'green'},
        { name: '尊贵紫', type: 'purple'},
      ],
    },
  ],
  compList: [
    {
      name: '会员组件',
      type: '0',
      data: [
        { name: '会员卡片', type: 'userCard'},
        { name: '订单卡片', type: 'orderCard'},
        { name: '资产卡片', type: 'walletCard'},
        { name: '卡券卡片', type: 'couponCard'},
      ],
    },
    {
      name: '基础组件',
      type: '1',
      data: [
        { name: '搜索框', type: 'searchBlock'},
        { name: '公告栏', type: 'noticeBlock'},
        { name: '菜单导航', type: 'menuButton'},
        { name: '列表导航', type: 'menuList'},
        { name: '宫格导航', type: 'menuGrid'},
      ],
    },
    {
      name: '商品组件',
      type: '2',
      data: [
        { name: '商品卡片', type: 'goodsCard'},
        { name: '商品栏', type: 'goodsShelves'},
      ],
    },
    {
      name: '图文组件',
      type: '3',
      data: [
        { name: '图片展示', type: 'imageBlock'},
        { name: '图片轮播', type: 'imageBanner'},
        { name: '标题栏', type: 'titleBlock'},
        { name: '广告魔方', type: 'imageCube'},
        { name: '视频播放', type: 'videoPlayer'},
        { name: '辅助线', type: 'lineBlock'},
        { name: '富文本', type: 'richtext'},
        { name: '热区', type: 'hotzone'},
      ],
    },
    {
      name: '营销组件',
      type: '4',
      data: [
        { name: '拼团', type: 'groupon'},
        { name: '秒杀', type: 'seckill'},
        { name: '积分商城', type: 'scoreGoods'},
        { name: '小程序直播', type: 'mplive'},
        { name: '优惠券', type: 'coupon'},
      ],
    },
  ]
}

//定义Collapse选项卡集合
const activeNames = {basic:[], home:[], user:[]}

/**
 * 根据模块类型返回左侧选择组件
 * param mode 模板类型
 * return result 返回对应模块组件信息
 */
function leftComponent(mode){
  let components = []
  if(mode=='basic'){
    components = pageLeft['basic']
  }else{
    if(mode=='user'){
      components =  pageLeft['compList']
    }else{
      components = pageLeft['compList'].filter((item)=>item.type!=0)
    }
  }
  //collapse选项卡默认全部展开
  if(!activeNames[mode].length){
    activeNames[mode].push(mode)
    components.forEach((item)=>{
      activeNames[mode].push(mode+'-'+item.type);
    })
  }
  return components
}

/**
 * 组件event触发
 * @param group
 * @param comp
 */
function handleClick(group,template){
  if (group == 'basic') {
    leftData.activeBasic = template
    mitt.emit('event.active',template)
  }
  if (group == 'theme') {
    leftData.activeTheme = template
  }
}
</script>

<style lang="scss" scoped>

</style>