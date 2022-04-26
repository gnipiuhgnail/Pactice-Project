import request from '@/utils/request'

const api = {}
// 07-013 查询IP地址池
api.findIpv6Pool = (data) => {
  return request({
    url: '/ip/findIpv6Pool',
    method: 'post',
    data
  })
}
// 07-014 查询单个IP地址池
api.getIpv6Pool = (data) => {
  return request({
    url: '/ip/getIpv6Pool',
    method: 'post',
    data
  })
}
// 07-015 添加IP地址池
api.saveIpv6Pool = (data) => {
  return request({
    url: '/ip/saveIpv6Pool',
    method: 'post',
    data
  })
}
// 07-016 删除IP地址池
api.delIpv6Pool = (data) => {
  return request({
    url: '/ip/delIpv6Pool',
    method: 'post',
    data
  })
}
// 07-017 查询IP分发详细列表
api.findIpv6Div = (data) => {
  return request({
    url: '/ip/findIpv6Div',
    method: 'post',
    data
  })
}
// 07-018 分配IP段
api.allocIpv6Div = (data) => {
  return request({
    url: '/ip/allocIpv6Div',
    method: 'post',
    data
  })
}
// 07-019 释放IP段
api.freeIpv6Div = (data) => {
  return request({
    url: '/ip/freeIpv6Div',
    method: 'post',
    data
  })
}
// 07-020 查询IP列表
api.findIpv6 = (data) => {
  return request({
    url: '/ip/findIpv6',
    method: 'post',
    data
  })
}
// 07-021 修改IP
api.editIpv6 = (data) => {
  return request({
    url: '/ip/editIpv6',
    method: 'post',
    data
  })
}
// 07-022 查询单个IP
api.getIpv6 = (data) => {
  return request({
    url: '/ip/getIpv6',
    method: 'post',
    data
  })
}
// 07-023 查询IP允许或禁用的日志
api.findIpv6AllowLog = (data) => {
  return request({
    url: '/ip/findIpv6AllowLog',
    method: 'post',
    data
  })
}
// 07-024 IP允许或禁用的设置
api.doIpv6sDisable = (data) => {
  return request({
    url: '/ip/doIpv6sDisable',
    method: 'post',
    data
  })
}
export default api
