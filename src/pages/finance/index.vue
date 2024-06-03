<template>
  <div class="container-receipt">
    <div class="receipt-header mb-1">
      <div class="title">记账凭证</div>
      <div class="date">2024年第1期</div>
    </div>
    <div class="receipt-voucher mb-1">
      <span class="mr-1">凭证字</span>
      <el-select
          v-model="value"
          placeholder="选择"
          style="width: 78px"
          class="mr-1"
      >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-input-number
          v-model="num"
          controls-position="right"
          @change="handleChange"
          style="width: 82px;text-align: center"
          class="mr-1"
      />
      <span>号</span>
    </div>
    <div class="receipt-content">
      <table width="100%" cellpadding="0" cellspacing="0" class="mb-1">
        <thead>
          <tr>
            <th width="36%" rowspan="2" align="left" style="padding: 0 24px">摘要</th>
            <th width="20%" rowspan="2" align="left" style="padding: 0 24px">会计科目</th>
            <th width="22%" class="border-black">借款方金额</th>
            <th width="22%">贷款方金额</th>
          </tr>
          <tr class="moneyUnit">
            <th width="11%" class="border-black">
              <ul class="money-block">
                <li>亿</li>
                <li>千</li>
                <li class="border-blue">百</li>
                <li>十</li>
                <li>万</li>
                <li class="border-blue-light">千</li>
                <li>百</li>
                <li>十</li>
                <li class="border-red">元</li>
                <li>角</li>
                <li>分</li>
              </ul>
            </th>
            <th width="11%">
              <ul class="money-block">
                <li>亿</li>
                <li>千</li>
                <li class="border-blue">百</li>
                <li>十</li>
                <li>万</li>
                <li class="border-blue-light">千</li>
                <li>百</li>
                <li>十</li>
                <li class="border-red">元</li>
                <li>角</li>
                <li>分</li>
              </ul>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in state.data">
            <td>
              <div class="view" @dblclick.stop="switchInputMode">
                <div class="txt-area p24">
                  {{ row.txt_01.text==''?row.txt_01.placeholder:row.txt_01.text }}
                </div>
                <el-input
                    class="input-area"
                    v-model="row.txt_01.text"
                    maxlength="65"
                    placeholder="填写摘要信息"
                    show-word-limit
                    type="textarea"
                    @blur="switchShowMode"
                />
              </div>
            </td>
            <td>
              <div class="view" @dblclick.stop="switchInputMode">
                <div class="txt-area p24">
                  {{ row.txt_02.text==''?row.txt_02.placeholder:row.txt_02.text }}
                </div>
                <el-input
                    class="input-area"
                    v-model="row.txt_02.text"
                    maxlength="40"
                    placeholder="填写会计科目"
                    show-word-limit
                    type="textarea"
                    @blur="switchShowMode"
                />
              </div>
            </td>
            <td class="border-black">
              <div class="view" @dblclick.stop="switchInputMode">
                <div class="txt-area">
                    <ul class="money-block">
                      <li>{{formatMoney(row.num_03)[10]}}</li>
                      <li>{{formatMoney(row.num_03)[9]}}</li>
                      <li class="border-blue">{{formatMoney(row.num_03)[8]}}</li>
                      <li>{{formatMoney(row.num_03)[7]}}</li>
                      <li>{{formatMoney(row.num_03)[6]}}</li>
                      <li class="border-blue-light">{{formatMoney(row.num_03)[5]}}</li>
                      <li>{{formatMoney(row.num_03)[4]}}</li>
                      <li>{{formatMoney(row.num_03)[3]}}</li>
                      <li class="border-red">{{formatMoney(row.num_03)[2]}}</li>
                      <li>{{formatMoney(row.num_03)[1]}}</li>
                      <li>{{formatMoney(row.num_03)[0]}}</li>
                    </ul>
                  </div>
                  <el-input
                      class="input-area"
                      v-model="row.num_03"
                      maxlength="40"
                      placeholder="填写借款方金额"
                      show-word-limit
                      type="number"
                      @blur="switchShowMode"
                  />
              </div>
            </td>
            <td>
              <div class="view" @dblclick.stop="switchInputMode">
                <div class="txt-area">
                  <ul class="money-block">
                    <li>{{formatMoney(row.num_04)[10]}}</li>
                    <li>{{formatMoney(row.num_04)[9]}}</li>
                    <li class="border-blue">{{formatMoney(row.num_04)[8]}}</li>
                    <li>{{formatMoney(row.num_04)[7]}}</li>
                    <li>{{formatMoney(row.num_04)[6]}}</li>
                    <li class="border-blue-light">{{formatMoney(row.num_04)[5]}}</li>
                    <li>{{formatMoney(row.num_04)[4]}}</li>
                    <li>{{formatMoney(row.num_04)[3]}}</li>
                    <li class="border-red">{{formatMoney(row.num_04)[2]}}</li>
                    <li>{{formatMoney(row.num_04)[1]}}</li>
                    <li>{{formatMoney(row.num_04)[0]}}</li>
                  </ul>
                </div>
                <el-input
                    class="input-area"
                    v-model="row.num_04"
                    maxlength="40"
                    placeholder="填写贷款方金额"
                    show-word-limit
                    type="number"
                    @blur="switchShowMode"
                />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <div class="txt-area summation">
                合计:
              </div>
            </td>
            <td class="border-black">
              <ul class="money-block">
                <li>{{formatMoney(state.sum_03)[10]}}</li>
                <li>{{formatMoney(state.sum_03)[9]}}</li>
                <li class="border-blue">{{formatMoney(state.sum_03)[8]}}</li>
                <li>{{formatMoney(state.sum_03)[7]}}</li>
                <li>{{formatMoney(state.sum_03)[6]}}</li>
                <li class="border-blue-light">{{formatMoney(state.sum_03)[5]}}</li>
                <li>{{formatMoney(state.sum_03)[4]}}</li>
                <li>{{formatMoney(state.sum_03)[3]}}</li>
                <li class="border-red">{{formatMoney(state.sum_03)[2]}}</li>
                <li>{{formatMoney(state.sum_03)[1]}}</li>
                <li>{{formatMoney(state.sum_03)[0]}}</li>
              </ul>
            </td>
            <td>
              <ul class="money-block">
                <li>{{formatMoney(state.sum_04)[10]}}</li>
                <li>{{formatMoney(state.sum_04)[9]}}</li>
                <li class="border-blue">{{formatMoney(state.sum_04)[8]}}</li>
                <li>{{formatMoney(state.sum_04)[7]}}</li>
                <li>{{formatMoney(state.sum_04)[6]}}</li>
                <li class="border-blue-light">{{formatMoney(state.sum_04)[5]}}</li>
                <li>{{formatMoney(state.sum_04)[4]}}</li>
                <li>{{formatMoney(state.sum_04)[3]}}</li>
                <li class="border-red">{{formatMoney(state.sum_04)[2]}}</li>
                <li>{{formatMoney(state.sum_04)[1]}}</li>
                <li>{{formatMoney(state.sum_04)[0]}}</li>
              </ul>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {forEach} from "lodash-es";

