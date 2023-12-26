<!--
 * @Author: dushuai
 * @Date: 2023-04-21 17:25:38
 * @LastEditors: dushuai
 * @LastEditTime: 2023-04-21 17:26:53
 * @description: 心平气和
-->
<script setup lang='ts'>

</script>
<template>
  <div class="spinner">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>
<style lang='less' scoped>
.spinner {
  width: 80px;
  height: 80px;
  position: relative;
  margin: 0 auto;
}

.spinner .dot {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
}

.spinner .dot::after {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(12, 180, 231);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner .dot {
  animation: spin 2s infinite;
}

.spinner .dot:nth-child(2) {
  animation-delay: 100ms;
}

.spinner .dot:nth-child(3) {
  animation-delay: 200ms;
}

.spinner .dot:nth-child(4) {
  animation-delay: 300ms;
}

.spinner .dot:nth-child(5) {
  animation-delay: 400ms;
}
</style>
