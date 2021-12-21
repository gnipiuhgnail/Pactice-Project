import { ElMessage } from "element-plus";

const axios = require("axios");
// import Cookies from "js-cookie";
const service = axios.create({
  baseURL: "/api", //配置请求网址(服务器地址)
}); // 创建实例
service.defaults = 2500;
// Cookies.set("name", "Harper");
// console.log(Cookies.get())
// 在请求或响应被 then 或 catch 处理前拦截它们。
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
export default service;
