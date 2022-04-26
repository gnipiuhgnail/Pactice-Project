import request from '@/utils/request'

const api = {}
// 09-005 查询仓库客户信息列表
api.findCustomer = (data) => {
  return request({
    url: '/storage/findCustomer',
    method: 'post',
    data
  })
}
// 09-006 添加/修改客户信息
api.saveCustomer = (data) => {
  return request({
    url: '/storage/saveCustomer',
    method: 'post',
    data
  })
}
// 09-007 删除客户信息
api.editResclassify = (data) => {
  return request({
    url: '/storage/delCustomer',
    method: 'post',
    data
  })
}
// 09-023 数据字典-查询客户
api.findCustomerDict = (data) => {
  return request({
    url: '/storage/findCustomerDict',
    method: 'post',
    data
  })
}
export default api
