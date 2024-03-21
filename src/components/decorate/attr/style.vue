<template>
  <div class="title">组件样式</div>
  <div class="wrap">
    <el-form-item label="组件背景">
      <el-radio-group v-model="compStyle.background.type" class="custom-radio-button">
        <el-radio label="color">纯色</el-radio>
        <el-radio label="image">图片</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="compStyle.background.type=='color'" label="选择颜色">
      <div class="d-color-picker sa-flex">
        <el-color-picker v-model="compStyle.background.bgColor"/>
        <el-input v-model="compStyle.background.bgColor"></el-input>
      </div>
    </el-form-item>
    <el-form-item v-if="compStyle.background.type=='image'" label="选择图片">
      <div class="sa-uploader">
        <div class="sa-flex sa-flex-wrap">
          <div class="sa-uploader-item">
            <el-image :src="compStyle.background.bgImage" :preview-src-list="[compStyle.background.bgImage]" fit="contain">
              <template #error>
                <div class="el-image__wrapper">
                  <el-icon><Plus /></el-icon>
                </div>
              </template>
            </el-image>
            <div v-if="compStyle.background.bgImage" class="mask" @click="deleteImg(compStyle.background,'bgImage')">
              <el-icon><CircleCloseFilled /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="上间距" >
      <div class="d-slider sa-flex">
        <el-slider v-model="compStyle.marginTop" />
        <el-input v-model.number="compStyle.marginTop" :min="0" :max="100" type="number">
          <template v-slot:suffix>PX</template>
        </el-input>
      </div>
    </el-form-item>
    <el-form-item label="右间距" >
      <div class="d-slider sa-flex">
        <el-slider v-model="compStyle.marginRight" />
        <el-input v-model.number="compStyle.marginRight" :min="0" :max="100" type="number">
          <template v-slot:suffix>PX</template>
        </el-input>
      </div>
    </el-form-item>
    <el-form-item label="下间距" >
      <div class="d-slider sa-flex">
        <el-slider v-model="compStyle.marginBottom" />
        <el-input v-model.number="compStyle.marginBottom" :min="0" :max="100" type="number">
          <template v-slot:suffix>PX</template>
        </el-input>
      </div>
    </el-form-item>
    <el-form-item label="左间距" >
      <div class="d-slider sa-flex">
        <el-slider v-model="compStyle.marginLeft" />
        <el-input v-model.number="compStyle.marginLeft" :min="0" :max="100" type="number">
          <template v-slot:suffix>PX</template>
        </el-input>
      </div>
    </el-form-item>
    <el-form-item label="上圆角" >
      <div class="d-slider sa-flex">
        <el-slider v-model="compStyle.borderRadiusTop" />
        <el-input v-model.number="compStyle.borderRadiusTop" :min="0" :max="100" type="number">
          <template v-slot:suffix>PX</template>
        </el-input>
      </div>
    </el-form-item>
    <el-form-item label="下圆角" >
      <div class="d-slider sa-flex">
        <el-slider v-model="compStyle.borderRadiusBottom" />
        <el-input v-model.number="compStyle.borderRadiusBottom" :min="0" :max="100" type="number">
          <template v-slot:suffix>PX</template>
        </el-input>
      </div>
    </el-form-item>
    <el-form-item label="内间距" >
      <div class="d-slider sa-flex">
        <el-slider v-model="compStyle.padding" />
        <el-input v-model.number="compStyle.padding" :min="0" :max="100" type="number">
          <template v-slot:suffix>PX</template>
        </el-input>
      </div>
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
const props =  defineProps({
  compStyle: {
    type:Object,
    default:''
  }
})

</script>

<style lang="scss" scoped>

</style>