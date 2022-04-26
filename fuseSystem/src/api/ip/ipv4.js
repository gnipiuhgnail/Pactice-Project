import request from '@/utils/request'

const api = {}
// 07-001 查询IP地址池
api.findIpv4Pool = (data) => {
  return request({
    url: '/ip/findIpv4Pool',
    method: 'post',
    data
  })
}
// 07-002 查询单个IP地址池
api.getIpv4Pool = (data) => {
  return request({
    url: '/ip/getIpv4Pool',
    method: 'post',
    data
  })
}
// 07-003 添加IP地址池
api.saveIpv4Pool = (data) => {
  return request({
    url: '/ip/saveIpv4Pool',
    method: 'post',
    data
  })
}
// 07-004 删除IP地址池
api.delIpv4Pool = (data) => {
  return request({
    url: '/ip/delIpv4Pool',
    method: 'post',
    data
  })
}
// 07-005 查询IP分发详细列表
api.findIpv4Div = (data) => {
  return request({
    url: '/ip/findIpv4Div',
    method: 'post',
    data
  })
}
// 07-006 分配IP段
api.allocIpv4Div = (data) => {
  return request({
    url: '/ip/allocIpv4Div',
    method: 'post',
    data
  })
}
// 07-007 释放IP段
api.freeIpv4Div = (data) => {
  return request({
    url: '/ip/freeIpv4Div',
    method: 'post',
    data
  })
}
// 07-008 查询IP列表
api.findIpv4 = (data) => {
  return request({
    url: '/ip/findIpv4',
    method: 'post',
    data
  })
}
// 07-009 修改IP
api.editIpv4 = (data) => {
  return request({
    url: '/ip/editIpv4',
    method: 'post',
    data
  })
}
// 07-010 查询单个IP
api.getIpv4 = (data) => {
  return request({
    url: '/ip/getIpv4',
    method: 'post',
    data
  })
}
// 07-011 查询IP允许或禁用的日志
api.findIpv4AllowLog = (data) => {
  return request({
    url: '/ip/findIpv4AllowLog',
    method: 'post',
    data
  })
}
// 07-012 IP允许或禁用的设置
api.doIpv4sDisable = (data) => {
  return request({
    url: '/ip/doIpv4sDisable',
    method: 'post',
    data
  })
}
export default api
