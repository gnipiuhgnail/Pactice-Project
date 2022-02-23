import request from '../../utils/request'
const api = {}
api.getEchartList = (data) => {
  return request({
    url: '/css/echart',
    method: 'get',
    data
  })
};

export default api
