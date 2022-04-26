import request from '@/utils/request'

const api = {}
// 13-001 按用户可访问的机房查询服务器
api.findServerForUserRoom = (data) => {
  return request({
    url: '/networkManagement/findServerForUserRoom',
    method: 'post',
    data
  })
}
export default api
