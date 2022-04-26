import request from '@/utils/request'

const api = {}
// 17-001 保存系统设置
api.saveSystemSet = (data) => {
  return request({
    url: '/systemSet/saveSystemSet',
    method: 'post',
    data
  })
}
export default api
