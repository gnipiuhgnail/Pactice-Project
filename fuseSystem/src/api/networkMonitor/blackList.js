import request from '@/utils/request'

const api = {}
// 13-005 查看最近牵引的100个IP
api.findBannedIpLog = (data) => {
  return request({
    url: '/networkManagement/findBannedIpLog',
    method: 'post',
    data
  })
}
// 13-006 查询IP封禁状态
api.checkIpBanned = (data) => {
  return request({
    url: '/networkManagement/checkIpBanned',
    method: 'post',
    data
  })
}
// 13-007 封禁IP
api.bannedIp = (data) => {
  return request({
    url: '/networkManagement/bannedIp',
    method: 'post',
    data
  })
}

export default api
