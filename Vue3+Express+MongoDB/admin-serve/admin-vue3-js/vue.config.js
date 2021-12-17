const url = process.env.VUE_APP_BASE_URL;
module.exports = {
  // 不同的模式会有不同的环境变量NODE_ENV(这个变量用来区分开发与生产环境，加载不同的配置。vue-cli3已经配置好，直接使用即可)

  devServer: {
    // 解决前端跨域
    proxy: {
      "/api": {
        // proxy端口，在axios中的baseURL要一致
        target: url,
        changeOrigin: true, //将跨域服务通过node代理至本地
        pathRewrite: {
          "^/api": "", // 实际请求是http://192.168.10.175:3000
          // 现在对 http://localhost:2000/api/users 的请求将会代理到 http://localhost:3000/users ；
        },
      },
    },
  },
};
