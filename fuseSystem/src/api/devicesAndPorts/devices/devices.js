import request from '@/utils/request'

const api = {}
// 06-001 添加/编辑设备
api.addDevice = (data) => {
  return request({
    url: '/deviceAndPort/addDevice',
    method: 'post',
    data
  })
}
// 06-003 删除服务器
api.delDevice = (data) => {
  return request({
    url: '/deviceAndPort/delDevice',
    method: 'post',
    data
  })
}
// 06-004 条件查询设备
api.delDevice = (data) => {
  return request({
    url: '/deviceAndPort/delDevice',
    method: 'post',
    data
  })
}
// 06-005 查询单个服务器
api.addOneDevice = (data) => {
  return request({
    url: '/deviceAndPort/addOneDevice',
    method: 'post',
    data
  })
}
// 06-006 批量打印标签
api.findBatchPrintLabel = (data) => {
  return request({
    url: '/deviceAndPort/findBatchPrintLabel',
    method: 'post',
    data
  })
}
// 06-007 批量停机/下架
api.ServerEdit = (data) => {
  return request({
    url: '/deviceAndPort/ServerEdit',
    method: 'post',
    data
  })
}
// 06-009 直接导出服务器信息到Excel表格
api.ServerToExcel = (data) => {
  return request({
    url: '/deviceAndPort/ServerToExcel',
    method: 'post',
    data
  })
}
// 06-010 上下架设备
api.ServerEditOne = (data) => {
  return request({
    url: '/deviceAndPort/ServerEditOne',
    method: 'post',
    data
  })
}
// 06-010 查询可上架的机柜
api.comproomFindAllExceptUp = (data) => {
  return request({
    url: '/comproom/comproomFindAllExceptUp',
    method: 'post',
    data
  })
}
// 06-011 查询单个服务器的相关日志
api.addOneDevice = (data) => {
  return request({
    url: '/deviceAndPort/addOneDevice',
    method: 'post',
    data
  })
}
// 06-011 查询上下架信息记录列表
api.findOperationLog = (data) => {
  return request({
    url: '/deviceAndPort/findOperationLog',
    method: 'post',
    data
  })
}
// 06-011 上下架统计图（柱状图）
api.getDeviceStatistic = (data) => {
  return request({
    url: '/deviceAndPort/getDeviceStatistic',
    method: 'post',
    data
  })
}
// 06-013 添加上下架信息记录
api.addOperationLog = (data) => {
  return request({
    url: '/deviceAndPort/addOperationLog',
    method: 'post',
    data
  })
}
// 06-014 按网监格式导出服务器信息
api.ServerToExcelSimple = (data) => {
  return request({
    url: '/deviceAndPort/ServerToExcelSimple',
    method: 'post',
    data
  })
}
// 06-015 按IP段和机柜的统计格式导出服务器信息
api.ServerToExcelStatistics = (data) => {
  return request({
    url: '/deviceAndPort/ServerToExcelStatistics',
    method: 'post',
    data
  })
}
// 06-016 复选筛选导出设备信息
api.ServerToExcelCheckBox = (data) => {
  return request({
    url: '/deviceAndPort/ServerToExcelCheckBox',
    method: 'post',
    data
  })
}
// 06-017 导入设备
api.uploadServerInfo = (data) => {
  return request({
    url: '/server/uploadServerInfo',
    method: 'post',
    data
  })
}
export default api