const state = reactive({
  data: [
    {
      txt_01: {
        text: '',
        placeholder: '鼠标双击输入信息，根据双行宽度适配'
      },
      txt_02: {
        text: '',
        placeholder: '这里是会计科目的输入行，输入字段大于两行时双行展示输入内容'
      },
      num_03: 0,
      num_04: 0,
    }, {
      txt_01: {
        text: '',
        placeholder: ''
      },
      txt_02: {
        text: '',
        placeholder: ''
      },
      num_03: 0,
      num_04: 0,
    }, {
      txt_01: {
        text: '',
        placeholder: ''
      },
      txt_02: {
        text: '',
        placeholder: ''
      },
      num_03: 0,
      num_04: 0,
    }, {
      txt_01: {
        text: '',
        placeholder: ''
      },
      txt_02: {
        text: '',
        placeholder: ''
      },
      num_03: 0,
      num_04: 0,
    }],
  sum_03:0,
  sum_04:0
})
const value = ref('')

const options = [
  {
    value: '记',
    label: '记',
  },
  {
    value: '收',
    label: '收',
  },
  {
    value: '付',
    label: '付',
  },
  {
    value: '转',
    label: '转',
  }
]
const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
const switchInputMode = (e:any)=>{
  const dom = e.target.querySelector('.input-area')
  dom.style.display="block"
  dom.querySelector('input,textarea').focus()
  dom.querySelector('input,textarea').select()
}
const switchShowMode = (e:any)=>{
  let dom = e.target.offsetParent.offsetParent
  if(e.target.localName!='input'){
    dom = dom.querySelector('.input-area')
  }
  dom.style.display="none"
  dom.querySelector('input,textarea').blur()
}

