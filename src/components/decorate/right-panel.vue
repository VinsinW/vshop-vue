<template>
    <el-scrollbar class="right-main">
      <el-form>
        <tabbar v-if="tempId=='tabbar' && mode=='basic' && basicData" :tabbarData="basicData.page.tabbar"/>
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
  },
  basicData:{
    type:Object
  }
})


const tempId = ref('tabbar')


onMounted(()=>{
  mitt.on('event.active',(template)=>{
    tempId.value = template
  });
})

onBeforeUnmount(()=>{
  mitt.off('event.active')
})


</script>

<style lang="scss" scoped>

</style>