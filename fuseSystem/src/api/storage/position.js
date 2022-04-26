import request from '@/utils/request'

const api = {}
// 09-033 查询仓库位置信息列表
api.findStoragePosition = (data) => {
  return request({
    url: '/storage/findStoragePosition',
    method: 'post',
    data
  })
}
// 09-034 创建/修改仓库
api.saveStorage = (data) => {
  return request({
    url: '/storage/saveStorage',
    method: 'post',
    data
  })
}
// 09-035 删除仓库
api.delStorage = (data) => {
  return request({
    url: '/storage/delStorage',
    method: 'post',
    data
  })
}
export default api
