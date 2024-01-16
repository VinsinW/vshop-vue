<template>
  <div id="index" class="page-index  panel panel-default panel-intro">
    <el-container class="panel-block">
      <el-header>
        <sa-header :mode="mode" @evenSwitchMode="handleSwitchMode"></sa-header>
      </el-header>
      <component :is="components.get(mode)"></component>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import SaHeader from "/@/components/decorate/sa-header.vue"

const components = ref(markRaw(new Map<string, any>()))

components.value.set(
    'Basic',
    defineAsyncComponent(()=>import("/@/components/decorate/basic/index.vue")),
)

components.value.set(
    'Home',
    defineAsyncComponent(()=>import("/@/components/decorate/home/index.vue")),
)

components.value.set(
    'User',
    defineAsyncComponent(()=>import("/@/components/decorate/user/index.vue")),
)

const mode = ref('Basic');
const handleSwitchMode = (val)=>{
  mode.value = val
}

</script>

<style lang="scss" scoped>
.el-header {
  --el-header-padding: 0;
  --el-header-height: 48px;
  padding: var(--el-header-padding);
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--el-header-height);
}
.page-index{
  .panel-block{
    height: calc(100vh - 154px);
  }
}
</style>