import request from '@/utils/request'

const api = {}
// 11-026 查询流量监控报表
api.findFlowMonitorReport = (data) => {
  return request({
    url: '/flowMonitorPolicy/findFlowMonitorReport',
    method: 'post',
    data
  })
}
// 11-027 查询Ping 监控报表
api.findPingMonitorReport = (data) => {
  return request({
    url: '/flowMonitorPolicy/findPingMonitorReport',
    method: 'post',
    data
  })
}
// 11-028 导出流量监控报表
api.exportFlowMonitorReport = (data) => {
  return request({
    url: '/flowMonitorPolicy/exportFlowMonitorReport',
    method: 'post',
    data
  })
}
// 11-029 导出Ping监控报表
api.exportPingMonitorReport = (data) => {
  return request({
    url: '/flowMonitorPolicy/exportPingMonitorReport',
    method: 'post',
    data
  })
}

export default api
