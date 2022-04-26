import request from '@/utils/request'

const api = {}
// 09-008 查询仓库物品列表
api.findRes = (data) => {
  return request({
    url: '/storage/findRes',
    method: 'post',
    data
  })
}
// 09-009 添加/修改物品信息
api.saveRes = (data) => {
  return request({
    url: '/storage/saveRes',
    method: 'post',
    data
  })
}
// 09-010 删除物品信息
api.delRes = (data) => {
  return request({
    url: '/storage/delRes',
    method: 'post',
    data
  })
}
export default api
