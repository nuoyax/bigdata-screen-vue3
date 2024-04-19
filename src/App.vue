<script setup lang="ts">
import { defineComponent, onMounted } from "vue";
  onMounted(() => {
      // rem等比适配配置文件
      const baseSize = 16; // 基础字体大小
      const designWidth = 1500; // 设计稿宽度，可以根据实际设计稿调整

      function setRem() {
        const scale = document.documentElement.clientWidth / designWidth;
        document.documentElement.style.fontSize = `${baseSize * scale}px`;
      }

      // 初始化
      setRem();

      // 页面加载时绘制水印
      //   window.onload = drawWatermark;

      // 改变窗口大小时重新设置 rem
      window.onresize = () => {
        setRem();
        // drawWatermark();
      };
    });
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  overflow: hidden;
}
* {
  margin: 0px;
  padding: 0px;
}
</style>
