import request from '@/utils/request'

const api = {}
// 09-001 获取全部类
api.FindResclassify = (data) => {
  return request({
    url: '/storage/FindResclassify',
    method: 'post',
    data
  })
}
// 09-002 添加类别
api.addResclassify = (data) => {
  return request({
    url: '/storage/addResclassify',
    method: 'post',
    data
  })
}
// 09-003 修改类别
api.editResclassify = (data) => {
  return request({
    url: '/storage/editResclassify',
    method: 'post',
    data
  })
}
// 09-004 删除类别
api.delResclassify = (data) => {
  return request({
    url: '/storage/delResclassify',
    method: 'post',
    data
  })
}
export default api
