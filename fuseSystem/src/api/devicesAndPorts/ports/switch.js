import request from '@/utils/request'

const api = {}
// 06-028 网关端口-添加/编辑
api.saveWanPort = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/saveWanPort',
    method: 'post',
    data
  })
}
// 06-029 查看交换机端口-查询单个
api.getWanPort = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/getWanPort',
    method: 'post',
    data
  })
}
// 06-030 网关端口-条件查询
api.findWanPort = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/findWanPort',
    method: 'post',
    data
  })
}
// 06-031 网关端口-删除
api.delWanPort = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/delWanPort',
    method: 'post',
    data
  })
}
// 06-032 添加编辑端口vlan
api.savePortVlan = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/savePortVlan',
    method: 'post',
    data
  })
}
// 06-033 网关端口-批量添加
api.addWanPortBat = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/addWanPortBat',
    method: 'post',
    data
  })
}
// 06-034 端口绑定
api.bindSwitchPort = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/bindSwitchPort',
    method: 'post',
    data
  })
}
// 06-035 端口解绑
api.unbindSwitchPort = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/unbindSwitchPort',
    method: 'post',
    data
  })
}
// 06-036 端口流量数据图
api.getSwitchPortFlow = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/getSwitchPortFlow',
    method: 'post',
    data
  })
}
// 06-037 端口列表
api.getPort = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/getPort',
    method: 'post',
    data
  })
}
// 06-038 虚拟端口记录
api.getvirtualPort = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/getvirtualPort',
    method: 'post',
    data
  })
}
// 06-039 添加分组
api.addGroup = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/addGroup',
    method: 'post',
    data
  })
}
// 06-040 删除虚拟端口记录
api.delVirtualPort = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/delVirtualPort',
    method: 'post',
    data
  })
}
// 06-041 查询交换机的板卡信息
api.WanPortArrayForWanID = (data) => {
  return request({
    url: '/deviceAndPort/port/switch/WanPortArrayForWanID',
    method: 'post',
    data
  })
}
export default api

