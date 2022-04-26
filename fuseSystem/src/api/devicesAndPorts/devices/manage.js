import request from '@/utils/request'

const api = {}
// 06-0014 查询机柜设备列表
api.addDevice = (data) => {
  return request({
    url: '/deviceAndPort/selectDevice',
    method: 'post',
    data
  })
}
// 06-0015 机柜布局图
api.getCabinetLayout = (data) => {
  return request({
    url: '/deviceAndPort/getCabinetLayout',
    method: 'post',
    data
  })
}
// 06-0016 查看端口列表信息
api.getPortInfoByDeviceType = (data) => {
  return request({
    url: '/deviceAndPort/management/getPortInfoByDeviceType',
    method: 'post',
    data
  })
}
// 06-017 添加设备详细日志
api.addUpdateAndRepairLog = () => {
  return request({
    url: '/deviceAndPort/management/addUpdateAndRepairLog',
    method: 'post',
    data
  })
}
// 06-018 条件查询设备详细日志
api.findUpdateAndRepairLog = (data) => {
  return request({
    url: '/deviceAndPort/management/findUpdateAndRepairLog',
    method: 'post',
    data
  })
}
// 06-019 添加IPMI
api.linkCardAdd = (data) => {
  return request({
    url: '/deviceAndPort/management/linkCardAdd',
    method: 'post',
    data
  })
}
// 06-020 查看IPMI记录列表
api.getLinkCard = (data) => {
  return request({
    url: '/deviceAndPort/management/getLinkCard',
    method: 'post',
    data
  })
}
// 06-021 删除IPMI记录
api.delLinkCard = (data) => {
  return request({
    url: '/deviceAndPort/management/delLinkCard',
    method: 'post',
    data
  })
}
// 06-022 添加内外网IP段
api.addNetIP = (data) => {
  return request({
    url: '/deviceAndPort/management/addNetIP',
    method: 'post',
    data
  })
}
// 06-023 查询设备信息列表
api.findDeviceInfo = (data) => {
  return request({
    url: '/deviceAndPort/management/findDeviceInfo',
    method: 'post',
    data
  })
}
// 06-024 查询内外网IP段
api.findNetIP = (data) => {
  return request({
    url: '/deviceAndPort/management/findNetIP',
    method: 'post',
    data
  })
}
// 06-025 删除内外网IP段
api.delNetIP = (data) => {
  return request({
    url: '/deviceAndPort/management/delNetIP',
    method: 'post',
    data
  })
}
// 06-026 为设备选择数据源
api.setSwitchCollectorPoint = (data) => {
  return request({
    url: '/deviceAndPort/management/setSwitchCollectorPoint',
    method: 'post',
    data
  })
}
// 06-027 上下联绑定
api.deviceUpDownBind = (data) => {
  return request({
    url: '/deviceAndPort/management/deviceUpDownBind',
    method: 'post',
    data
  })
}
export default api
