<!--
 * @Author: dushuai
 * @Date: 2023-03-21 16:03:27
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-26 12:29:49
 * @description: 首页 --> 页面组件
-->
<script setup lang='ts'>
import Loading from './Home/Loading.vue'
import Button from './Home/Button.vue'

interface Tab {
  name: string
}
const tabs = ref<Tab[]>([
  { name: 'Loading' },
  { name: 'Button' },
])
const curTab = ref<string>('Loading')
function handleTabChange(tab: Tab) {
  if (curTab.value !== tab.name) curTab.value = tab.name
}
</script>
<template>
  <div class="tabs">
    <div :class="['tab-item', curTab === tab.name ? 'tab-item--active' : '']" v-for="(tab, index) in tabs" :key="index"
      @click="handleTabChange(tab)">
      {{ tab.name }}</div>
  </div>

  <div style="background-color: rgba(255, 0, 0, .1);margin-bottom: 60px;">
    <div class="ripple-circle"></div>
    <div class="hand"></div>
  </div>

  <Loading v-if="curTab === 'Loading'" />
  <Button v-if="curTab === 'Button'" />
</template>
<style lang='less' scoped>
.tabs {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 50px;
  position: sticky;
  top: 0;
  background: #fff;
  width: 100%;
  z-index: 1;
  padding-bottom: 30px;

  .tab-item {
    padding: 10px 15px;
    background: rgba(0, 0, 0, 0.1);
  }

  .tab-item--active {
    background: rgba(255, 0, 0, 0.3);
  }
}

.test {
  width: 100px;
  height: 100px;
  background-color: red;
  letter-spacing: 2px;
  line-height: 100px;
  border: 1px solid black;
  border-radius: 50px;
}

.hand {
  .wh(99, 127);
  .bg('index/hand.png');
  .atl(245, 63);
  animation: hand 1.5s linear infinite;
}

@keyframes hand {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

// 小手点击涟漪效果
.ripple-circle {
  position: relative;
  .wh(150, 150);

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    // border: 6px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: rippleCircle 3s linear infinite;
    box-shadow: 0 0 15px 15px rgba(255, 255, 255, 1) inset;
  }

  &::after {
    animation-delay: -1.5s;
  }

  @keyframes rippleCircle {
    0% {
      .wh(0, 0);
      top: 75px;
      left: 75px;
      opacity: 1;
    }

    100% {
      .wh(150, 150);
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
}
</style>
