<template>
  <div v-show="enterPageShow"
       @click="enterAdmin"
       class="enterPage">
    <div>
      <img :src="logoWhite">
      <p>欢迎进入恒睿交换机调度系统！</p>
    </div>
  </div>
  <img class="backgroundImage"
       :src="loginBgImage"
       width="100%"
       height="100%"
       alt="" />
  <div class="login-container">
    <div class="leftBox">
      <div class="logo">
        <img :src="logoBlack"
             style="height:25px">
        <span>恒睿交换机调度系统</span>
      </div>
      <svg-icon icon-class='loginImage'
                class-name="loginImage"></svg-icon>
    </div>

    <div class="login-form">
      <div class="denglu">
        登录
      </div>
      <ul>
        <li>
          <span>账号</span>
          <span v-show="loginForm.usernameStatus==='error'"
                class="errorMessage">账号错误</span>
          <span v-show="loginForm.usernameStatus==='empty'"
                class="errorMessage">请输入账号</span>
          <el-input placeholder="请输入账号"
                    v-model="loginForm.username"
                    @input="loginForm.usernameStatus=''"
                    auto-complete="on">
            <template #suffix>
              <svg-icon v-show="loginForm.usernameStatus==='success'"
                        icon-class='success'></svg-icon>
              <svg-icon v-show="loginForm.usernameStatus==='error'"
                        icon-class='error'></svg-icon>
            </template>
          </el-input>
        </li>
        <li>
          <span>密码</span>
          <span v-show="loginForm.passwordStatus==='error'"
                class="errorMessage">密码错误</span>
          <span v-show="loginForm.passwordStatus==='empty'"
                class="errorMessage">请输入密码</span>
          <el-input placeholder="请输入密码"
                    auto-complete="on"
                    @input="loginForm.passwordStatus=''"
                    v-model="loginForm.password"
                    @keyup.enter="handleLogin"
                    type="password">
            <template #suffix>
              <svg-icon v-show="loginForm.passwordStatus==='success'"
                        icon-class='success'></svg-icon>
              <svg-icon v-show="loginForm.passwordStatus==='error'"
                        icon-class='error'></svg-icon>
            </template>
          </el-input>
        </li>
        <li>

          <div class="picInput">
            <span>图片验证码</span>
            <span v-show="loginForm.picverifyStatus==='error'"
                  class="errorMessage">验证码错误</span>
            <span v-show="loginForm.picverifyStatus==='empty'"
                  class="errorMessage">请输入验证码</span>
            <el-input v-model="loginForm.picverify"
                      placeholder="请输入验证码"
                      maxlength='4'
                      @input="loginForm.picverifyStatus=''"
                      auto-complete="on"
                      @keyup.enter="handleLogin">
              <template #suffix>
                <svg-icon v-show="loginForm.picverifyStatus==='success'"
                          icon-class='success'></svg-icon>
                <svg-icon v-show="loginForm.picverifyStatus==='error'"
                          icon-class='error'></svg-icon>
              </template>
            </el-input>
          </div>
          <img class="picverify"
               :src="loginPic"
               @click="getLoginCode"
               alt=""
               srcset="">
        </li>
        <li>
          <el-button class="loginBtn"
                     @click="handleLogin"
                     type="primary">登录</el-button>
          <span v-show="loginForm.loginStatus==='error'">
            账号连续错误5次，请一小时后再登录
          </span>
        </li>
      </ul>
    </div>

  </div>
  <div class="icp">
    Copyright © 2014-2021HCloud 广东恒睿科技有限公司ICP证：B1.B2-20150453 粤公网安备:44070302000633号 粤ICP备:16014165号
  </div>
</template>

