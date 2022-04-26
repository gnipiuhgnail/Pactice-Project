import request from '@/utils/request'

const api = {}
// 13-002 查询网监设置列表
api.findNetworkUser = (data) => {
  return request({
    url: '/networkManagement/findNetworkUser',
    method: 'post',
    data
  })
}
// 13-002 查询网监用户和机房关系表
api.findServerForUserRoom = (data) => {
  return request({
    url: '/networkManagement/findServerForUserRoom',
    method: 'post',
    data
  })
}
// 13-003 添加网监用户和机房关系记录
api.addUserRoom = (data) => {
  return request({
    url: '/networkManagement/addUserRoom',
    method: 'post',
    data
  })
}
// 11-004 删除网监用户和机房关系记录
api.delUserRoom = (data) => {
  return request({
    url: '/networkManagement/delUserRoom',
    method: 'post',
    data
  })
}
export default api
