import request from '@/utils/request'

const api = {}
// 12-027 发送流量图（群发）
api.switchSend = (data) => {
  return request({
    url: '/bill/switchSend',
    method: 'post',
    data
  })
}
// 12-027 添加账单记录
api.financeBillLogAdd = (data) => {
  return request({
    url: '/bill/financeBillLogAdd',
    method: 'post',
    data
  })
}
// 12-027 删除账单记录
api.financeBillLogDel = (data) => {
  return request({
    url: '/bill/financeBillLogDel',
    method: 'post',
    data
  })
}
export default api
