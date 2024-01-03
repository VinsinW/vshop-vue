<template>
  <div class="app-process">
    <ul class="app-process__op">
      <li class="item" @click="router.back">
        <el-icon><i-ep-arrowLeft /></el-icon>
      </li>
      <li class="item" @click="toRefresh">
        <el-icon><i-ep-refreshRight /></el-icon>
      </li>
      <li class="item" @click="router.push('/')">
        <el-icon><i-ep-dataAnalysis /></el-icon>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" name="app-process" setup>
import { useMitt } from "./mitt";
// 刷新当前路由
function toRefresh() {
  mitt.emit("view.refresh");
}

</script>

<style lang="scss" scoped>
.app-process {
  display: flex;
  align-items: center;
  height: 30px;
  position: relative;
  margin: 0 0 10px 0;
  padding-right: 10px;
  user-select: none;

  &__op {
    display: flex;
    background-color: #fff;
    height: 30px;
    border-radius: 4px;
    margin-right: 10px;
    list-style: none;

    .item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 10px;
      line-height: 30px;
      color: #333;
      cursor: pointer;
      font-weight: bold;

      &:not(:last-child)::after {
        display: block;
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 5px);
        height: 10px;
        width: 1px;
        background-color: #eee;
      }

      &:hover {
        color: var(--el-color-primary);
      }
    }
  }

  &__container {
    height: 30px;
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  &__scroller {
    height: 40px;
    width: 100%;
    white-space: nowrap;
    position: absolute;
    left: 0;
    top: 0;
  }

  &__item {
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    height: 30px;
    padding: 0 10px;
    background-color: #fff;
    font-size: 12px;
    margin-right: 10px;
    color: #909399;
    cursor: pointer;

    .el-icon {
      font-size: 13px;
      width: 0;
      overflow: hidden;
      transition: all 0.3s;
      color: #909399;
      opacity: 0;

      &:hover {
        color: #f56c6c !important;
      }
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      &:not(.active) {
        background-color: #eee;
      }
    }

    &.active {
      background-color: var(--color-primary);

      span {
        color: #fff;
      }

      .el-icon {
        color: #fff;
      }
    }

    &:hover,
    &.active {
      .el-icon {
        opacity: 1;
        width: 13px;
        margin-left: 5px;
      }
    }
  }
}
</style>
