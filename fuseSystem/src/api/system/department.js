import request from '@/utils/request'
import { data } from 'autoprefixer'

const api = {}
// 查部门列表
api.findDept = (data) => {
  return request({
    url: '/dept/findDept',
    method: 'post',
    data
  })
}
// 查单个部门
api.getDept = (data) => {
  return request({
    url: '/dept/getDept',
    method: 'get',
    params: data
  })
}

api.saveDept = (data) => {
  return request({
    url: '/dept/saveDept',
    method: 'post',
    data
  })
}
api.delDept = (data) => {
  return request({
      url: '/dept/delDept',
      method: 'post',
      params: data
  })
}
export default api
