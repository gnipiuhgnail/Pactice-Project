<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/login' }">登录</el-breadcrumb-item>
    <el-breadcrumb-item>忘记密码</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="forget">
    <el-steps :space="300" :active="active" finish-status="success">
      <el-step title="确认账号"></el-step>
      <el-step title="重置密码"></el-step>
      <el-step title="重置成功"></el-step>
    </el-steps>
    <!-- 1. 输入用户唯一识别，验证是否存在 -->
    <!-- 2. 输入新密码，确认密码 -->
    <!-- 3. 显示“重置密码成功”，5秒倒计时自动跳转登录页或点击“前往登录页”按钮前往登录页 -->
    <div class="forgetMain">
      <component
        :is="currentTabComponent"
        @confirm="onConfirm"
        :userData="userData"
      ></component>

      <!-- <keep-alive>
        
      </keep-alive> -->
      <!-- <confirmName @confirmName="onConfirmName" />
      <confirmPass :userData="userData" @confirmPass="onConfirmPass" /> -->
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
import confirmName from "@/components/confirmName.vue";
import confirmPass from "@/components/confirmPass.vue";
import confirmFinish from "@/components/confirmFinish.vue";
export default {
  components: {
    confirmName,
    confirmPass,
    confirmFinish,
  },
  setup() {
    const state = reactive({
      currentTabComponent: "confirmName",
      active: 1,
      userData: {
        id: "",
        name: "",
      },
    });
    const onConfirm = (msg) => {
      state.active = msg.active;
      if (msg.active == 2) {
        state.userData.id = msg.id;
        state.userData.name = msg.name;
        state.currentTabComponent = "confirmPass";
      } else if (msg.active == 3) {
        state.currentTabComponent = "confirmFinish";
      }
    };

    return {
      ...toRefs(state),
      onConfirm,
    };
  },
};
</script>
<style lang="scss" scoped>
.forget {
  width: 900px;
  margin: 100px 33%;
  .forgetMain {
    width: 300px;
    margin: 24px 180px;
  }
}
</style>