/**
 * 格式化：金额在制单中显示内容
 * @param value 转换数组
 */
function formatMoney(val){
  let result = []
  if(parseFloat(val) > 0 && parseFloat(val) < 1000000000){
    const arr = (parseInt(val*100)).toString() //保留两位小数
    result = arr.toString().split('').reverse() //转换成显示数组
  }
  return result
}


watch(state.data,(pre,old)=>{
  let sum_03 = 0;
  let sum_04 = 0;
  pre.map(item=>{
    sum_03 += parseInt(item.num_03*100)
    sum_04 += parseInt(item.num_04*100)
  })
  state.sum_03 = sum_03/100
  state.sum_04 = sum_04/100
})
</script>

<style lang="scss" scoped>
.container-receipt{
  position: relative;
  margin: 12px;
  border: 1px solid #d5d5d5;
  padding: 24px;
  font-size: 14px;
  .receipt-header{
    display: flex;
    align-items: flex-end;
    .title{
      width: 100%;
      font-size: 24px;
      text-align: center;
      font-weight: 600;
    }
    .date{
      position: absolute;
      color: #727272;
      right: 24px;
    }
  }
  .receipt-voucher{
    display: flex;
    align-items: center;
  }
  .receipt-content{
    table{
      border-top:1px solid #ebeef5;
      border-left:1px solid #ebeef5;
      thead{
        height: 68px;
        background: #f6f8fc;
        th{
          border-bottom:1px solid #ebeef5;
          border-right:1px solid #ebeef5;
          height: 100%;
          .money-block{
            width: 100%;
            display: flex;
            li{
              width: calc(100% / 11);
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-right: 1px solid #ebeef5;
            }
          }
        }
        .moneyUnit th{
          font-size: 12px;
          font-weight: normal;
          width: 24px;
        }
      }
      tbody,tfoot{
        tr{
          height: 48px;
          td{
            border-bottom:1px solid #ebeef5;
            border-right:1px solid #ebeef5;
            .view{
              position: relative;
              height: 48px;
              display: flex;
              align-items: center;
              .txt-area{
                width: 100%;
                font-size: 12px;
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; /* 这里是超出几行省略 */
                overflow: hidden;
                pointer-events: none;
              }
              .input-area{
                position: absolute;
                width: 100%;
                top:0;
                display:none;
                box-shadow: 0 0 5px 0 #69a8ff;
              }
            }
            .money-block{
              width: 100%;
              display: flex;
              li{
                height:48px;
                width: calc(100% / 11);
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px solid #ebeef5;
              }
              li:last-child{
                border-right: none;
              }
            }
            .summation{
              font-size: 14px;
              font-weight: bold;
              padding: 0 24px;
            }
          }
        }
      }
    }
  }
}
</style>