<template>
  <el-scrollbar class="left-main"  v-if="mode=='basic'">
    <el-collapse v-model="leftData.activeCollapse">
      <el-collapse-item v-for="(col,index) in page.pageLeft.basic" :name="col.type" :title="col.name">
        <div class="sa-flex sa-flex-wrap">
          <div v-for="(item,index) in col.data" class="item" :class="{'is-active':leftData.activeBasic==item.type},{'is-active':leftData.activeTheme==item.type}"   @click="handleClick({group:col.type,type:item.type,name:item.name})">
            <img :src="'/src/assets/images/decorate/'+item.type+'.png'">
            <span>{{item.name}}</span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-scrollbar>

  <el-scrollbar class="left-main"  v-if="mode=='home'&&diyPage">
    <el-collapse v-model="leftData.activeCollapse">
      <template v-for="(col,index) in page.pageLeft.compList" >
      <el-collapse-item v-if="col.type!=0" :name="col.type" :title="col.name" >
        <Draggable
            :group="state.groupMenu"
            :sort="false"
            v-model="col.data"
            item-key=""
            handle=".item"
            ghost-class="sortable-ghost"
            chosen-class="sortable-chosen"
            animation="300"
            class="sa-flex sa-flex-wrap"
            @start="onStart"
            @end="onEnd"
            @move="onCompMove">
          <template #item="{ element }">
            <div class="item" :class="element.type">
              <img :src="'/src/assets/images/decorate/'+element.type+'.png'">
              <span>{{element.name}}</span>
            </div>
          </template>
        </Draggable>
      </el-collapse-item>
      </template>
    </el-collapse>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable'
import { mitt } from "/@/utils/mitt"
import { page } from "/@/modules/page"

const props = defineProps({
  mode:{
    type:String,
    default:''
  },
  basicData:{
    type:Object
  },
  diyPage:{
    type:Object
  }
})


/**
 * 左侧组件默认数据
 */
const leftData = reactive({
  collapsePanel: true,
  activeCollapse: ['basic', 'theme', '0', '1', '2', '3', '4'],
  activeBasic: 'tabbar',
  activeTheme: 'orange',
  saveHtml: '',
})

const state = reactive({
  groupMenu:{
    name:'Comp-item',
    pull:'clone',
    put:false
  }
})

/**
 * 组件event触发
 * @param template 组件模板
 */
function handleClick(template){
  if (template.group == 'basic') {
    leftData.activeBasic = template.type
    mitt.emit('event.active',template)
  }
  if (template.group == 'theme') {
    leftData.activeTheme = template.type
    props.basicData.page.theme = template.type
    console.log(props.basicData)
  }
}

/**
 * 拖拽组件开始触发
 * @param e 拖拽项
 */
const onStart = (e)=>{
  leftData.saveHtml = e.clone.innerHTML;
}

/**
 * 拖拽组件移动时触发
 * @param e 拖拽项
 */
const onCompMove = (e)=>{
  if (e.to.className.indexOf('comp-wrap') != -1) {
    e.dragged.innerHTML = `<div style="padding:0 20px;width:100%;height:50px;line-height:50px;background:var(--el-color-primary);color:#fff">新增组件元素</div>`;
  } else {
    return false;
  }
}

/**
 * 拖拽组件结束触发
 * @param e 拖拽项
 */
const onEnd = (e)=>{
  if (e.to.className.indexOf('comp-wrap') != -1) {
    e.item.innerHTML = leftData.saveHtml;
    const type = e.item.classList[1]
    props.diyPage.page.data.splice(e.newIndex,0, page.cloneComponent(type,leftData.activeTheme))
    props.diyPage.page.data.splice(e.newIndex + 1, 1);
    onSelectComp(e.newIndex,type) //切换当前选择项
    console.log(props.diyPage)
  }
}

/**
 * 组件选择项
 * @param index 组件序号
 * @param type 组件类型
 */
const onSelectComp = (index,type)=>{
  const currentComp = {
    index: index, // -2=未选中|-1=选中页面
    type: type,
    right: props.diyPage.page.data[index]
  }
  mitt.emit('event.currentComp',currentComp)
}
</script>

<style lang="scss" scoped>

</style>