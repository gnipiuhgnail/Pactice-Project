import request from '@/utils/request'

const api = {}
// 10-012 添加/编辑聚合端口
api.saveCombinePort = (data) => {
  return request({
    url: '/combinePort/saveCombinePort',
    method: 'post',
    data
  })
}
// 10-013 条件查询聚合端口
api.findCombinePort = (data) => {
  return request({
    url: '/combinePort/findCombinePort',
    method: 'post',
    data
  })
}
// 10-014 查询单个聚合端口
api.getCombinePort = (data) => {
  return request({
    url: '/combinePort/getCombinePort',
    method: 'post',
    data
  })
}
// 10-015 删除聚合端口
api.delCombinePort = (data) => {
  return request({
    url: '/combinePort/delCombinePort',
    method: 'post',
    data
  })
}
// 10-016 端口列表
api.findCombinePortBind = (data) => {
  return request({
    url: '/combinePort/findCombinePortBind',
    method: 'post',
    data
  })
}
// 10-018 聚合端口绑定交换机端口
api.addBindPort = (data) => {
  return request({
    url: '/combinePort/addBindPort',
    method: 'post',
    data
  })
}
// 10-019 删除聚合端口绑定
api.delCombinePortBind = (data) => {
  return request({
    url: '/combinePort/delCombinePortBind',
    method: 'post',
    data
  })
}
// 10-020 查询聚合端口流量
api.getCombinePortFlow = (data) => {
  return request({
    url: '/combinePort/getCombinePortFlow',
    method: 'post',
    data
  })
}
// 10-021 导出聚合端口流量数据
api.exportCombinePortFlow = (data) => {
  return request({
    url: '/combinePort/exportCombinePortFlow',
    method: 'post',
    data
  })
}
export default api
