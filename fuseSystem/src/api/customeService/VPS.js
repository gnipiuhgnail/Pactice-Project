import request from '@/utils/request'

const api = {}
// 12-001 VPS申请表查询
api.ApplicationFind = (data) => {
  return request({
    url: '/vps/ApplicationFind',
    method: 'post',
    data
  })
}
// 12-002 VPS申请表退订
api.ApplicationUb = (data) => {
  return request({
    url: '/vps/ApplicationUb',
    method: 'post',
    data
  })
}
// 12-003 VPS申请表审核
api.ApplicationCheck = (data) => {
  return request({
    url: '/vps/ApplicationCheck',
    method: 'post',
    data
  })
}
// 12-005 VPS创建信息列表
api.ApplicationCreateFind = (data) => {
  return request({
    url: '/vps/ApplicationCreateFind',
    method: 'post',
    data
  })
}
// 12-006 VPS表添加/编辑
api.vpsSave = (data) => {
  return request({
    url: '/vps/vpsSave',
    method: 'post',
    data
  })
}
// 12-007 VPS停用
api.vpsStop = (data) => {
  return request({
    url: '/vps/vpsStop',
    method: 'post',
    data
  })
}
// 12-008 VPS表删除
api.vpsDel = (data) => {
  return request({
    url: '/vps/vpsDel',
    method: 'post',
    data
  })
}
// 12-009 母机管理列表
api.masterFind = (data) => {
  return request({
    url: '/vps/masterFind',
    method: 'post',
    data
  })
}
// 12-009 所选母机信息
api.masterFind = (data) => {
  return request({
    url: '/vps/masterFind',
    method: 'post',
    data
  })
}
// 12-010 母机添加/修改
api.masterSave = (data) => {
  return request({
    url: '/vps/masterSave',
    method: 'post',
    data
  })
}
// 12-004 VPS管理列表
api.vpsFind = (data) => {
  return request({
    url: '/vps/vpsFind',
    method: 'post',
    data
  })
}
// 12-004 VPS申请
api.vpsApplicationAdd = (data) => {
  return request({
    url: '/vps/vpsApplicationAdd',
    method: 'post',
    data
  })
}
// 12-011 配置清单
api.configList = (data) => {
  return request({
    url: '/vps/configList',
    method: 'post',
    data
  })
}
// 12-013 个人的VPS信息
api.vpsMy = (data) => {
  return request({
    url: '/vps/vpsMy',
    method: 'post',
    data
  })
}
// 12-014 VPS个人记录
api.vpsMyrecords = (data) => {
  return request({
    url: '/vps/vpsMyrecords',
    method: 'post',
    data
  })
}
export default api
