import request from '@/utils/request'

const api = {}
// 09-020 查询出库信息列表
api.findBillForOutWh = (data) => {
  return request({
    url: '/storage/findBillForOutWh',
    method: 'post',
    data
  })
}
// 09-021 获取物资明细SN码
api.getSnByBillId = (data) => {
  return request({
    url: '/storage/getSnByBillId',
    method: 'post',
    data
  })
}
// 09-022 查询清单跟踪日志
api.findBillTraceLog = (data) => {
  return request({
    url: '/storage/findBillTraceLog',
    method: 'post',
    data
  })
}
// 09-023 添加清单跟踪日志
api.addBillTraceLog = (data) => {
  return request({
    url: '/storage/addBillTraceLog',
    method: 'post',
    data
  })
}
// 09-024 作废清单跟踪日志
api.editBillTraceLogStatus = (data) => {
  return request({
    url: '/storage/editBillTraceLogStatus',
    method: 'post',
    data
  })
}
// 09-025 物品归还接口
api.addBillForResIn = (data) => {
  return request({
    url: '/storage/addBillForResIn',
    method: 'post',
    data
  })
}
// 09-28 导出出库记录
api.exportOutBoundInfo = (data) => {
  return request({
    url: '/storage/exportOutBoundInfo',
    method: 'post',
    data
  })
}
export default api
