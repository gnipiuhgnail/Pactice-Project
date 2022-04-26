import request from '@/utils/request'

const api = {}
// 10-006 条件查询采集点
api.findCollectorPoint = (data) => {
  return request({
    url: '/dataCollect/findCollectorPoint',
    method: 'post',
    data
  })
}
// 10-007 查询某个采集点所有日志
api.findCollectPointAppLog = (data) => {
  return request({
    url: '/dataCollect/findCollectPointAppLog',
    method: 'post',
    data
  })
}
// 10-008 删除采集点
api.delCollectorPoint = (data) => {
  return request({
    url: '/dataCollect/delCollectorPoint',
    method: 'post',
    data
  })
}

export default api
