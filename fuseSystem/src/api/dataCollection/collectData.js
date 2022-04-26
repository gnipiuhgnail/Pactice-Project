import request from '@/utils/request'

const api = {}
// 10-009 导出原始数据
api.exportOrignData = (data) => {
  return request({
    url: '/dataCollect/exportOrignData',
    method: 'post',
    data
  })
}
// 10-010 查询端口历史记录
api.getSearchHistory = (data) => {
  return request({
    url: '/dataCollect/getSearchHistory',
    method: 'post',
    data
  })
}
// 10-011 查询流量数据
api.findFlowData = (data) => {
  return request({
    url: '/dataCollect/findFlowData',
    method: 'post',
    data
  })
}


// 下面这两个在原来的流量宝里，和聚合端口选择端口和供应商选择端口的应该是同一个，还是先都放在selectPort.js,之后再说吧
// 10-012 查询网关设备列表
api.findSwtich = (data) => {
  return request({
    url: '/dataCollect/findSwtich',
    method: 'post',
    data
  })
}
// 10-013 查询网关设备端口列表
api.findWanPortForBind = (data) => {
  return request({
    url: '/dataCollect/findWanPortForBind',
    method: 'post',
    data
  })
}
export default api
