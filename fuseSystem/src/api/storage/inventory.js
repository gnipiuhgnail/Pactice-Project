import request from '@/utils/request'

const api = {}
// 09-026 查询盘点任务列表
api.findInventory = (data) => {
  return request({
    url: '/storage/findInventory',
    method: 'post',
    data
  })
}
// 09-027 创建盘点任务
api.addInventory = (data) => {
  return request({
    url: '/storage/addInventory',
    method: 'post',
    data
  })
}
// 09-028 查询单个盘点任务信息
api.getInventory = (data) => {
  return request({
    url: '/storage/getInventory',
    method: 'post',
    data
  })
}
// 09-029 删除盘点任务信息
api.delInventory = (data) => {
  return request({
    url: '/storage/delInventory',
    method: 'post',
    data
  })
}
// 09-030 查询盘点清单信息列表
api.findInventoryBill = (data) => {
  return request({
    url: '/storage/findInventoryBill',
    method: 'post',
    data
  })
}
// 09-031 保存盘点清单信息
api.saveInventoryBill = (data) => {
  return request({
    url: '/storage/saveInventoryBill',
    method: 'post',
    data
  })
}
// 09-032 提交盘点清单
api.submitInventoryBill = (data) => {
  return request({
    url: '/storage/submitInventoryBill',
    method: 'post',
    data
  })
}
// 09-033 下载盘点清单
api.downloadInventoryBill = (data) => {
  return request({
    url: '/storage/downloadInventoryBill',
    method: 'post',
    data
  })
}
export default api
