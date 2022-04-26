import request from '@/utils/request'

const api = {}
// 15-001 查询排障机列表
api.findDebugMachine = (data) => {
  return request({
    url: '/debugMachine/findDebugMachine',
    method: 'post',
    data
  })
}
// 15-002 添加/编辑排障机
api.saveDebugMachine = (data) => {
  return request({
    url: '/debugMachine/saveDebugMachine',
    method: 'post',
    data
  })
}
// 15-003 查询单个排障机信息
api.getDebugMachine = (data) => {
  return request({
    url: '/debugMachine/getDebugMachine',
    method: 'post',
    data
  })
}
// 15-004 删除排障机
api.delDebugMachine = (data) => {
  return request({
    url: '/debugMachine/delDebugMachine',
    method: 'post',
    data
  })
}
// 15-005 查询排障日志记录列表
api.findDebugMachineLog = (data) => {
  return request({
    url: '/debugMachine/findDebugMachineLog',
    method: 'post',
    data
  })
}
// 15-006 添加排障日志记录
api.addDebugMachineLog = (data) => {
  return request({
    url: '/debugMachine/addDebugMachineLog',
    method: 'post',
    data
  })
}
// 15-007 查询排障机详细信息列表
api.findDebugMachineDetails = (data) => {
  return request({
    url: '/debugMachine/findDebugMachineDetails',
    method: 'post',
    data
  })
}
export default api
