import request from '@/utils/request'

const api = {}
// 11-024 查看告警配置信息
api.findAlarmConfInfo = (data) => {
  return request({
    url: '/flowMonitorPolicy/findAlarmConfInfo',
    method: 'post',
    data
  })
}
// 11-025 更改告警配置信息
api.editAlarmConfInfo = (data) => {
  return request({
    url: '/flowMonitorPolicy/editAlarmConfInfo',
    method: 'post',
    data
  })
}

export default api
