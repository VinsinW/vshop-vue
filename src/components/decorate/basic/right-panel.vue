<template>
  <div class="right">
    <el-scrollbar class="right-main">
      <el-form>
        <div class="right-title">
          <img src="/src/assets/images/decorate/tabbar.png">
          <span>底部导航1</span>
        </div>
        <div class="right-tab sa-flex">
          <div class="tab-item is-active">内容</div>
          <div class="tab-item">样式</div>
          <div class="tab-item">数据</div>
        </div>
        <div class="card">
          <div class="title">导航样式</div>
          <div class="wrap">
            <el-form-item label="选择样式">
              <el-radio-group v-model="selectType" class="custom-radio-button">
                <el-radio-button label="1"><i class="iconfont icontabbar-1"></i></el-radio-button>
                <el-radio-button label="2"><i class="iconfont icontabbar-2"></i></el-radio-button>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="导航风格">
              <el-radio-group v-model="navStyle" class="custom-radio-button">
                <el-radio label="1">文字+图片</el-radio>
                <el-radio label="2">文字</el-radio>
                <el-radio label="3">图片</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="默认颜色">
              <div class="d-color-picker sa-flex">
                <el-color-picker v-model="navColor"/>
                <el-input v-model="navColorValue"></el-input>
              </div>
            </el-form-item>

            <el-form-item label="选中颜色">
              <div class="d-color-picker sa-flex">
                <el-color-picker v-model="selecedtNavColor"/>
                <el-input v-model="selectedNavColorValue"></el-input>
              </div>
            </el-form-item>
          </div>
        </div>
        <div class="d-list">
          <div class="title">图标设置</div>
          <div class="wrap">
            <div>
              <div class="list-item">
                <div class="move sa-flex">
                  <i class="iconfont iconmove sortable-drag"></i>
                  <span class="list-delete">删除</span>
                </div>
                <el-form-item label="默认图片">
                  <div class="sa-flex">
                    <div class="sa-uploader">
                      <div class="sa-flex sa-flex-wrap">
                        <div class="sa-uploader-item" data-draggable="true">
                          <el-image src="/src/assets/images/decorate/menu_icon/home_cur.gif" fit="contain"></el-image>
                        </div>
                      </div>
                    </div>
                    <span class="tip">建议尺寸：44*44</span>
                  </div>
                </el-form-item>
                <el-form-item label="选中图片">
                  <div class="sa-flex">
                    <div class="sa-uploader">
                      <div class="sa-flex sa-flex-wrap">
                        <div class="sa-uploader-item" data-draggable="true">
                          <el-image src="/src/assets/images/decorate/menu_icon/home.png" fit="contain"></el-image>
                        </div>
                      </div>
                    </div>
                    <span class="tip">建议尺寸：44*44</span>
                  </div>
                </el-form-item>
                <el-form-item label="底部文字">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="选择链接">
                  <el-input></el-input>
                </el-form-item>
              </div>
              <div class="list-item">
                <div class="move sa-flex">
                  <i class="iconfont iconmove sortable-drag"></i>
                  <span class="list-delete">删除</span>
                </div>
                <el-form-item label="默认图片">
                  <div class="sa-flex">
                    <div class="sa-uploader">
                      <div class="sa-flex sa-flex-wrap">
                        <div class="sa-uploader-item" data-draggable="true">
                          <el-image src="/src/assets/images/decorate/menu_icon/home_cur.gif" fit="contain"></el-image>
                        </div>
                      </div>
                    </div>
                    <span class="tip">建议尺寸：44*44</span>
                  </div>
                </el-form-item>
                <el-form-item label="选中图片">
                  <div class="sa-flex">
                    <div class="sa-uploader">
                      <div class="sa-flex sa-flex-wrap">
                        <div class="sa-uploader-item" data-draggable="true">
                          <el-image src="/src/assets/images/decorate/menu_icon/home.png" fit="contain"></el-image>
                        </div>
                      </div>
                    </div>
                    <span class="tip">建议尺寸：44*44</span>
                  </div>
                </el-form-item>
                <el-form-item label="底部文字">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="选择链接">
                  <el-input></el-input>
                </el-form-item>
              </div>
              <div class="list-item">
                <div class="move sa-flex">
                  <i class="iconfont iconmove sortable-drag"></i>
                  <span class="list-delete">删除</span>
                </div>
                <el-form-item label="默认图片">
                  <div class="sa-flex">
                    <div class="sa-uploader">
                      <div class="sa-flex sa-flex-wrap">
                        <div class="sa-uploader-item" data-draggable="true">
                          <el-image src="/src/assets/images/decorate/menu_icon/home_cur.gif" fit="contain"></el-image>
                        </div>
                      </div>
                    </div>
                    <span class="tip">建议尺寸：44*44</span>
                  </div>
                </el-form-item>
                <el-form-item label="选中图片">
                  <div class="sa-flex">
                    <div class="sa-uploader">
                      <div class="sa-flex sa-flex-wrap">
                        <div class="sa-uploader-item" data-draggable="true">
                          <el-image src="/src/assets/images/decorate/menu_icon/home.png" fit="contain"></el-image>
                        </div>
                      </div>
                    </div>
                    <span class="tip">建议尺寸：44*44</span>
                  </div>
                </el-form-item>
                <el-form-item label="底部文字">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="选择链接">
                  <el-input></el-input>
                </el-form-item>
              </div>
              <div class="list-item">
                <div class="move sa-flex">
                  <i class="iconfont iconmove sortable-drag"></i>
                  <span class="list-delete">删除</span>
                </div>
                <el-form-item label="默认图片">
                  <div class="sa-flex">
                    <div class="sa-uploader">
                      <div class="sa-flex sa-flex-wrap">
                        <div class="sa-uploader-item" data-draggable="true">
                          <el-image src="/src/assets/images/decorate/menu_icon/home_cur.gif" fit="contain"></el-image>
                        </div>
                      </div>
                    </div>
                    <span class="tip">建议尺寸：44*44</span>
                  </div>
                </el-form-item>
                <el-form-item label="选中图片">
                  <div class="sa-flex">
                    <div class="sa-uploader">
                      <div class="sa-flex sa-flex-wrap">
                        <div class="sa-uploader-item" data-draggable="true">
                          <el-image src="/src/assets/images/decorate/menu_icon/home.png" fit="contain"></el-image>
                        </div>
                      </div>
                    </div>
                    <span class="tip">建议尺寸：44*44</span>
                  </div>
                </el-form-item>
                <el-form-item label="底部文字">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="选择链接">
                  <el-input></el-input>
                </el-form-item>
              </div>
            </div>
            <el-button class="add-button"><el-icon><plus /></el-icon> 添加</el-button>
          </div>
        </div>
      </el-form>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
