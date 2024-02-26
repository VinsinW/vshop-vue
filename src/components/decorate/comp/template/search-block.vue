<template>
  <div class="search-block sa-flex sa-row-between" :style="'border-radius:'+compData.data?.borderRadius+'px'">
    <div class="sa-flex">
      <el-icon><Search /></el-icon>
      <div class="placeholder sa-m-l-8">{{compData.data?.placeholder}}</div>
    </div>
    <div class="keywords sa-flex"></div>
  </div>
</template>

<script lang="ts" setup>
const props =  defineProps({
  compData: {
    type:Object,
    default:''
  }
})

</script>

<style lang="scss" scoped>
.search-block {
  height: 32px;
  background: #fff;
  border: 1px solid #eee;
  padding: 0 12px;
  font-size: 14px;
  color: #b0b3bf;
}
</style>