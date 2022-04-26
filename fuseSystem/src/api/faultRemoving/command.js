import request from '@/utils/request'

const api = {}
// 15-008 查询命令日志列表
api.findCommandLog = (data) => {
  return request({
    url: '/debugMachine/findCommandLog',
    method: 'post',
    data
  })
}
// 15-009 添加命令
api.addCommandLog = (data) => {
  return request({
    url: '/debugMachine/addCommandLog',
    method: 'post',
    data
  })
}
// 15-010 删除命令
api.delCommandLog = (data) => {
  return request({
    url: '/debugMachine/delCommandLog',
    method: 'post',
    data
  })
}
// 15-008 运行命令
api.execCommandLog = (data) => {
  return request({
    url: '/debugMachine/execCommandLog',
    method: 'post',
    data
  })
}
// 15-009 更换排障机
api.editDebugMachine = (data) => {
  return request({
    url: '/debugMachine/editDebugMachine',
    method: 'post',
    data
  })
}

export default api
