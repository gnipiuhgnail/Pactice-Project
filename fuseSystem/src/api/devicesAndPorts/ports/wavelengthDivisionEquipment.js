import request from '@/utils/request'

const api = {}
// 06-41 波分设备端口-添加/编辑
api.saveWdmPort = (data) => {
  return request({
    url: '/device/saveWdmPort',
    method: 'post',
    data
  })
}
// 06-42 波分设备端口-查询单个
api.getWdmPort = (data) => {
  return request({
    url: '/device/getWdmPort',
    method: 'post',
    data
  })
}
// 06-43 波分设备端口-条件查询
api.findWdmPort = (data) => {
  return request({
    url: '/device/findWdmPort',
    method: 'post',
    data
  })
}
// 06-44 波分设备端口-删除
api.delWdmPort = (data) => {
  return request({
    url: '/device/delWdmPort',
    method: 'post',
    data
  })
}
// 06-45 波分设备绑定
api.bindWdmPort = (data) => {
  return request({
    url: '/device/bindWdmPort',
    method: 'post',
    data
  })
}
// 06-46 波分设备解绑
api.unbindWdmPort = (data) => {
  return request({
    url: '/device/unbindWdmPort',
    method: 'post',
    data
  })
}
export default api
