import request from '@/utils/request'

const api = {}
// 06-47 防火墙端口-添加/编辑
api.saveFirewallPort = (data) => {
  return request({
    url: '/device/saveFirewallPort',
    method: 'post',
    data
  })
}
// 06-48 防火墙端口-查询单个
api.getFirewallPort = (data) => {
  return request({
    url: '/device/getFirewallPort',
    method: 'post',
    data
  })
}
// 06-49 防火墙端口-条件查询
api.findFirewallPort = (data) => {
  return request({
    url: '/device/findFirewallPort',
    method: 'post',
    data
  })
}
// 06-50 防火墙端口-删除
api.delFirewallPort = (data) => {
  return request({
    url: '/device/delFirewallPort',
    method: 'post',
    data
  })
}
// 06-51 防火墙端口绑定
api.bindFirewallPort = (data) => {
  return request({
    url: '/device/bindFirewallPort',
    method: 'post',
    data
  })
}
// 06-52 防火墙端口解绑
api.bindFirewallPort = (data) => {
  return request({
    url: '/device/bindFirewallPort',
    method: 'post',
    data
  })
}
export default api
