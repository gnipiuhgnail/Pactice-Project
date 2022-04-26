import request from '@/utils/request'

const api = {}
// 05-001 获取拓扑图核心交换机信息
api.getTopologyCore = () => {
  return request({
    url: '/topology/getTopologyCore',
    method: 'post',
    data
  })
}
// 05-002 获取某个节点信息
api.getNodeData = () => {
  return request({
    url: '/topology/getNodeData',
    method: 'post',
    data
  })
}
export default api
