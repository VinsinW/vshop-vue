<template>
  <div class="left">
    <el-scrollbar class="left-main">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1" title="会员组件">
          <div class="sa-flex sa-flex-wrap">
            <div class="item userCard" data-draggable="true">
              <img src="/src/assets/images/decorate/userCard.png">
              <span>会员卡片</span>
            </div>
            <div class="item orderCard" data-draggable="true">
              <img src="/src/assets/images/decorate/orderCard.png">
              <span>订单卡片</span>
            </div>
            <div class="item walletCard" data-draggable="true">
              <img src="/src/assets/images/decorate/walletCard.png">
              <span>资产卡片</span>
            </div>
            <div class="item couponCard" data-draggable="true">
              <img src="/src/assets/images/decorate/couponCard.png">
              <span>卡券卡片</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" title="基础组件">
          <div class="sa-flex sa-flex-wrap">
            <div class="item searchBlock" data-draggable="true">
              <img src="/src/assets/images/decorate/searchBlock.png">
              <span>搜索框</span>
            </div>
            <div class="item noticeBlock" data-draggable="true">
              <img src="/src/assets/images/decorate/noticeBlock.png">
              <span>公告栏</span>
            </div>
            <div class="item menuButton" data-draggable="true">
              <img src="/src/assets/images/decorate/menuButton.png">
              <span>菜单导航</span>
            </div>
            <div class="item menuList" data-draggable="true">
              <img src="/src/assets/images/decorate/menuList.png">
              <span>列表导航</span>
            </div>
            <div class="item menuGrid" data-draggable="true">
              <img src="/src/assets/images/decorate/menuGrid.png">
              <span>宫格导航</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3" title="商品组件">
          <div class="sa-flex sa-flex-wrap">
            <div class="item goodsCard" data-draggable="true">
              <img src="/src/assets/images/decorate/goodsCard.png">
              <span>商品卡片</span>
            </div>
            <div class="item goodsShelves" data-draggable="true">
              <img src="/src/assets/images/decorate/goodsShelves.png">
              <span>商品栏</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4" title="图文组件">
          <div class="sa-flex sa-flex-wrap">
            <div class="item imageBlock" data-draggable="true">
              <img src="/src/assets/images/decorate/imageBlock.png">
              <span>图片展示</span>
            </div>
            <div class="item imageBanner" data-draggable="true">
              <img src="/src/assets/images/decorate/imageBanner.png">
              <span>图片轮播</span>
            </div>
            <div class="item titleBlock" data-draggable="true">
              <img src="/src/assets/images/decorate/titleBlock.png">
              <span>标题栏</span>
            </div>
            <div class="item imageCube" data-draggable="true">
              <img src="/src/assets/images/decorate/imageCube.png">
              <span>广告魔方</span>
            </div>
            <div class="item videoPlayer" data-draggable="true">
              <img src="/src/assets/images/decorate/videoPlayer.png">
              <span>视频播放</span>
            </div>
            <div class="item lineBlock" data-draggable="true">
              <img src="/src/assets/images/decorate/lineBlock.png">
              <span>辅助线</span>
            </div>
            <div class="item richtext" data-draggable="true">
              <img src="/src/assets/images/decorate/richtext.png">
              <span>富文本</span>
            </div>
            <div class="item hotzone" data-draggable="true">
              <img src="/src/assets/images/decorate/hotzone.png">
              <span>热区</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="5" title="营销组件">
          <div class="sa-flex sa-flex-wrap">
            <div class="item groupon" data-draggable="true">
              <img src="/src/assets/images/decorate/groupon.png">
              <span>拼团</span>
            </div>
            <div class="item seckill" data-draggable="true">
              <img src="/src/assets/images/decorate/seckill.png">
              <span>秒杀</span>
            </div>
            <div class="item scoreGoods" data-draggable="true">
              <img src="/src/assets/images/decorate/scoreGoods.png">
              <span>积分商城</span>
            </div>
            <div class="item mplive" data-draggable="true">
              <img src="/src/assets/images/decorate/mplive.png">
              <span>小程序直播</span>
            </div>
            <div class="item coupon" data-draggable="true">
              <img src="/src/assets/images/decorate/coupon.png">
              <span>优惠券</span>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
const activeNames = ref(['1', '2', '3', '4', '5'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>
.sa-flex-wrap {
  flex-wrap: wrap;
}

.sa-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.left {
  flex-shrink: 0;
  width: 260px;
  height: 100%;
  background: var(--sa-background-assist);
  box-shadow: 0px 0px 0.24rem rgb(0 0 0 / 16%);
  transition: all 0.2s;
  position: relative;

  .el-collapse {
    --el-collapse-border-color: var(--el-border-color-lighter);
    --el-collapse-header-height: 32px;
    --el-collapse-header-bg-color: #f5f5f5;
    --el-collapse-header-text-color: var(--el-text-color-primary);
    --el-collapse-header-font-size: 13px;
    --el-collapse-content-bg-color: var(--el-fill-color-blank);
    --el-collapse-content-font-size: 13px;
    --el-collapse-content-text-color: var(--el-text-color-primary);
    border-top: 1px solid var(--el-collapse-border-color);
    border-bottom: 1px solid var(--el-collapse-border-color);

    .el-collapse-item {
      .el-collapse-item__header {
        padding: 0 12px !important;
      }
    }
  }

  .left-icon, .right-icon {
    width: 24px;
    height: 84px;
    color: var(--sa-font);
    background: var(--sa-space);
    border-radius: 0 24px 24px 0;
    border: 1px solid var(--sa-space);
    box-shadow: 0 0 4px rgb(0 0 0 / 8%), 0 2px 6px rgb(0 0 0 / 6%), 0 4px 8px 2px rgb(0 0 0 / 4%);
    position: absolute;
    top: 50%;
    z-index: 1;
    margin-top: -42px;
    cursor: pointer;
  }

  .left-main {
    .item {
      width: 86px;
      height: 86px;
      border-right: 1px solid var(--sa-space);
      border-bottom: 1px solid var(--sa-space);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 40px;
      height: 40px;
      margin-bottom: 8px;
    }

    .item:nth-of-type(3n) {
      border-right: none;
    }
  }
}
</style>