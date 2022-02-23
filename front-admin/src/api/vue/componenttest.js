import request from '../../utils/request'
const api = {}
api.getPersonList = (data) => {
  return request({
    url: '/getperson',
    method: 'get',
    data
  })
};
api.findOne = (data) => {
  return request({
    url: '/findone',
    method: 'get',
    data
  })
}
api.postPersonList = (data) => {
  return request({
    url: '/postperson',
    method: 'post',
    data
  })
};

export default api