import request from '@/utils/request'
const api = {}

api.findBackendAuthority = (data) => {
  return request({
    url: '/backendAuthority/findBackendAuthority',
    method: 'post',
    data
  })
}
api.getBackendAuthority = (data) => {
  return request({
    url: '/backendAuthority/getBackendAuthority',
    method: 'get',
    params: data
  })
}

api.saveBackendAuthority = (data) => {
  return request({
    url: '/backendAuthority/saveBackendAuthority',
    method: 'post',
    data
  })
}

// 查询权限组
api.findAuthorityGroupDict = (data) => {
  return request({
      url: '/backendAuthority/findAuthorityGroupDict',
      method: 'get',
      params: data
  })
}
//
api.delBackendAuthority = (data) => {
  return request({
      url: '/backendAuthority/delBackendAuthority',
      method: 'post',
      params: data
  })
}
export default api
