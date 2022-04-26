import request from '@/utils/request'
const api = {}

api.findApiLog = (data) => {
  return request({
    url: '/apiLog/findApiLog',
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

export default api