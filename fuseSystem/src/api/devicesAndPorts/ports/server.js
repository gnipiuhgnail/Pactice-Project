import request from '@/utils/request'

const api = {}
// 06-53 服务器端口绑定
api.bindServerPort = (data) => {
  return request({
    url: '/device/bindServerPort',
    method: 'post',
    data
  })
}
// 06-54 服务器端口解绑
api.unbindServerPort = (data) => {
  return request({
    url: '/device/unbindServerPort',
    method: 'post',
    data
  })
}
// 06-55 已绑定端口记录
api.bindPortLog = (data) => {
  return request({
    url: '/device/bindPortLog',
    method: 'post',
    data
  })
}
export default api
