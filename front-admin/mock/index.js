import tableMock from './css/tablelist' 
import echartMock from './css/echartlist' 
import conponetMock from './vue/componenttest'
const mockd = [
  ...tableMock,
  ...echartMock,
  ...conponetMock,
]
export default {
  mockd
} 

// require 是属于 Webpack 的方法，
// vite项目中使用的都是import形式引入