<!-- vite vue3 svg -->
##### vite vue3 svg 动态加载
##### npm install svg-sprite-loader -D
##### ./components/SvgIcon/index.vue
```
<template>
  <svg :class="svgClass" v-bind="$attrs">
    <use :xlink:href="iconName"/>
  </svg>
</template>
<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  iconClass: {
      type: String,
      required: true
    },
})
const iconName = computed(()=>`#icon-${props.iconClass}`);
const svgClass = computed(()=> {
  if (props.iconClass) {
        return `svg-icon icon-${props.iconClass}`
      }
      return 'svg-icon'
});
</script>
<style lang='scss'>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
```

##### vite.config.js
```
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
```

##### ./plugins/svgBuilder.js
```
import { readFileSync, readdirSync } from 'fs'

let idPerfix = ''
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g

const hasViewBox = /(viewBox="[^>+].*?")/g
const clearReturn = /(\r)|(\n)/g
function findSvgFile(dir) {
  const svgRes = []
  const dirents = readdirSync(dir, {
    withFileTypes: true
  })
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(dir + dirent.name + '/'))
    } else {
      const svg = readFileSync(dir + dirent.name)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, ($1, $2) => {
          let width = 0
          let height = 0
          let content = $2.replace(
            clearHeightWidth,
            (s1, s2, s3) => {
              if (s2 === 'width') {
                width = s3
              } else if (s2 === 'height') {
                height = s3
              }
              return ''
            }
          )
          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`
          }
          return `<symbol id="${idPerfix}-${dirent.name.replace(
            '.svg',
            ''
          )}" ${content}>`
        })
        .replace('</svg>', '</symbol>')
      svgRes.push(svg)
    }
  }
  return svgRes
}
export const svgBuilder = (path, perfix = 'icon') => {
  if (path === '') return
  idPerfix = perfix
  const res = findSvgFile(path)
  return {
    name: 'svg-transform',
    transformIndexHtml(html) {
      return html.replace(
        '<body>',
        `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
              ${res.join('')}
            </svg>
        `
      )
    }
  }
}
```
##### /icons/svg
```
存放svg文件
```
##### mian.js
```
import SvgIcon from './components/SvgIcon/index.vue'
const app = createApp(App)
// 导入svg组件
app.component('svg-icon', SvgIcon)
```

##### 使用
```
<svg-icon icon-class="interface" style="color:#000;border:1px solid #000" class="interface"/>
```