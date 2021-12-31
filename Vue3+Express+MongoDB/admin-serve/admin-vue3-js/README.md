# admin-vue3-js

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目标：前台+后台
### 后台部分
1. 前端跨域 √
2. 项目初始化(vue3+express+mongoose) √
3. 项目构建
4. cookies token(后端加解密)(前端vueX)
5. 登录模块
6. 项目部署
### package
 1. 前端：
  element-plus
  axios
  js-cookie
 2. 后端：
  express
  cors(未)
 3. 数据库：
  mongoose
  Cookie产生的过程
### 请求
对于唯一值的创建，如果存在，后端返回响应信息，前端在获得响应之前统一处理。
el-button type 三目运算符 用不了？

### 前台


### 其他
1. reactive更适合定义复杂的数据类型（json/arr）、ref适合定义基本数据类型（可接收基本数据类型和对象）
2. reactive对象赋值，且能够被监听到，一种是ref，一种是外加一层reactive对象




### 登录、注册、忘记密码

登录(验证码)
账号、密码、验证码

注册
账号、密码、验证码、确认协议、“已有账号，直接登录”

忘记密码
确认账号（查看账号是否存在）
重置密码（新密码、确认密码、账号[修改]、验证码

### 发现一个问题：把前台和后台搞混了
需要暂停，调研
后台应该就是管理员直接登录

前台给用户展示的应该是首页，当需要其他操作的时候就需要登录（已有账号）




