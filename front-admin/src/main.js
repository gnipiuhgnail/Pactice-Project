import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import store from './views/vueX/store'

import { components, plugin }from '../src/components/elements/index'
import 'element-plus/dist/index.css'

import '/mock/index'
import SvgIcon from './components/SvgIcon/index.vue'
const app = createApp(App)
// 导入svg组件
app.component('svg-icon', SvgIcon)
// const svg = import.meta.globEager('./assets/icons/svg/*.svg')

// console.log("obj",Object.values(svg).map((v)=>v.default))

// element组件部分导入
components.forEach( component => {
  app.component(component.name, component)
})
plugin.forEach(plugin => {
  app.use(plugin)
})
app.use(router).use(store).mount('#app')
  // export default app
  // const req = require.context('./icons/svg', false, /\.svg$/)
  // const requireAll = requireContext => requireContext.keys().map(requireContext)
  // requireAll(req)
  