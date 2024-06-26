import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bigdata-screen-vue3/",
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    port: 4000, //设置服务启动端口号，是一个可选项，不要设置为本机的端口号，可能会发生冲突
    open: true, //是否自动打开浏览器，可选项
    cors: true, //允许跨域。
    // 设置代理
    proxy: {
      // 将请求代理到另一个服务器
      "/api": {
        target: "http://cn-lmg-bgp-xhfrp.xhzdim.top:38362", //这是你要跨域请求的地址前缀
        changeOrigin: true, //开启跨域
        rewrite: (path) => path.replace(/^\/api/, ""), //去除前缀api
      },
    },
  },
});
