import request from '@/utils/request'

const api = {}
// 11-011 查询IP监控点列表
api.findIpJKD = (data) => {
  return request({
    url: '/flowMonitorPolicy/findIpJKD',
    method: 'post',
    data
  })
}
// 11-012 查询IP监控点对应监控任务列表
api.findIpJKDTask = (data) => {
  return request({
    url: '/flowMonitorPolicy/findIpJKDTask',
    method: 'post',
    data
  })
}
// 11-013 添加/编辑IP监控点
api.saveIpJKD = (data) => {
  return request({
    url: '/flowMonitorPolicy/saveIpJKD',
    method: 'post',
    data
  })
}
// 11-014 删除单个IP监控点
api.delIpJKD = (data) => {
  return request({
    url: '/flowMonitorPolicy/delIpJKD',
    method: 'post',
    data
  })
}
// 11-015 添加/编辑监控任务
api.saveIpJKDTask = (data) => {
  return request({
    url: '/flowMonitorPolicy/saveIpJKDTask',
    method: 'post',
    data
  })
}
// 11-016 删除单个监控任务
api.delIpJKDTask = (data) => {
  return request({
    url: '/flowMonitorPolicy/delIpJKDTask',
    method: 'post',
    data
  })
}
// 11-017 查询监控点任务的规则列表
api.findIpJKDTaskRule = (data) => {
  return request({
    url: '/flowMonitorPolicy/findIpJKDTaskRule',
    method: 'post',
    data
  })
}
// 11-018 添加/编辑监控任务规则
api.saveIpJKDTaskRule = (data) => {
  return request({
    url: '/flowMonitorPolicy/saveIpJKDTaskRule',
    method: 'post',
    data
  })
}
// 11-019 删除单个监控任务规则
api.delIpJKDTaskRule = (data) => {
  return request({
    url: '/flowMonitorPolicy/delIpJKDTaskRule',
    method: 'post',
    data
  })
}

export default api
