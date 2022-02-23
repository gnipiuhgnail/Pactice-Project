import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/plugins/svgBuilder'; 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgBuilder('./src/assets/icons/svg/')// 这里已经将src/icons/svg/下的svg全部导入，无需再单独导入
  ] 
})
