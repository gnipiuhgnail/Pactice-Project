import request from '@/utils/request'

const api = {}
// 17-002 查看数据备份列表
api.findDataBackupInfo = (data) => {
  return request({
    url: '/systemSet/findDataBackupInfo',
    method: 'post',
    data
  })
}
// 17-003 系统数据备份
api.saveDataBackup = (data) => {
  return request({
    url: '/systemSet/saveDataBackup',
    method: 'post',
    data
  })
}
// 17-004 查看数据还原记录列表
api.findDataRestoreInfo = (data) => {
  return request({
    url: '/systemSet/findDataRestoreInfo',
    method: 'post',
    data
  })
}
// 17-005 系统数据还原
api.saveDataRestore = (data) => {
  return request({
    url: '/systemSet/saveDataRestore',
    method: 'post',
    data
  })
}
export default api
