<template>
  <div>{</div>
  <div v-for="(value,key) in compData" class="pl-2 sa-flex sa-col-top">
    <div class="cssKey mr-1">{{ key }}: </div>
    <div class="cssValue">{{ value }},</div>
  </div>
  <div>}</div>
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

</style>