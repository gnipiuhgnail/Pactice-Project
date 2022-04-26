import request from '@/utils/request'

const api = {}
// 11-001 查询流量监控规则列表
api.findFlowRule = (data) => {
  return request({
    url: '/flowMonitorPolicy/findFlowRule',
    method: 'post',
    data
  })
}
// 11-002 添加/编辑流量监控规则
api.saveFlowRule = (data) => {
  return request({
    url: '/flowMonitorPolicy/saveFlowRule',
    method: 'post',
    data
  })
}
// 11-003 查询单个监控规则信息
api.getFlowRule = (data) => {
  return request({
    url: '/flowMonitorPolicy/getFlowRule',
    method: 'post',
    data
  })
}
// 11-004 删除单个流量规则
api.delFlowRule = (data) => {
  return request({
    url: '/flowMonitorPolicy/delFlowRule',
    method: 'post',
    data
  })
}
// 11-005 查询规则绑定的端口列表
api.findFlowRuleBindPort = (data) => {
  return request({
    url: '/flowMonitorPolicy/findFlowRuleBindPort',
    method: 'post',
    data
  })
}
// 11-006 获取所有关联端口列表
api.findAllBindPort = (data) => {
  return request({
    url: '/flowMonitorPolicy/findAllBindPort',
    method: 'post',
    data
  })
}
// 11-007 根据端口id查询规则信息列表
api.getFlowRuleByPort = (data) => {
  return request({
    url: '/flowMonitorPolicy/getFlowRuleByPort',
    method: 'post',
    data
  })
}
// 11-008 查询交换机绑定端口列表
api.findWanPortForBind = (data) => {
  return request({
    url: '/flowMonitorPolicy/findWanPortForBind',
    method: 'post',
    data
  })
}
// 11-009 规则解关联端口
api.delFlowRuleBindPort = (data) => {
  return request({
    url: '/flowMonitorPolicy/delFlowRuleBindPort',
    method: 'post',
    data
  })
}
// 11-010 规则关联端口
api.bindRuleAndSwitchPort = (data) => {
  return request({
    url: '/flowMonitorPolicy/bindRuleAndSwitchPort',
    method: 'post',
    data
  })
}
export default api
