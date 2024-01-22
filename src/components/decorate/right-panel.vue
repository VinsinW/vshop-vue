<template>
    <el-scrollbar class="right-main">
      <el-form>
        <tabbar v-if="tempId=='tabbar' && mode=='basic'" />
      </el-form>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import Tabbar from '/@/components/decorate/attr/tabbar'
import {mitt} from "/@/utils/mitt";

const props = defineProps({
  mode:{
    type:String,
    default:''
  }
})

const tempId = ref('tabbar')

console.log(tempId,props.mode)

const defaultTemplateData =  {
  basic: {
    tabbar: {
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
    },
    floatMenu: {
      show: 0, // 0|1
      mode: 1, // 1|2
      isText: 0, // 0|2
      list: [
        {
          src: '',
          url: '',
          title: {
            text: '',
            color: '',
          },
        },
      ],
    },
    popupImage: {
      list: [],
    },
    theme: 'orange',
  },
  home: {
    data: [],
    style: {
      background: {
        color: '#F6F6F6',
        src: '',
      },
      navbar: {
        mode: 'normal', // normal inner
        alwaysShow: 0, // 0 1
        type: 'color',
        color: '',
        src: '',
        list: {
          mp: [],
          app: [],
        },
      },
    },
  },
  user: {
    data: [
      {
        type: 'userCard',
        style: {
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 10,
          borderRadiusTop: 0,
          borderRadiusBottom: 0,
          background: {
            type: 'color',
            bgImage: '',
            bgColor: '#FFFFFF',
          },
        },
      },
    ],
    style: {
      background: {
        color: '#F6F6F6',
        src: '',
      },
      navbar: {
        mode: 'normal', // normal inner
        alwaysShow: 0, // 0 1
        type: 'color',
        color: '',
        src: '',
        list: {
          mp: [],
          app: [],
        },
      },
    },
  },
  diypage: {
    data: [],
    style: {
      background: {
        color: '',
        src: '',
      },
      navbar: {
        mode: 'normal', // normal inner
        alwaysShow: 0, // 0 1
        type: 'color',
        color: '',
        src: '',
        list: {
          mp: [],
          app: [],
        },
      },
    },
  },
}

mitt.on('event.active',(template)=>{
  tempId.value = template
})

</script>

<style lang="scss" scoped>

</style>