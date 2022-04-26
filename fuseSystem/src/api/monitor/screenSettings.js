import request from '@/utils/request'

const api = {}
// 11-020 查询监控视图
api.findMonitorView = (data) => {
  return request({
    url: '/flowMonitorPolicy/findMonitorView',
    method: 'post',
    data
  })
}
// 11-021 获取Ping日志和Port日志的未处理数
api.getUndisposedCountOfPingAndPort = (data) => {
  return request({
    url: '/flowMonitorPolicy/getUndisposedCountOfPingAndPort',
    method: 'post',
    data
  })
}
// 11-022 添加监控视图
api.addMonitorView = (data) => {
  return request({
    url: '/flowMonitorPolicy/addMonitorView',
    method: 'post',
    data
  })
}
// 11-023 删除监控视图
api.delMonitorView = (data) => {
  return request({
    url: '/flowMonitorPolicy/delMonitorView',
    method: 'post',
    data
  })
}

export default api
