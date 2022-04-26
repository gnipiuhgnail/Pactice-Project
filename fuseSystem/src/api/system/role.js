import request from '@/utils/request'
const api = {}

api.findRole = (data) => {
  return request({
    url: '/role/findRole',
    method: 'post',
    data
  })
}
api.getRole = (data) => {
  return request({
    url: '/role/getRole',
    method: 'get',
    params: data
  })
}
api.saveRole = (data) => {
  return request({
    url: '/role/saveRole',
    method: 'post',
    data
  })
}
api.delRole = (data) => {
  return request({
    url: '/role/delRole',
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

// 获取后端权限字典
api.findAuthorityDict = (data) => {
  return request({
      url: '/backendAuthority/findAuthorityDict',
      method: 'get',
      params: data
  })
}
export default api
