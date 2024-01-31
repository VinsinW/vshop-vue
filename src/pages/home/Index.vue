<template>
  <div class="track-container">
    <div class="track">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { service } from "/@/service";
// service.request('/dev/yida/Thousand/getListThousand?studentID=230612120&studentName=李晶晶').then(res=>{
//   console.log(res)
// })
</script>

<style lang="scss" scoped>
  $ballsize:20px;
  $contaner:200px;
  $n:36;
  $pDeg: 360deg / $n;
  $duration:2s;
  $side:4;
  .track-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #0076f6;
  }
  .track{
    width: $contaner;
    height: $contaner;
    border-radius: 50%;
    //border: 1px #0076f6 solid;
    display: flex;
    justify-content: center;
  }
  .dot{
    position: absolute;
    margin-top: -$ballsize / 2;
    width: $ballsize;
    height: $ballsize;
    perspective: 70px;
    transform-style: preserve-3d;
    //background: #ff0000;
    transform-origin: center $contaner/2+$ballsize/2;
    @for $i from 1 through $n {
        &:nth-child(#{$i}){
          transform:rotate($pDeg * ($i - 1)) ;
          &::before,&::after{
            animation-delay: -$duration / $n * ($i - 1) * $side;
          }
        }
    }
    &::before,&::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: $ballsize;
      height: $ballsize;
      border-radius: 50%;
    }
    &::before{
      background: #000;
      top:-100%;
      animation: rotate-back $duration infinite;
      @keyframes rotate-back {
        0% {
          animation-timing-function: ease-in;
        }
        25% {
          transform: translate3d(0,100%,$ballsize);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0,200%,0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0,100%,-$ballsize);
          animation-timing-function: ease-out;
        }
      }
    }
    &::after{
      background: #fff;
      top: 100%;
      animation: rotate-white $duration infinite;
      @keyframes rotate-white {
        0% {
          animation-timing-function: ease-in;
        }
        25% {
          transform: translate3d(0,-100%,-$ballsize);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0,-200%,0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0,-100%,$ballsize);
          animation-timing-function: ease-out;
        }
      }
    }
  }
</style>