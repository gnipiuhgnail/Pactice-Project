import request from '@/utils/request'

const api = {}
// 11-028 查询监控服务数据
api.findMonitorServiceData = (data) => {
  return request({
    url: '/flowMonitorPolicy/findMonitorServiceData',
    method: 'post',
    data
  })
}
// 11-029 查看对应UUID的性能报警信息
api.findPerformanceAlarmInfo = (data) => {
  return request({
    url: '/flowMonitorPolicy/findPerformanceAlarmInfo',
    method: 'post',
    data
  })
}
// 11-030 查询对应主机IP的所有服务程序
api.selectHeartModel = (data) => {
  return request({
    url: '/flowMonitorPolicy/selectHeartModel',
    method: 'post',
    data
  })
}
// 11-031 修改服务器性能采集点数据信息
api.updatePerformaceInfo = (data) => {
  return request({
    url: '/flowMonitorPolicy/updatePerformaceInfo',
    method: 'post',
    data
  })
}
// 11-032 设置心跳报警标志
api.setHeartModelWarningStart = (data) => {
  return request({
    url: '/flowMonitorPolicy/setHeartModelWarningStart',
    method: 'post',
    data
  })
}
// 11-033 处理性能报警日志
api.dealPerformanceLog = (data) => {
  return request({
    url: '/flowMonitorPolicy/dealPerformanceLog',
    method: 'post',
    data
  })
}
export default api
