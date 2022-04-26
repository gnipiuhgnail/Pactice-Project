<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="company">
        <span class="logo">
          <!-- <img src="../../assets/images/logo.png"> -->
        </span>
        <span class="companyName">
          <!-- <span>广东恒睿科技有限公司</span> -->
        </span>
      </div>

      <div class="flow">
        <span class="flowMonitor">
          <span class="color">后台管理</span>登录
        </span>
        <!-- <span class="edition">V2.0</span> -->
      </div>
      <el-form-item
        prop="username"
        class="usr"
      >
        <span class="svg-container">
          <svg-icon icon-class="userWhite" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          style="font-size:18px;font-weight:400;"
          placeholder="请输入账号"
          name="username"
          tabindex="1"
        />
      </el-form-item>

      <el-form-item
        prop="password"
        class="psw"
      >
        <span class="svg-container">
          <svg-icon icon-class="passwordWhite" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          style="font-size:18px;font-weight:400;"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter="handleLogin"
        />
        <span
          class="show-pwd"
          @click="showPwd"
        >
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-button
        class="button-css"
        :loading="loading"
        type="primary"
        @click.native.prevent="handleLogin"
      >
        登录
      </el-button>

      <div class="background">
        <img src="../../assets/images/background.png">
      </div>

      <div class="computer">
        <img src="../../assets/images/computer.png">
      </div>
    </el-form>
  </div>
</template>

<script>
import {
  validUsername
} from '@/utils/validate'
import api from '@/api/system/user'
export default {
  name: 'Login',
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
      loginForm: {
        username: '',
        password: ''
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
        }]
      },
      loading: false,
      passwordType: 'password',
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
    }
  },
  created () {
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({
                path: '/dashboard'
              })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleClick (tab, event) {
      console.log(tab)
      console.log(event)
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 52px;
    line-height: 52px;
    width: 70%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #545454;
      // color: $light_gray;
      height: 47px;
      // caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style><style lang="scss" scoped>
@import '~@/styles/index.scss';
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
  background: #f1f6ff;
  overflow: hidden;

  .company {
    display: flex;
    width: 100%;
    height: 29px;
    margin-bottom: 4px;

    .logo {
      width: 30px;
      height: 29px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .companyName {
      margin-left: 6px;
      width: 220px;
      height: 29px;
      line-height: 29px;
      font-family: '微软雅黑';
      font-size: 22px;
    }
  }

  .flow {
    display: flex;
    width: 100%;
    height: 62px;
    margin-bottom: 45px;

    .flowMonitor {
      width: 306px;
      height: 62px;
      line-height: 62px;
      font-family: '微软雅黑';
      font-size: 47px;
      font-weight: bold;
      color: #707070;
      letter-spacing: 4px;

      .color {
        color: #145bcc;
      }
    }

    .edition {
      width: 52px;
      height: 33px;
      line-height: 33px;
      color: #707070;
      font-family: '微软雅黑';
      font-size: 25px;
      margin-left: 14px;
      margin-top: 28px;
    }
  }

  .usr {
    width: 414px;
    height: 58px;
    background-color: #f1f6ff;
    border-radius: 32px;
    margin-bottom: 20px;
  }

  .psw {
    width: 414px;
    height: 58px;
    background-color: #f1f6ff;
    color: #545454;
    border-radius: 32px;
    margin-bottom: 20px;
  }

  .verification {
    position: relative;
    width: 268px;
    height: 58px;
    background-color: #f1f6ff;
    border-radius: 32px;
    margin-bottom: 20px;

    .getInfo {
      position: absolute;
      top: 18px;
      left: 307px;
      width: 125px;
      height: 20px;
      font-size: 15px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 20px;
      color: rgba(44, 110, 222, 1);
      cursor: pointer;
    }
  }

  .button-css {
    width: 314px;
    height: 51px;
    background: rgba(44, 110, 222, 1);
    box-shadow: 5px 7px 21px rgba(0, 93, 255, 0.26);
    border-radius: 25px;
    font-size: 20px;
    letter-spacing: 6px;
    margin-bottom: 50px;
  }

  .qrCode {
    width: 300px;
    height: 320px;
    margin-top: -35px;
    margin-left: 25px;
    overflow: hidden;
  }

  .confirm {
    width: 210px;
    height: 20px;
    margin-left: 72px;
    font-size: 15px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 20px;
    color: rgba(32, 32, 32, 1);
  }

  ::-webkit-input-placeholder {
    color: #545454;
  }

  .login-form {
    position: relative;
    width: 1240px;
    height: 622px;
    padding-left: 84px;
    padding-top: 87px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 20px 17px 47px rgba(37, 104, 219, 0.35);
    opacity: 1;
    border-radius: 24px;
    max-width: 100%;
    border-bottom-right-radius: 30px;

    .background {
      position: absolute;
      top: -37px;
      right: -32px;
      width: 553px;
      height: 708px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .computer {
      position: absolute;
      top: -54px;
      right: -98px;
      width: 670px;
      height: 682px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .svg-container {
    padding: 6px 42px 6px 42px;
    color: #889aa4;
    vertical-align: middle;
    width: 65px;
    height: 58px;
    display: inline-block;
  }

  .svg-icon {
    width: 1.2em;
    height: 1.2em;
    font-size: 22px;
    vertical-align: -0.4em;
    fill: currentColor;
    overflow: hidden;
  }

  .show-pwd {
    right: 28px;
    top: 10px;
    color: $dark_gray;
  }

  .el-tabs {
    width: 38%;

    ::v-deep.el-tabs__header {
      width: 59%;
      padding: 0;
      position: relative;
      margin: 0 0 15px 48px;

      .el-tabs__nav-wrap {
        .el-tabs__nav-scroll {
          .el-tabs__nav {
            #tab-commonLogin {
              font-size: 15px;
              padding-right: 38px;
            }

            #tab-wxLogin {
              font-size: 15px;
              padding-left: 38px;
            }
          }
        }
      }
    }
  }
}
</style>
