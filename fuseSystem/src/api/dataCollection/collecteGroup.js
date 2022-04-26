import request from '@/utils/request'

const api = {}
// 10-001 添加/编辑分组
api.saveCollectorGroup = (data) => {
  return request({
    url: '/dataCollect/saveCollectorGroup',
    method: 'post',
    data
  })
}
// 10-002 采集分组列表
api.findCollectorGroup = (data) => {
  return request({
    url: '/dataCollect/findCollectorGroup',
    method: 'post',
    data
  })
}
// 10-003 删除分组
api.delCollectorGroup = (data) => {
  return request({
    url: '/dataCollect/delCollectorGroup',
    method: 'post',
    data
  })
}
// 10-004 查询单个分组信息
api.getCollectorGroup = (data) => {
  return request({
    url: '/dataCollect/getCollectorGroup',
    method: 'post',
    data
  })
}
// 10-005 采集分组拓扑图数据
api.selectCollectorGroup = (data) => {
  return request({
    url: '/dataCollect/selectCollectorGroup',
    method: 'post',
    data
  })
}
export default api
