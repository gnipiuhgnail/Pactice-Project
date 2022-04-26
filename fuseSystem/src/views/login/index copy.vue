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
    <div class="logo">
      <img :src="logoBlack"
           style="height:25px">
      <span>恒睿交换机调度系统</span>
    </div>
    <div class="containerBox">

      <div class="leftBox">
        <svg-icon icon-class='loginImage'
                  class-name="loginImage"></svg-icon>
      </div>

      <el-form ref="loginForm"
               :model="loginForm"
               :rules="loginRules"
               hide-required-asterisk="false"
               class="login-form"
               auto-complete="on"
               label-width="100px"
               label-position="top">
        <div class="denglu">
          登录
        </div>
        <el-form-item prop="username"
                      class="usr"
                      label="账号">
          <el-input ref="username"
                    maxlength="20"
                    v-model.trim="loginForm.username"
                    style="font-size:18px;font-weight:400;"
                    placeholder="请输入账号"
                    name="username"
                    tabindex="1" />
        </el-form-item>

        <el-form-item prop="password"
                      label="密码">
          <el-input ref="password"
                    v-model.trim="loginForm.password"
                    style="font-size:18px;font-weight:400;"
                    type="password"
                    placeholder="请输入密码"
                    maxlength="20"
                    name="password"
                    tabindex="2"
                    auto-complete="on"
                    @keyup.enter="handleLogin" />
        </el-form-item>
        <el-form-item prop="picverify"
                      label="图片验证码">
          <el-input ref="picverify"
                    class="picInput"
                    maxlength="4"
                    v-model.trim="loginForm.picverify"
                    style="font-size:18px;font-weight:400"
                    placeholder="请输入验证码"
                    tabindex="3"
                    auto-complete="on"
                    @keyup.enter="handleLogin" />
          <img class="picverify"
               :src="loginPic"
               @click="getLoginCode"
               alt=""
               srcset="">
        </el-form-item>
        <el-button class="loginBtn"
                   :loading="loading"
                   type="primary"
                   @click.prevent="handleLogin">
          登录
        </el-button>

      </el-form>
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
    // const logoWhite = logowhite
    // const logoBlack = logoblack
    // const loginBgImage = loginBg
    // return {
    //   logoWhite,
    //   logoBlack,
    //   loginBgImage
    // }
  },
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码必须是六位以上'))
      } else {
        callback()
      }
    }
    return {
      logoWhite: logowhite,
      logoBlack: logoblack,
      loginBgImage: loginBg,
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
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          message: '账号不能为空'
          // validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePassword
        }],
        picverify: [{
          required: true,
          trigger: 'blur',
          message: '验证码不能为空'
        }]
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

    handleLogin () {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          this.loading = true
          try {
            await api.checkLoginCode({ id: this.userId, checkCode: this.loginForm.picverify })
            await this.$store.dispatch('user/login', this.loginForm)
          } catch (error) {
            console.log(error)
            // if (error.code === 'A02005') {
            //   this.loginForm.picverifyStatus = 'error'
            // }
            // if (error.code === 'A01001') {
            //   this.loginForm.usernameStatus = 'error'
            // }
            // if (error.code === "A02003") {
            //   this.loginForm.passwordStatus = 'error'
            // }
            this.getLoginCode()
            this.loading = false
            throw error
          }
          this.enterPageShow = true
        }
      })
    },
    enterAdmin () {
      this.$router.push({
        path: '/system'
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
  position: absolute;
}
.enterPage {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: 100;
  color: #ffffff;
  background-color: #aeaeaf;
  // opacity: 0.9;
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
  width: 1256px;
  // min-width: 1256px;
  // width: 80%;
  height: 70%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
      box-shadow: 5px 10px 39px rgba(37,104,219,0.15);
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  .logo {
        font-weight: 600;
    color: #145bcc;
    top: 32px;
    left: 32px;
    position: absolute;
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
  .containerBox {
    width: 1045px;
    height: 500px;
    position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
    .leftBox {
      width: 547px;
      height: 459px;
      position: relative;

      .loginImage {
        width: 100%;
        height: 80%;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
      }
    }
    .login-form {
      width: 412px;
      height: 500px;
      position: relative;
      background: rgba(255, 255, 255, 1);
      box-shadow: 5px 10px 39px rgba(37,104,219,0.15);
      opacity: 1;
      border-radius: 10px;
      max-width: 100%;
      padding: 40px;
      .denglu {
        text-align: center;
        font-size: 30px;
        margin-bottom: 10px;
      }
      .picInput {
        display: inline-block;
        width: 65%;
      }
      .picverify {
        position: absolute;
        width: 30%;
        right: 0;
        height: 40px;
        bottom: 0;
      }
      .loginBtn {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 0px;
      }
      .el-form-item ::v-deep .el-form-item__label{
        padding: 0;
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
}

.icp {
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
  color: #145bcc;
  font-size: 18px;
  line-height: 30px;
}
</style>
