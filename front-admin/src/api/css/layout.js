import request from '../../utils/request'
const api = {}
api.getTable = (data) => {
  return request({
    url: '/css/layout',
    method: 'get',
    data
  })
};

export default api
