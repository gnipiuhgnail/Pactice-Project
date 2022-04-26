import request from '@/utils/request'

const api = {}
// 09-012 查询入库单列表
api.findBillForInWh = (data) => {
  return request({
    url: '/storage/findBillForInWh',
    method: 'post',
    data
  })
}
// 09-013 添加入库单
api.addBillForInWh = (data) => {
  return request({
    url: '/storage/addBillForInWh',
    method: 'post',
    data
  })
}
// 09-014 批量入库物品
api.batchAddBillForInWh = (data) => {
  return request({
    url: '/storage/batchAddBillForInWh',
    method: 'post',
    data
  })
}
// 09-015 删除入库单
api.delBillForInWh = (data) => {
  return request({
    url: '/storage/delBillForInWh',
    method: 'post',
    data
  })
}
// 09-016 查询清单明细
api.findBillDetail = (data) => {
  return request({
    url: '/storage/findBillDetail',
    method: 'post',
    data
  })
}
// 09-017 添加入库表明细SN
api.addSnToBill = (data) => {
  return request({
    url: '/storage/addSnToBill',
    method: 'post',
    data
  })
}
// 09-018 删除入库表明细SN
api.delSnToBill = (data) => {
  return request({
    url: '/storage/delSnToBill',
    method: 'post',
    data
  })
}
export default api
