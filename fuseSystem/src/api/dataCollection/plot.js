import request from '@/utils/request'

const api = {}
// 10-021 导数出图
api.findCollectorPoint = (data) => {
  return request({
    url: '/combinePort/exportFlowInOutView5m',
    method: 'post',
    data
  })
}
export default api
