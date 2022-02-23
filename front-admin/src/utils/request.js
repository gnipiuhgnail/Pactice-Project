// 请求文件
import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
const service = axios.create({
  baseURL: ''
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 120000 // request timeout
})
// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    if (response.data.code) {
      ElMessage({
        message: response.data.msg || "Error",
        type: "error",
        duration: 5 * 1000,
      });
    }
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service