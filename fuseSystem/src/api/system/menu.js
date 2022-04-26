import request from '@/utils/request'
const api = {}

api.findFrontendPrivilege = (data) => {
  return request({
    url: '/privilege/findFrontendPrivilege',
    method: 'post',
    data
  })
}
api.getFrontendPrivilegeById = (data) => {
  return request({
    url: '/privilege/getFrontendPrivilegeById',
    method: 'get',
    params: data
  })
}

api.saveFrontendPrivilege = (data) => {
  return request({
    url: '/privilege/saveFrontendPrivilege',
    method: 'post',
    data
  })
}
//
api.delFrontendPrivilege = (data) => {
  return request({
      url: '/privilege/delFrontendPrivilege',
      method: 'post',
      params: data
  })
}
// 获取前端权限字典
api.findFrontendPrivilegeDict = (data) => {
  return request({
      url: '/privilege/findFrontendPrivilegeDict',
      method: 'get',
      params: data
  })
}
export default api
