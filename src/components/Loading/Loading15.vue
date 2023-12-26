<!--
 * @Author: dushuai
 * @Date: 2023-04-21 17:28:15
 * @LastEditors: dushuai
 * @LastEditTime: 2023-04-21 17:29:54
 * @description: 心平气和
-->
<script setup lang='ts'>

</script>
<template>
  <div class="loader">
    <div class="snow">
      <span style="--i:11"></span>
      <span style="--i:12"></span>
      <span style="--i:15"></span>
      <span style="--i:17"></span>
      <span style="--i:18"></span>
      <span style="--i:13"></span>
      <span style="--i:14"></span>
      <span style="--i:19"></span>
      <span style="--i:20"></span>
      <span style="--i:10"></span>
      <span style="--i:18"></span>
      <span style="--i:13"></span>
      <span style="--i:14"></span>
      <span style="--i:19"></span>
      <span style="--i:20"></span>
      <span style="--i:10"></span>
      <span style="--i:18"></span>
      <span style="--i:13"></span>
      <span style="--i:14"></span>
      <span style="--i:19"></span>
      <span style="--i:20"></span>
      <span style="--i:10"></span>
    </div>
  </div>
</template>
<style lang='less' scoped>
.loader {
  position: relative;
  width: 110px;
  height: 30px;
  background: #000;
  border-radius: 100px;
  margin: 0 auto;
}

.loader::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: #000;
  border-radius: 50%;
  box-shadow: 40px 0 0 20px #000;
}

.snow {
  position: relative;
  display: flex;
  z-index: 1;
}

.snow span {
  position: relative;
  width: 3px;
  height: 3px;
  background: #000;
  margin: 0 2px;
  border-radius: 50%;
  animation: snowing 5s linear infinite;
  animation-duration: calc(15s / var(--i));
  transform-origin: bottom;
}

@keyframes snowing {
  0% {
    transform: translateY(0px);
  }

  70% {
    transform: translateY(100px) scale(1);
  }

  100% {
    transform: translateY(100px) scale(0);
  }
}
</style>
