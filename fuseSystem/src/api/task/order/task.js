import request from '@/utils/request'

const api = {}
// 14-001 查询各个状态的tag
api.getWorkOrderTag = (data) => {
  return request({
    url: '/taskManagement/getWorkOrderTag',
    method: 'post',
    data
  })
}
// 14-002 查询各业务组用户列表
api.findUserByGroupForWeChat = (data) => {
  return request({
    url: '/taskManagement/findUserByGroupForWeChat',
    method: 'post',
    data
  })
}
// 14-003 查询PC端工单列表
api.findOrder = (data) => {
  return request({
    url: '/taskManagement/findOrder',
    method: 'post',
    data
  })
}
// 14-004 查询客户列表
api.findCustomerForWeChat = (data) => {
  return request({
    url: '/taskManagement/findCustomerForWeChat',
    method: 'post',
    data
  })
}
// 14-005 查询有权限操作工单的用户信息
api.findOrderPeople = (data) => {
  return request({
    url: '/taskManagement/findOrderPeople',
    method: 'post',
    data
  })
}
// 14-006 添加或者删除工单管理的权限人员
api.saveOrderPeople = (data) => {
  return request({
    url: '/taskManagement/saveOrderPeople',
    method: 'post',
    data
  })
}

export default api
