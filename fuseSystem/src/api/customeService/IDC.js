import request from '@/utils/request'

const api = {}
// 12-015 用户IP段信息列表
api.ipDivFind = (data) => {
  return request({
    url: '/idc/ipDivFind',
    method: 'post',
    data
  })
}
// 12-016 IDC客户查询
api.iDCCustomeFind = (data) => {
  return request({
    url: '/idc/iDCCustomeFind',
    method: 'post',
    data
  })
}
// 12-017 IDC客户添加/编辑
api.IDCCustomeSave = (data) => {
  return request({
    url: '/idc/IDCCustomeSave',
    method: 'post',
    data
  })
}
// 12-018 IDC客户删除
api.IDCCustomeDel = (data) => {
  return request({
    url: '/idc/IDCCustomeDel',
    method: 'post',
    data
  })
}
// 12-019 添加客户关系
api.IDCCustomerParentAdd = (data) => {
  return request({
    url: '/idc/IDCCustomerParentAdd',
    method: 'post',
    data
  })
}
// 12-020 清除客户父类
api.IDCCustomerParentDel = (data) => {
  return request({
    url: '/idc/IDCCustomerParentDel',
    method: 'post',
    data
  })
}
// 12-021 抄送对象查询
api.carBoncopyEmailFind = (data) => {
  return request({
    url: '/idc/carBoncopyEmailFind',
    method: 'post',
    data
  })
}
// 12-022 抄送对象添加/编辑
api.carBoncopyEmailSave = (data) => {
  return request({
    url: '/idc/carBoncopyEmailSave',
    method: 'post',
    data
  })
}
// 12-023 抄送对象删除
api.carBoncopyEmailDel = (data) => {
  return request({
    url: '/idc/carBoncopyEmailDel',
    method: 'post',
    data
  })
}
// 12-024 根据客户ID查询抄送对象
api.carBoncopyEmailFind = (data) => {
  return request({
    url: '/idc/carBoncopyEmailFind',
    method: 'post',
    data
  })
}
// 12-025 对账绑定
api.IDCCustomeSign = (data) => {
  return request({
    url: '/idc/IDCCustomeSign',
    method: 'post',
    data
  })
}
// 12-026 群发消息
api.IDCCustomeSend = (data) => {
  return request({
    url: '/idc/IDCCustomeSend',
    method: 'post',
    data
  })
}
// 12-027 获取邮件状态
api.customEmailTitleGet = (data) => {
  return request({
    url: '/idc/customEmailTitleGet',
    method: 'post',
    data
  })
}
// 12-028 查询所有IDC客户名称
api.allIDCCustomeFind = (data) => {
  return request({
    url: '/idc/allIDCCustomeFind',
    method: 'post',
    data
  })
}
// 12-029 根据IDC客户查询服务器和WAN设备所在的机柜信息
api.FrameInfoFindForCustom = (data) => {
  return request({
    url: '/idc/FrameInfoFindForCustom',
    method: 'post',
    data
  })
}
// 12-030 根据客户查询服务器所在的城市和地区占用的机柜数
api.FrameCountFindForCustom = (data) => {
  return request({
    url: '/idc/FrameCountFindForCustom',
    method: 'post',
    data
  })
}
// 12-031 查询服务器日志
api.ServerLogFind = (data) => {
  return request({
    url: '/idc/ServerLogFind',
    method: 'post',
    data
  })
}
export default api
