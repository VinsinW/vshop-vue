<template>
  <div>
    模板管理首页
  </div>
</template>

<script lang="ts" setup>
import { service } from "/@/service";
service.request('/dev/park-gateway-dev/standard-api/apiv2').then(res=>{
  console.log(res)
})
</script>

<style scoped>
</style>