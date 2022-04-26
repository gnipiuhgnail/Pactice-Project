import request from '@/utils/request'

const api = {}
// 09-019 查询物资信息列表
api.findResCentreInfo = (data) => {
  return request({
    url: '/storage/findResCentreInfo',
    method: 'post',
    data
  })
}
// 09-020 导出物资信息
api.exportResCentreInfo = (data) => {
  return request({
    url: '/storage/exportResCentreInfo',
    method: 'post',
    data
  })
}
// 09-021 物资出库
api.materialsOutBound = (data) => {
  return request({
    url: '/storage/materialsOutBound',
    method: 'post',
    data
  })
}
// 09-022 查看物资明细
api.findResDetail = (data) => {
  return request({
    url: '/storage/findResDetail',
    method: 'post',
    data
  })
}
export default api
