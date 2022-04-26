import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import SvgIcon from '@/icons' // icon
import './permission'

import './assets/font/font.css'
import SvgIcon from '@/components/SvgIcon'// svg component
import elDragDialog from '@/directive/el-drag-dialog'
import preventReClick from '@/directive/preventReClick'
import locale from 'element-plus/lib/locale/lang/zh-cn'
const app = createApp(App)
app.use(router)
  .use(store)
  .use(ElementPlus, { locale })
  .component('SvgIcon', SvgIcon)
  .use(elDragDialog)
  .use(preventReClick)
  .mount('#app')

// 表格样式
import variables from '@/styles/variables.scss'
app.config.globalProperties.cellClass = function ({ row, rowIndex }) {
  const stylejson = {}
    if (rowIndex % 2 === 0) {
      stylejson.backgroundColor = variables.even
    } else {
      stylejson.backgroundColor = variables.odd
    }
    stylejson.borderColor = variables.tableBorderColor
    return stylejson
}
app.config.globalProperties.headerCellStyle = function () {
  return { 'background-color': '#8db7ff', color: '#ffffff' }
}

app.config.globalProperties.timesub =function(time){
    var now = new Date(time),
      y = now.getFullYear(),
      m = now.getMonth() + 1,
      d = now.getDate()
    return (
      y +
      '-' +
      (m < 10 ? '0' + m : m) +
      '-' +
      (d < 10 ? '0' + d : d) +
      ' ' +
      now.toTimeString().substr(0, 8)
    )
}
import * as echarts from 'echarts';
app.config.globalProperties.echarts = echarts
  // export default app
const req = require.context('./icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
console.log(requireAll(req))