<script>
import {
  validUsername
} from '@/utils/validate'
import logowhite from '@/assets/images/logo-white.png'
import logoblack from '@/assets/images/logo.png'
import loginBg from '@/assets/images/loginBg.png'
import api from '@/api/system/user'
export default {
  name: 'Login',
  setup () {
    const logoWhite = logowhite
    const logoBlack = logoblack
    const loginBgImage = loginBg
    return {
      logoWhite,
      logoBlack,
      loginBgImage
    }
  },
  data () {
    return {
      enterPageShow: false,
      userId: '',
      loginPic: '',
      loginForm: {
        username: '',
        password: '',
        picverify: '',
        usernameStatus: '',
        passwordStatus: '',
        picverifyStatus: '',
        loginStatus: ''
      },
      loading: false,
      redirect: undefined,
      activeName: 'commonLogin'
    }
  },
  watch: {
    $route: {
      handler (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    },
    'loginForm.username' (newval, oldval) {
      if (newval == '') {
        this.loginForm.usernameStatus = 'empty'
      } else {
        this.loginForm.usernameStatus = 'success'
      }
    },
    'loginForm.password' (newval, oldval) {
      if (newval == '') {
        this.loginForm.passwordStatus = 'empty'
      } else {
        this.loginForm.passwordStatus = 'success'
      }
    },
    'loginForm.picverify' (newval, oldval) {
      if (newval == '') {
        this.loginForm.picverifyStatus = 'empty'
      } else {
        this.loginForm.picverifyStatus = 'success'
      }
    }
  },
  created () {
    this.getLoginCode()
  },
  methods: {
    async getLoginCode () {
      let formData = new FormData();
      formData.append("id", this.userId);
      let result = await api.getLoginCode(formData)
      this.loginPic = result.codeImg
      this.userId = result.id
    },

    async handleLogin () {
      if (this.loginForm.username == '') {
        this.loginForm.usernameStatus = 'empty'
        return
      }
      if (this.loginForm.password == '') {
        this.loginForm.passwordStatus = 'empty'
        return
      }
      if (this.loginForm.picverify == '') {
        this.loginForm.picverifyStatus = 'empty'
        return
      }
      this.loading = true
      try {
        await api.checkLoginCode({ id: this.userId, checkCode: this.loginForm.picverify })
        await this.$store.dispatch('user/login', this.loginForm)
      } catch (error) {
        console.log(error)
        if (error.code === 'A02005') {
          this.loginForm.picverifyStatus = 'error'
        }
        if (error.code === 'A01001') {
          this.loginForm.usernameStatus = 'error'
        }
        if (error.code === "A02003") {
          this.loginForm.passwordStatus = 'error'
        }
        this.getLoginCode()
        this.loading = false
        throw error
      }
      this.enterPageShow = true
    },
    enterAdmin () {
      console.log(123)
      this.$router.push({
        path: '/interchanger/device'
      })
      this.loading = false
    },
  },
}

</script>

<style lang="scss" scoped>
@import '~@/styles/index.scss';
.backgroundImage {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: relative;
}
.enterPage {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: 100;
  background-color: #aeaeaf;
  opacity: 0.9;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  div {
    opacity: 1;
    img {
      position: relative;
      width: 144px;
      margin: auto;
    }
    p {
      font-size: 43px;
    }
  }
}
.login-container {
  min-width: 1440px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70%;
  width: 80%;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  .leftBox {
    width: 50%;
    height: 100%;
    position: relative;
    .logo {
      color: #145bcc;
      margin-left: -50px;
      margin-top: 10px;
      position: relative;
      img {
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        margin-left: 10px;
        line-height: 25px;
        font-size: 20px;
      }
    }
    .loginImage {
      width: 685px;
      height: 80%;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
    }
  }
  .login-form {
    width: 400px;
    height: 500px;
    position: relative;
    background: rgba(255, 255, 255, 1);
    box-shadow: 20px 17px 47px rgba(37, 104, 219, 0.35);
    opacity: 1;
    border-radius: 5px;
    max-width: 100%;
    padding: 40px;
    .denglu {
      text-align: center;
      font-size: 30px;
      margin-bottom: 30px;
    }
    ul {
      position: relative;
      width: 320px !important;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        position: relative;
        height: 72px;
        margin-bottom: 24px;
        span {
          line-height: 27px;
          font-size: 18px;
          vertical-align: top;
        }
        ::v-deep input {
          height: 45px !important;
        }
        ::v-deep .el-input__suffix {
          font-size: 16px;
          line-height: 45px !important;
        }
        .picInput {
          width: 65% !important;
          display: inline-block;
        }
        .picverify {
          position: absolute;
          width: 30%;
          right: 0;
          height: 45px;
          bottom: 0;
        }
        .errorMessage {
          float: right;
          font-size: 12px;
          color: red;
        }

        .loginBtn {
          width: 100%;
          margin-top: 20px;
          margin-bottom: 0px;
        }
        span:last-child {
          display: block;
          text-align: center;
          font-size: 15px;
          color: red;
        }
      }
    }
  }
}

.icp {
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
  color: white;
  font-size: 18px;
  line-height: 30px;
}
</style>