const selectType = ref('1')
const navStyle = ref('1')
const navColor = ref('#8C8C8C')
const navColorValue = ref(navColor)
const selecedtNavColor = ref('#E9B461')
const selectedNavColorValue = ref(selecedtNavColor)
</script>

<style lang="scss" scoped>
.sa-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.right {
  flex-shrink: 0;
  width: 344px;
  height: 100%;
  background: var(--sa-background-assist);
  box-shadow: 0px 0px 0.24rem rgb(0 0 0 / 16%);
  transition: all 0.2s;
  position: relative;
  font-size: 12px;

  .right-title {
    padding: 8px 12px;
    color: var(--sa-subtitle);
    font-size: 14px;

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }

  .right-tab {
    margin: 16px 20px;
    border-radius: 4px;
    border: 1px solid var(--sa-border);
    overflow: hidden;

    .tab-item {
      width: 50%;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-right: 1px solid var(--sa-border);
      background: var(--sa-border);
      /* border-radius: 4px 0 0 4px; */
      cursor: pointer;

      &.is-active {
        background: var(--sa-background-assist);
      }
    }
  }

  .title {
    height: 40px;
    line-height: 40px;
    background: var(--sa-table-header-bg);
    margin-bottom: 16px;
    padding: 0 20px;
    font-size: 14px;
    color: var(--sa-subtitle);
    display: flex;
    align-items: center;
  }

  .wrap {
    padding: 0 20px;
  }

  * {
    font-size: inherit;
  }

  .custom-radio-button .iconfont {
    font-size: 24px;
  }

  .el-form-item .el-form-item__content > * {
    width: 100%;
  }
  .add-button {
    width: fit-content;
    margin: 16px 20px;
    border-style: dashed;
  }
}

.sa-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.d-color-picker .el-input .el-input__wrapper {
  border-radius: 0 4px 4px 0;
}

.d-color-picker .el-input {
  flex: 1;
}

.el-form-item__content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
  line-height: 32px;
  position: relative;
  font-size: var(--font-size);
  min-width: 0;
}

.d-list {
  .list-item:hover {
    background: var(--t-bg-hover);
  }
  .list-item {
    padding: 8px 20px;
    border-bottom: 1px solid var(--sa-space);
    background: var(--sa-background-assist);
    &:last-of-type {
      border-bottom: none;
    }
    .move {
      height: 32px;
      margin: 0 -8px 16px;
    }
    .move > * {
      display: none;
    }
  }
}
.sa-uploader {
  display: flex;
  margin-bottom: -12px;
  .el-image {
    width: 100%;
    height: 100%;
  }
  .sa-uploader-item {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border: 1px solid var(--sa-border);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    margin-right: 12px;
    margin-bottom: 12px;
  }
}
</style>