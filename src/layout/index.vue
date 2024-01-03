<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header" height="48px">
        <main-header />
      </el-header>
      <el-container>
        <el-aside class="oa-aside" width="224px">
          <main-left />
        </el-aside>
        <el-container class="oa-main">
          <process />
          <el-main class="oa-main-container">
            <router-view/>
          </el-main>
          <el-footer class="oa-footer" height="34" :padding="0">
            <main-footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import MainHeader from "/@/layout/MainHeader.vue";
import MainLeft from "/@/layout/MainLeft.vue";
import MainFooter from "/@/layout/MainFooter.vue";
import Process from "/@/components/process.vue";

export default {
  components: {Process, MainHeader, MainLeft, MainFooter}
}
</script>

<style  scoped>
.common-layout{
  background: #f2f2f6;
}
.header{
  position: absolute;
  width: 100vw;
  background-color: #0076f6;
}
.oa-aside{
  height: 100vh;
  background: #ffffff;
}
.oa-main{
  padding: 60px 12px 0;
}
.oa-main-container{
  background: #ffffff;
  border-radius:4px;
}
.oa-footer{
  line-height: 34px;
  font-size: 12px;
}

</style>