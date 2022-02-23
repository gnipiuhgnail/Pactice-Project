<!-- vue3.0 vite elementPlus 部分导入 -->
##### vue3.0 vite elementPlus 部分导入
##### 安装npm install element-plus --save
[具体看文档](https://doc-archive.element-plus.org/#/zh-CN/component/quickstart)
##### ./components/elements/index.js 存放组件
```
import {
  ElHeader,
  ElMain,
  ElContainer,
  ElAside,
  ElButton,
  ElMessageBox,
  ElInput,
  ElBacktop,
  ElScrollbar,
  ElTree,
  ElUpload
} from 'element-plus'

// 组件
export const components = [
  ElHeader,
  ElMain,
  ElContainer,
  ElAside,
  ElButton,
  ElInput,
  ElBacktop,
  ElScrollbar,
  ElTree,
  ElUpload
]
// 插件
 export const plugin =  [ElMessageBox]
```
##### main.js 全局注册
```
import { components, plugin }from '../src/components/elements/index'
import 'element-plus/dist/index.css'
const app = createApp(App)
// element组件部分导入
components.forEach( component => {
  app.component(component.name, component)
})
plugin.forEach(plugin => {
  app.use(plugin)
})
```